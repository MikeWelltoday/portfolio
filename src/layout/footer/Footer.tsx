import React from 'react'
import {S} from './Footer_Styles'
import {Container} from '../../components/Container'

//===============================================================================================================================================================

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.Small>Кузценов Михаил, web-portfolio</S.Small>
            </Container>
        </S.Footer>
    )
}