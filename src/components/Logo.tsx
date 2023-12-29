import React from 'react'
import {Icon} from './Icon'

//===============================================================================================================================================================

type LogoPropsType = {
    logoLink: string
    iconId: string
    width: string
    height: string
    viewBox: string
    description?: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <a href={props.logoLink} target={'_blank'} aria-label={`link to the ${props.description}`}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </a>
    )
}


