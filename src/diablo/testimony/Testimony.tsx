import React from 'react'
import styled from 'styled-components'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {Icon} from '../../components/Icon'
import {Slider} from './Slider'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'

export const Testimony = () => {
    return (
        <StyledTestemony>
            <Container>
                <SectionTitle title={'Testimony'} borderColor={'#EBE8E3'} borderHeight={'1.5px'}/>
                <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                    <Icon iconId={'icon-contact-github'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestemony>
    )
}

const StyledTestemony = styled.section`;
`