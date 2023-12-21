import React from 'react'
import styled from 'styled-components'
import {DiabloLink} from '../diabloComponents/DiabloLink'

//===============================================================================================================================================================

export type menuItemType = {
    title: string
    status: 'all' | 'landing' | 'react' | 'spa'
}

type WorksMenuPropsType = {
    menuItemsList: Array<menuItemType>
    changeFilterStatus: (value: 'all' | 'landing' | 'react' | 'spa') => void
    currentFilterStatus: string
    // currentFilterStatus: 'all' | 'landing' | 'react' | 'spa'
}

export const WorksMenu = (props: WorksMenuPropsType) => {
    return (
        <StyledWorksMenu>
            <ul>
                {props.menuItemsList.map((item, index) =>
                    <li key={index}>
                        <DiabloLink as={'button'} active={item.status === props.currentFilterStatus}
                                    onClick={() => {
                                        props.changeFilterStatus(item.status)
                                    }}>
                            {item.title}
                        </DiabloLink>
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

