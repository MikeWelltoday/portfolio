import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// Components
import {Decor} from '../header/Decor'
import {FlexWrapper} from '../../components/FlexWrapper'

// img
import ImageHome from './../../assets/images/image-home.webp'


export const Home = () => {
    return (
        <StyledHome>

            <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>

                <Photo src={`${ImageHome}`} alt="sry"/>

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

const StyledHome = styled.section`
  min-height: 800px;
  background: #191919;

  //позиционирование decor
  position: relative;
`

const Photo = styled.img`
  width: 220px;
  height: 400px;
  object-fit: contain;

  background: #aa50e8;
`

const HomeTextContainer = styled.div`
  background: cornflowerblue;

  border-top: ${ThemeSet.colors.Font} 1.5px solid;
`

const HelloTitle = styled.span`
  font-size: 46px;
`

const NameTitle = styled.h3`
  font-size: 46px;
`

const DeveloperTitle = styled.h1`
  font-size: 46px;
`

//контейнер для декора
const DecorContainer = styled.div`
  position: absolute;
  top: 67px;
  left: 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

