import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// styled
import {GlobalStyles} from './styles/GlobalStyles.styled'
import {ThemeSet} from './styles/ThemeStyles.styled'
import {ThemeProvider} from 'styled-components'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <ThemeProvider theme={ThemeSet}>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
