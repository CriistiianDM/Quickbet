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

// Slider
import Slider from 'react-slick';

// Const 
import Const from './const'

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
    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: false, // Ciclo infinito
        speed: 500, // Velocidad de transición (ms)
        slidesToShow: 6, // Número de slides visibles
        slidesToScroll: 1, // Número de slides que avanza al hacer scroll
        arrows: true, // Mostrar flechas
    };

    return (
      <Box className="container-sections">
        <div style={{ width: "98%", margin: "0 auto" }}>
            <h2>React Slick Carousel</h2>
            <Slider {...settings}>
                {Const.sliders.map((element, index) => (
                    printSliders(element, index)
                ))}
            </Slider>
        </div>
      </Box>
    );
};
  
const printSliders = (element, index, shared) => {
    return (
       <MediaCard {...{element,index,shared}} />
    )
}

const MediaCard = ({element}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={element.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}