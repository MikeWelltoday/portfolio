import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const About = styled.section`
`
const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 30px;

  //хардкод от изменения высоты при отрисовки слайдера
  height: 290px;

  @media screen and (max-width: 600px) {
    min-height: 480px;
  }
`

const Photo = styled.img`
  margin-top: 10px;
  width: 130px;
  object-fit: cover;
  aspect-ratio: 0.75;
  object-position: center;
  transform: scaleX(-1);

  border-radius: 8%;
  border: 2px solid ${ThemeSet.color.font.yellow.yellow50};

  @media ${ThemeSet.media.tablet.media} {
    display: none;
  }
`

//===============================================================================================================================================================

export const S = {
    About,
    Main,
    Photo
}