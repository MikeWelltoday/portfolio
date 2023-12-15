import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../styles/ThemeStyles.styled'

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

  color: ${ThemeSet.colors.Font};
  font-size: 4.8rem;
  font-weight: 600;

  &:before, &:after {
    content: '';
    flex: 1 1 auto;
    height: ${props => props.borderHeight};
    background: ${props => props.borderColor};
  }
`