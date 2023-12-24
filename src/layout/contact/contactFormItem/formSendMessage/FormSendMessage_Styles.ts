import styled, {css} from 'styled-components'
import {ButtonFrame} from '../../../../components/ButtonFrame'

//===============================================================================================================================================================

const FormSendMessage = styled.div<{ isFormSendMessageOpen: boolean }>`
  display: none;

  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 150px;


  background-color: #e3c10c;

  text-align: center;
  padding: 20px;
  border-radius: 8px;

  ${ButtonFrame} {
    width: 160px;
    margin: 30px auto 0 auto;
  }


  ${props => props.isFormSendMessageOpen && css<{ isFormSendMessageOpen: boolean }>`
    display: block;
  `}
`

const Title = styled.p`
  font-size: 24px;
  color: black;
`

//===============================================================================================================================================================

export const S = {
    FormSendMessage,
    Title
}