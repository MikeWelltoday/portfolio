import styled from 'styled-components'
// styles
import {mixinFont} from '../../styles/Common'

//===============================================================================================================================================================

type StyledSectionTitleType = {
    borderColor: string
    borderHeight: string
}

//===============================================================================================================================================================

// SectionTitle =>
const SectionTitle = styled.h2<StyledSectionTitleType>`

  margin-bottom: 30px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 25px;

  ${mixinFont({weight: 600, fontMinRem: 3.5, fontMaxRem: 4})};

  &:before, &:after {
    content: '';
    flex: 1 0 auto;
    height: ${props => props.borderHeight};
    background: ${props => props.borderColor};
  }
`

//===============================================================================================================================================================

export const S = {
    SectionTitle
}