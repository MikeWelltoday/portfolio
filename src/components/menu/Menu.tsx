import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Abot</a>
                </li>
                <li>
                    <a href="">MyTechStack</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
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