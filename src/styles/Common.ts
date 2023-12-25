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

export const positionRelativeFromParticles = () => `position: relative;`

//===============================================================================================================================================================

type respFontType = {
    fsMaxPx: number
    fsMinPx: number
    scrnMax?: number
    scrnMin?: number
}


export const responsiveFont = ({fsMaxPx, fsMinPx, scrnMax, scrnMin}: respFontType) => `
font-size: ${responsiveFontFunction({fsMaxPx: fsMaxPx, fsMinPx: fsMinPx, scrnMax: scrnMax, scrnMin: scrnMin})}
`

export const responsiveFontFunction = ({fsMaxPx, fsMinPx, scrnMax = 1030, scrnMin = 360}: respFontType) => {
    const variablePart = (fsMaxPx - fsMinPx) / (scrnMax - scrnMin)
    const rem = parseFloat(((fsMaxPx - scrnMax * variablePart) / 16).toFixed(3))
    const vw = parseFloat((100 * variablePart).toFixed(2))

    return `clamp(${fsMinPx}px, ${rem}rem + ${vw}vw, ${fsMaxPx}px)`
}


