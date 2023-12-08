import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../components/FlexWrapper'

export const Slider = () => {
    return (
        <StyledSlider>

            <FlexWrapper>
                <Slide>
                    <Text>This is sample project description random things are here in description This is sample
                        project
                        lorem ipsum generator for dummy content</Text>
                    <Name>IvanIvanov</Name>
                </Slide>
            </FlexWrapper>

            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>

        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
  text-align: center;
`
const Name = styled.span`

`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background: #05ff05;
  }
`
