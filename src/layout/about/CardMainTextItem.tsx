import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../components/FlexWrapper'

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

  display: flex;
  flex-direction: row;
  column-gap: 25px;
`

const ItemTextBox = styled.div`
  background-color: #f1f1ea;
  min-width: 100px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-end;
  align-content: stretch;
`

const ItemTitle = styled.span`
  display: block;
  background: yellow;

  &:after {
    margin-top: 3px;
    display: block;
    content: '';
    height: 1px;
    background-color: #191919;
  }
`

const ItemText = styled.p`
  display: block;
  background: chocolate;
`