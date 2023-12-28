import React from 'react'
import {S} from './FormSendMessage_Styles'
import {ButtonFrame} from '../../../../components/ButtonFrame'


//===============================================================================================================================================================

export const FormSendMessage: React.FC = () => {
    return (
        <S.FormSendMessage id={'message'}
                           transition={{duration: 0.2, delay: 0.5}}
                           initial={{opacity: 0, scale: 0.2}}
                           animate={{opacity: 1, scale: 1}}
                           exit={{opacity: 0, scale: 0.2}}
                           key={'message'}
        >
            <S.Title>😉 Thanks for Your Message 🤗</S.Title>
            <ButtonFrame type={'button'}>OK</ButtonFrame>
        </S.FormSendMessage>
    )
}

