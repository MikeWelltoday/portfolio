import React from 'react'
import styled from 'styled-components'

// components
import {Icon} from '../../components/icon/Icon'

//types
type PortfolioCardType = {
    cardImage: string
    cardTitle: string
    cardDescription: string
    cardTecjStack: string
}

export const PortfolioCard = (props: PortfolioCardType) => {
    return (
        <StyledPortfolioCard>
            <CardImage src={`${props.cardImage}`} alt="sry"/>
            <CardTitle>{props.cardTitle}</CardTitle>
            <CardDescription>{props.cardDescription}</CardDescription>
            <CardTechStack><span>Tech Stack</span>{props.cardTecjStack}</CardTechStack>
            <CardDecor>
                <Icon iconId={'icon-projects-GitHub'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
            </CardDecor>
        </StyledPortfolioCard>
    )
}

const StyledPortfolioCard = styled.div`
  width: 330px;
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

const CardTitle = styled.h1`

`

const CardDescription = styled.p`

`

const CardTechStack = styled.h1`

`

const CardDecor = styled.div`
  background-color: #3f3f07;
  text-align: center;
  
`