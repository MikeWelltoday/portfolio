import styled from 'styled-components'
import {responsiveFont, positionRelativeFromParticles} from '../../../styles/Common'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const Person = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 20px;
  align-items: stretch;
  justify-content: center;
`

const PhotoBox = styled.div`
  text-align: right;
  flex: 0 0 27%;
`
const Photo = styled.img`
  ${positionRelativeFromParticles()}
  position: relative;
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;
  border: 3px solid ${ThemeSet.color.font.yellow.yellow80};
`

const TextContainer = styled.div`
  padding-left: 3%;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  span, h2, h1 {
    letter-spacing: 1.5px;
    white-space: nowrap;
    ${positionRelativeFromParticles()};
    background-color: ${ThemeSet.color.background.body};
  }

  h2, h1 {
    font-weight: 600;
    ${responsiveFont({fsMaxPx: 54, fsMinPx: 32})}
  }
`

const Hello = styled.span`
  font-weight: 400;
  color: ${ThemeSet.color.font.yellow.yellow90};
  font-size: 18px;
`

const Name = styled.h2`
  color: ${ThemeSet.color.font.yellow.yellow70};
`

const Developer = styled.h1`
  color: ${ThemeSet.color.font.yellow.yellow50};

  p {
    display: none;
  }
`

//===============================================================================================================================================================

export const S = {
    Person,
    PhotoBox,
    Photo,
    TextContainer,
    Hello,
    Name,
    Developer
}