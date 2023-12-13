import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// Components
import {Decor} from '../header/Decor'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'

// img
import ImageHome from './../../assets/images/image-home.webp'


export const Home = () => {
    return (
        <StyledHome>
            <Container>
                <FlexWrapper direction={'column'} justifyContent={'flex-start'} alignItems={'center'}
                             flexWrap={'nowrap'}>
                    <Photo src={`${ImageHome}`} alt="sry"/>
                    <HomeTextContainer>
                        <HelloTitle>Hello there,</HelloTitle>
                        <NameTitle>I'm Mikhail Kuznetsov</NameTitle>
                        <DeveloperTitle>Front-End Developer</DeveloperTitle>
                    </HomeTextContainer>
                </FlexWrapper>
                <DecorContainer>
                    <Decor/>
                </DecorContainer>
            </Container>
        </StyledHome>
    )
}

const StyledHome = styled.section`
  margin-top: 140px;
  min-height: 700px;
  display: flex;

  //позиционирование decor
  position: relative;
`

const Photo = styled.img`
  width: 220px;
  height: 400px;
  object-fit: contain;
`

const HomeTextContainer = styled.div`
  //background: cornflowerblue;
  border-top: ${ThemeSet.colors.Font} 1.5px solid;
  padding-top: 15px;
`

const HelloTitle = styled.span`
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
`

const NameTitle = styled.h3`
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
`

const DeveloperTitle = styled.h1`
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
`

//контейнер для декора
const DecorContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;

  width: 100%;
  display: flex;
  justify-content: center;
`

