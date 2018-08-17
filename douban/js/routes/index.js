import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '../views/view/Index'
import Book from '../views/view/Book'

const Routes = _ => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book/:id" component={Book} />
    </Switch>
)

export default Routes
