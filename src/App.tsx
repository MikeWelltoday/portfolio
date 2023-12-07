import './App.css'
import styled from 'styled-components'

// Components
import {Header} from './layout/header/Header'
import {Home} from './layout/home/Home'
import {TechStack} from './layout/techstack/TechStack'

// diablo
import {Skills} from './diablo/skills/Skills'


function App() {
    return (
        <div className="App">

            <Header/>
            <Home/>
            <TechStack/>

            <StyledBorder>BORDER</StyledBorder>

            {/*diablo*/}
            <Skills/>

        </div>
    )
}

export default App

const StyledBorder = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  background: blue;
  font-size: 36px;
  color: red;
  text-transform: capitalize;
`