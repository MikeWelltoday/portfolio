import React from 'react'
import styled from 'styled-components'

// components
import {Container} from '../../components/Container'
import {SectionTitle} from '../../components/SectionTitle'
import {PortfolioCard} from './PortfolioCard'

//images
import cardImageOne from '../../assets/images/image-portfolio-1.webp'
import cardImageTwo from '../../assets/images/image-portfolio-2.webp'
import cardImageThree from '../../assets/images/image-portfolio-3.webp'
import cardImageFour from '../../assets/images/image-portfolio-4.webp'


export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionTitle title={'Projects'} borderColor={'#EBE8E3'} borderHeight={'1.5px'}/>
                <PortfolioCardBox>
                    <PortfolioCard cardImage={cardImageOne} cardTitle={'Portfolio'}
                                   cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <PortfolioCard cardImage={cardImageTwo} cardTitle={'Todolist'}
                                   cardDescription={'This is sample project description random'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <PortfolioCard cardImage={cardImageThree} cardTitle={'Social Network'}
                                   cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <PortfolioCard cardImage={cardImageFour} cardTitle={'Shop'}
                                   cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                </PortfolioCardBox>
            </Container>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
  min-height: 1700px;
  margin-top: 100px;
  display: flex;
`

const PortfolioCardBox = styled.div`
  max-width: 1000px;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: stretch;
  row-gap: 80px;
  column-gap: 50px;
`