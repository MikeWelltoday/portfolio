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
color: ${color};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 36rem)/(103 - 36) * (${fontMaxRem} - ${fontMinRem}) + ${fontMinRem}rem);
`

//===============================================================================================================================================================

export const positionRelativeFromParticles = () => `position: relative;`

//===============================================================================================================================================================

type respFontType = {
    fsMaxPx: number
    fsMinPx: number
    scrnMaxPx?: number
    scrnMinPx?: number
}


export const responsiveFont = ({fsMaxPx, fsMinPx, scrnMaxPx, scrnMinPx}: respFontType) => `
font-size: ${responsiveFontFunction({fsMaxPx: fsMaxPx, fsMinPx: fsMinPx, scrnMaxPx: scrnMaxPx, scrnMinPx: scrnMinPx})}
`

export const responsiveFontFunction = ({fsMaxPx, fsMinPx, scrnMaxPx = 1030, scrnMinPx = 360}: respFontType) => {
    const variablePart = (fsMaxPx - fsMinPx) / (scrnMaxPx - scrnMinPx)
    const rem = parseFloat(((fsMaxPx - scrnMaxPx * variablePart) / 16).toFixed(3))
    const vw = parseFloat((100 * variablePart).toFixed(2))

    return `clamp(${fsMinPx}px, ${rem}rem + ${vw}vw, ${fsMaxPx}px)`
}


