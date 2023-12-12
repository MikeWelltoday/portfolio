import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {Container} from '../../components/Container'


// components


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledSmall>© 2023 Kuznetsov Mikhail, with best regards.</StyledSmall>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  min-height: 200px;
`
const StyledSmall = styled.small`
  display: block;
  text-align: center;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  &:before {
    content: '';
    height: 1.5px;
    display: block;
    background-color: ${ThemeSet.colors.Font};
  }
`