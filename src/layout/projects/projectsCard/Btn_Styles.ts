import styled from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'


export const Btn = styled.a`
    background-color: ${ThemeSet.color.background.button};
    background: ${ThemeSet.color.background.button.buttonGradient};
    box-shadow: 0 0 5px ${ThemeSet.color.button.shadow}, 0 0 20px ${ThemeSet.color.button.shadow};
    text-align: center;
    height: 35px;
    border-radius: 12px;

    line-height: 1.2;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${ThemeSet.color.background.body};

    transition: all 0.2s ease;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 11px;

    &:hover {
        box-shadow: 0 0 5px ${ThemeSet.color.button.shadow},
        0 0 20px ${ThemeSet.color.button.shadow},
        0 0 25px ${ThemeSet.color.button.shadow};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.96);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${ThemeSet.color.font.grey.grey100};
    }
`