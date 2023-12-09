import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../components/FlexWrapper'
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
            <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'}
                         flexWrap={'nowrap'}>
                <SectionTitle title={'Portfolio'} borderColor={'#EBE8E3'} borderHeight={'1.5px'}/>
                <PortfolioCardBox>
                    <PortfolioCard cardImage={cardImageOne} cardTitle={'Portfolio'}
                                   cardDescription={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <PortfolioCard cardImage={cardImageTwo} cardTitle={'Todolist'}
                                   cardDescription={'This is sample project description random'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <PortfolioCard cardImage={cardImageThree} cardTitle={'Social Network'}
                                   cardDescription={'This is sample project description random'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                    <PortfolioCard cardImage={cardImageFour} cardTitle={'Shop'}
                                   cardDescription={'This is sample project description random'}
                                   cardTechStack={'HTML,TS,SASS,React'} cardPortfolioLink={'#'}/>
                </PortfolioCardBox>
            </FlexWrapper>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
  min-height: 800px;
  background-color: cornflowerblue;
`

const PortfolioCardBox = styled.div`
  max-width: 1000px;
  width: 100%;
  background: #191919;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: stretch;
  row-gap: 80px;
  column-gap: 10px;
`