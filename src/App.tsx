import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './theme'
import HomePage from './components/pages/HomePage'

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <HomePage />
        </ThemeProvider>
    )
}

export default App
