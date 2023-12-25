import React from 'react'
import {S} from './Home_Styles'
import {Container} from '../../components/Container'
import {Person} from './person/Person'
import {General} from './general/General'
import {Fade} from 'react-awesome-reveal'

//===============================================================================================================================================================

export const Home: React.FC = () => {
    return (
        <S.Home id={'home'}>
            <Container>
                <S.Wrapper>
                    <Fade triggerOnce={true} direction={'left'} delay={100} fraction={0.5}>
                        <Person/>
                    </Fade>
                    <Fade triggerOnce={true} direction={'right'} delay={100} fraction={1}>
                        <General/>
                    </Fade>
                </S.Wrapper>

            </Container>
        </S.Home>
    )
}
