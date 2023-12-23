import React from 'react'
import Typewriter from 'typewriter-effect'
import {S} from './Home_Styles'
import {Decor} from '../header/Decor'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'

//===============================================================================================================================================================

// img
import ImageHome from './../../assets/images/image-home.webp'

export const Home: React.FC = () => {
    return (
        <S.Home id={'home'}>
            <Container>
                <FlexWrapper direction={'column'} justifyContent={'flex-start'} alignItems={'center'}
                             flexWrap={'nowrap'}>
                    <S.Photo src={`${ImageHome}`} alt="sry"/>
                    <S.HomeTextContainer>
                        <S.HelloTitle>Hello There,</S.HelloTitle>
                        <S.NameTitle>I'm Mikhail Kuznetsov</S.NameTitle>
                        <S.DeveloperTitle>
                            <p>front-End developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Front-End Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200,
                                    cursor: '.'
                                }}
                            />
                        </S.DeveloperTitle>
                    </S.HomeTextContainer>
                </FlexWrapper>
                <Decor/>
            </Container>
        </S.Home>
    )
}
