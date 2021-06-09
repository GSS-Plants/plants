import plants from "./plant"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({plants})

export const store = configureStore({reducer})