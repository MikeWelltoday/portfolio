import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {TechStackCard} from './TechStackCard'
import {Container} from '../../components/Container'

export const TechStack = () => {
    return (
        <StyledTechStack>
            <Container>
                <SectionTitle title={'TechStack'} borderColor={`${ThemeSet.colors.Font}`} borderHeight={'1.5px'}/>
                <TechStackCardBox>
                    <TechStackCard iconId={'icon-MyTechStack-HTML'} width={'93'} height={'105'} viewBox={'0 0 93 105'}
                                   techNameTitle={'HTML'}/>
                    <TechStackCard iconId={'icon-MyTechStack-CSS'} width={'94'} height={'105'}
                                   viewBox={'0 0 94 105'}
                                   techNameTitle={'CSS'}/>
                    <TechStackCard iconId={'icon-MyTechStack-JavaScript'} width={'106'} height={'106'}
                                   viewBox={'0 0 106 106'} techNameTitle={'JavaScript'}/>
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
                    <TechStackCard iconId={'icon-MyTechStack-TailWind'} width={'115'} height={'90'}
                                   viewBox={'0 0 115 90'} techNameTitle={'TailWind'}/>
                    <TechStackCard iconId={'icon-MyTechStack-GitHub'} width={'88'} height={'88'}
                                   viewBox={'0 0 88 88'} techNameTitle={'GitHub'}/>
                </TechStackCardBox>
            </Container>
        </StyledTechStack>
    )
}

const StyledTechStack = styled.section`
  min-height: 700px;
  margin-top: 100px;
  display: flex;
`

const TechStackCardBox = styled.div`

  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  align-content: flex-start;
  row-gap: 50px;
  column-gap: 7%;
`

