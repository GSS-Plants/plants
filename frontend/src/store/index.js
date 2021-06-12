import plants from "./plant"
import profilePlants from "./profile-plant"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from "./auth";

const reducer =  combineReducers({plants, profilePlants, auth})

export const store = configureStore({reducer})