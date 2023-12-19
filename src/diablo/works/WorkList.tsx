import React from 'react'
import styled from 'styled-components'
import {DiabloLink} from '../diabloComponents/DiabloLink'
import {DiabloButton} from '../diabloComponents/DiabloButton'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

type WorkListProps = {
    title: string
    text: string
    src: string
}

export const WorkList = (props: WorkListProps) => {
    return (
        <StyledWorkList>
            <ImgWrapper>
                <Image src={props.src} alt={'sry'}/>
                <DiabloButton>ViewProject</DiabloButton>
            </ImgWrapper>
            <ContentWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <DiabloLink href={'#'}>demo</DiabloLink>
                <DiabloLink href={'#'}>code</DiabloLink>
            </ContentWrapper>
        </StyledWorkList>
    )
}

const StyledWorkList = styled.div`
  background: #252527;
  width: 320px;
  flex-grow: 1;

  @media ${ThemeSet.media.desktop} {
    max-width: 470px;
  }

  ${DiabloLink} {
    padding: 10px 0;

    & + ${DiabloLink} {
      margin-left: 10px;
    }
  }
`

const ImgWrapper = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  z-index: 0;

  ${DiabloButton} {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    display: none;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &:hover {
    &::before {
      display: block;
    }

    ${DiabloButton} {
      display: block;
    }
  }

  @media ${ThemeSet.media.tablet} {
    ${DiabloButton} {
      display: block;
    }

    &::before {
      display: block;
    }

  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ContentWrapper = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
`

const Text = styled.p`
  margin: 15px 0 10px 0;
  font-size: 1.4rem;
  font-weight: 400;
`