import React from 'react'
import {S} from './Menu_Styles'
import {MenuPropsTypes} from './Menu_Types'
import {Menu} from './Menu'

//===============================================================================================================================================================

export const MenuMobile: React.FC<MenuPropsTypes> = (props: MenuPropsTypes) => {
    return (
        <S.MenuMobile>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MenuPopup isOpen={false}>
                <Menu menuItemsList={props.menuItemsList}/>
            </S.MenuPopup>
        </S.MenuMobile>
    )
}
