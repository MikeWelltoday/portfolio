import styled from 'styled-components'
// styles
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
const HeaderLogo = styled.h3`
  color: ${ThemeSet.colors.HeaderLogo};
  font: 300 2rem/1.2 'JetBrains Mono', monospace;
`

//===============================================================================================================================================================

export const S = {
    Header,
    FlexContainer,
    HeaderLogo
}