import React from 'react'
import {S} from './CardMainTextTitle_Styles'

//===============================================================================================================================================================

export type CardMainTextItemType = {
    ItemTitle: string
    ItemText: string
}

export const CardMainTextItem: React.FC<CardMainTextItemType> = (props: CardMainTextItemType) => {
    return (
        <S.CardMainTextItem>
            <S.ItemTextBox>
                <S.ItemTitle>{props.ItemTitle}</S.ItemTitle>
            </S.ItemTextBox>
            <S.ItemText>{props.ItemText}</S.ItemText>
        </S.CardMainTextItem>
    )
}