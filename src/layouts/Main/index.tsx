import React from 'react'
import {
    Container,
    HeaderNavigation,
    Header,
    LeftContainer,
    RightContainer,
    Content,
} from './styles'
import Index from 'src/components/common/HeaderNavigation'

const index: React.FunctionComponent<any> = ({ children, ...props }) => {
    return (
        <Container width={1} paddingTop={38}>
            <LeftContainer width={1 / 3.5} marginLeft={45}></LeftContainer>
            <RightContainer width={1} marginRight={45}>
                <HeaderNavigation width={1}>
                    <Index />
                </HeaderNavigation>
                <Header width={1}></Header>
                <Content>{children}</Content>
            </RightContainer>
        </Container>
    )
}

export default index
