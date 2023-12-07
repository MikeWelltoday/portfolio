import React from 'react'
import {Icon} from '../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
  width: 33%;
  text-align: center;
`

const SkillTitle = styled.h2``

const SkillText = styled.h3``