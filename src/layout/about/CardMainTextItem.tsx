import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

type CardMainTextItemType = {
    ItemTitle: string
    ItemText: string
}

export const CardMainTextItem = (props: CardMainTextItemType) => {
    return (
        <StyledCardMainTextItem>
            <ItemTextBox>
                <ItemTitle>{props.ItemTitle}</ItemTitle>
            </ItemTextBox>
            <ItemText>{props.ItemText}</ItemText>
        </StyledCardMainTextItem>
    )
}

const StyledCardMainTextItem = styled.div`
  background: #1c4f3a;
  width: 100%;
  padding: 5px 0;

  display: flex;
  flex-flow: row nowrap;
  column-gap: 20px;
  justify-content: flex-start;
`

const ItemTextBox = styled.div`
  flex: 0 0 120px;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  align-content: stretch;
`

const ItemTitle = styled.h2`
  display: block;
  font-size: 1.8rem;
  font-weight: 500;
  opacity: ${ThemeSet.fontOpacity};

  &:after {
    margin-top: 3px;
    display: block;
    content: '';
    height: 1px;
    background-color: ${ThemeSet.colors.Font};
  }
`

const ItemText = styled.p`
  flex: 1 1 auto;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.2px;
  opacity: ${ThemeSet.fontOpacity};
  text-align: justify;
`