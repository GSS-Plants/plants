import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import {fetchAuth} from "./auth";

// Define our reducer and action.
const reminderSlice = createSlice({
    name: "reminders",
    initialState: [],
    reducers: {
        getRemindersByProfileId: (reminder, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getRemindersByProfileId} = reminderSlice.actions

// Create an export to allow async calls to our action
export const fetchRemindersByProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    const {data} = await httpConfig(`/apis/reminder/profile/${auth.profileId}`)
    dispatch(getRemindersByProfileId(data))
}

// We use export default here so that if something imports this file, they will get it by default
export default reminderSlice.reducer
