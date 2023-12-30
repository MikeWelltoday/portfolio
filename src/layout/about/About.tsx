import React from 'react'
import {S} from './About_Styles'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {Container} from '../../components/Container'
import {Content} from './contect/Content'
import {Fade} from 'react-awesome-reveal'


//===============================================================================================================================================================

//image
import ImageAbout from '../../assets/images/image-about.webp'
import ImageAboutX2 from '../../assets/images/image-about-x2.webp'


export const About: React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container>
                <SectionTitle title={'About'}/>
                <Fade triggerOnce={true} direction={'left'} delay={100}>
                    <S.Main>
                        <Content/>
                        <S.Photo src={ImageAbout} alt="sry" srcSet={`${ImageAboutX2} 2x`}/>
                    </S.Main>
                </Fade>
            </Container>
        </S.About>
    )
}
