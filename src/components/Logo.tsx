import React from 'react'

// Components
import {Icon} from './Icon'
import styled from 'styled-components'

type LogoType = {
    logoLink: string
    iconId: string
    width: string
    height: string
    viewBox: string
}

export const Logo = (props: LogoType) => {
    return (
        <StyledLogo href={props.logoLink}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
  cursor: pointer;
`


