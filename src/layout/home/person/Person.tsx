import React from 'react'
import {S} from './Person_Styles'
import Typewriter from 'typewriter-effect'

//===============================================================================================================================================================

import ImageHome from './../../../assets/images/image-home.webp'
import ImageHomeX2 from './../../../assets/images/image-home-x2.webp'

export const Person: React.FC = () => {
    return (
        <S.Person>

            <S.PhotoBox
                transition={{duration: 0.4, delay: 1}}
                initial={{opacity: 0, scale: 1, y: 15}}
                animate={{opacity: 1, scale: 1, y: 0}}
            >
                <S.Photo src={ImageHome} alt="sry" srcSet={`${ImageHomeX2} 2x`}/>
            </S.PhotoBox>
            <S.TextContainer>
                <S.Hello
                    transition={{duration: 0.4, delay: 1.2}}
                    initial={{opacity: 0, scale: 1, x: 0, y: 15}}
                    animate={{opacity: 1, scale: 1, x: 0, y: 0}}
                >Hi, my name is</S.Hello>
                <S.Name
                    transition={{duration: 0.4, delay: 1.4}}
                    initial={{opacity: 0, scale: 1, x: 0, y: 15}}
                    animate={{opacity: 1, scale: 1, x: 0, y: 0}}
                >Mikhail Kuznetsov.</S.Name>
                <S.Developer
                    transition={{duration: 0.4, delay: 1.6}}
                    initial={{opacity: 0, scale: 1, x: 0, y: 15}}
                    animate={{opacity: 1, scale: 1, x: 0, y: 0}}
                >
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