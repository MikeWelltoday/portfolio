import React from 'react'
import styled from 'styled-components'

type MenuType = {
    menuItemsList: string[]
}

export const Menu = (props: MenuType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItemsList.map((item, index) =>
                    <li key={index}>
                        <a href="">{item}</a>
                    </li>
                )}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  background: aqua;

  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`