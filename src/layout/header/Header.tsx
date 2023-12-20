import React from 'react'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {S} from './Header_Styles'
import {Container} from '../../components/Container'
import {MenuDesktop} from './menu/MenuDesktop'
import {MenuMobile} from './menu/MenuMobile'
//===============================================================================================================================================================

// props
const menuItemsList: string[] = ['Home', 'About', 'TechStack', 'Projects', 'Contacts']


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = ThemeSet.media.tablet.value

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <S.FlexContainer>
                    <S.HeaderLogo aria-label={'header-logo'}>.MikhailKuznetsov</S.HeaderLogo>
                    {
                        width <= breakpoint ? <MenuMobile menuItemsList={menuItemsList}/> :
                            <MenuDesktop menuItemsList={menuItemsList}/>
                    }
                </S.FlexContainer>
            </Container>
        </S.Header>
    )
}


