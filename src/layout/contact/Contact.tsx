import React from 'react'
import styled from 'styled-components'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {ContactLinksCard} from './ContactLinksCard'

// components

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle title={'Contact'} borderColor={'#EBE8E3'} borderHeight={'1.5px'}/>
            <ContactLinks>
                <ContactLinksCard logoLink={'#'} iconId={'icon-contact-gmail'} width={'39'} height={'38'}
                                  viewBox={'0 0 39 38'} cardTitle={'gmail'}/>
                <ContactLinksCard logoLink={'#'} iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                  viewBox={'0 0 38 38'} cardTitle={'telegram'}/>
                <ContactLinksCard logoLink={'#'} iconId={'icon-contact-github'} width={'39'} height={'38'}
                                  viewBox={'0 0 39 38'} cardTitle={'github'}/>
            </ContactLinks>
            <ContactForm>
                <Form placeholder={'Name'}/>
                <Form placeholder={'Email'}/>
                <Form as={'textarea'} placeholder={'Message'}/>
                <FormButton type={'submit'}>Send</FormButton>
            </ContactForm>
        </StyledContact>
    )
}

const StyledContact = styled.section`
  min-height: 800px;
  width: 100%;
  background-color: #833b3b;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

const ContactLinks = styled.div`
  background-color: aquamarine;
  max-width: 340px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

`

const ContactForm = styled.form`
  background-color: chartreuse;
  max-width: 400px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  row-gap: 25px;
`

const Form = styled.input`

`

const FormButton = styled.button`

`