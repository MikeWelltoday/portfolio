import React from 'react'
import './App.css'
import {Particle} from './layout/particle/Particle'
import {Header} from './layout/header/Header'
import {Home} from './layout/home/Home'
import {TechStack} from './layout/techstack/TechStack'
import {About} from './layout/about/About'
import {Projects} from './layout/projects/Projects'
import {Contact} from './layout/contact/Contact'
import {Footer} from './layout/footer/Footer'
import {GoTopBtn} from './layout/goToTopBtn/GoTopBtn'

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
        </div>
    )
}

export default App