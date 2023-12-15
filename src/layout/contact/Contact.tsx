import React from 'react'
import styled from 'styled-components'

//styles
import {ThemeSet} from '../../styles/ThemeStyles.styled'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {ContactLinksCard} from './ContactLinksCard'
import {Container} from '../../components/Container'
import {ContactForm} from './ContactFormItem'


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle title={'Contact'} borderColor={ThemeSet.colors.Font} borderHeight={'1.5px'}/>
                <ContactLinks>
                    <ContactLinksCard logoLink={'#'} iconId={'icon-contact-gmail'} width={'39'} height={'38'}
                                      viewBox={'0 0 39 38'} cardTitle={'gmail'}/>
                    <ContactLinksCard logoLink={'#'} iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                      viewBox={'0 0 38 38'} cardTitle={'telegram'}/>
                    <ContactLinksCard logoLink={'#'} iconId={'icon-contact-github'} width={'39'} height={'38'}
                                      viewBox={'0 0 39 38'} cardTitle={'github'}/>
                </ContactLinks>
                <ContactForm/>
            </Container>

        </StyledContact>
    )
}

const StyledContact = styled.section`
`

const ContactLinks = styled.div`
  background-color: #2a6450;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  column-gap: 50px;
`