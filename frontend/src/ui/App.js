import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { Search } from './Search'
import { Reminder } from './Reminder';
import { FourOhFour } from './pagesFourOhFour'
import React from 'react'
import {Greenhouse} from "./Greenhouse";
import {NavBar} from "./Navbar";
import {store} from "../store";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

import "./Styles.css"

export const App = () => (
    <>
        <Provider store={store} >

        <BrowserRouter>
            <NavBar/>
            <Switch>

                <Route exact path='/' component={Home} />
                <Route exact path='/reminder' component={Reminder} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/greenhouse/' component={Greenhouse} />
                <Route exact path='/Navbar' component={NavBar} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    </Provider>
    </>
)
