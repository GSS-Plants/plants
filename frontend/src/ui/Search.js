import React from "react"
import {CardColumns, CardDeck, CardGroup, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {PlantSearchCard} from "./PlantSearchCard";
import {fetchPlantsByCommonName} from "../store/plant";
import {SearchBar} from "./SearchBar";

export const Search = () => {

    // Tell this component that it needs to watch for items that live outside of this component.
    // This is how we make sure this component looks for our data from Redux's call to the backend.
    const dispatch = useDispatch()
    const initialEffects = () => {

    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const plants = useSelector((state) => state.plants ? state.plants : [])
    console.log(plants)
    return (
        <>

            <Container fluid id="container">

        <h1><b>Search Results</b></h1>
                {
                    plants.length === 0 && (<h2 className='text-center my-4 py-4'>No results to display ...</h2>)
                }
                <Row className="CardCol container-fluid px-1">
            {
                plants.map(plant => <PlantSearchCard plant={plant} key={plant.plantId}/>)
            }

        </Row>

            </Container>
</>
)
}
