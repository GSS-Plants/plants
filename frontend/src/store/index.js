import plants from "./plant"
import profilePlants from "./profile-plant"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from "./auth";
import reminders from "./reminders";

const reducer =  combineReducers({plants, profilePlants, auth, reminders})

export const store = configureStore({reducer})