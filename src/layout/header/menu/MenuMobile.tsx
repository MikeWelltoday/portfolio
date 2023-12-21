import React, {useState} from 'react'
import {S} from './Menu_Styles'
import {MenuPropsTypes} from './Menu_Types'
import {Menu} from './Menu'

//===============================================================================================================================================================

export const MenuMobile: React.FC<MenuPropsTypes> = (props: MenuPropsTypes) => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const onBurgerButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MenuMobile>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}>
                <span></span>
            </S.BurgerButton>
            <S.MenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu menuItemsList={props.menuItemsList}/>
            </S.MenuPopup>
        </S.MenuMobile>
    )
}


