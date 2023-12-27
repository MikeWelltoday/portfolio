import styled, {css} from 'styled-components'
import {ButtonFrame} from '../../../../components/ButtonFrame'
import {motion} from 'framer-motion'

//===============================================================================================================================================================

const FormSendMessage = styled(motion.div)<{ isFormSendMessageOpen: boolean }>`
  display: block;
  position: absolute;
  top: 10%;
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
    //display: block;
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