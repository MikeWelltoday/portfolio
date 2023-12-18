import React from 'react'
import styled, {css} from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// types
type MenuType = {
    menuItemsList: string[]
}

export const MenuMobile = (props: MenuType) => {
    return (
        <StyledMenuMobile>

            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <ItemsListPopup isOpen={false}>
                {props.menuItemsList.map((item, index) =>
                    <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                )}
            </ItemsListPopup>
        </StyledMenuMobile>
    )
}

const StyledMenuMobile = styled.nav`
  display: none;
  @media ${ThemeSet.media.tablet} {
    display: block;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index: 999999999;

  //decor
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: red;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      // делаем среднюю линию прозрачной, когда менюшка активирована
      background-color: rgba(0, 0, 0, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: red;
      position: absolute;
      transform: translateY(-10px);

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
      background-color: red;
      position: absolute;
      transform: translateY(10px);

      //  наклоняем линию
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

const ItemsListPopup = styled.ul<{ isOpen: boolean }>`
  display: none;

  background-color: ${ThemeSet.colors.MobileMenuBackground};
  opacity: 0.95;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  `}
`

const ListItem = styled.li`
`

const Link = styled.a`
  font-size: 2rem;
  font-weight: 500;
`

