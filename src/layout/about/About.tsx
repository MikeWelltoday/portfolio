import React from 'react'
import styled from 'styled-components'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {FlexWrapper} from '../../components/FlexWrapper'
import {CardMainTextItem} from './CardMainTextItem'

//image
import ImageAbout from '../../assets/images/image-about.webp'


export const About = () => {
    return (
        <StyledAbout>
            <Card>
                <SectionTitle title={'About'} borderColor={'#191919'}/>
                <FlexWrapper flexWrap={'wrap'} alignItems={'stretch'} justifyContent={'space-between'}
                             direction={'row'}>
                    <CardPerson>
                        <PersonPhoto src={`${ImageAbout}`} alt="sry"/>
                        <PersonText>I am person</PersonText>
                    </CardPerson>
                    <CardMainText>
                        <CardMainTextItem ItemTitle={'Education'}
                                          ItemText={'I help businesses and companies reach I help businesses and companies reach I help businesses and companies reach'}/>
                        <CardMainTextItem ItemTitle={'Experience'}
                                          ItemText={'I help businesses and companies reach I help businesses and companies reach I help businesses and companies reach I help businesses and companies reach I help businesses and companies reach I help businesses and companies reach'}/>
                        <CardMainTextItem ItemTitle={'Personalities'}
                                          ItemText={'I help businesses and companies reach I help businesses and companies reach I'}/>
                    </CardMainText>

                </FlexWrapper>
            </Card>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
  background: #963c3c;
  min-height: 800px;


`

const Card = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  border-radius: 29px;
  background: #363636 linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%);
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
`

const CardPerson = styled.div`
  flex: 0 0 20%;
  background: #aa50e8;
`

const PersonPhoto = styled.img`
  width: 200px;
  height: 285px;
  object-fit: contain;
`

const PersonText = styled.p`

`

const CardMainText = styled.div`
  flex: 0 1 500px;
  background: #aa50e8;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`