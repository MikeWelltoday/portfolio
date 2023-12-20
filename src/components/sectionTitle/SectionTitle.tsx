import React from 'react'
import {S} from './SectionTitle_Styles'

//===============================================================================================================================================================

type SectionTitleType = {
    title: string
    borderColor: string
    borderHeight: string
}

export const SectionTitle: React.FC<SectionTitleType> = (props: SectionTitleType) => {
    return (
        <S.SectionTitle borderColor={props.borderColor}
                        borderHeight={props.borderHeight}>{props.title}</S.SectionTitle>
    )
}

