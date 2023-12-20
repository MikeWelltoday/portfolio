import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const Footer = styled.footer`
  padding: 50px 0;
`
const Small = styled.small`
  display: block;
  text-align: center;
  opacity: 0.5;
  font-size: 1.4rem;
  font-weight: 400;

  &:before {
    content: '';
    height: 1.5px;
    display: block;
    background-color: ${ThemeSet.colors.Font};
    margin-bottom: 10px;
  }
`

//===============================================================================================================================================================

export const S = {
    Footer,
    Small
}