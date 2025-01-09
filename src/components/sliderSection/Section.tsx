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
    const [movies, setMovies] = React.useState([])

    const init = async () => {
      let data = movies
      const response = await fetch(`/api/movies`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            'action': 'genre',
            'value': '28'
          }
        })
      });
      const result = await response.json()
      setMovies((prevMovies) => [...prevMovies, ...Object.values(result)]);
    }
    
    React.useMemo(init,[])

    return (
        <React.Fragment>
          {
            movies?.length > 0 && <CustomSlider {...{movies}}/>
          }
        </React.Fragment>
    )
}

const CustomSlider = ({movies}) => {  
    return (
      <Box className="container-sections">
        <div style={styles.containerSlider}>
            <Typography color="white" sx={{ fontWeight: 700}} variant="h4" gutterBottom>
              Popular
            </Typography>
            <Slider {...Const.settings}>
                {movies.map((element, index) => (
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
        image={`https://image.tmdb.org/t/p/w300${element?.poster_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography sx={styles.titlePrimary} gutterBottom variant="h5" component="div">
          {element?.title}
        </Typography>
        <Typography sx={styles.dateText} variant="body2">
          {element?.release_date}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
          <Box>
              <Typography sx={styles.dateText} variant="body2">
                Rating
              </Typography>
              <CircularProgressWithLabel value={element?.vote_average}/>
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