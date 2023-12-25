import React from 'react'
import {S} from './Person_Styles'
import Typewriter from 'typewriter-effect'

//===============================================================================================================================================================

import ImageHome from './../../../assets/images/image-home.webp'


export const Person: React.FC = () => {
    return (
        <S.Person>

            <S.PhotoBox>
                <S.Photo src={`${ImageHome}`} alt="sry"/>
            </S.PhotoBox>
            <S.TextContainer>
                <S.Hello>Hi, my name is</S.Hello>
                <S.Name>Mikhail Kuznetsov.</S.Name>
                <S.Developer>
                    <p>front-End developer</p>
                    <Typewriter
                        options={{
                            strings: ['Web Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 200,
                            cursor: '.'
                        }}
                    />
                </S.Developer>
            </S.TextContainer>
        </S.Person>
    )
}