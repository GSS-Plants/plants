import React from "react"
import {CardColumns} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {PlantCard} from "./plantSearch";
import {fetchPlantsByCommonName} from "../store/plant";

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

            <div id="container">


        <h1><b>Search Results</b></h1>
                {
                    plants.length === 0 && (<h2 className='text-center my-4 py-4'>No results to display ...</h2>)
                }
                <CardColumns className="CardCol px-1">
            {
                plants.map(plant => <PlantCard plant={plant} key={plant.plantId}/>)
            }

        </CardColumns>

            </div>
</>
)
}
