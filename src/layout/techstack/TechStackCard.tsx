import React from 'react'
import styled from 'styled-components'

// components
import {Icon} from '../../components/icon/Icon'

// type
type TechStackCardType = {
    iconId: string
    width: string
    height: string
    viewBox: string
    techNameTitle: string
}

export const TechStackCard = (props: TechStackCardType) => {
    return (
        <StyledTechStackCard>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <TechName>{props.techNameTitle}</TechName>
        </StyledTechStackCard>
    )
}

const StyledTechStackCard = styled.div`
  background: indianred;
  width: 200px;
`

const TechName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #CCCCCC;

  background: cornflowerblue;
`