'use-client'

// React
import React from 'react'

// Material IU
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Typography from '@mui/material/Typography';
import CircularProgressWithLabel from '../shared/CirularProgress'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Components
import Recomendation from '../sliderSection/SliderRecomendation'

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
                            sx={styles.cardMediaImg}
                            image={data?.imgMoovie}
                            title="green iguana"
                        />
                        <Button variant="contained" endIcon={<PlayArrowIcon />}>
                            <span>Official Trailer</span>
                        </Button>
                    </Box>
                    <Box>
                        <ContentText {...{data}} />
                        <ContentRate {...{data}} />
                        <ContentLabels {...{data}} />
                    </Box>
                </Box>
            </Box>
            <Recomendation />
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
                    {data.dateMoovie}
                </Typography>
                <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                    {data.timeMoovie}
                </Typography>
            </Box>
            <Box>
                <Typography color="white" variant="h5" gutterBottom>
                    Overview:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {data.overview}
                </Typography>
            </Box>
        </Box>
    )
}

const ContentRate = ({ data }) => {
    return (
        <Box sx={styles.containerRate}>
             <Box>
                <CircularProgressWithLabel sx={styles.circular} value={'97'} />
                <Typography color="white" variant="h5" gutterBottom>
                    Users
                    Score
                </Typography>
             </Box>
             <IconButton sx={{ color: 'white', fontSize: '20px'}} aria-label="delete" size="large">
                <FavoriteIcon />
             </IconButton>             
        </Box>
    )
}

const ContentLabels = ({ data }) => {
    return (
        <Box sx={styles.containerActions}>
            {
                data.actions.length > 0 && 
                data.actions.map((content,index) => (
                    <Box key={index}>{content}</Box>
                ))
            }
        </Box>
    )
}