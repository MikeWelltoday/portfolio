import React from 'react'
import ReactDOM from 'react-dom'
import Tilt from 'react-parallax-tilt'
import {S} from './About_Styles'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {CardMainTextItem, CardMainTextItemType} from './cardMainTextItem/CardMainTextItem'
import {Container} from '../../components/Container'

//===============================================================================================================================================================

//image
import ImageAbout from '../../assets/images/image-about.webp'

const cardMainTextData: Array<CardMainTextItemType> = [
    {
        ItemTitle: 'About Me',
        ItemText: 'Hardworking fron-end developer based in the Obninsk city, Russia.'
    },
    {
        ItemTitle: 'Skills',
        ItemText: 'I have experience in creating SPA based on React/Redux/TypeScript. Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and Design libraries. Unit Tests.'
    },
    {
        ItemTitle: 'Experience',
        ItemText: '2018-2024 | Leading engineer at the Rosatom Technical Academy'
    },
    {
        ItemTitle: 'Education',
        ItemText: '2012-2018 | Tomsk Polytechnic University with degree in Nuclear power plants: design, operation and engineering'
    }
]

export const About: React.FC = () => {
    return (
        <S.About>


            <Container>
                <S.Card>
                    <SectionTitle title={'About'} borderColor={`${ThemeSet.colors.BackgroundMain}`}
                                  borderHeight={'3px'}/>
                    <S.CardBox>
                        <S.CardPersonBox>
                            <Tilt>
                                <S.PersonPhoto src={`${ImageAbout}`} alt="sry"/>
                            </Tilt>
                        </S.CardPersonBox>
                        <S.CardMainText>
                            {
                                cardMainTextData.map((item, index) =>
                                    <CardMainTextItem ItemTitle={item.ItemTitle} ItemText={item.ItemText} key={index}/>
                                )
                            }
                        </S.CardMainText>
                    </S.CardBox>
                </S.Card>
            </Container>
        </S.About>
    )
}
