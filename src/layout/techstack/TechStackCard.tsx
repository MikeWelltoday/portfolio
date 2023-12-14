import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// components
import {Icon} from '../../components/Icon'

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
  width: 140px;
  height: 150px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  svg {
    flex: 0 0 auto;
    opacity: 0.9;
  }

  h3 {
    flex: 1 0 auto;
  }

  outline: 1px solid orange;
`

const TechName = styled.h3`
  font-family: "JetBrains Mono", monospace;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.5px;
  opacity: 0.7;

  color: ${ThemeSet.colors.Font};

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
`