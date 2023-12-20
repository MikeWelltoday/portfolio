import React from 'react'
import {S} from './Footer_Styles'
import {Container} from '../../components/Container'

//===============================================================================================================================================================

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.Small>© 2023 Kuznetsov Mikhail, with best regards.</S.Small>
            </Container>
        </S.Footer>
    )
}