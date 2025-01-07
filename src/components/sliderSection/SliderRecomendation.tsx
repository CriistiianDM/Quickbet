'use-client'

// React
import React from 'react'

// Material IU
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircularProgressWithLabel from '../shared/CirularProgress'

// Slider
import Slider from 'react-slick';

// Const 
import Const from './const'

// Styles
import { styles } from './styles.ts'

/**
 * Banner
 */
export default () => {
    return (
        <React.Fragment>
            <CustomSlider />
        </React.Fragment>
    )
}

const CustomSlider = () => {  
    return (
      <Box className="container-recomendations">
        <Box 
          sx={{
            ...styles.containerSlider,
            ...styles.containerSliderRecommendation
          }}>
            <Typography color="white" sx={{ fontWeight: 700}} variant="h4" gutterBottom>
              Recommendations
            </Typography>
            <Slider {...Const.settingsRecommendation}>
                {Const.sliders.map((element, index) => (
                    <MediaCard {...{element,index}} key={index} />
                ))}
            </Slider>
        </Box>
      </Box>
    );
};

const MediaCard = ({element}) => {
  return (
    <Card 
      sx={...{
              ...styles.containerCard,
              ...styles.containerCardRecommendation
      }}>
      <CardMedia
        sx={{ height: 223 }}
        image={element.img}
        title="green iguana"
      />
      <CardContent sx={styles.contentCard}>
        <Typography 
          sx={{
            ...styles.titlePrimary,
            ...styles.titlePrimaryContent
          }} 
          gutterBottom 
          variant="h5" component="div">
          {element.title}
        </Typography>
      </CardContent>
    </Card>
  );
}