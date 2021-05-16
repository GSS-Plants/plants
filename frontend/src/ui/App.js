import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { Search } from './Search'
import { Reminder } from './Reminder';
import { FourOhFour } from './pagesFourOhFour'
import React from 'react'
export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/reminder' component={Reminder} />
                <Route exact path='/search' component={Search} />
                {/*<Route exact path='/plant' component={Plant} />*/}
                {/*<Route exact path='/greenhouse' component={Greenhouse} />*/}
                {/*<Route exact path='/contact' component={Contact} />*/}
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    </>
)