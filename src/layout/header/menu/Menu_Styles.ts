import styled, {css} from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'
import {Link} from 'react-scroll'

//===============================================================================================================================================================

const MenuDesktop = styled.nav``

//===============================================================================================================================================================

const MenuMobile = styled.nav``

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -82px;
  right: -82px;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  z-index: 999999999;

  //decor
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${ThemeSet.colors.Font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    border-radius: 1px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      // делаем среднюю линию прозрачной, когда менюшка активирована
      background-color: rgba(0, 0, 0, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${ThemeSet.colors.Font};
      position: absolute;
      transform: translateY(-10px);
      border-radius: 1px;

      //animation
      transition: ${ThemeSet.animations.transition};

      //  наклоняем линию
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${ThemeSet.colors.Font};
      position: absolute;
      transform: translateY(10px);
      border-radius: 1px;

      //animation
      transition: ${ThemeSet.animations.transition};

      //  наклоняем линию
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

const MenuPopup = styled.div <{ isOpen: boolean }>`
  display: block;

  background-color: ${ThemeSet.colors.MobileMenuBackground};
  opacity: 0.95;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;

  ul {
    padding-top: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: 0.4s ease-in-out;
  }

  //animation
  transform: translateY(-100%);
  transition: 0.6s ease-in-out 0.2s;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

    & ul {
      transition: 0.4s ease-in-out 0.6s;
      gap: 35px;
    }
  `}
`

//===============================================================================================================================================================

const ItemsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
`

const ListItem = styled.li`
`

const NavLink = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;

  &.active {
    color: yellow;
  }
`

//===============================================================================================================================================================

export const S = {

    //MenuDesktop
    MenuDesktop,

    // MenuMobile
    MenuMobile,
    BurgerButton,
    MenuPopup,

    // Menu
    ItemsList,
    ListItem,
    NavLink

}