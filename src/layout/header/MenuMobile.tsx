import React from 'react'
import styled from 'styled-components'

// styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// types
type MenuType = {
    menuItemsList: string[]
}

export const MenuMobile = (props: MenuType) => {
    return (
        <StyledMenuMobile>

            <BurgerButton>
                <span></span>
            </BurgerButton>

            <ItemsListPopup>
                {props.menuItemsList.map((item, index) =>
                    <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                )}
            </ItemsListPopup>
        </StyledMenuMobile>
    )
}

const StyledMenuMobile = styled.div`
`

const BurgerButton = styled.button`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: hotpink;

  span {
    position: absolute;
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${ThemeSet.colors.ButtonBackground};
    left: 40px;
    bottom: 50px;

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${ThemeSet.colors.ButtonBackground};
      position: absolute;
      transform: translateY(-10px);
    }

    &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${ThemeSet.colors.ButtonBackground};
      position: absolute;
      transform: translateY(10px);
    }
  }
`

const ItemsListPopup = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 25px;

  background-color: ${ThemeSet.colors.MobileMenuBackground};
  opacity: 0.9;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
`

const ListItem = styled.li`
`

const Link = styled.a`
  font-size: 2rem;
  font-weight: 500;
`

