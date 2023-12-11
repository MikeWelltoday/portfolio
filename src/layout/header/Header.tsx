import React from 'react'
import styled from 'styled-components'

// Components
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'

// menuItemsList
const menuItemsList = ['Home', 'About', 'TechStack', 'Projects', 'Contacts']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>
                    <Logo logoLink={'#'} iconId={'icon-home-mylogo'} width={'66'} height={'27'} viewBox={'0 0 66 27'}/>
                    <Menu menuItemsList={menuItemsList}/>
                </FlexWrapper>
            </Container>


        </StyledHeader>
    )
}

const StyledHeader = styled.header`
`