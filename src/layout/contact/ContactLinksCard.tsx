import React from 'react'
import styled from 'styled-components'

//components
import {Logo} from '../../components/Logo'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//types
type ContactLinksCardType = {
    logoLink: string
    iconId: string
    width: string
    height: string
    viewBox: string
    cardTitle: string
}

export const ContactLinksCard = (props: ContactLinksCardType) => {
    return (
        <StyledContactLinksCard>
            <Logo logoLink={props.logoLink} iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox}/>
            <CardTitle href={props.logoLink}>{props.cardTitle}</CardTitle>
        </StyledContactLinksCard>
    )
}

const StyledContactLinksCard = styled.div`
  width: 70px;
  height: 60px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  row-gap: 10px;

  background-color: #99839b;
`

const CardTitle = styled.a`
  background-color: #6e6e50;

  text-transform: uppercase;
  cursor: pointer;
  
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1.2px;
`