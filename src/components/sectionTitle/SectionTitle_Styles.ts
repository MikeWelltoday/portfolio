import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {positionRelativeFromParticles, responsiveFont} from '../../styles/Common'

//===============================================================================================================================================================

// SectionTitle =>
const SectionTitle = styled.h2`

  ${positionRelativeFromParticles()}
  background-color: ${ThemeSet.color.background.body};

  margin-bottom: 80px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 25px;


  ${responsiveFont({fsMaxPx: 42, fsMinPx: 24})};
  font-weight: 500;
  letter-spacing: 1.5px;

  &:before, &:after {
    content: '';
    flex: 1 0 auto;
    height: 1px;
    background-color: ${ThemeSet.color.font.grey.grey30};
  }
`

//===============================================================================================================================================================

export const S = {
    SectionTitle
}