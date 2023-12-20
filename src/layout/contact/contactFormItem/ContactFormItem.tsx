import React from 'react'
import {S} from './ContactFormItem_Styles'
import {ButtonFrame} from '../../../components/ButtonFrame'

//===============================================================================================================================================================

export const ContactForm: React.FC = () => {
    return (
        <S.ContactForm>
            <S.ContactFormItemBox>
                <S.FormInput type={'text'} name={'name'} id={'name'} required={true}/>
                <S.FormLabel htmlFor={'name'} aria-labelledby={'name'}>name</S.FormLabel>
            </S.ContactFormItemBox>
            <S.ContactFormItemBox>
                <S.FormInput type={'text'} name={'email'} id={'email'} required={true}/>
                <S.FormLabel htmlFor={'email'} aria-labelledby={'email'}>email</S.FormLabel>
            </S.ContactFormItemBox>
            <S.ContactFormItemBox>
                <S.FormInput as={'textarea'} name={'message'} id={'message'} required={true}/>
                <S.FormLabel htmlFor={'message'} aria-labelledby={'message'}>message</S.FormLabel>
            </S.ContactFormItemBox>
            <ButtonFrame type={'submit'}>contact me</ButtonFrame>
        </S.ContactForm>

    )
}

