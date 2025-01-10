// React
import React from 'react'

// Componets
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Filter from '../filter/Filter'

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