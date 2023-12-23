import styled from 'styled-components'
// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {mixinFont} from '../../styles/Common'

//===============================================================================================================================================================

const Home = styled.section`
  margin-top: 20px;

  h1, h2, span {
    white-space: nowrap;
    ${mixinFont({weight: 600, fontMaxRem: 3.6, fontMinRem: 3})};
  }

  //позиционирование decor
  position: relative;


  svg {
    max-width: 628px;
    width: 100%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    @media ${ThemeSet.media.mobile.media} {
      display: none;
    }
  }
`

const Photo = styled.img`
  width: 220px;
  height: 400px;
  object-fit: contain;
`

const HomeTextContainer = styled.div`
  border-top: ${ThemeSet.colors.Font} 1.5px solid;
  padding-top: 15px;
`

const HelloTitle = styled.span``

const NameTitle = styled.h2``

const DeveloperTitle = styled.h1`
  p {
    display: none;
  }
`

//===============================================================================================================================================================
export const S = {
    Home,
    Photo,
    HomeTextContainer,
    HelloTitle,
    NameTitle,
    DeveloperTitle
}