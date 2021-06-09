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
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllPlants} = plantSlice.actions

// We use export default here so that if something imports this file, they will get it by default
export default plantSlice.reducer