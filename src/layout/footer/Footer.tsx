import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// components
import {Container} from '../../components/Container'

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
  min-height: 100px;
  margin-top: 100px;
  display: flex;
`
const StyledSmall = styled.small`
  //display: block;
  text-align: center;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 400;

  &:before {
    content: '';
    height: 1.5px;
    display: block;
    background-color: ${ThemeSet.colors.Font};
    margin-bottom: 10px;
  }
`