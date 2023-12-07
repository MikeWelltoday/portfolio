import './App.css'
import styled from 'styled-components'

// Components
import {Header} from './layout/header/Header'
import {Home} from './layout/home/Home'
import {TechStack} from './layout/techstack/TechStack'

// diablo
import {Works} from './diablo/works/Works'


function App() {
    return (
        <div className="App">

            <Header/>
            <Home/>

            {/*<TechStack/>*/}


            <Border>BORDER</Border>

            <Works/>

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