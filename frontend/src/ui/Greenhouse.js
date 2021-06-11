import React from "react"
import "./greenhouse.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPlants} from "../store/plant";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";
// import "./greenhouse-js.js"

export const Greenhouse = ({match}) => {

    const profileId = match.params.profileId
    // Tell this component that it needs to watch for items that live outside of this component.
    // This is how we make sure this component looks for our data from Redux's call to the backend.
    const dispatch = useDispatch()
    const sideEffects = () => {
        dispatch(fetchProfilePlantsByProfileId(profileId));
    }
    React.useEffect(sideEffects, [match.params.profileId, dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const profilePlants = useSelector((state) => state.profilePlants ? state.profilePlants : [])

    console.log(profilePlants);
    return (
        <>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src="../assets/shelves.png" alt=""/>
                    <h1 className="display-4">Greenhouse</h1>
                </div>
            </div>

            {/*<header>*/}
            {/*<h1 className="big-title translate" data-speed="0.1">GREENHOUSE</h1>*/}

            {/*<img src="../assets/standingPlant.png" className="mountain1 translate" data-speed="-0.2" alt=""/>*/}
            {/*<img src="../assets/shelves.png" className="mountain2 translate" data-speed="0.4" alt=""/>*/}
            {/*</header>*/}


            <section>
                <div className="shadow"/>

                <div className="container">
                    <div className="content opacity">


                        <div id="greenhouse">
                            <h2 className="title">
                                Greenhouse
                                <div className="border"/>
                            </h2>


                            <div className="container" id="plantsMovable">
                                <div className="drop-zone" id="A">
                                    <div id="myDraggableElement" draggable="true"/>
                                </div>
                                <div className="drop-zone" id="B"/>
                                <div className="drop-zone" id="C"/>
                                <div className="drop-zone" id="D"/>
                                <div className="drop-zone" id="E"/>
                                <div className="drop-zone" id="F"/>
                                <div className="drop-zone" id="G"/>
                                <div className="drop-zone" id="H"/>
                                <div className="drop-zone" id="I"/>
                            </div>


                            <div className="container" id="greenhouseContainer">
                                {/*<p class="text">I'm baby mixtape letterpress raw denim you probably haven't heard of them twee sustainable vexillologist brooklyn blog shaman 90's adaptogen kinfolk vinyl. La croix palo santo lomo bespoke kinfolk 90's photo booth cardigan literally marfa mlkshk selfies street art direct trade fanny pack.</p>*/}
                                <button type="button" id="addNewPlant" className="btn btn-light"><strong>Add New
                                    Plant</strong></button>
                                <button type="button" id="compostPlant" className="btn btn-light"><strong>Compost Plant
                                    X_X</strong></button>
                            </div>
                        </div>


                        <div className="container" id="reminders">
                            <h2 className="title">
                                Reminders
                                <div className="border"/>
                            </h2>
                            <p>
                                <ul>
                                    <li>Name of plant</li>
                                    <li>Frequency</li>
                                </ul>
                            </p>
                            <button type="button" id="editReminders" className="btn btn-light"><strong>Edit
                                Reminders</strong></button>
                        </div>


                    </div>
                </div>
            </section>


        </>
)
}

