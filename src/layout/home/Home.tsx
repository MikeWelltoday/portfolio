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
                <div>
                    <HelloTitle>Hi There</HelloTitle>
                    <NameTitle>I'm Kuznetsov Mikhail</NameTitle>
                    <DeveloperTitle>Front-End Developer</DeveloperTitle>
                </div>
            </FlexWrapper>
            <Decor/>
        </StyledHome>
    )
}

const StyledHome = styled.div`
  min-height: 800px;

  background: #191919;
`

const Photo = styled.img`
  width: 220px;
  height: 400px;
  object-fit: contain;
`

const HelloTitle = styled.p``

const NameTitle = styled.p``

const DeveloperTitle = styled.h1``