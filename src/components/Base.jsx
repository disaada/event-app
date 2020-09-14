import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RegistrationNotice from './RegistrationNotice'

function Base () {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/RegistrationNotice" component={RegistrationNotice} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Base