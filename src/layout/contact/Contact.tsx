import React from 'react'
import {S} from './Contact_Styles'
import {ThemeSet} from '../../styles/ThemeStyles.styled'
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {ContactLinksCard} from './contactLinksCard/ContactLinksCard'
import {Container} from '../../components/Container'
import {ContactForm} from './contactFormItem/ContactFormItem'
import {ContactLinksCardPropsType} from './contactLinksCard/ContactLinksCard'


//===============================================================================================================================================================


const contactLinksCardData: Array<ContactLinksCardPropsType> = [
    {
        logoLink: '#',
        iconId: 'icon-contact-gmail',
        width: '39',
        height: '38',
        viewBox: '0 0 39 38',
        cardTitle: 'gmail'
    }, {
        logoLink: '#',
        iconId: 'icon-contact-telegram',
        width: '38',
        height: '38',
        viewBox: '0 0 38 38',
        cardTitle: 'telegram'
    }, {
        logoLink: '#',
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
                <SectionTitle title={'Contact'}/>
                <S.ContactLinks>
                    {contactLinksCardData.map((item, index) =>
                        <ContactLinksCard logoLink={item.logoLink} iconId={item.iconId} width={item.width}
                                          height={item.height}
                                          viewBox={item.viewBox} cardTitle={item.cardTitle} key={index}/>
                    )}
                </S.ContactLinks>
                <ContactForm/>
            </Container>

        </S.Contact>
    )
}