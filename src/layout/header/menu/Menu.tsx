import React from 'react'
import {S} from './Menu_Styles'

//===============================================================================================================================================================

const menuItemsList: Array<{ title: string, href: string }> = [
    {
        title: 'home',
        href: 'home'
    },
    {
        title: 'about',
        href: 'about'
    },
    {
        title: 'techStack',
        href: 'techStack'
    },
    {
        title: 'projects',
        href: 'projects'
    },
    {
        title: 'contact',
        href: 'contact'
    }
]

type MenuType = {
    onMenuItemClick?: () => void
}

export const Menu: React.FC<MenuType> = (props: MenuType) => {
    return (
        <S.ItemsList>
            {menuItemsList.map((item, index) =>
                <S.ListItem
                    key={index}
                    transition={{duration: 0.4, delay: 0.15 * (index + 1)}}
                    initial={{opacity: 0, scale: 1, x: 0, y: -15}}
                    animate={{opacity: 1, scale: 1, x: 0, y: 0}}
                >
                    <S.NavLink
                        // ссылка на тег
                        to={item.href}
                        // добавление активного класса !!! когда скрол доходит но якоря-ссылки
                        activeClass="active"
                        // добавление активного класса при прокрутке
                        spy={true}
                        // прокручивает на "x" пикселей от начала тега
                        // offset={10} => начало тега | offset={90} => блиде к середине
                        offset={-66}
                        //гладка прокрутка
                        smooth={true}
                        // длительность прокрутки
                        duration={400}
                        //задержка перед прокруткорй
                        delay={150}
                        //игнорировать отключение анимаций
                        ignoreCancelEvents={false}

                        onClick={() => {
                            if (props.onMenuItemClick) {
                                props.onMenuItemClick()
                            }
                        }}

                    >{item.title}</S.NavLink>
                </S.ListItem>
            )}
        </S.ItemsList>
    )
}

