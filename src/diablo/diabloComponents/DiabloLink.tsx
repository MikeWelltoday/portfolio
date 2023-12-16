import styled from 'styled-components'

import {ThemeSet} from '../../styles/ThemeStyles.styled'


export const DiabloLink = styled.a`
  color: ${ThemeSet.colors.Font};
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      display: inline-block;
    }
  }

  &::before {
    content: '';
    display: none;

    position: absolute;
    z-index: -1;
    bottom: 7px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #473669;
  }
}
`