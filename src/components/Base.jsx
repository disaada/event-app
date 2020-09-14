import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RegistrationNotice from './RegistrationNotice'
import Registration from './Registration'

function Base () {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Registration} />
                    <Route path="/RegistrationNotice" component={RegistrationNotice} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Base