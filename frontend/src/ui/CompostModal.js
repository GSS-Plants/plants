import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {Formik} from "formik";
import "./greenhouse.css"
import {httpConfig} from "../utils/httpConfig";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";
import {useDispatch, useSelector} from "react-redux";


export const CompostModal = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleClose = () => {
        console.log("handleClose", show)
        setShow(false);
    };
    const handleShow = () => {
        console.log("handleShow", show)
        setShow(true);
    };
    const deletePlant = (values, {resetForm, setStatus}) => {
        const id = values.profilePlantId
        console.log(id)
        httpConfig.delete(`/apis/profile-plant/${id}`)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if (reply.status === 200) {
                    resetForm();
                    dispatch(fetchProfilePlantsByProfileId())
                    handleClose()
                }
            })
    }

    const compostPlant = {
        profilePlantId: ''
    }

    return (
        <>
            <Button className="btn btn-lg" id="ghBtn-compostPlant" onClick={handleShow}>compost plant ༼ つ ಥ_ಥ ༽つ</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Compost a plant:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={compostPlant} onSubmit={deletePlant} handleReset={handleClose}>
                        {CompostModalContent}
                    </Formik>
                    <Button variant="success" className="my-2" onClick={handleClose}>I will try again and do better</Button>

                </Modal.Body>

            </Modal>
        </>
    );
}

const CompostModalContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId())
    }
    React.useEffect(initialEffects, [])

    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Plant:</Form.Label>
            <Form.Control as="select" className='mx-auto mt-0' placeholder="Choose..." value={values.plant} name='profilePlantId' onChange={handleChange} onBlur={handleBlur}>
                <option>Choose...</option>
                {plants.map(plant => (<option key={plant.profilePlantId} value={plant.profilePlantId}>{plant.plantCommonName}</option>))}
            </Form.Control>
            <Button variant="dark" className="my-2" type="submit">Compost</Button>
        </Form>
    )
}