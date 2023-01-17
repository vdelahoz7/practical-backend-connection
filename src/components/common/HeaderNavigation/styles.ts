import styled from 'styled-components'
import Box from 'src/components/layout/Box'
import { colors } from 'src/theme/light/colors'

export const Container = styled(Box)`
    display: flex;
    flex-direction: row;
`
export const Content = styled(Box)<{ active: boolean }>`
    color: ${({ active }) =>
        active ? colors.secondaryText : colors.primaryText};
    margin-left: 25px;
    margin-right: 25px;
    cursor: pointer;
`
