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

// Use Next
import { useRouter } from 'next/router';

/**
 * Banner
 */
export default ({ id }) => {
    const [movies, setMovies] = React.useState([])

    const init = async () => {
        if (id === undefined) return
        const response = await fetch(`/api/movies`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              'action': 'recomendation',
              'value': id
            }
          })
        });
        const result = await response.json()
        setMovies((prevMovies) => [...prevMovies, ...Object.values(result)]);
    }
    
    React.useMemo(init,[id])

    return (
        <React.Fragment>
          {
            movies?.length > 0 && <CustomSlider movies={movies} />
          }
        </React.Fragment>
    )
}

const CustomSlider = ({ movies }) => {  
    console.log(movies)
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
                {movies.map((element, index) => (
                    <MediaCard {...{element,index}} key={index} />
                ))}
            </Slider>
        </Box>
      </Box>
    );
};

const MediaCard = ({element}) => {
  const router = useRouter();

  const goToMovieDetails = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <Card 
      onClick={() => goToMovieDetails(element?.id)}
      sx={...{
              ...styles.containerCard,
              ...styles.containerCardRecommendation
      }}>
      <CardMedia
        sx={{ height: 223 }}
        image={`https://image.tmdb.org/t/p/w780${element?.poster_path}`}
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