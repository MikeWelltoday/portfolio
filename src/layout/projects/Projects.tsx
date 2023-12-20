import React from 'react'
import styled from 'styled-components'

// components
import {Container} from '../../components/Container'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {ProjectsCard} from './ProjectsCard'

//images
import cardImageOne from '../../assets/images/image-portfolio-1.webp'
import cardImageTwo from '../../assets/images/image-portfolio-2.webp'
import cardImageThree from '../../assets/images/image-portfolio-3.webp'
import cardImageFour from '../../assets/images/image-portfolio-4.webp'


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle title={'Projects'} borderColor={'#EBE8E3'} borderHeight={'1.5px'}/>
                <ProjectsCardBox>
                    <ProjectsCard cardImage={cardImageOne} cardTitle={'< Portfolio >'}
                                  cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                  cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <ProjectsCard cardImage={cardImageTwo} cardTitle={'< Todolist >'}
                                  cardDescription={'This is sample project description random'}
                                  cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <ProjectsCard cardImage={cardImageThree} cardTitle={'< Social Network >'}
                                  cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                  cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <ProjectsCard cardImage={cardImageFour} cardTitle={'< Shop >'}
                                  cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                  cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                </ProjectsCardBox>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
`

const ProjectsCardBox = styled.div`
  max-width: 1000px;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  row-gap: 80px;
  column-gap: 5%;
`