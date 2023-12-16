import React from 'react'
import styled from 'styled-components'

export const Slider = () => {
    return (
        <StyledSlider>
            <Text>
                This is sample project description random things are here in description This is sample
                project
                lorem ipsum generator for dummy content
            </Text>
            <Name>@ivan ivanov</Name>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>

        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  max-width: 500px;
`

const Text = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 40px 0 20px 0;
`
const Name = styled.span`
  display: block;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 50px;
`
const Pagination = styled.div`
  text-align: center;

  span {
    display: inline-block;
    cursor: pointer;
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;

    transition: all 0.05s ease;

    &:active {
      transform: scale(1.2);
    }

    + span {
      margin-left: 25px;
    }

    &.active {
      background-color: #e3c10c;
      width: 50px;
    }
  }
`
