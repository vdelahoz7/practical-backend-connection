import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import { ReactNode } from 'react'

interface ITextProps extends TypographyProps {
    children?: ReactNode
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'body'
        | 'body2'
        | 'body3'
}

const Typography = styled.span<ITextProps>(typography)

export default Typography
