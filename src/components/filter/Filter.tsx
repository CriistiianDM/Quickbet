// React
import React from 'react'

// Material IU
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Styles
import { styles } from './styles'

// Components
import {formComponents} from './const'

type Props = {
    Component: React.ElementType,
    slotProps: object
}

/**
 * Filter
 */
export default () => {
    return (
        <React.Fragment>
            <Box sx={styles.containerFilter}>
                {
                    formComponents.content.map((content: Props, index) => {
                        const { Component, slotProps } = content
                        return (
                            <Component {...slotProps} key={index}/>
                        )
                    })
                }
            </Box>
        </React.Fragment>
    )
}