import {AnimatePresence, motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {S} from './Content_Styles'

//===============================================================================================================================================================

const contentList: Array<{ title: string }> = [
    {title: 'personal information'},
    {title: 'skills'},
    {title: 'experience'},
    {title: 'education'}
]

const textList: Array<{ text: string[], status: string }> = [
    {
        text: ['I help businesses and companies reach and companies reach', 'theirgoals by designing user-centric digital and companies reach ', 'Goals by designing user-centric digital and companies reach and companies reach and companies reach and companies reach products\n' +
        '& interactive experiences.'],
        status: 'personal information'
    },
    {
        text: ['I businesses and companies', 'theirdesigning user-centric ', 'als by dch and niesch products' +
        '& interactive experiences.'],
        status: 'skills'
    },
    {
        text: ['I and companies reach and companies reach', 'theirby designing user-centric digital and companies reach '],
        status: 'experience'
    },
    {
        text: ['I companies reach and companies reach', 'theirby designing ', 'theirgoals by designing user-centric digital and companies reach '],
        status: 'education'
    }
]

export const Content: React.FC = () => {

    const [decorPosition, setDecorPosition] = useState('0%')
    const [currentMenuStatus, setCurrentMenuStatus] = useState('personal information')
    const [currentTextList, setCurrentTextList] = useState(textList.filter(item => item.status === 'personal information'))

    useEffect(() => {
        if (currentMenuStatus === 'personal information') {
            setCurrentTextList(textList.filter(item => item.status === 'personal information'))
            setDecorPosition('0%')
        }
        if (currentMenuStatus === 'skills') {
            setCurrentTextList(textList.filter(item => item.status === 'skills'))
            setDecorPosition('25%')
        }
        if (currentMenuStatus === 'experience') {
            setCurrentTextList(textList.filter(item => item.status === 'experience'))
            setDecorPosition('50%')
        }
        if (currentMenuStatus === 'education') {
            setCurrentTextList(textList.filter(item => item.status === 'education'))
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