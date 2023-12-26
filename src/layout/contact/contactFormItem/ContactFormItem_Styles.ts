import styled, {css} from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'
import {ButtonFrame} from '../../../components/ButtonFrame'


//===============================================================================================================================================================

const ContactForm = styled.form`
  position: relative;

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

const FormInput = styled.input<{ change: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  outline: none;

  font-family: 'Inter', 'Popins', sans-serif;

  color: ${ThemeSet.colors.Font};
  border: 1.5px solid ${ThemeSet.colors.Font};
  background: ${ThemeSet.colors.BackgroundCardGradient};
  background-color: ${ThemeSet.colors.BackgroundCard};

  font-size: 1.4em;
  font-weight: 400;
  transition: 0.5s;
  height: 50px;

  ${props => props.change && css<{ change: boolean }>`
    ~ label {
      transform: translateX(20px) translateY(-7px);
      padding: 0 10px 0 10px;

      background-color: ${ThemeSet.color.background.card.card};
      background: ${ThemeSet.color.background.card.cardGradient};
      border-left: 1.5px solid ${ThemeSet.colors.Font};
      border-right: 1.5px solid ${ThemeSet.colors.Font};
      color: ${ThemeSet.colors.Font};
      letter-spacing: 1.5px;


      opacity: 1;
      font-size: 1.2rem;
    }
  `}
  &:focus ~ label {
    transform: translateX(20px) translateY(-7px);
    padding: 0 10px 0 10px;

    background-color: ${ThemeSet.color.background.card.card};
    background: ${ThemeSet.color.background.card.cardGradient};
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
    //заменим выделение по табу на обычную focus
    outline: none;
    border: 1.5px solid ${ThemeSet.colors.FormFocusBorderColor};
    box-shadow: 0 2px 13px 0 ${ThemeSet.colors.FormFocusShadow};
  }
`

const FormLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  padding: 18px 15px;
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