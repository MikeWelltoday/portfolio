import styled from 'styled-components'

// type
type FlexWrapper = {
    direction?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
}

export const FlexWrapper = styled.div<FlexWrapper>`
  display: flex;

  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`




