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
      <Box className="container-sections">
        <div style={styles.containerSlider}>
            <Typography color="white" sx={{ fontWeight: 700}} variant="h4" gutterBottom>
              Popular
            </Typography>
            <Slider {...Const.settings}>
                {Const.sliders.map((element, index) => (
                    <MediaCard {...{element,index}} key={index} />
                ))}
            </Slider>
        </div>
      </Box>
    );
};

const MediaCard = ({element}) => {
  return (
    <Card sx={styles.containerCard}>
      <CardMedia
        sx={{ height: 223 }}
        image={element.img}
        title="green iguana"
      />
      <CardContent>
        <Typography sx={styles.titlePrimary} gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography sx={styles.dateText} variant="body2">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
          <Box>
              <Typography sx={styles.dateText} variant="body2">
                Rating
              </Typography>
              <CircularProgressWithLabel value='90'/>
          </Box>
          <Box>
              <Typography sx={styles.dateText} variant="body2">
                Favorites
              </Typography>
              <IconButton sx={{ color: 'white', fontSize: '20px'}} aria-label="delete" size="large">
                <FavoriteIcon />
              </IconButton>
          </Box>
      </CardActions>
    </Card>
  );
}