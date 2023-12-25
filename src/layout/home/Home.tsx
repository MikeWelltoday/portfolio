import React from 'react'
import {S} from './Home_Styles'
import {Container} from '../../components/Container'
import {Person} from './person/Person'

//===============================================================================================================================================================

export const Home: React.FC = () => {
    return (
        <S.Home id={'home'}>
            <Container>
                <S.Wrapper>
                    <Person/>
                </S.Wrapper>
            </Container>
        </S.Home>
    )
}
