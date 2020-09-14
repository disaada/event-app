import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Base () {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/RegistrationNotice" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Base