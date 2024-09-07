import React from 'react'
import { Carousel ,Typography, Button } from "@material-tailwind/react";
const Banner = () => {
  return (
   
    <Carousel transition={{ duration: 1 }} className="rounded-xl ">
      <div className="relative h-full w-[80%]">
        <img
           alt="image 1" className="h-full w-full object-cover ml-44"
          src={require('../Material/Banner/banner-1.jpg')}
        />

      </div>
      <div className="relative h-full w-[80%]">
        <img
           alt="image 1" className="h-full w-full object-cover ml-44"
          src={require('../Material/Banner/banner-2.jpg')}
        />

      </div>
      <div className="relative h-full w-[80%]">
        <img
           alt="image 1" className="h-full w-full object-cover ml-44"
          src={require('../Material/Banner/banner-3.jpg')}
        />

      </div>
    </Carousel>
  )
}

export default Banner