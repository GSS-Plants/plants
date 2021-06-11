import {Button, Form, InputGroup} from "react-bootstrap";
import React from "react";

export const searchBar = (props) => {
    const searchText = props.searchText
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="searchText"
                />
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                <button type="submit">Go</button>
            </form>
        </>
    )
}


/*
 <Form inline as={InputGroup} className="w-50">
 <Form.Control type="text" placeholder="Search for plants"/>
 <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
 */
