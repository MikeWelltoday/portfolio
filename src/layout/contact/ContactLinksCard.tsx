import React from 'react'
import styled from 'styled-components'

//components
import {Logo} from '../../components/logo/Logo'

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
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
const CardTitle = styled.a`
  cursor: pointer;
`