import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

export const ContactForm = () => {
    return (
        <StyledContactForm>
            <ContactFormItemBox>
                <FormInput type={'text'} name={'name'} id={'name'}/>
                <FormLabel htmlFor={'name'}>name</FormLabel>
            </ContactFormItemBox>
            <ContactFormItemBox>
                <FormInput type={'text'} name={'email'} id={'email'}/>
                <FormLabel htmlFor={'email'}>email</FormLabel>
            </ContactFormItemBox>
            <ContactFormItemBox>
                <FormInput as={'textarea'} name={'message'} id={'message'}/>
                <FormLabel htmlFor={'message'}>message</FormLabel>
            </ContactFormItemBox>
        </StyledContactForm>

    )
}

const StyledContactForm = styled.form`
  max-width: 700px;
  width: 100%;
  margin: 70px auto 0 auto;

  outline: 1px solid deeppink;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  row-gap: 25px;
`

const ContactFormItemBox = styled.div`
  position: relative;

  & + & + & > textarea {
    min-height: 240px;
    height: 100%;
    resize: none;
  }
`

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;

  color: ${ThemeSet.colors.Font};
  border: 2px solid ${ThemeSet.colors.Font};
  background: ${ThemeSet.colors.BackgroundCardGradient};
  background-color: ${ThemeSet.colors.BackgroundCard};

  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.2;
  transition: 0.5s;
  height: 50px;

  &:focus ~ label {
    transform: translateX(15px) translateY(-6px);
    padding: 0 10px 0 10px;

    background: ${ThemeSet.colors.BackgroundCardGradient};
    border-left: 2px solid ${ThemeSet.colors.FormFocusBorderColor};
    border-right: 2px solid ${ThemeSet.colors.FormFocusBorderColor};
    letter-spacing: 1.5px;
    color: ${ThemeSet.colors.FormFocusBorderColor};

    opacity: 1;
    font-size: 1.2rem;
  }

  &:focus {
    border: 2px solid ${ThemeSet.colors.FormFocusBorderColor};
    box-shadow: 0 2px 13px 0 ${ThemeSet.colors.FormFocusShadow};
  }
`

const FormLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  padding: 15px 10px;
  pointer-events: none;
  transition: 0.5s;

  color: ${ThemeSet.colors.Font};
  text-transform: uppercase;

  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 1.5px;
  opacity: 0.4;

`