import React from 'react'
import styled from 'styled-components'

type MenuType = {
    menuItemsList: string[]
}

export const Menu = (props: MenuType) => {
    return (
        <StyledNav>
            <ul>
                {props.menuItemsList.map((item, index) =>
                    <li key={index}>
                        <a href="">{item}</a>
                    </li>
                )}
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  background: aqua;

  ul {
    display: flex;
    gap: 30px;
  }
`