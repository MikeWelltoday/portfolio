import React, {useState} from 'react'
import {S} from './Menu_Styles'
import {Menu} from './Menu'
import {motion} from 'framer-motion'

//===============================================================================================================================================================

export const MenuMobile: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const onBurgerButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const onMenuItemClick = () => {
        setMenuIsOpen(false)
    }

    return (
        <S.MenuMobile>
            <motion.div
                transition={{duration: 0.4, delay: 0.2}}
                initial={{opacity: 0, scale: 1}}
                animate={{opacity: 1, scale: 1}}
            >
                <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}
                                aria-label={'open mobile-tablet menu'}>
                    <span></span>
                </S.BurgerButton>
            </motion.div>

            <S.MenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu onMenuItemClick={onMenuItemClick}/>
            </S.MenuPopup>
        </S.MenuMobile>
    )
}



