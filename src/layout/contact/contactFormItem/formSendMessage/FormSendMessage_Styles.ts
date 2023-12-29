import styled from 'styled-components'
import {ButtonFrame} from '../../../../components/ButtonFrame'
import {motion} from 'framer-motion'
import {ThemeSet} from '../../../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const FormSendMessage = styled(motion.div)`
  display: block;
  position: absolute;
  height: 150px;
  top: 10%;
  left: 0;
  right: 0;


  background-color: ${ThemeSet.color.background.card.card};

  text-align: center;
  padding: 20px;
  border: 2px solid ${ThemeSet.color.font.yellow.yellow70};
  border-radius: 15px;

  ${ButtonFrame} {
    width: 160px;
    margin: 30px auto 0 auto;
  }
`

const Title = styled.p`
  font-size: 24px;
  color: ${ThemeSet.color.font.grey.grey80};
`

//===============================================================================================================================================================

export const S = {
    FormSendMessage,
    Title
}