import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// Components
import {Container} from '../../components/Container'
import {Menu} from './Menu'
import {MenuMobile} from './MenuMobile'

// menuItemsList
const menuItemsList: string[] = ['Home', 'About', 'TechStack', 'Projects', 'Contacts']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer>
                    <HeaderLogo aria-label={'header-logo'}>.MikhailKuznetsov</HeaderLogo>
                    <Menu menuItemsList={menuItemsList}/>
                    <MenuMobile menuItemsList={menuItemsList}/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
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

  @media ${ThemeSet.media.tablet} {
    justify-content: center;
  }
`
const HeaderLogo = styled.h3`
  color: ${ThemeSet.colors.HeaderLogo};
  font: 300 2rem/1.2 'JetBrains Mono', monospace;
`


