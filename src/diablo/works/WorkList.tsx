import React from 'react'
import styled from 'styled-components'

type WorkListProps = {
    title: string
    text: string
    src: string
}

export const WorkList = (props: WorkListProps) => {
    return (
        <StyledWorkList>
            <Image src={props.src} alt={'sry'}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWorkList>
    )
}

const StyledWorkList = styled.div`
  background: yellow;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p``

const Link = styled.a``