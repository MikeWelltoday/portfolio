import React from 'react'
import ReactDOM from 'react-dom'
import {S} from './About_Styles'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {Container} from '../../components/Container'

//===============================================================================================================================================================

//image
import ImageAbout from '../../assets/images/image-about.webp'

export const About: React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container>
                <SectionTitle title={'About'}/>
            </Container>
        </S.About>
    )
}
