import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import {fetchAuth} from "./auth";

// Define our reducer and action.
const plantSlice = createSlice({
    name: "profilePlants",
    initialState: [],
    reducers: {
        getProfilePlantsByProfileId: (profilePlants, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getProfilePlantsByProfileId} = plantSlice.actions



// Create an export to allow async calls to our action
export const fetchProfilePlantsByProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    if (auth !== null) {
        const {data} = await httpConfig(`/apis/profile-plant/greenhouse/${auth.profileId}`)
        dispatch(getProfilePlantsByProfileId(data))
    }

}
// We use export default here so that if something imports this file, they will get it by default
export default plantSlice.reducer
