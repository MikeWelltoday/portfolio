import React from 'react'
import {S} from './Contact_Styles'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {ContactLinksCard} from './contactLinksCard/ContactLinksCard'
import {Container} from '../../components/Container'
import {ContactForm} from './contactFormItem/ContactFormItem'
import {ContactLinksCardPropsType} from './contactLinksCard/ContactLinksCard'
import {Reveal} from 'react-awesome-reveal'


//===============================================================================================================================================================


const contactLinksCardData: Array<ContactLinksCardPropsType> = [
    {
        logoLink: 'https://mailto:mk.mikhail.k@gmail.com',
        iconId: 'icon-contact-gmail',
        width: '39',
        height: '38',
        viewBox: '0 0 39 38',
        cardTitle: 'Почта'
    }, {
        logoLink: 'https://t.me/MkKuzV',
        iconId: 'icon-contact-telegram',
        width: '38',
        height: '38',
        viewBox: '0 0 38 38',
        cardTitle: 'Телеграм'
    }, {
        logoLink: 'https://github.com/MikeWelltoday',
        iconId: 'icon-contact-github',
        width: '39',
        height: '38',
        viewBox: '0 0 39 38',
        cardTitle: 'github'
    }
]

export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle title={'Контакты'}/>
                <S.ContactLinks>
                    <Reveal cascade={true} damping={0.15} triggerOnce={true}>
                        {contactLinksCardData.map((item, index) =>
                            <ContactLinksCard logoLink={item.logoLink} iconId={item.iconId} width={item.width}
                                              height={item.height}
                                              viewBox={item.viewBox} cardTitle={item.cardTitle} key={index}
                            />
                        )}
                    </Reveal>
                </S.ContactLinks>
                <ContactForm/>
            </Container>

        </S.Contact>
    )
}