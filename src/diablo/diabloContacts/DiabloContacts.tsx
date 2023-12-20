import React from 'react'
import styled from 'styled-components'

// components
import {SectionTitle} from '../../components/sectionTitle/SectionTitle'
import {DiabloButton} from '../diabloComponents/DiabloButton'
import {Container} from '../../components/Container'

export const DiabloContacts = () => {
    return (

        <StyledDiabloContacts>

            <Container>
                <SectionTitle title={'DiabloContacts'} borderColor={'#EBE8E3'} borderHeight={'1.5px'}/>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field as={'textarea'} placeholder={'message'}/>
                    <DiabloButton type={'submit'}>Send Message</DiabloButton>
                </StyledForm>
            </Container>


        </StyledDiabloContacts>


    )
}

const StyledDiabloContacts = styled.section`
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
`

const Field = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #4A4A4A;
  background-color: #252527;
  padding: 7px 15px;
  color: #fff;

  font-family: 'Poppins', sans-serif;

  &::placeholder {
    color: #495057;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
  }

  & + & + & {
    min-height: 155px;
    height: 100%;
    resize: none;
  }

  &:focus-visible {
    outline: 1px solid orange;
  }
`