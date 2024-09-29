import {AnimatePresence, motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {S} from './Content_Styles'

//===============================================================================================================================================================

const contentList: Array<{ title: string }> = [
    {title: 'Задачи'},
    {title: 'Технологии'},
    {title: 'Образование'},
    {title: 'Языки'}
]

const textList: Array<{ text: string[], status: string }> = [
    {
        text: [
            'работа в команде (teamlead, backend, PM, QA), рефакторинг, фикс багов',
            'создание библиотеки UI компонентов (storybook, snapshot)',
            'применение в проектах FSD и TDD',
            'авторизация через JWT refresh token, логинизация (через Git и Google)',
            'обработка и валидация форм с ReactHookForm, Formik, Zod',
            'пагинация, сортировка, поиск и фильтрация данных с сервера',
            'работа с сервером, CRUD операции'
        ],
        status: 'Задачи'
    },
    {
        text: [
            'TS, JS',
            'React, NextJS',
            'Redux, RTK, RTK-query',
            'Rest-API, WebSocket, Axios',
            'HTML, CSS, SCSS, Styled-Components',
            'Storybook, RadixUI, MaterialUI, HeadlessUI',
            'Jest',
            'ReactHookForm, Formik, Zod'
        ],
        status: 'Технологии'
    },
    {
        text: [
            'IT-INCUBATOR ( 2023 ): front-end разработчик',
            'РОСАТОМ/ТАР ( 2018-2021 ): ведущий инженер',
            'НИ ТПУ ( 2012-2018 ): инженер'
        ],
        status: 'Образование'
    },
    {
        text: ['English: advanced - C1 ( in progress )'],
        status: 'Языки'
    }
]

export const Content: React.FC = () => {

    const [decorPosition, setDecorPosition] = useState('0%')
    const [currentMenuStatus, setCurrentMenuStatus] = useState('Задачи')
    const [currentTextList, setCurrentTextList] = useState(textList.filter(item => item.status === 'Задачи'))

    useEffect(() => {
        if (currentMenuStatus === 'Задачи') {
            setCurrentTextList(textList.filter(item => item.status === 'Задачи'))
            setDecorPosition('0%')
        }
        if (currentMenuStatus === 'Технологии') {
            setCurrentTextList(textList.filter(item => item.status === 'Технологии'))
            setDecorPosition('25%')
        }
        if (currentMenuStatus === 'Образование') {
            setCurrentTextList(textList.filter(item => item.status === 'Образование'))
            setDecorPosition('50%')
        }
        if (currentMenuStatus === 'Языки') {
            setCurrentTextList(textList.filter(item => item.status === 'Языки'))
            setDecorPosition('75%')
        }
    }, [currentMenuStatus])

    return (
        <S.Content>
            <S.Menu>
                <S.MenuDecor decorPosition={decorPosition} role="presentation"/>
                <S.MenuList>
                    {
                        contentList.map((item, index) => (
                            <S.MenuItem key={index} onClick={() => setCurrentMenuStatus(item.title)}
                                        active={item.title === currentMenuStatus}>
                                {item.title}
                            </S.MenuItem>
                        ))
                    }
                </S.MenuList>
            </S.Menu>
            <S.TextBox>
                <AnimatePresence>
                    {
                        currentTextList.map((item) => (
                            <motion.div
                                key={item.status}
                                transition={{duration: 0.6, delay: 0.2}}
                                initial={{opacity: 0, scale: 1, y: -15}}
                                animate={{opacity: 1, scale: 1, y: 0}}
                            >
                                {
                                    item.text.map((item, index) => (
                                        <S.Text key={index}>
                                            {item}
                                        </S.Text>
                                    ))
                                }
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </S.TextBox>
        </S.Content>
    )
}