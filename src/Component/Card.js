import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
  function PCard({item}){
    
  
  return (
  
        
    <div className='mt-6   mx-36 bg-white'>

        {
      item.map((data,i)=>(
        <div className='inline-block w-[29%] mx-5 my-10 bg-white'>
        <Link to={`/product/${data.id}`}>
        <Card className=" hover:scale-110 " key={data.id}>
        <CardHeader color="blue-gray" className="relative h-40 ">
        <img
           src={require("../Material"+ data.thumbnail)}
            alt="card-image" className='w-[100%]'
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.name}
          </Typography>
          <Typography>

            {parseInt(data.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace()}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button       
          >
            Buy Now</Button>
        </CardFooter>
        </Card>
        </Link>
        </div>
      ))}
      </div>

       
    
  )
}

export default PCard;