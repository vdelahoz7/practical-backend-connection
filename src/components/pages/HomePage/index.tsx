import React from 'react'
import { LayoutHome } from 'src/layouts'
import { Typography } from 'src/components'

function Index() {
    return (
        <LayoutHome>
            <Typography variant={'h2'} fontSize={[0, 'xxxlarge']}>
                Home Page
            </Typography>
        </LayoutHome>
    )
}

export default Index
