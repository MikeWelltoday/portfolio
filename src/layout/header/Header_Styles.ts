import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const Header = styled.header`
  background-color: ${ThemeSet.colors.BackgroundHeader};
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
`
const HeaderLogo = styled.a`
  color: ${ThemeSet.colors.HeaderLogo};
  font: 300 2rem/1.2 'JetBrains Mono', monospace;

  &.active {
    color: yellow;
  }
`

//===============================================================================================================================================================

export const S = {
    Header,
    FlexContainer,
    HeaderLogo
}