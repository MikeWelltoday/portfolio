import React from 'react'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {animateScroll as scroll} from 'react-scroll'
import {S} from './Header_Styles'
import {Container} from '../../components/Container'
import {MenuDesktop} from './menu/MenuDesktop'
import {MenuMobile} from './menu/MenuMobile'
import {Icon} from '../../components/Icon'

//===============================================================================================================================================================

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
                    <S.HeaderLogo aria-label={'header-logo'} onClick={() => scroll.scrollToTop()}>
                        <Icon iconId={'icon-header-logo'} width={'199'} height={'17'} viewBox={'0 0 199 17'}/>
                    </S.HeaderLogo>
                    {
                        width <= breakpoint ? <MenuMobile/> : <MenuDesktop/>
                    }
                </S.FlexContainer>
            </Container>
        </S.Header>
    )
}


