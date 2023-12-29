import React, {useEffect, useState} from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {AnimatePresence, motion} from 'framer-motion'
import {S} from './GoTopBtn_Styles'
import {Icon} from '../../components/Icon'

//===============================================================================================================================================================

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {

        const handleScrollAndResize = () => {
            setShowBtn(window.scrollY >= 300 && window.innerWidth >= 1180)
        }

        window.addEventListener('scroll', handleScrollAndResize)
        window.addEventListener('resize', handleScrollAndResize)

        //оптимизация для установки начального значения и очистки ресурсов при размонтировании компонента.
        //Эта часть кода полезна в том случае, если вы хотите, чтобы обработчик событий выполнился сразу после монтирования компонента, и если вы хотите избежать утечек памяти, удаляя слушатели событий при размонтировании компонента. Если вы уверены, что вам это не требуется, и ваш код работает правильно, то нет необходимости добавлять эту часть.

        // Вызываем обработчик, чтобы установить начальное значение
        handleScrollAndResize()

        // Функция => Убираем слушатели событий при размонтировании компонента ( когда мы его скрываем или не отрисовываем )
        // Теперь слушатели будут добавлены при монтировании компонента и удалены при его размонтировании.
        return () => {
            window.removeEventListener('scroll', handleScrollAndResize)
            window.removeEventListener('resize', handleScrollAndResize)
        }
    }, [])

    return (
        <AnimatePresence>
            {showBtn &&
                (
                    <S.GoTopBtn onClick={() => scroll.scrollToTop()}
                                transition={{duration: 0.8}}
                                initial={{x: 200}}
                                animate={{x: 0}}
                                exit={{x: 200}}
                                key={'svg'}
                                aria-label={'gototopbutton'}
                    >
                        <Icon iconId={'icon-GoTopBtn'} width={'60'} height={'60'} viewBox={'0 0 60 60'}/>
                    </S.GoTopBtn>
                )
            }
        </AnimatePresence>
    )
}