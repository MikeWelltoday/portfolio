import React from 'react'
import './App.css'
import styled from 'styled-components'
import {Particle} from './layout/particle/Particle'
import {Header} from './layout/header/Header'
import {Home} from './layout/home/Home'
import {TechStack} from './layout/techstack/TechStack'
import {About} from './layout/about/About'
import {Projects} from './layout/projects/Projects'
import {Contact} from './layout/contact/Contact'
import {Footer} from './layout/footer/Footer'
import {GoTopBtn} from './layout/goToTopBtn/GoTopBtn'

// diablo
import {Works} from './diablo/works/Works'
import {Testimony} from './diablo/testimony/Testimony'
import {DiabloContacts} from './diablo/diabloContacts/DiabloContacts'
import {DiabloFooter} from './diablo/diabloFooter/DiabloFooter'

//===============================================================================================================================================================

function App() {
    return (
        <div className="App">

            <Particle/>
            <Header/>
            <Home/>
            <About/>
            <TechStack/>
            <Projects/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>

            <Border>BORDER</Border>

            <Works/>
            <Testimony/>
            <DiabloContacts/>
            <DiabloFooter/>
        </div>
    )
}

export default App

//===============================================================================================================================================================

const Border = styled.div`
  width: 100%;
  height: 50px;
  background: red;
  color: yellow;
  font-size: 48px;
  text-align: center;
  margin: 20px 0;
`