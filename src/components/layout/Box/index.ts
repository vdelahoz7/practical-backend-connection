import { ReactNode } from 'react'
import styled from 'styled-components'
import {
    compose,
    color,
    layout,
    space,
    LayoutProps,
    ColorProps,
    SpaceProps,
} from 'styled-system'

interface IBoxProps extends ColorProps, LayoutProps, SpaceProps {
    children?: ReactNode
}

const Box = styled.div<IBoxProps>(compose(color, layout, space))

export default Box
