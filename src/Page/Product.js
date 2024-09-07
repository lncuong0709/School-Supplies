import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PCard from '../Component/Card';
import Breadcrumb from '../Component/Breadcrumb';
import ButtonShop from '../Component/ButtonShop';

const Product = () => {
  const[sanpham,setsanpham] = useState([])

  const[filterSanPham,setFilterSanPham] = useState([])

  //find sanpham in table sanpham va gan newItem vao bien tam FilterSanPham
  const filterItem = (curcat) => {
    const newItem = sanpham.filter((newVal) => 
     newVal.category_id === curcat
        	// comparing category for displaying data

    );
     setFilterSanPham(newItem)
  };

  //fetch data FilterSanPham from productsIdOne
  useEffect(()=>{
    const fetchSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/products');
      setFilterSanPham(data);
    } ;
    fetchSanpham();
  },[]);
 //fetch data FilterSanPham from products
  useEffect(()=>{
    const fetchSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/products');
      setsanpham(data);
    } ;
    fetchSanpham();
  },[]);

  const[loaisanpham,setLoaisanpham] = useState([])
   //fetch data FilterSanPham from categories
  useEffect(()=>{
    const fetchLoaiSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/categories');
      setLoaisanpham(data);
    } ;
    fetchLoaiSanpham();
  },[]);
  return (
    <div>
          <Breadcrumb />
    <div className='flex'>
    <ButtonShop cateloryItem={loaisanpham} filterItems={filterItem}  />
    <PCard  item={filterSanPham}/>

    </div>
  
          
             

      
  
    </div>
  )
}

export default Product