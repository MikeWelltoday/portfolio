import React from 'react'
import styled from 'styled-components'

// components
import {Menu} from '../../components/menu/Menu'
import {FlexWrapper} from '../../components/FlexWrapper'
import {WorkList} from './WorkList'

// images
import firstImage from './../../assets/images/image-portfolio-1.webp'
import secondImage from './../../assets/images/image-portfolio-2.webp'

// menuItemsList
const menuItemsList = ['All', 'Lending Page', 'React', 'Spa']

// text
const firstText = 'angularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangularangular'


export const Works = () => {
    return (
        <StyledWorks>
            <Menu menuItemsList={menuItemsList}/>
            <FlexWrapper justifyContent={'space-around'}>
                <WorkList src={firstImage} text={firstText} title={'Angular'}/>
                <WorkList src={secondImage} text={firstText} title={'Angular'}/>
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
  min-height: 800px;
  background: darkcyan;

  Menu {
    text-align: center;
  }
`