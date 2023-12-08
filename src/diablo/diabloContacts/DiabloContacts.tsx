import React from 'react'
import styled from 'styled-components'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {DiabloButton} from '../diabloComponents/DiabloButton'

export const DiabloContacts = () => {
    return (

        <StyledDiabloContacts>

            <SectionTitle title={'DiabloContacts'} borderColor={'#EBE8E3'}/>
            <StyledForm>
                <Field placeholder={'name'}/>
                <Field placeholder={'subject'}/>
                <Field as={'textarea'} placeholder={'message'}/>
                <DiabloButton type={'submit'}>Send Message</DiabloButton>
            </StyledForm>

        </StyledDiabloContacts>


    )
}

const StyledDiabloContacts = styled.section`
  min-height: 800px;
  background-color: darkorange;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`