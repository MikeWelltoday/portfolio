import React from 'react'
import styled from 'styled-components'


// components
import {SectionTitle} from '../../components/SectionTitle'
import {FlexWrapper} from '../../components/FlexWrapper'
import {TechStackCard} from './TechStackCard'

export const TechStack = () => {
    return (
        <StyledTechStack>
            <SectionTitle title={'TechStack'} borderColor={'#EBE8E3'}/>
            <FlexWrapper direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <TechStackCard iconId={'icon-MyTechStack-HTML'} width={'120'} height={'120'} viewBox={'0 0 120 120'}
                               techNameTitle={'HTML'}/>
                <TechStackCard iconId={'icon-MyTechStack-CSS'} width={'120'} height={'119'} viewBox={'0 0 120 119'}
                               techNameTitle={'CSS'}/>
                <TechStackCard iconId={'icon-MyTechStack-JavaScript'} width={'120'} height={'120'}
                               viewBox={'0 0 120 120'} techNameTitle={'JavaScript'}/>
                <TechStackCard iconId={'icon-MyTechStack-TypeScript'} width={'105'} height={'105'}
                               viewBox={'0 0 105 105'} techNameTitle={'TypeScript'}/>
                <TechStackCard iconId={'icon-MyTechStack-Git'} width={'105'} height={'105'}
                               viewBox={'0 0 105 105'} techNameTitle={'Git'}/>
                <TechStackCard iconId={'icon-MyTechStack-React'} width={'113'} height={'103'}
                               viewBox={'0 0 113 103'} techNameTitle={'React'}/>
                <TechStackCard iconId={'icon-MyTechStack-Angular'} width={'105'} height={'105'}
                               viewBox={'0 0 105 105'} techNameTitle={'Angular'}/>
                <TechStackCard iconId={'icon-MyTechStack-Redux'} width={'105'} height={'100'}
                               viewBox={'0 0 105 100'} techNameTitle={'Redux'}/>
                <TechStackCard iconId={'icon-MyTechStack-NextJS'} width={'105'} height={'105'}
                               viewBox={'0 0 105 105'} techNameTitle={'NextJS'}/>
                <TechStackCard iconId={'icon-MyTechStack-NodeJS'} width={'105'} height={'105'}
                               viewBox={'0 0 105 105'} techNameTitle={'nodeJS'}/>

                <TechStackCard iconId={'icon-MyTechStack-GraphQL'} width={'105'} height={'120'}
                               viewBox={'0 0 105 120'} techNameTitle={'GraphQL'}/>

                <TechStackCard iconId={'icon-MyTechStack-WebPack'} width={'120'} height={'120'}
                               viewBox={'0 0 120 120'} techNameTitle={'Webpack'}/>
                <TechStackCard iconId={'icon-MyTechStack-SASS'} width={'117'} height={'87'}
                               viewBox={'0 0 117 87'} techNameTitle={'SASS'}/>
                <TechStackCard iconId={'icon-MyTechStack-TailWind'} width={'120'} height={'120'}
                               viewBox={'0 0 120 120'} techNameTitle={'TailWind'}/>
                <TechStackCard iconId={'icon-MyTechStack-GitHub'} width={'88'} height={'88'}
                               viewBox={'0 0 88 88'} techNameTitle={'GitHub'}/>


            </FlexWrapper>
        </StyledTechStack>
    )
}

const StyledTechStack = styled.section`
  background: darkseagreen;
  min-height: 800px;
  max-width: 1000px;
  margin: 0 auto;
`

