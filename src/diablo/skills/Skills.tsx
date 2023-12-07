import React from 'react'
import styled from 'styled-components'

// components
import {FlexWrapper} from '../../components/FlexWrapper'
import {DiabloSectionTitle} from '../diabloComponents/DiabloSectionTitle'
import {Skill} from './Skill'

export const Skills = () => {
    return (
        <StyledSkills>

            <DiabloSectionTitle>Skills</DiabloSectionTitle>
            <FlexWrapper direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <Skill iconId={'icon-MyTechStock-Angular'} width={'105'} height={'105'} viewBox={'0 0 105 105'}
                       title={'Angular'} description={'Angular is super-puper language'}/>
                <Skill iconId={'icon-MyTechStock-React'} width={'105'} height={'105'} viewBox={'0 0 105 105'}
                       title={'Angular'} description={'Angular is super-puper language'}/>
                <Skill iconId={'icon-MyTechStock-TypeScript'} width={'105'} height={'105'} viewBox={'0 0 105 105'}
                       title={'Angular'} description={'Angular is super-puper language'}/>
                <Skill iconId={'icon-MyTechStock-Angular'} width={'105'} height={'105'} viewBox={'0 0 105 105'}
                       title={'Angular'} description={'Angular is super-puper language'}/>
                <Skill iconId={'icon-MyTechStock-React'} width={'105'} height={'105'} viewBox={'0 0 105 105'}
                       title={'Angular'} description={'Angular is super-puper language'}/>
                <Skill iconId={'icon-MyTechStock-TypeScript'} width={'105'} height={'105'} viewBox={'0 0 105 105'}
                       title={'Angular'} description={'Angular is super-puper language'}/>
            </FlexWrapper>

        </StyledSkills>
    )
}

const StyledSkills = styled.section`
  background: hotpink;
  min-height: 800px;
`