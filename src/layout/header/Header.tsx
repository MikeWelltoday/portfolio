import React from 'react'
import styled from 'styled-components'

// Components
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background: darkseagreen;
  display: flex;
  justify-content: space-between;
`