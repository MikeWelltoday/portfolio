import styled from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const TechStackCard = styled.div`
  width: 140px;
  height: 150px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  svg {
    flex: 0 0 auto;
    opacity: 0.9;

    color: ${ThemeSet.colors.BackgroundMain};
  }

  h3 {
    flex: 1 0 auto;
  }

  outline: 1px solid orange;
`

const TechName = styled.h3`
  font: 300 2rem/1.2 "JetBrains Mono", monospace;
  letter-spacing: -0.5px;
  opacity: 0.7;

  color: ${ThemeSet.colors.Font};

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
`

//===============================================================================================================================================================

export const S = {
    TechStackCard,
    TechName
}