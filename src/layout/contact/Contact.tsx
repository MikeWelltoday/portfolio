import React from 'react'
import styled from 'styled-components'

//styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {ContactLinksCard} from './ContactLinksCard'
import {Container} from '../../components/Container'


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle title={'Contact'} borderColor={ThemeSet.colors.Font} borderHeight={'1.5px'}/>
                <ContactLinks>
                    <ContactLinksCard logoLink={'#'} iconId={'icon-contact-gmail'} width={'39'} height={'38'}
                                      viewBox={'0 0 39 38'} cardTitle={'gmail'}/>
                    <ContactLinksCard logoLink={'#'} iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                      viewBox={'0 0 38 38'} cardTitle={'telegram'}/>
                    <ContactLinksCard logoLink={'#'} iconId={'icon-contact-github'} width={'39'} height={'38'}
                                      viewBox={'0 0 39 38'} cardTitle={'github'}/>
                </ContactLinks>
                <ContactForm>
                    <Form placeholder={'Name'} required={true}/>
                    <Form placeholder={'Email'} required={true}/>
                    <Form as={'textarea'} placeholder={'Message'} required={true}/>
                    <FormButton type={'submit'}>contact me</FormButton>
                </ContactForm>
            </Container>

        </StyledContact>
    )
}

const StyledContact = styled.section`
  min-height: 700px;
  margin-top: 100px;
  display: flex;
`

const ContactLinks = styled.div`
  background-color: #2a6450;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  column-gap: 50px;

`

const ContactForm = styled.form`
  margin: 70px auto 0 auto;

  outline: 1px solid deeppink;

  max-width: 700px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  row-gap: 25px;
`

const Form = styled.input`
  background: ${ThemeSet.colors.BackgroundCardGradient};
  background-color: ${ThemeSet.colors.BackgroundCard};
  color: ${ThemeSet.colors.Font};
  height: 50px;
  border: 2px solid ${ThemeSet.colors.Font};
  padding: 5px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;


  & + & + & {
    min-height: 240px;
    height: 100%;
    resize: block;
  }
`

const FormButton = styled.button`

  background: ${ThemeSet.colors.ButtonBackground};
  display: block;
  padding: 10px 15px;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  cursor: pointer;
  text-align: center;
  width: 30%;
  border-radius: 5px;
  margin: 0 auto;

  font-size: 1.2rem;
  letter-spacing: 1.2px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: ${ThemeSet.colors.Font};
`