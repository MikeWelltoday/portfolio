import React from 'react'
import styled from 'styled-components'

// Components
import {Decor} from '../header/Decor'

// img
import ImageHome from './../../assets/images/image-home.webp'
import {FlexWrapper} from '../../components/FlexWrapper'


export const Home = () => {
    return (
        <StyledHome>
            <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>
                <Photo src={`${ImageHome}`} alt="something went rong"/>
                <HomeTextContainer>
                    <HelloTitle>Hi There</HelloTitle>
                    <NameTitle>I'm Kuznetsov Mikhail</NameTitle>
                    <DeveloperTitle>Front-End Developer</DeveloperTitle>
                </HomeTextContainer>
            </FlexWrapper>
            <DecorContainer>
                <Decor/>
            </DecorContainer>

        </StyledHome>
    )
}

const StyledHome = styled.div`
  min-height: 800px;

  //позиционирование decor
  position: relative;

  background: #191919;
`

const Photo = styled.img`
  width: 220px;
  height: 400px;
  object-fit: contain;

  background: #aa50e8;
`

const HomeTextContainer = styled.div`
  background: cornflowerblue;
`

const HelloTitle = styled.p``

const NameTitle = styled.p``

const DeveloperTitle = styled.h1``

//контейнер для декора
const DecorContainer = styled.div`
  position: absolute;
  top: 67px;
  left: 0;

  width: 100%;
  display: flex;
  justify-content: center;
`