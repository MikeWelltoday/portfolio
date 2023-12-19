import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {CardMainTextItem} from './CardMainTextItem'
import {Container} from '../../components/Container'

//image
import ImageAbout from '../../assets/images/image-about.webp'

// ItemText
const ItemTextList: string[] = [
    'Hardworking fron-end developer based in the Obninsk city, Russia.',
    'I have experience in creating SPA based on React/Redux/TypeScript. Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and Design libraries. Unit Tests.',
    '2018-2024 | Leading engineer at the Rosatom Technical Academy',
    '2012-2018 | Tomsk Polytechnic University with degree in Nuclear power plants: design, operation and engineering'
]


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <Card>
                    <SectionTitle title={'About'} borderColor={`${ThemeSet.colors.BackgroundMain}`}
                                  borderHeight={'3px'}/>
                    <CardBox>
                        <CardPersonBox>
                            <PersonPhoto src={`${ImageAbout}`} alt="sry"/>
                        </CardPersonBox>

                        <CardMainText>
                            <CardMainTextItem ItemTitle={'About Me'}
                                              ItemText={ItemTextList[0]}/>
                            <CardMainTextItem ItemTitle={'Skills'}
                                              ItemText={ItemTextList[1]}/>
                            <CardMainTextItem ItemTitle={'Experience'}
                                              ItemText={ItemTextList[2]}/>
                            <CardMainTextItem ItemTitle={'Education'}
                                              ItemText={ItemTextList[3]}/>
                        </CardMainText>
                    </CardBox>
                </Card>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
`

const Card = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 15px 5% 50px 5%;
  border-radius: 29px;

  background-color: ${ThemeSet.colors.BackgroundCard};
  background: ${ThemeSet.colors.BackgroundCardGradient};
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
`

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  //padding: 0 5%;

  background-color: rgba(255, 20, 147, 0.21);
`

const CardPersonBox = styled.div`
  flex: 0 0 20%;
`

const PersonPhoto = styled.img`
  width: 200px;
  height: 285px;
  object-fit: contain;
`

const CardMainText = styled.div`
  flex: 0 1 600px;
  background: #aa50e8;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`