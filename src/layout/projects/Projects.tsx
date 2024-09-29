import React from 'react'
import {S} from './Projects_Styles'
import {Container} from '../../components/Container'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {PortfolioCardPropsType, ProjectsCard} from './projectsCard/ProjectsCard'

//===============================================================================================================================================================

//images
import connectify from '../../assets/images-projects/Inctagram.webp'
import memorizer from '../../assets/images-projects/Memorizer.webp'
import techUiKit from '../../assets/images-projects/tech-ui-kit.webp'
import tasker from '../../assets/images-projects/Tasker.webp'
import {Reveal} from 'react-awesome-reveal'

const projectsCardData: Array<PortfolioCardPropsType> = [
    {
        cardImage: connectify,
        cardTitle: '< Connectify >',
        cardDescription: 'Приложение для публикации новостей и просмотра публикаций других пользователей по алгоритму',
        cardTechStack: 'NextJS,RTK-query',
        cardPortfolioLink: 'https://pictures-of-life.online/',
        cardPortfolioCodeLink: 'https://github.com/technosamuraiway/pictures-of-life'
    },
    {
        cardImage: memorizer,
        cardTitle: '< Memorizer >',
        cardDescription: 'Приложение для эффективного и простого запоминания информации',
        cardTechStack: 'React, TS, RTK-query',
        cardPortfolioLink: 'https://flashcards-lemon-seven.vercel.app/decks',
        cardPortfolioCodeLink: 'https://github.com/Dmitriy-Zarechnev/flashcards'
    },
    {
        cardImage: techUiKit,
        cardTitle: '< Tech-Ui-Kit >',
        cardDescription: 'Библиотека универсальных UI компонентов',
        cardTechStack: 'React, TS, Storybook',
        cardPortfolioLink: 'https://techno-ui-kit.vercel.app/?path=/docs/components-button--docs',
        cardPortfolioCodeLink: 'https://github.com/technosamuraiway/techno-ui-kit'
    },
    {
        cardImage: tasker,
        cardTitle: '< Tasker >',
        cardDescription: 'Приложение для удобного отслеживания и оптимизации задач',
        cardTechStack: 'React, TS, RTK',
        cardPortfolioLink: 'https://mikewelltoday.github.io/todolist/#/login',
        cardPortfolioCodeLink: 'https://github.com/MikeWelltoday/todolist'
    }
]


export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle title={'Проекты'}/>
                <S.ProjectsCardBox>
                    <Reveal cascade={true} damping={0.08} triggerOnce={true}>
                        {
                            projectsCardData.map((item, index) =>
                                <ProjectsCard cardImage={item.cardImage}
                                              cardTitle={item.cardTitle}
                                              cardDescription={item.cardDescription}
                                              cardTechStack={item.cardTechStack}
                                              cardPortfolioLink={item.cardPortfolioLink}
                                              key={index}
                                              cardPortfolioCodeLink={item.cardPortfolioCodeLink}

                                />
                            )}

                    </Reveal>
                </S.ProjectsCardBox>
            </Container>
        </S.Projects>
    )
}