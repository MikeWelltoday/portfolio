import React from 'react'
import styled from 'styled-components'

// components
import {WorkList} from './WorkList'
import {Container} from '../../components/Container'

// images
import firstImage from './../../assets/images/image-portfolio-1.webp'
import secondImage from './../../assets/images/image-portfolio-2.webp'
import {WorksMenu} from './WorksMenu'


// menuItemsList
const menuItemsList = ['All', 'Lending Page', 'React', 'Spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <WorksMenu menuItemsList={menuItemsList}/>
                <WorkListsWrapper>
                    <WorkList src={firstImage} text={'angularangula rangrangularagu larangulara ngularangu larangular'}
                              title={'Angular'}/>
                    <WorkList src={secondImage}
                              text={'angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular'}
                              title={'Angular'}/>
                </WorkListsWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section``

const WorkListsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  row-gap: 30px;
  column-gap: 5%;

  margin-top: 40px;
`