import './App.css'
import styled from 'styled-components'

// Components
import {Header} from './layout/header/Header'
import {Home} from './layout/home/Home'
import {TechStack} from './layout/techstack/TechStack'
import {About} from './layout/about/About'
import {Portfolio} from './layout/portfolio/Portfolio'

// diablo
import {Works} from './diablo/works/Works'
import {Testimony} from './diablo/testimony/Testimony'
import {DiabloContacts} from './diablo/diabloContacts/DiabloContacts'
import {DiabloFooter} from './diablo/diabloFooter/DiabloFooter'


function App() {
    return (
        <div className="App">

            <Header/>
            <Home/>
            <About/>
            <TechStack/>
            <Portfolio/>

            <Border>BORDER</Border>
            <Works/>
            <Testimony/>
            <DiabloContacts/>
            <DiabloFooter/>


        </div>
    )
}

export default App

const Border = styled.div`
  width: 100%;
  height: 50px;
  background: red;
  color: yellow;
  font-size: 48px;
  text-align: center;
  margin: 20px 0;
`