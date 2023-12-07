import React from 'react'
import styled from 'styled-components'

type SectionTitleType = {
    title: string
    borderColor: string
}

type StyledSectionTitleType = {
    borderColor: string
}

export const SectionTitle = (props: SectionTitleType) => {
    return (
        <StyledSectionTitle borderColor={props.borderColor}>{props.title}</StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h2<StyledSectionTitleType>`
  background: #3c106b;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 25px;

  color: #CCCCCC;
  font-size: 48px;
  line-height: 50px;

  &:before {
    content: '';
    flex: 1 1 auto;
    height: 1.5px;
    background: ${props => props.borderColor};
  }

  &:after {
    content: '';
    flex: 1 1 auto;
    height: 1.5px;
    background: ${props => props.borderColor};
  }
`