import React from 'react'
import {S} from './About_Styles'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {Container} from '../../components/Container'
import {Content} from './contect/Content'
import {Fade} from 'react-awesome-reveal'


//===============================================================================================================================================================

//image
import ImageAbout from '../../assets/images/image-about.webp'


export const About: React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container>
                <SectionTitle title={'Навыки'}/>
                <Fade triggerOnce={true} direction={'left'} delay={100}>
                    <S.Main>
                        <Content/>
                        <S.Photo src={ImageAbout} alt="sry"/>
                    </S.Main>
                </Fade>
            </Container>
        </S.About>
    )
}
