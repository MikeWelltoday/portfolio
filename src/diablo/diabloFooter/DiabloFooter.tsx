import React from 'react'
import styled from 'styled-components'
import {Icon} from '../../components/icon/Icon'
import {FlexWrapper} from '../../components/FlexWrapper'

export const DiabloFooter = () => {
    return (
        <StyledDiabloFooter>

            <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>
                <Name>Svetlana</Name>
                <SocialList>

                    <SocialItem>
                        <SolicalLink>
                            <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'} viewBox={'38'}/>
                        </SolicalLink>
                    </SocialItem>

                    <SocialItem>
                        <SolicalLink>
                            <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'} viewBox={'38'}/>
                        </SolicalLink>
                    </SocialItem>

                    <SocialItem>
                        <SolicalLink>
                            <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'} viewBox={'38'}/>
                        </SolicalLink>
                    </SocialItem>

                    <SocialItem>
                        <SolicalLink>
                            <Icon iconId={'icon-contact-telegram'} width={'38'} height={'38'} viewBox={'38'}/>
                        </SolicalLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>


        </StyledDiabloFooter>
    )
}

const StyledDiabloFooter = styled.footer`
  min-height: 500px;
  background-color: #942424;
`

const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
`

const SocialItem = styled.li`

`

const SolicalLink = styled.a`
  cursor: pointer;
`

const Copyright = styled.small`
  color: #fff;
`