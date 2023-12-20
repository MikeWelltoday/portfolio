import React from 'react'
// styles
import {S} from './Menu_Styles'
// types
import {MenuPropsTypes} from './MenuTypes'
// components
import {Menu} from './Menu'

//===============================================================================================================================================================

export const MenuDesktop: React.FC<MenuPropsTypes> = (props: MenuPropsTypes) => {
    return (
        <S.MenuDesktop>
            <Menu menuItemsList={props.menuItemsList}/>
        </S.MenuDesktop>
    )
}

