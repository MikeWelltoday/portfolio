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

export const ContactLinksCard: React.FC<ContactLinksCardPropsType> = (props: ContactLinksCardPropsType) => {
    return (
        <S.ContactLinksCard>
            <Logo logoLink={props.logoLink} iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox}/>
            <S.CardTitle href={props.logoLink}>{props.cardTitle}</S.CardTitle>
        </S.ContactLinksCard>
    )
}

