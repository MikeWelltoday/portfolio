import React from 'react'
import styled from 'styled-components'

import {ThemeSet} from '../styles/ThemeStyles.styled'
import {mixinFont} from '../styles/Common'

type SectionTitleType = {
    title: string
    borderColor: string
    borderHeight: string
}

type StyledSectionTitleType = {
    borderColor: string
    borderHeight: string
}

export const SectionTitle = (props: SectionTitleType) => {
    return (
        <StyledSectionTitle borderColor={props.borderColor}
                            borderHeight={props.borderHeight}>{props.title}</StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h2<StyledSectionTitleType>`

  margin-bottom: 30px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 25px;

  ${mixinFont({weight: 600, fontMinRem: 3.5, fontMaxRem: 4.8})};

  &:before, &:after {
    content: '';
    flex: 1 0 auto;
    height: ${props => props.borderHeight};
    background: ${props => props.borderColor};
  }
`