import {Button, Form} from "react-bootstrap";
import React from "react";
import {httpConfig} from "../utils/httpConfig";
import {Formik} from "formik";
import {fetchRemindersByProfileId} from "../store/reminders";
import {useHistory} from "react-router-dom";

export const AddToGreenhouse = (props) => {
    const history = useHistory()

    const addToGreenhouse = {
        profilePlantPlantId: props.plantId,
        profilePlantNotes: ''
    }
    const handleSubmit = (values, {resetForm, setStatus}) => {
        console.log('AddToGreenhouse values: ',values)
        httpConfig.post('/apis/profile-plant/add-plant/', values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if (reply.status === 200) {
                    history.push('/greenhouse')
                }
            })
    }
    return (
<Formik initialValues={addToGreenhouse} onSubmit={handleSubmit}>
    {AddToGreenhouseContent}
</Formik>
)}


const AddToGreenhouseContent = (props) => {
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

    return (
        <Form onSubmit={handleSubmit}>
            <input
                hidden={true}
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.profilePlantPlantId}
                name="profilePlantPlantId"
            />
            <Form.Control as="input" className='mx-auto mt-2'  type="text-area" name="profilePlantNotes" value={values.profilePlantNotes} onChange={handleChange} onBlur={handleBlur}
                          placeholder="Greenhouse notes"/>
            <Button type='submit' variant="success" className='mt-1'>Add to Greenhouse</Button>
        </Form>
    )
}