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

// Use Next
import { useRouter } from 'next/router';

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
      let data = {}
      Const.categoryList.map(async (section, index) => {
        const response = await fetch(`/api/movies`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              'action': section?.action,
              'value': section?.value
            }
          })
        });
        const result = await response.json()
        data[section.title] = Object.values(result)
        setMovies((prevMovies) => [...prevMovies, data]);
      })
    }
    
    React.useMemo(init,[])

    return (
        <React.Fragment>
          {
            movies?.length >= 4 && <CustomSlider {...{movies}}/>
          }
        </React.Fragment>
    )
}

/**
 * Sliders Sections
 */
const CustomSlider = ({movies}) => {
    return (
      <Box sx={styles.sliderContainerPrimary}>
        {
          movies.map((section, index) => {
            return (
              <Box className="container-sections" key={index}>
                <div style={styles.containerSlider}>
                    <Typography color="white" sx={{ fontWeight: 700}} variant="h4" gutterBottom>
                      {Object.keys(movies[index])[index]}
                    </Typography>
                    <Slider {...Const.settings}>
                        {(Object.values(movies[index])[index]).map((element, index) => (
                            <MediaCard {...{element,index}} key={index} />
                        ))}
                    </Slider>
                </div>
            </Box>
            )
          })
        }
      </Box>
  )
};

/***
 * Card Slider
 */
const MediaCard = ({element}) => {
  const router = useRouter();

  const goToMovieDetails = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <Card sx={styles.containerCard} onClick={() => goToMovieDetails(element?.id)}>
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
              <CircularProgressWithLabel value={element?.vote_average * 10}/>
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