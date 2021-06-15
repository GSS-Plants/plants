import {Button, Form} from "react-bootstrap";
import React from "react";


export const ReminderDeleter = (props) => {
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
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.deleteId}
                name="reminderId"
            />
            <Button type='submit' variant="danger" className='my-auto'>X</Button>
        </Form>
    )
}