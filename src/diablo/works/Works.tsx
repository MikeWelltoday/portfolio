import React, {useState} from 'react'
import styled from 'styled-components'
import {WorkList, WorkListProps} from './WorkList'
import {Container} from '../../components/Container'
import {AnimatePresence, motion} from 'framer-motion'

//===============================================================================================================================================================

// images
import firstImage from './../../assets/images/image-portfolio-1.webp'
import secondImage from './../../assets/images/image-portfolio-2.webp'
import {menuItemType, WorksMenu} from './WorksMenu'

const menuItemsList: Array<menuItemType> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'Lending Page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'Spa',
        status: 'spa'
    }]

const worksData: WorkListProps[] = [
    {
        src: firstImage,
        text: 'angularangula rangrangularagu larangulara ngularangu larangular',
        title: 'Angular',
        type: 'spa',
        id: 'spa'
    },
    {
        src: secondImage,
        text: 'angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular',
        title: 'Angular',
        type: 'react',
        id: 'react'
    },
    {
        src: secondImage,
        text: 'angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular',
        title: 'Angular',
        type: 'landing',
        id: 'landing'
    }
]

export const Works = () => {

    // статус - где сейчас тригер фильтра ( на что жмякнул пользователь )
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

    // отсортированный список | приравненный начальному значению
    let filteredWorks = worksData

    // фильтруем сортированный список по статусу
    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(item => item.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(item => item.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(item => item.type === 'spa')
    }

    //функция переотрисовки
    function changeFilterStatus(value: 'all' | 'landing' | 'react' | 'spa') {
        setCurrentFilterStatus(value)
    }


    return (
        <StyledWorks>
            <Container>
                <WorksMenu menuItemsList={menuItemsList} changeFilterStatus={changeFilterStatus}
                           currentFilterStatus={currentFilterStatus}
                />
                <WorkListsWrapper>
                    <AnimatePresence>
                        {
                            filteredWorks.map((item) =>
                                <motion.div
                                    initial={{opacity: 0, scale: 0.5}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    key={item.id}
                                    layout
                                >
                                    <WorkList title={item.title} text={item.text} src={item.src} type={item.type}
                                              key={item.id}/>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </WorkListsWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
`

const WorkListsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  row-gap: 30px;
  column-gap: 5%;

  margin-top: 40px;
`