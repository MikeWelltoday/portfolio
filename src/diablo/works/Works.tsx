import React, {useState} from 'react'
import styled from 'styled-components'

// components
import {WorkList} from './WorkList'
import {Container} from '../../components/Container'

// images
import firstImage from './../../assets/images/image-portfolio-1.webp'
import secondImage from './../../assets/images/image-portfolio-2.webp'
import {menuItemsListType, WorksMenu} from './WorksMenu'

const worksData = [
    {
        src: firstImage,
        text: 'angularangula rangrangularagu larangulara ngularangu larangular',
        title: 'Angular',
        type: 'spa'
    },
    {
        src: secondImage,
        text: 'angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular angular angul arang rangu laragula rangularang ularangu larangular',
        title: 'Angular',
        type: 'react'
    }
]

const menuItemsList: menuItemsListType[] = [
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
                <WorksMenu menuItemsList={menuItemsList} setCurrentFilterStatus={setCurrentFilterStatus}/>
                <WorkListsWrapper>
                    {
                        filteredWorks.map((item, index) =>
                            <WorkList title={item.title} text={item.text} src={item.src} type={item.type} key={index}/>
                        )}
                </WorkListsWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section``

const WorkListsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  row-gap: 30px;
  column-gap: 5%;

  margin-top: 40px;
`