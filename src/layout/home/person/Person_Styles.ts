import styled from 'styled-components'
import {mixinFont, responsiveFont} from '../../../styles/Common'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const Person = styled.div`
  outline: 1px solid blue;

  display: flex;
  flex-flow: row wrap;
  row-gap: 30px;
  align-items: stretch;
  justify-content: center;
`

const PhotoBox = styled.div`
  //outline: 1px solid darkmagenta;
  text-align: right;
  flex: 0 0 27%;
`
const Photo = styled.img`
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
  outline: 1px solid green;

  span, h2, h1 {
    letter-spacing: 1.5px;
    white-space: nowrap;
  }
`

const Hello = styled.span`
  font-weight: 400;
  color: ${ThemeSet.color.font.yellow.yellow90};
  font-size: 18px;
`

const Name = styled.h2`
  font-weight: 600;
  color: ${ThemeSet.color.font.yellow.yellow70};
  font-size: 44px;

  @media screen and (max-width: 1030px) {
    ${responsiveFont({fontMinRem: 2.6, fontMaxRem: 4.4})}
  }
`

const Developer = styled.h1`
  font-weight: 600;
  color: ${ThemeSet.color.font.yellow.yellow50};
  font-size: 44px;

  @media screen and (max-width: 1030px) {
    ${responsiveFont({fontMinRem: 2.6, fontMaxRem: 4.4})}
  }

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