import React, {ElementRef, useRef, useState} from 'react'
import {S} from './ContactFormItem_Styles'
import {ButtonFrame} from '../../../components/ButtonFrame'
import emailjs from '@emailjs/browser'
import {FormSendMessage} from './formSendMessage/FormSendMessage'

//===============================================================================================================================================================

export const ContactForm: React.FC = () => {

    // FormSendMessage
    const [isFormSendMessageOpen, setIsFormSendMessageOpen] = useState(false)

    const form = useRef<ElementRef<'form'>>(null)
    const sendEmail = (e: any) => {
        e.preventDefault()

        //на случай если ничего не придет в for.current
        // елси for.current == undefined => функция просто остановиться
        if (!form.current) return

        emailjs.sendForm('service_nrsf8to', 'template_saqc2yq', form.current, 'DtkU_ursHT5ebW0wl')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        console.log('SEND')
        e.target.reset()

        // при клике по форме исчезнет окно информирования об отправлке формы
        setIsFormSendMessageOpen(true)
    }
    
    return (
        <S.ContactForm ref={form} onSubmit={sendEmail} onClick={() => setIsFormSendMessageOpen(false)}>
            <S.ContactFormItemBox>
                <S.FormInput type={'text'} id={'name'} required={true} name={'user_name'}/>
                <S.FormLabel htmlFor={'name'} aria-labelledby={'name'}>name</S.FormLabel>
            </S.ContactFormItemBox>
            <S.ContactFormItemBox>
                <S.FormInput type={'text'} id={'email'} required={true} name={'email'}/>
                <S.FormLabel htmlFor={'email'} aria-labelledby={'email'}>email</S.FormLabel>
            </S.ContactFormItemBox>
            <S.ContactFormItemBox>
                <S.FormInput as={'textarea'} id={'message'} required={true} name={'message'}/>
                <S.FormLabel htmlFor={'message'} aria-labelledby={'message'}>message</S.FormLabel>
            </S.ContactFormItemBox>
            <ButtonFrame type={'submit'}>contact me</ButtonFrame>

            {/*окно информирования об отправке формы*/}
            <FormSendMessage isFormSendMessageOpen={isFormSendMessageOpen}/>
        </S.ContactForm>

    )
}
