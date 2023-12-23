import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

export const DiabloButton = styled.button`
  width: 170px;
  height: 32px;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeSet.colors.Font};

  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    display: inline-block;
    content: '';
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    height: 10px;
    margin: 0 auto;
    background-color: #473669;
    transition: ${ThemeSet.animations.transition};
  }

  &:hover {
    &::before {

      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
`


