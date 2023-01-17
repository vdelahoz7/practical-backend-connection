import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from '../pages/index'

function MainStack() {
    return (
        <BrowserRouter>
            <Route path="/" element={<HomePage />} />
        </BrowserRouter>
    )
}

export default MainStack
