/* eslint-disable prettier/prettier */
import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

// images
import react from './react.jpg'
import angular from './angular.jpg'
import vue from './vue.jpg'

// const style = {
//   height: "50px"
// }

const Carousel = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={react} alt="react" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={angular} alt="angular" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={vue} alt="vue" />
      </CCarouselItem>
    </CCarousel>
  )
}

export default Carousel
