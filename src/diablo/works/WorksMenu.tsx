import React from 'react'
import styled from 'styled-components'

// styles
import {DiabloLink} from '../diabloComponents/DiabloLink'

// types
type WorksMenuType = {
    menuItemsList: string[]
}

export const WorksMenu = (props: WorksMenuType) => {
    return (
        <StyledWorksMenu>
            <ul>
                {props.menuItemsList.map((item, index) =>
                    <li key={index}>
                        <DiabloLink href="#">{item}</DiabloLink>
                    </li>
                )}
            </ul>

        </StyledWorksMenu>
    )
}

const StyledWorksMenu = styled.nav`

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  li {
 
  }
`

