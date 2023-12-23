import styled, {css} from 'styled-components'

import {ThemeSet} from '../../styles/ThemeStyles.styled'


export const DiabloLink = styled.a<{ active?: boolean }>`
  color: ${ThemeSet.colors.Font};
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;

    position: absolute;
    z-index: -1;
    bottom: 7px;
    left: 0;
    right: 0;
    height: 0;
    background-color: #473669;

    transition: ${ThemeSet.animations.transition};

    ${props => props.active === true && css<{ active?: boolean }>`
      height: 10px;
    `}
  }

  &:hover {
    &::before {
      height: 10px;
      background-color: orange;
    }
  }


}
`