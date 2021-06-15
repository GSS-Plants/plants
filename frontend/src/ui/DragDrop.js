import React, {useState} from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";


export function DragDrop() {

    const profileId = props.match.params.profileId

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId(profileId))
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])

    console.log(plants)





    const [greenhousePlants, updateGreenhousePlants] = useState(finalStateGreenhousePlants)

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(greenhousePlants);
        const [reorderedItem] = items.splice(results.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateGreenhousePlants(items);
    }

    return (
        <>

            <h1> GREENHOUSE </h1>
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="plants">
            {(provided) => (
                <ul className="greenhousePlants" {...provided.droppableProps} ref={provided.innerRef}>
            {greenhousePlants.map(({id, name, thumb}, index) => {
                return (
                <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
                <li {...provided.draggableProps} {...provided.DragHandleProps} ref={provided.innerRef}>
                <div className="plant-thumb">
                <img src={thumb} alt={`${name} Thumb`}/>
                </div>
                <p>
            {name}
                </p>
                </li>
                )}
                </Draggable>
                );
            })}
            {provided.placeholder}
                </ul>
                )}
                </Droppable>
                </DragDropContext>
    </>
)
}