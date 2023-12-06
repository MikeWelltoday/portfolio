import './App.css'
import styled from 'styled-components'

// Components
import {Header} from './layout/header/Header'
import {Home} from './layout/home/Home'


function App() {
    return (
        <div className="App">

            <Header/>
            <Home/>

        </div>
    )
}

export default App