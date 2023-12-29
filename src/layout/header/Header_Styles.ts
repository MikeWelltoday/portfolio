import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const Header = styled.header`
  background-color: ${ThemeSet.color.background.header.header};
  padding: 20px 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
`
const HeaderLogo = styled.a`
  color: ${ThemeSet.color.font.headerLogo};

  &:hover svg {
    color: ${ThemeSet.color.font.yellow.yellow50};
  }
`

//===============================================================================================================================================================

export const S = {
    Header,
    FlexContainer,
    HeaderLogo
}