import styled from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'
import {ButtonFrame} from '../../../components/ButtonFrame'


//===============================================================================================================================================================

const ContactForm = styled.form`
  max-width: 700px;
  width: 100%;
  margin: 50px auto 0 auto;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  row-gap: 25px;

  textarea {
    min-height: 180px;
    height: 100%;
    resize: none;
  }

  ${ButtonFrame} {
    width: 200px;
    margin: 0 auto;
  }
`

const ContactFormItemBox = styled.div`
  position: relative;
`

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  outline: none;

  font-family: 'Poppins', sans-serif;

  color: ${ThemeSet.colors.Font};
  border: 1.5px solid ${ThemeSet.colors.Font};
  background: ${ThemeSet.colors.BackgroundCardGradient};
  background-color: ${ThemeSet.colors.BackgroundCard};

  font-size: 1.4em;
  font-weight: 400;
  transition: 0.5s;
  height: 50px;

  &:focus ~ label {
    transform: translateX(15px) translateY(-6px);
    padding: 0 10px 0 10px;

    background: ${ThemeSet.colors.BackgroundCardGradient};
    border-left: 1.5px solid ${ThemeSet.colors.FormFocusBorderColor};
    border-right: 1.5px solid ${ThemeSet.colors.FormFocusBorderColor};
    letter-spacing: 1.5px;
    color: ${ThemeSet.colors.FormFocusBorderColor};

    opacity: 1;
    font-size: 1.2rem;
  }

  &:focus {
    border: 1.5px solid ${ThemeSet.colors.FormFocusBorderColor};
    box-shadow: 0 2px 13px 0 ${ThemeSet.colors.FormFocusShadow};
  }

  &:focus-visible {
    border: 1.5px solid ${ThemeSet.colors.FormFocusBorderColor};
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
  letter-spacing: 1.5px;
  opacity: 0.4;
`

//===============================================================================================================================================================

export const S = {
    ContactForm,
    ContactFormItemBox,
    FormInput,
    FormLabel
}