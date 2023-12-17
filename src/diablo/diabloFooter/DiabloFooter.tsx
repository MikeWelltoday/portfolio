import React from 'react'
import styled from 'styled-components'
import {Icon} from '../../components/Icon'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'

export const DiabloFooter = () => {
    return (
        <StyledDiabloFooter>

            <Container>
                <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>
                    <Name>Svetlana</Name>
                    <SocialList>
                        <SocialItem>
                            <SolicalLink>
                                <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                      viewBox={'0 0 38 38'}/>
                            </SolicalLink>
                        </SocialItem>

                        <SocialItem>
                            <SolicalLink>
                                <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                      viewBox={'0 0 38 38'}/>
                            </SolicalLink>
                        </SocialItem>

                        <SocialItem>
                            <SolicalLink>
                                <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                      viewBox={'0 0 38 38'}/>
                            </SolicalLink>
                        </SocialItem>

                        <SocialItem>
                            <SolicalLink>
                                <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'}
                                      viewBox={'0 0 38 38'}/>
                            </SolicalLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledDiabloFooter>
    )
}

const StyledDiabloFooter = styled.footer`
  min-height: 500px;
`

const Name = styled.span`
  color: #FFF;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  margin: 30px 0;
`

const SocialItem = styled.li`
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const SolicalLink = styled.a`
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`

const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.50);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`