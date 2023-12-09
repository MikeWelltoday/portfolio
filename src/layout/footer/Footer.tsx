import React from 'react'
import styled from 'styled-components'


// components
import {Menu} from '../../components/menu/Menu'

// menuItemsList
const menuItemsList = ['Home', 'About', 'TechStack', 'Projects', 'Contacts']


export const Footer = () => {
    return (
        <StyledFooter>
            <Menu menuItemsList={menuItemsList}/>
        </StyledFooter>
    )
}

const StyledFooter = styled.section`
  background-color: darkgoldenrod;
  min-height: 200px;

  &:before {
    content: '';
    height: 1.5px;
    display: block;
    background-color: #EBE8E3;
  }
`