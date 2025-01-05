// React
import React from 'react'

// Componets
import Header from '../header/Header.tsx'
import Banner from '../banner/Banner.tsx'
import Filter from '../filter/Filter.tsx'

// Material IU
import Box from '@mui/material/Box';

// Styles
import { styles } from './styles'

/***
 * Layout
 */
export default ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Box sx={styles.containerLayout}>
                <Filter />
                {children}
            </Box>
        </React.Fragment>
    )
}