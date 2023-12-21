import React from 'react'
import styled from 'styled-components'

// styles
import {DiabloLink} from '../diabloComponents/DiabloLink'

// types
export type menuItemsListType = {
    title: string
    status: 'all' | 'landing' | 'react' | 'spa'
}


type WorksMenuType = {
    menuItemsList: Array<menuItemsListType>
    
}

export const WorksMenu = (props: WorksMenuType) => {
    return (
        <StyledWorksMenu>
            <ul>
                {props.menuItemsList.map((item, index) =>
                    <li key={index}>
                        <DiabloLink href="">{item.title}</DiabloLink>
                    </li>
                )}
            </ul>

        </StyledWorksMenu>
    )
}

const StyledWorksMenu = styled.nav`

  ul {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    max-width: 352px;
    width: 100%;
  }

  li {

  }
`

