import React from 'react'
import {S} from './Projects_Styles'
import {Container} from '../../components/Container'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {PortfolioCardPropsType, ProjectsCard} from './projectsCard/ProjectsCard'

//===============================================================================================================================================================

//images
import cardImageOne from '../../assets/images/image-portfolio-1.webp'
import cardImageTwo from '../../assets/images/image-portfolio-2.webp'
import cardImageThree from '../../assets/images/image-portfolio-3.webp'
import cardImageFour from '../../assets/images/image-portfolio-4.webp'
import {Reveal} from 'react-awesome-reveal'

const projectsCardData: Array<PortfolioCardPropsType> = [
    {
        cardImage: cardImageOne,
        cardTitle: '< Portfolio >',
        cardDescription: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        cardTechStack: 'HTML,TS,SASS,React',
        cardPortfolioLink: 'https://www.google.ru/?hl=ru'
    },
    {
        cardImage: cardImageTwo,
        cardTitle: '< Todolist >',
        cardDescription: 'This is sample project description random',
        cardTechStack: 'HTML,TS,SASS,React',
        cardPortfolioLink: 'https://www.google.ru/?hl=ru'
    },
    {
        cardImage: cardImageThree,
        cardTitle: '< Social Network >',
        cardDescription: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        cardTechStack: 'HTML,TS,SASS,React',
        cardPortfolioLink: 'https://www.google.ru/?hl=ru'
    },
    {
        cardImage: cardImageFour,
        cardTitle: '< Shop >',
        cardDescription: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        cardTechStack: 'HTML,TS,SASS,React',
        cardPortfolioLink: 'https://www.google.ru/?hl=ru'
    }
]


export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle title={'Projects'}/>
                <S.ProjectsCardBox>
                    <Reveal cascade={true} damping={0.08} triggerOnce={true}>
                        {
                            projectsCardData.map((item, index) =>
                                <ProjectsCard cardImage={item.cardImage} cardTitle={item.cardTitle}
                                              cardDescription={item.cardDescription} cardTechStack={item.cardTechStack}
                                              cardPortfolioLink={item.cardPortfolioLink} key={index}/>
                            )}

                    </Reveal>
                </S.ProjectsCardBox>
            </Container>
        </S.Projects>
    )
}