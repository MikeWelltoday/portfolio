import React, {useState} from 'react'
import {S} from './Menu_Styles'
import {Menu} from './Menu'

//===============================================================================================================================================================

export const MenuMobile: React.FC = () => {

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
                <Menu/>
            </S.MenuPopup>
        </S.MenuMobile>
    )
}


