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


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <Card>
                    <SectionTitle title={'About'} borderColor={`${ThemeSet.colors.BackgroundMain}`}
                                  borderHeight={'4px'}/>
                    <CardBox>
                        <CardPersonBox>
                            <PersonPhoto src={`${ImageAbout}`} alt="sry"/>
                        </CardPersonBox>

                        <CardMainText>
                            <CardMainTextItem ItemTitle={'About Me'}
                                              ItemText={'Hardworking fron-end developer based in the Obninsk city, Russia.'}/>
                            <CardMainTextItem ItemTitle={'Skills'}
                                              ItemText={'I have experience in creating SPA based on React/Redux/TypeScript. Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and Design libraries. Unit Tests.'}/>
                            <CardMainTextItem ItemTitle={'Experience'}
                                              ItemText={'2018-2024 | Rosatom Technical Academy - Leading engineer'}/>
                            <CardMainTextItem ItemTitle={'Education'}
                                              ItemText={'2012-2018 | Tomsk Polytechnic University - Nuclear power plants: design, operation and engineering'}/>
                        </CardMainText>
                    </CardBox>
                </Card>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
  min-height: 1000px;
  margin-top: 100px;
`

const Card = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  padding: 15px 0 80px 0;

  border-radius: 29px;

  background-color: ${ThemeSet.colors.BackgroundCard};
  background: ${ThemeSet.colors.BackgroundCardGradient};
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
`

const CardBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding: 0 5%;

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