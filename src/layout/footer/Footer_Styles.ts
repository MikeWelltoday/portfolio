import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {responsiveFont} from '../../styles/Common'

//===============================================================================================================================================================

const Footer = styled.footer`
  padding: 50px 0;
`
const Small = styled.small`
  display: block;
  text-align: center;
  color: ${ThemeSet.color.font.grey.grey50};
  font-weight: 400;
  ${responsiveFont({fsMaxPx: 16, fsMinPx: 14})};

  &:before {
    content: '';
    height: 1px;
    display: block;
    background-color: ${ThemeSet.color.font.grey.grey30};
    margin-bottom: 10px;
  }
`

//===============================================================================================================================================================

export const S = {
    Footer,
    Small
}