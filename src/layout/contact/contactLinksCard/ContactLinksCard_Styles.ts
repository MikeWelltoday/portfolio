import styled from 'styled-components'

//===============================================================================================================================================================

const ContactLinksCard = styled.div`
  width: 70px;
  height: 60px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  row-gap: 10px;

  background-color: #99839b;
`

const CardTitle = styled.a`
  background-color: #6e6e50;

  text-transform: uppercase;
  cursor: pointer;

  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1.2px;
`

//===============================================================================================================================================================

export const S = {
    ContactLinksCard,
    CardTitle
}