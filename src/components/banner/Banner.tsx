'use-client'

// React
import React from 'react'

// Material IU
import Box from '@mui/material/Box';

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
    return (
      <Box className="container-slider">
        <Slider {...Const.settings}>
            {Const.sliders.map((element, index) => (
                printSliders(element, index)
            ))}
        </Slider>
      </Box>
    );
};
  
const printSliders = (element, index, shared) => {
    return (
        <Box key={index} className="slider-content">
            <Box>
                <img src={element.img} alt={`slider-${index}`} />
            </Box>
            <Box className="content">
                <p>{element.category}</p>
                <p>{element.name}</p>
                <p>$ {element.price}</p>
            </Box>
            <Box>
                <img src="/assets/banner/background.png" alt={`slider-bg-${index}`} />
            </Box>
        </Box>
    )
}