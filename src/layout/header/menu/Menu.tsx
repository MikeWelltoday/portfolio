import React from 'react'
// styles
import {S} from './Menu_Styles'
// types
import {MenuPropsTypes} from './MenuTypes'

//===============================================================================================================================================================

export const Menu: React.FC<MenuPropsTypes> = (props: MenuPropsTypes) => {
    return (
        <S.ItemsList>
            {props.menuItemsList.map((item, index) =>
                <S.ListItem key={index}>
                    <S.Link href="#">{item}</S.Link>
                </S.ListItem>
            )}
        </S.ItemsList>
    )
}

