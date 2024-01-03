import styled from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'
import {positionRelativeFromParticles, responsiveFont} from '../../../styles/Common'
import {motion} from 'framer-motion'

//===============================================================================================================================================================

const General = styled(motion.div)`
  padding: 100px 15% 0 15%;

  @media ${ThemeSet.media.mobile.media} {
    padding: 50px 8% 0 8%;
  }

  & > * {
    ${positionRelativeFromParticles()};
    background-color: ${ThemeSet.color.background.body};
  }
`

const Title = styled.h2`

  width: 100%;
  margin-bottom: 15px;

  color: ${ThemeSet.color.font.grey.grey90};
  font-weight: 500;
  ${responsiveFont({fsMaxPx: 22, fsMinPx: 18})};
  text-transform: capitalize;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  column-gap: 10px;

  &:after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: ${ThemeSet.color.font.grey.grey30};
  }
`

const Text = styled.p`

  color: ${ThemeSet.color.font.grey.grey70};
  letter-spacing: -0.5px;
  line-height: 1.6;
  text-align: justify;

  ${responsiveFont({fsMaxPx: 20, fsMinPx: 14})};

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`


//===============================================================================================================================================================

export const S = {
    General,
    Title,
    Text
}
