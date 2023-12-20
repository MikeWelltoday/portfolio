import React from 'react'
import {S} from './ProjectsCard_Styles'
import {Icon} from '../../../components/Icon'
import {ButtonFrame} from '../../../components/ButtonFrame'

//===============================================================================================================================================================

//types
export type PortfolioCardPropsType = {
    cardImage: string
    cardTitle: string
    cardDescription: string
    cardTechStack: string
    cardPortfolioLink: string
}

export const ProjectsCard = (props: PortfolioCardPropsType) => {
    return (
        <S.ProjectsCard>
            <S.CardImageBox>
                <S.CardImage src={`${props.cardImage}`} alt="sry"/>
                <ButtonFrame>view project</ButtonFrame>
            </S.CardImageBox>
            <S.CardTitle>{props.cardTitle}</S.CardTitle>
            <S.CardDescription>{props.cardDescription}</S.CardDescription>
            <S.CardTechStack><span>Tech Stack: </span>{props.cardTechStack}</S.CardTechStack>
            <S.CardDecor>
                <Icon iconId={'icon-projects-GitHub'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
            </S.CardDecor>
            <S.CardProjectsLink href={props.cardPortfolioLink} target={'_blank'}>View Code</S.CardProjectsLink>
        </S.ProjectsCard>
    )
}