import React from 'react'
import styled from 'styled-components'

// components
import {SectionTitle} from '../../components/SectionTitle'
import {Icon} from '../../components/icon/Icon'
import {Slider} from './Slider'
import {FlexWrapper} from '../../components/FlexWrapper'

export const Testimony = () => {
    return (
        <StyledTestemony>

            <SectionTitle title={'Testimony'} borderColor={'#EBE8E3'}/>
            <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <Icon iconId={'icon-home-mylogo'} width={'66'} height={'27'} viewBox={'0 0 66 27'}/>
                <Slider/>
            </FlexWrapper>

        </StyledTestemony>
    )
}

const StyledTestemony = styled.section`
  min-height: 800px;
  background: #89a6da;
`