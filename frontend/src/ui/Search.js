import React from "react"
import {
    Col,
    Container,
    Row,
    Card,
    ListGroup,
    ListGroupItem,
    Navbar,
    Nav,
    Form,
    InputGroup,
    Button, CardColumns, CardDeck
} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPlants} from "../store/plant";
import {PlantCard} from "./plantSearch";

export const Search = () => {

    // Tell this component that it needs to watch for items that live outside of this component.
    // This is how we make sure this component looks for our data from Redux's call to the backend.
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllPlants())
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const plants = useSelector((state) => state.plants ? state.plants : [])
    console.log(plants)
    return (
        <>
            <Container>


        <h1><b>Search Results</b></h1>
        <CardColumns>
            {
                plants.map(plant => <PlantCard plant={plant} key={plant.plantId}/>)
            }

        </CardColumns>
        </Container>
</>
)
}
