'use-client'

// React
import React from 'react'

// Material IU
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Typography from '@mui/material/Typography';

// Const 
import Const from './const'

// Styles
import { styles } from './styles'

/**
 * Banner
 */
export default ({ data }) => {
    return (
        <React.Fragment>
            <Box 
                sx={
                    ...{
                        ...styles.containerBanner, 
                        background: `url(${data?.sectionImg})`
                    }
                }>
                    <CardMedia
                        sx={{width: '100%'}}
                        image={"/assets/banner/background.png"}
                        title="green iguana"
                    />
                <Box sx={styles.containerContentBanner}>
                    <Box>
                        <CardMedia
                            sx={{width: '305px', height: '395px'}}
                            image={data?.imgMoovie}
                            title="green iguana"
                        />
                        <Button variant="contained" endIcon={<PlayArrowIcon />}>
                            <span>Official Trailer</span>
                        </Button>
                    </Box>
                    <Box>
                        <ContentText {...{data}} />
                        <Box>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}


const ContentText = ({ data }) => {
    return (
        <Box>
        <Typography color="white" variant="h4" gutterBottom>
                {data.title}
        </Typography>
        <Box>
            <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                overline text
            </Typography>
            <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                overline text
            </Typography>
        </Box>
        <Box>
            <Typography color="white" variant="h5" gutterBottom>
                    {data.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                    {data.title}
            </Typography>
        </Box>
    </Box>
    )
}