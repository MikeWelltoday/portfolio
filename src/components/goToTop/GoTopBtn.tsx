import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {animateScroll as scroll} from 'react-scroll'
import {css} from 'styled-components'

//===============================================================================================================================================================

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY >= 300 ? setShowBtn(true) : setShowBtn(false)
        })
    }, [])


    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" transform="rotate(90 30 30)" fill="url(#paint0_linear_3_385)"/>
                        <path d="M40.5 28.5L30 18L19.5 28.5" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M30 18L30 42" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_3_385" x1="-1.90735e-06" y1="-1.90735e-06" x2="57.0661"
                                            y2="-2.6715" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E2A300"/>
                                <stop offset="1" stopColor="#E29500"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </StyledGoTopBtn>
            )}
        </>
    )
}

const StyledGoTopBtn = styled.div`
  padding: 8px;
  position: fixed;
  bottom: 0;
  right: 0;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    cursor: pointer;
  }
`