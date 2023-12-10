import React from 'react'
import styled from 'styled-components'

// components
import {Icon} from '../../components/icon/Icon'

//types
type PortfolioCardType = {
    cardImage: string
    cardTitle: string
    cardDescription: string
    cardTechStack: string
    cardPortfolioLink: string
}

export const PortfolioCard = (props: PortfolioCardType) => {
    return (
        <StyledPortfolioCard>
            <CardImage src={`${props.cardImage}`} alt="sry"/>
            <CardTitle>{props.cardTitle}</CardTitle>
            <CardDescription>{props.cardDescription}</CardDescription>
            <CardTechStack><span>Tech Stack</span>{props.cardTechStack}</CardTechStack>
            <CardDecor>
                <Icon iconId={'icon-projects-GitHub'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
            </CardDecor>
            <CardPortfolioLink href={props.cardPortfolioLink} target={'_blank'}>View Code</CardPortfolioLink>
        </StyledPortfolioCard>
    )
}

const StyledPortfolioCard = styled.div`
  width: 330px;
  height: 600px;
  border-radius: 20px;
  background: #363636 linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%);
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);

  display: flex;
  flex-direction: column;
`

const CardImage = styled.img`
  width: 330px;
  height: 260px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const CardTitle = styled.h3`

`

const CardDescription = styled.p`
  flex-grow: 1;
`

const CardTechStack = styled.h3`

`

const CardDecor = styled.div`
  background-color: #989832;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 35px;


  &:before, &:after {
    background-color: #191919;
    display: block;
    content: '';
    height: 4px;
    flex: 1 1 auto;
  }

  svg {
    background-color: deeppink;
  }
`

const CardPortfolioLink = styled.a`
  color: #fff;
`
