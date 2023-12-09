import React from 'react'
import styled from 'styled-components'

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

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 25px;

  color: #CCCCCC;
  font-size: 48px;
  line-height: 50px;

  &:before, &:after {
    content: '';
    flex: 1 1 auto;
    height: ${props => props.borderHeight};
    background: ${props => props.borderColor};
  }
`