import styled from 'styled-components'
import {motion} from 'framer-motion'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const GoTopBtn = styled(motion.div)`
  padding: 2px;
  position: fixed;
  bottom: 5px;
  right: 10px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    cursor: pointer;
    color: ${ThemeSet.color.font.yellow.yellow50};

    &:hover {
      color: ${ThemeSet.color.font.yellow.yellow100};
    }
  }
`

//===============================================================================================================================================================

export const S = {
    GoTopBtn
}