import React from 'react'
import styled from 'styled-components'
import {Icon} from '../../components/Icon'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/Container'

import {motion} from 'framer-motion'

const list = [
    {
        iconId: 'icon-contact-telegram',
        width: '38',
        height: '38',
        viewBox: '0 0 38 38'
    },
    {
        iconId: 'icon-contact-telegram',
        width: '38',
        height: '38',
        viewBox: '0 0 38 38'
    },
    {
        iconId: 'icon-contact-telegram',
        width: '38',
        height: '38',
        viewBox: '0 0 38 38'
    },
    {
        iconId: 'icon-contact-telegram',
        width: '38',
        height: '38',
        viewBox: '0 0 38 38'
    }
]


export const DiabloFooter = () => {
    return (
        <StyledDiabloFooter>

            <Container>
                <FlexWrapper direction={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'}>
                    <Name>Svetlana</Name>
                    <SocialList>
                        {
                            list.map((item, index) => (
                                <SocialItem
                                    /* настройка параметров анимации */
                                    transition={{duration: 0.5, delay: 0.1 * (index + 1)}}

                                    /* ОТКУДА ЭЛЕМЕНТ БУДЕТ ПОЯВЛЯТЬСЯ */
                                    initial={{opacity: 0, scale: 0.5, y: 200, x: 300}}

                                    /* КУДА ЭЛЕМЕНТ СТАНОВИТЬСЯ */
                                    animate={{opacity: 1, scale: 1, y: 0, x: 0}}

                                    /* КУДА ЭЛЕМЕНТ БУДЕТ УХОДИТЬ ПРИ ИСЧЕЗАНИИ */
                                    exit={{opacity: 0, scale: 0.5, x: 300}}

                                    key={index}>
                                    <SolicalLink>
                                        <Icon iconId={item.iconId} width={item.width} height={item.height}
                                              viewBox={item.viewBox}/>
                                    </SolicalLink>
                                </SocialItem>
                            ))
                        }
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

const SocialItem = styled(motion.li)`
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