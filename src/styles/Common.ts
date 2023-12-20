import {ThemeSet} from './ThemeStyles.styled'

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





