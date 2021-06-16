import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

// Define our reducer and action.
const plantSlice = createSlice({
    name: "plant",
    initialState: [],
    reducers: {
        getAllPlants: (plants, action) => {
            return action.payload
        },
        getPlantsByCommonName: (plants, action) => {
            return action.payload
        },
        getPlantByPlantId : (plants , action ) => {
            return action.payload
        }
    },
})

// Make our actions callable as function getAllPlants.
export const {getAllPlants, getPlantsByCommonName, getPlantByPlantId} = plantSlice.actions


// Create an export to allow async calls to our action
export const fetchAllPlants = () => async dispatch => {
    const {data} = await httpConfig(`/apis/plant/`)
    dispatch(getAllPlants(data))
}
export const fetchPlantsByCommonName = (searchText) => async dispatch => {
    const {data} = await httpConfig(`/apis/plant/search-common-name/${searchText}`)
    dispatch(getPlantsByCommonName(data))
}
    export const fetchPlantByPlantId = (plantId) => async dispatch => {
        const {data} = await httpConfig(`/apis/plant/${plantId}`)
        dispatch(getPlantByPlantId(data))

}
// We use export default here so that if something imports this file, they will get it by default
export default plantSlice.reducer
