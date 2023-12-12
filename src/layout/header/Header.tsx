import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// Components
import {Container} from '../../components/Container'

// menuItemsList
const menuItemsList: string[] = ['Home', 'About', 'TechStack', 'Projects', 'Contacts']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer>
                    <HeaderLogo>.MikhailKuznetsov</HeaderLogo>
                    <Menu>
                        <ItemsList>
                            {menuItemsList.map((item, index) =>
                                <ListItem key={index}>
                                    <Link href="#">{item}</Link>
                                </ListItem>
                            )}
                        </ItemsList>
                    </Menu>
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: ${ThemeSet.colors.BackgroundHeader};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.h3`
  color: ${ThemeSet.colors.HeaderLogo};
  font: 300 20px/1.2 'JetBrains Mono', monospace;
`

const Menu = styled.nav`
`

const ItemsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
`

const ListItem = styled.li`
`

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  color: ${ThemeSet.colors.Font};
`

