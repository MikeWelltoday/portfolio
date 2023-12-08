import React from 'react'
import styled from 'styled-components'

export const Slider = () => {
    return (
        <StyledSlider>

            <Slide>
                <Text>This is sample project description random things are here in description This is sample project
                    lorem ipsum generator for dummy content</Text>
                <Name>IvanIvanov</Name>
            </Slide>

        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  text-align: center;
`

const Slide = styled.div``

const Text = styled.p`
  text-align: center;
`
const Name = styled.span`

`