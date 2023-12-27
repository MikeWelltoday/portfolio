import styled from 'styled-components'
import {ThemeSet} from '../../../styles/ThemeStyles.styled'
import {ButtonFrame} from '../../../components/ButtonFrame'

//===============================================================================================================================================================

const ProjectsCard = styled.div`
  width: 330px;
  height: 600px;
  border-radius: 20px;
  padding: 0 15px 25px 15px;
  background: ${ThemeSet.color.background.card.card};
  background-color: ${ThemeSet.color.background.card.cardGradient};

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  row-gap: 10px;

  transition: ${ThemeSet.animations.transition};

  &:hover {
    transform: scale(1.01);
    outline: 2.5px solid ${ThemeSet.color.font.yellow.yellow70};
  }

  @media ${ThemeSet.media.tablet.media} {
    &:hover {
      transform: none;
      outline: unset;
    }
  }

`

const CardImageBox = styled.div`
  width: 100%;
  height: 260px;
  position: relative;

  ${ButtonFrame} {
    display: none;
    width: 150px;
    position: absolute;
    top: 43.26923076923%;
    left: 23.2727272727%;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    margin: 0 -15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    //animation
    opacity: 0;
    transition: ${ThemeSet.animations.transition};
  }

  &:hover {
    &::before {
      //animation
      opacity: 1;
    }

    ${ButtonFrame} {
      display: block;
    }
  }

  @media ${ThemeSet.media.tablet.media} {
    &::before {
      opacity: 1;
    }

    ${ButtonFrame} {
      display: block;
    }
  }

`

const CardImage = styled.img`
  margin-left: -15px;
  width: 330px;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const CardTitle = styled.h3`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 1.2px;

`

const CardDescription = styled.p`
  flex-grow: 1;
  text-align: justify;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.4;
  color: ${ThemeSet.color.font.grey.grey70};
`

const CardTechStack = styled.h2`
  font: 300 1.5rem/1.2 "JetBrains Mono", monospace;
  opacity: ${ThemeSet.fontOpacity};

  span {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.2;
    margin-right: 10px;
  }
`

const CardDecor = styled.div`
  margin: 5px -15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 35px;


  &:before, &:after {
    background-color: ${ThemeSet.colors.BackgroundMain};
    display: block;
    content: '';
    height: 4px;
    flex: 1 1 auto;
  }
`

const CardProjectsLink = styled.a`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;

  color: ${ThemeSet.color.font.grey.grey100};

  &:hover {
    color: ${ThemeSet.color.font.yellow.yellow100};
    text-decoration: underline;
  }
`

//===============================================================================================================================================================

export const S = {
    ProjectsCard,
    CardImageBox,
    CardImage,
    CardTitle,
    CardDescription,
    CardTechStack,
    CardDecor,
    CardProjectsLink
}