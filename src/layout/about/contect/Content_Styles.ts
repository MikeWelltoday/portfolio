import styled, {css} from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'
import {positionRelativeFromParticles, responsiveFont} from '../../../styles/Common'

//===============================================================================================================================================================

const Content = styled.div`

  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
  }
`

const Menu = styled.nav`
  position: relative;
  min-width: 200px;
  margin-right: 20px;

  &:before {
    display: block;
    content: '';
    position: absolute;
    z-index: 1;
    background-color: ${ThemeSet.color.font.grey.grey50};
    left: 1.9px;
    top: 0;
    width: 1px;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    margin-right: 0;
  }
`

const MenuDecor = styled.div<{ decorPosition: string }>`
  position: absolute;
  z-index: 1;
  background-color: ${ThemeSet.color.font.yellow.yellow80};
  border-radius: 2px;
  height: 25%;
  left: 0;
  width: 4px;

  transition: 0.4s ease;
  top: ${props => props.decorPosition};
`

const MenuList = styled.ul`
`

const MenuItem = styled.li<{ active: boolean }>`
  ${positionRelativeFromParticles()};
  background-color: ${ThemeSet.color.background.body};

  display: block;
  padding: 12px 20px 12px 20px;
  cursor: pointer;

  font-size: 16px;
  text-transform: capitalize;
  color: ${ThemeSet.color.font.grey.grey90};

  &:hover {
    color: ${ThemeSet.color.font.yellow.yellow50};
    background-color: rgba(42, 42, 42, 0.3);
  }

  ${props => props.active && css<{ active: boolean }>`
    color: ${ThemeSet.color.font.yellow.yellow80};
  `};

  @media screen and (max-width: 600px) {
    padding: 12px 0;
  }
`

const TextBox = styled.div`
  padding: 0 20px;
  min-width: 330px;
  max-width: 400px;
`

const TextAnimationBox = styled.div`
  width: 100%;
`

const Text = styled.p`
  ${positionRelativeFromParticles()}
  background-color: ${ThemeSet.color.background.body};

  color: ${ThemeSet.color.font.grey.grey70};
  letter-spacing: -0.5px;
  line-height: 1.6;
  text-align: justify;
  ${responsiveFont({fsMaxPx: 18, fsMinPx: 16})};

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  position: relative;

  &:before {
    position: absolute;
    left: -15px;
    top: 4px;

    display: inline;
    content: '●';
    font-size: 10px;
  }
`

//===============================================================================================================================================================

export const S = {
    Content,
    Menu,
    MenuDecor,
    MenuList,
    MenuItem,
    TextBox,
    TextAnimationBox,
    Text
}