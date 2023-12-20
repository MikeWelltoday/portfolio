import React from 'react'
import {S} from './Menu_Styles'
import {MenuPropsTypes} from './Menu_Types'
import {Menu} from './Menu'

//===============================================================================================================================================================

export const MenuDesktop: React.FC<MenuPropsTypes> = (props: MenuPropsTypes) => {
    return (
        <S.MenuDesktop>
            <Menu menuItemsList={props.menuItemsList}/>
        </S.MenuDesktop>
    )
}

