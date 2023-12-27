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

  color: ${ThemeSet.color.font.grey.grey100};
  border: 1.5px solid ${ThemeSet.color.font.grey.grey70};
  background-color: ${ThemeSet.color.background.card.card};
  background: ${ThemeSet.color.background.card.cardGradient};


  font-size: 1.4em;
  font-weight: 400;
  transition: 0.5s;
  height: 50px;

  //текст написан, но инпут не в фокусе => что бы лейбл не вернулся на место, и не наехал не текс, которой вводил пользователь
  ${props => props.change && css<{ change: boolean }>`
    ~ label {
      transform: translateX(20px) translateY(-7px);
      padding: 0 10px 0 10px;

      background-color: ${ThemeSet.color.background.card.card};
      background: ${ThemeSet.color.background.card.cardGradient};
      border-left: 1.5px solid ${ThemeSet.color.font.grey.grey70};
      border-right: 1.5px solid ${ThemeSet.color.font.grey.grey70};
      color: ${ThemeSet.color.font.grey.grey90};
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
    border-left: 1.5px solid ${ThemeSet.color.form.focusColor};
    border-right: 1.5px solid ${ThemeSet.color.form.focusColor};
    letter-spacing: 1.5px;
    color: ${ThemeSet.color.form.focusColor};

    opacity: 1;
    font-size: 1.2rem;
  }


  &:focus {
    border: 1.5px solid ${ThemeSet.color.form.focusColor};
    box-shadow: 0 2px 13px 0 ${ThemeSet.color.form.focusShadow};
  }

  &:focus-visible {
    //заменим выделение по табу на обычную focus
    outline: none;
    border: 1.5px solid ${ThemeSet.color.form.focusColor};
    box-shadow: 0 2px 13px 0 ${ThemeSet.color.form.focusShadow};
  }
`

const FormLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  padding: 18px 15px;
  pointer-events: none;
  transition: 0.5s;

  color: ${ThemeSet.color.font.grey.grey100};
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