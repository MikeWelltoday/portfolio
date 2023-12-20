import React from 'react'
import {S} from './Menu_Styles'
import {MenuPropsTypes} from './Menu_Types'

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

