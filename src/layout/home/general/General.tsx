import React from 'react'
import {S} from './General_Styles'

//===============================================================================================================================================================

const textList = [
    'Разработчик с опытом создания SPA и SSR-app 1.5+ года с использованием TS, React, Next.JS, и RTK-query (Redux, RTK). Сейчас совершенствую навыки в этих технологиях, и активно изучаю React Native.',
    'Сторонник чистого и удобного в сопровождении кода. Предпочитаю работу в команде. Сохраняю баланс между качеством и скоростью работы.',
    'Отличаюсь целеустремленностью, вежливостью и способностью эффективно общаться с людьми.'
]


export const General: React.FC = () => {
    return (
        <S.General
            transition={{duration: 0.6, delay: 1.8}}
            initial={{opacity: 0, scale: 1, x: 0, y: -15}}
            animate={{opacity: 1, scale: 1, x: 0, y: 0}}
        >
            <S.Title>Обо мне</S.Title>
            {
                textList.map((item, index) => (
                    <S.Text key={index}>{item}</S.Text>
                ))
            }
        </S.General>
    )
}