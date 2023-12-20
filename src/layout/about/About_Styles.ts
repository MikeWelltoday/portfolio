import styled from 'styled-components'
import {ThemeSet} from '../../styles/ThemeStyles.styled'

//===============================================================================================================================================================

const About = styled.section`
`

const Card = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 15px 5% 50px 5%;
  border-radius: 29px;

  background-color: ${ThemeSet.colors.BackgroundCard};
  background: ${ThemeSet.colors.BackgroundCardGradient};
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
`

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  //padding: 0 5%;

  background-color: rgba(255, 20, 147, 0.21);
`

const CardPersonBox = styled.div`
  flex: 0 0 20%;
`

const PersonPhoto = styled.img`
  width: 200px;
  height: 285px;
  object-fit: contain;
`

const CardMainText = styled.div`
  flex: 0 1 600px;
  background: #aa50e8;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

//===============================================================================================================================================================

export const S = {
    About,
    Card,
    CardBox,
    CardPersonBox,
    PersonPhoto,
    CardMainText
}