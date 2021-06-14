import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

// Define our reducer and action.
const reminderSlice = createSlice({
    name: "reminders",
    initialState: [],
    reducers: {
        getAllReminders: (reminder, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllReminders} = reminderSlice.actions

// Create an export to allow async calls to our action
export const fetchAllReminders = () => async dispatch => {
    const {data} = await httpConfig(`/apis/reminder/`)
    dispatch(getAllReminders(data))
}


// Create an export to allow async calls to our action
export const fetchAllReminders = () => async dispatch => {
    const {data} = await httpConfig(`/apis/reminder/`)
    dispatch(getAllReminders(data))

}
// We use export default here so that if something imports this file, they will get it by default
export default reminderSlice.reducer
