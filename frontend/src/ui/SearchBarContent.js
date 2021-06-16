import {Button, Form, InputGroup} from "react-bootstrap/";
import React from "react";




export const SearchBarContent = (props) => {
    const {handleSubmit, handleBlur, handleChange, values} = props
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input id="formCon"
                        className="form-control"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.searchText}
                        name="searchText"
                        placeholder='What kind of plants do you have?'


                    />



                </div>


            </form>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <Button id="searchB" variant="outline-dark" type="submit">Search</Button>
        </>
    )
};

/*
export const bootstrappedSearchBar = (props) => {
    const searchText = props.searchText
    return (
        <>
            <Form as={InputGroup} onSubmit={props.handleSubmit}>
                <Form.Control className='w-25'
                              type="text"
                              onBlur={props.handleBlur}
                              value={searchText}
                              name="searchText"
                              placeholder='search for plants'
                />
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                <Button variant="outline-dark" type='submit'>Go</Button>
            </Form>
        </>
    )
}
*/


/*
 <Form inline as={InputGroup} className="w-50">
 <Form.Control type="text" placeholder="Search for plants"/>
 <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
 */
