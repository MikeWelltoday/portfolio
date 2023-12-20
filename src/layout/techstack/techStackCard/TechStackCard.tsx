import React from 'react'
import {S} from './TechStackCard_Styles'
import {Icon} from '../../../components/Icon'

//===============================================================================================================================================================

// type
type TechStackCardPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
    techNameTitle: string
}

export const TechStackCard: React.FC<TechStackCardPropsType> = (props: TechStackCardPropsType) => {
    return (
        <S.TechStackCard>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <S.TechName>{props.techNameTitle}</S.TechName>
        </S.TechStackCard>
    )
}