import React from 'react'
import {S} from './FormSendMessage_Styles'
import {ButtonFrame} from '../../../../components/ButtonFrame'

//===============================================================================================================================================================

export const FormSendMessage: React.FC<{ isFormSendMessageOpen: boolean }> = (props: {
    isFormSendMessageOpen: boolean
}) => {
    return (
        <S.FormSendMessage isFormSendMessageOpen={props.isFormSendMessageOpen}>
            <S.Title>THANKS</S.Title>
            <ButtonFrame type={'button'}>OK</ButtonFrame>
        </S.FormSendMessage>
    )
}