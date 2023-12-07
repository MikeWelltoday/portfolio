import React from 'react'

// импортируем icon-svg-sprite
import iconsSprite from '../../assets/icons/iconsSprite.svg'
import styled from 'styled-components'

// types
type IconPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '50px'} height={props.height || '50px'} viewBox={props.width || '0 0 50 50'}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}