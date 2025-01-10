// React
import React from 'react'
import { ReactNode } from 'react';

// Componets
import Header from '../header/Header'
import Banner from '../banner/BannerMoovie'
import Filter from '../filter/Filter'

// Material IU
import Box from '@mui/material/Box';

// Styles
import { styles } from './styles'

type Props = {
    data: object,
    children?: ReactNode
}

/***
 * Layout
 */
export default ({ children, data }: Props) => {
    return (
        <React.Fragment>
            <Header />
            <Banner {...{data}} />
            <Box sx={styles.containerLayoutMoovie}>
                {children}
            </Box>
        </React.Fragment>
    )
}