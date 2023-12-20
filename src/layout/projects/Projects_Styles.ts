import styled from 'styled-components'

//===============================================================================================================================================================

const Projects = styled.section`
`

const ProjectsCardBox = styled.div`
  max-width: 1000px;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  row-gap: 80px;
  column-gap: 5%;
`

//===============================================================================================================================================================

export const S = {
    Projects,
    ProjectsCardBox
}