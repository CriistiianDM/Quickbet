// React
import React from 'react'

// Componets
import Header from '../header/Header.tsx'
import Banner from '../banner/BannerMoovie.tsx'
import Filter from '../filter/Filter.tsx'

// Material IU
import Box from '@mui/material/Box';

// Styles
import { styles } from './styles'

/***
 * Layout
 */
export default ({ children, data }) => {
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