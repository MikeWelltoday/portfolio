import styled from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const ContactLinksCard = styled.div`
  width: 70px;
  height: 60px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  row-gap: 10px;

  svg {
    color: ${ThemeSet.color.font.grey.grey100};
  }

  &:hover > a, &:hover > a > svg {
    color: ${ThemeSet.color.font.yellow.yellow100};
  }
  
`

const CardTitle = styled.a`
  color: ${ThemeSet.color.font.grey.grey70};

  text-transform: uppercase;
  cursor: pointer;

  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1.2px;
`

//===============================================================================================================================================================

export const S = {
    ContactLinksCard,
    CardTitle
}