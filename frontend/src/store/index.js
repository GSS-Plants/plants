import plants from "./plant"
import profilePlants from "./profile-plant"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({plants, profilePlants})

export const store = configureStore({reducer})