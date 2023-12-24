import React from 'react'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {TechStackCard, TechStackCardPropsType} from './techStackCard/TechStackCard'
import {Container} from '../../components/Container'
import {S} from './TechStack_Styles'
import {Reveal} from 'react-awesome-reveal'

//===============================================================================================================================================================

const techStackCardData: Array<TechStackCardPropsType> = [
    {
        iconId: 'icon-MyTechStack-HTML',
        width: '93',
        height: '105',
        viewBox: '0 0 93 105',
        techNameTitle: 'HTML'
    },
    {
        iconId: 'icon-MyTechStack-CSS',
        width: '94',
        height: '105',
        viewBox: '0 0 94 105',
        techNameTitle: 'CSS'
    },
    {
        iconId: 'icon-MyTechStack-JavaScript',
        width: '106',
        height: '106',
        viewBox: '0 0 106 106',
        techNameTitle: 'JavaScript'
    },
    {
        iconId: 'icon-MyTechStack-TypeScript',
        width: '105',
        height: '105',
        viewBox: '0 0 105 105',
        techNameTitle: 'TypeScript'
    },
    {
        iconId: 'icon-MyTechStack-Git',
        width: '105',
        height: '105',
        viewBox: '0 0 105 105',
        techNameTitle: 'Git'
    },
    {
        iconId: 'icon-MyTechStack-React',
        width: '113',
        height: '103',
        viewBox: '0 0 113 103',
        techNameTitle: 'React'
    },
    {
        iconId: 'icon-MyTechStack-Angular',
        width: '105',
        height: '105',
        viewBox: '0 0 105 105',
        techNameTitle: 'Angular'
    },
    {
        iconId: 'icon-MyTechStack-Redux',
        width: '105',
        height: '100',
        viewBox: '0 0 105 100',
        techNameTitle: 'Redux'
    },
    {
        iconId: 'icon-MyTechStack-NextJS',
        width: '105',
        height: '105',
        viewBox: '0 0 105 105',
        techNameTitle: 'NextJS'
    },
    {
        iconId: 'icon-MyTechStack-NodeJS',
        width: '105',
        height: '105',
        viewBox: '0 0 105 105',
        techNameTitle: 'nodeJS'
    },
    {
        iconId: 'icon-MyTechStack-GraphQL',
        width: '105',
        height: '120',
        viewBox: '0 0 105 120',
        techNameTitle: 'GraphQL'
    },
    {
        iconId: 'icon-MyTechStack-WebPack',
        width: '120',
        height: '120',
        viewBox: '0 0 120 120',
        techNameTitle: 'Webpack'
    },
    {
        iconId: 'icon-MyTechStack-SASS',
        width: '117',
        height: '87',
        viewBox: '0 0 117 87',
        techNameTitle: 'SASS'
    },
    {
        iconId: 'icon-MyTechStack-TailWind',
        width: '115',
        height: '90',
        viewBox: '0 0 115 90',
        techNameTitle: 'TailWind'
    },
    {
        iconId: 'icon-MyTechStack-GitHub',
        width: '88',
        height: '88',
        viewBox: '0 0 88 88',
        techNameTitle: 'GitHub'
    }
]

export const TechStack: React.FC = () => {
    return (
        <S.TechStack id={'techStack'}>
            <Container>
                <SectionTitle title={'TechStack'} borderColor={`${ThemeSet.colors.Font}`} borderHeight={'1.5px'}/>
                <S.TechStackCardBox>
                    <Reveal cascade={true} damping={0.03} triggerOnce={true}>
                        {
                            techStackCardData.map((item, index) =>
                                <TechStackCard iconId={item.iconId} width={item.width} height={item.height}
                                               viewBox={item.viewBox}
                                               techNameTitle={item.techNameTitle} key={index}/>
                            )
                        }
                    </Reveal>
                </S.TechStackCardBox>
            </Container>
        </S.TechStack>
    )
}