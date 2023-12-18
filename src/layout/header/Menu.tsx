import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// types
type MenuType = {
    menuItemsList: string[]
}

export const Menu = (props: MenuType) => {
    return (
        <StyledMenu>
            <ItemsList>
                {props.menuItemsList.map((item, index) =>
                    <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                )}
            </ItemsList>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`

  @media ${ThemeSet.media.tablet} {
    display: none;
  }
`

const ItemsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
`

const ListItem = styled.li`
`

const Link = styled.a`
  font-size: 2rem;
  font-weight: 500;
`