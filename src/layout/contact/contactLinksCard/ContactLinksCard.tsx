import React from 'react'
import {S} from './ContactLinksCard_Styles'
import {Logo} from '../../../components/Logo'

//===============================================================================================================================================================

//types
export type ContactLinksCardPropsType = {
    logoLink: string
    iconId: string
    width: string
    height: string
    viewBox: string
    cardTitle: string
}

export const ContactLinksCard: React.FC<ContactLinksCardPropsType> = (props) => {
    return (
        <S.ContactLinksCard>
            <Logo logoLink={props.logoLink} iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox} description={props.cardTitle}/>
            <S.CardTitle target={'_blank'} href={props.logoLink}>{props.cardTitle}</S.CardTitle>
        </S.ContactLinksCard>
    )
}

