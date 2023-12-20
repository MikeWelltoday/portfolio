import styled from 'styled-components'
import {ThemeSet} from '../styles/ThemeStyles.styled'

//===============================================================================================================================================================

export const ButtonFrame = styled.button`
  background: ${ThemeSet.colors.ButtonBackground};
  box-shadow: 0 0 5px ${ThemeSet.colors.ButtonShadow}, 0 0 20px ${ThemeSet.colors.ButtonShadow};
  text-align: center;
  width: 100%;
  height: 35px;
  border-radius: 12px;

  line-height: 35px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 5px ${ThemeSet.colors.ButtonShadow},
    0 0 20px ${ThemeSet.colors.ButtonShadow},
    0 0 25px ${ThemeSet.colors.ButtonShadow};
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${ThemeSet.colors.Font};
  }
`


