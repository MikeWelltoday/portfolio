import React from 'react'
import {S} from './SectionTitle_Styles'

//===============================================================================================================================================================

export const SectionTitle: React.FC<{ title: string }> = ({title}) => {
    return (
        <S.SectionTitle>{title}</S.SectionTitle>
    )
}

