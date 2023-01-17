import React, { useState } from 'react'
import { Typography } from '../../index'
import { Container, Content } from './styles'
import { titles } from '../../../constants/title-header'

const Index = () => {
    const [titleActive, setTitleActive] = useState<string>('Home')

    const handleChangeTitleActive = (title: string) => {
        setTitleActive(title)
    }

    return (
        <Container>
            {titles.map((el) => {
                return (
                    <Content
                        key={`navItem-${el.title}`}
                        active={el.title === titleActive}
                        onClick={() => {
                            handleChangeTitleActive(el.title)
                        }}
                    >
                        <Typography
                            variant={'h2'}
                            fontSize={'xxlarge'}
                            fontWeight={700}
                        >
                            {el.title}
                        </Typography>
                    </Content>
                )
            })}
        </Container>
    )
}

export default Index
