import React from 'react'
import {S} from './General_Styles'

//===============================================================================================================================================================

const textList = [
    `Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`,
    'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.',
    'I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.'
]

export const General: React.FC = () => {
    return (
        <S.General
            transition={{duration: 0.6, delay: 1.8}}
            initial={{opacity: 0, scale: 1, x: 0, y: -15}}
            animate={{opacity: 1, scale: 1, x: 0, y: 0}}
        >
            <S.Title>general</S.Title>
            {
                textList.map((item, index) => (
                    <S.Text key={index}>{item}</S.Text>
                ))
            }
        </S.General>
    )
}