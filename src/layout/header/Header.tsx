import React from 'react'
import styled from 'styled-components'

// Components
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {FlexWrapper} from '../../components/FlexWrapper'

// menuItemsList
const menuItemsList = ['Home', 'About', 'TechStack', 'Projects', 'Contacts']

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>
                <Logo/>
                <Menu menuItemsList={menuItemsList}/>
            </FlexWrapper>

        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background: darkseagreen;
`