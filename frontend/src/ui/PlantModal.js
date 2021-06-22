import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {Plants} from "./Plants";





export const PlantModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const plantId = props.plantId

    return (
        <>
            <Button  variant="outline-dark " onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Plant Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Plants plantId={plantId}/>
                </Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>
        </>
    );
}