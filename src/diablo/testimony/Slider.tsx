import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'
import './slider.css'

//===============================================================================================================================================================

const Slide = (props: { text: string, name: string }) => {
    return (
        <SliderBox>
            <Text>{props.text}</Text>
            <Name>@{props.name}</Name>
        </SliderBox>
    )
}

const items = [
    <Slide text={'This is sample project description random things are here in description This is sample project'}
           name={'ivan ivanov'}/>,
    <Slide text={'This is sample project description random things are here in description This is sample project'}
           name={'ivan ivanov'}/>,
    <Slide text={'This is sample project description random things are here in description This is sample project'}
           name={'ivan ivanov'}/>
]

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
)

const StyledSlider = styled.div`
  max-width: 500px;
  width: 100%;
`

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 20px 0;
`
const Name = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 30px;
`
const SliderBox = styled.div`
  width: 100%;
`