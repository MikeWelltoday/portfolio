import React from 'react'
import {S} from './ProjectsCard_Styles'
import {Icon} from '../../../components/Icon'
import {ButtonFrame} from '../../../components/ButtonFrame'
import {Btn} from './Btn_Styles'

//===============================================================================================================================================================

//types
export type PortfolioCardPropsType = {
    cardImage: string
    cardTitle: string
    cardDescription: string
    cardTechStack: string
    cardPortfolioLink: string
    cardPortfolioCodeLink: string
}

export const ProjectsCard: React.FC<PortfolioCardPropsType> = (props) => {
    return (
        <S.ProjectsCard>
            <S.CardImageBox>
                <S.CardImage src={`${props.cardImage}`} alt="sry"/>
                <Btn href={props.cardPortfolioLink} target={'_blank'}>Смотреть проект</Btn>
            </S.CardImageBox>
            <S.CardTitle>{props.cardTitle}</S.CardTitle>
            <S.CardDescription>{props.cardDescription}</S.CardDescription>
            <S.CardTechStack><span>Технологии:</span>{props.cardTechStack}</S.CardTechStack>
            <S.CardDecor>
                <Icon iconId={'icon-projects-GitHub'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
            </S.CardDecor>
            <S.CardProjectsLink href={props.cardPortfolioCodeLink} target={'_blank'}>GitHub</S.CardProjectsLink>
        </S.ProjectsCard>
    )
}