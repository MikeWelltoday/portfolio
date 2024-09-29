import React, {ElementRef, useRef, useState} from 'react'
import {S} from './ContactFormItem_Styles'
import {ButtonFrame} from '../../../components/ButtonFrame'
import emailjs from '@emailjs/browser'
import {FormSendMessage} from './formSendMessage/FormSendMessage'
import {Fade} from 'react-awesome-reveal'
import {AnimatePresence} from 'framer-motion'

//===============================================================================================================================================================

export const ContactForm: React.FC = () => {

    // ###FormSendMessage
    const [isFormSendMessageOpen, setIsFormSendMessageOpen] = useState(false)

    // ###EmailJS
    const form = useRef<ElementRef<'form'>>(null)
    const sendEmail = (e: any) => {
        e.preventDefault()

        console.log('sesese')

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

        //     после отправки лейблы вернуться на место
        setInputChangeName(false)
        setInputChangeEmail(false)
        setInputChangeMessage(false)
    }

    // ###когда введен текст => label над формой для Name
    const [inputChangeName, setInputChangeName] = useState(false)
    const handleInputChangeName = (e: any): void => {
        e.target.value ? setInputChangeName(true) : setInputChangeName(false)
    }
    // ###когда введен текст => label над формой для Email
    const [inputChangeEmail, setInputChangeEmail] = useState(false)
    const handleInputChangeEmail = (e: any): void => {
        e.target.value ? setInputChangeEmail(true) : setInputChangeEmail(false)
    }
    // ###когда введен текст => label над формой для Message
    const [inputChangeMessage, setInputChangeMessage] = useState(false)
    const handleInputChangeMessage = (e: any): void => {
        e.target.value ? setInputChangeMessage(true) : setInputChangeMessage(false)
    }


    return (
        <S.ContactForm ref={form} onSubmit={sendEmail} onClick={() => setIsFormSendMessageOpen(false)}
                       autoComplete="off">
            <Fade cascade={true} damping={0.05} triggerOnce={true} direction={'up'}>
                <S.ContactFormItemBox>
                    <S.FormInput type={'text'} id={'name'} required={true} name={'user_name'}
                                 onChange={handleInputChangeName}
                                 change={inputChangeName}/>
                    <S.FormLabel htmlFor={'name'} aria-labelledby={'name'}>Имя</S.FormLabel>
                </S.ContactFormItemBox>
                <S.ContactFormItemBox>
                    <S.FormInput type={'text'} id={'email'} required={true} name={'email'}
                                 onChange={handleInputChangeEmail}
                                 change={inputChangeEmail}/>
                    <S.FormLabel htmlFor={'email'} aria-labelledby={'email'}>Почта</S.FormLabel>
                </S.ContactFormItemBox>
                <S.ContactFormItemBox>
                    <S.FormInput as={'textarea'} id={'message'} required={true} name={'message'}
                                 onChange={handleInputChangeMessage} change={inputChangeMessage}/>
                    <S.FormLabel htmlFor={'message'} aria-labelledby={'message'}>Сообщение</S.FormLabel>
                </S.ContactFormItemBox>
                <ButtonFrame type={'submit'}>Связаться</ButtonFrame>
            </Fade>

            {/*окно информирования об отправке формы*/}
            <AnimatePresence>
                {isFormSendMessageOpen && (
                    <FormSendMessage/>
                )}
            </AnimatePresence>

        </S.ContactForm>

    )
}
