import {ThemeSet} from './ThemeStyles.styled'

//===============================================================================================================================================================

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fontMinRem?: number
    fontMaxRem?: number
}

export const mixinFont = ({family, weight, color, lineHeight, fontMinRem, fontMaxRem}: FontPropsType) => `
font-family: ${family || 'Poppins'};
font-weight: ${weight || 400};
color: ${color || ThemeSet.colors.Font};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 36rem)/(103 - 36) * (${fontMaxRem} - ${fontMinRem}) + ${fontMinRem}rem);
`

//===============================================================================================================================================================

type responsiveFontType = {
    fontSizeMinRem: number
    fontSizeMaxRem: number
}

export const responsiveFont = ({fontSizeMinRem, fontSizeMaxRem}: responsiveFontType) => `
font-size: calc( (100vw - 36rem)/(103 - 36) * (${fontSizeMaxRem} - ${fontSizeMinRem}) + ${fontSizeMaxRem}rem)
`

//===============================================================================================================================================================

export const positionRelativeFromParticles = () => `position: relative;`

//===============================================================================================================================================================

type respFontType = {
    PxMax: number
    PxMin: number
    Vmax?: number
    Vmin?: number
}


export const respFont = ({PxMax, PxMin, Vmax, Vmin}: respFontType) => `
font-size: ${respFontFnc({PxMax, PxMin, Vmax, Vmin})}
`

export const respFontFnc = ({PxMax, PxMin, Vmax = 1030, Vmin = 360}: respFontType) => {
    const variablePart = (PxMax - PxMin) / (Vmax - Vmin)
    const rem = parseFloat(((PxMax - Vmax * variablePart) / 16).toFixed(3))
    const vw = parseFloat((100 * variablePart).toFixed(2))

    return `clamp(${PxMin}px, ${rem}rem + ${vw}vw, ${PxMax}px)`
}


