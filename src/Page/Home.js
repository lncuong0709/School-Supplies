
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PCard from '../Component/Card';
import Button from '../Component/Button';
import Category from '../Component/Category';
import Banner from '../Component/Banner';
const Home = () => {
  const[sanpham,setsanpham] = useState([])

  //create temp for filter 
  const[filterSanPham,setFilterSanPham] = useState([])
  const filterItem = (curcat) => {
    const newItem = sanpham.filter((newVal) => 
     newVal.category_id === curcat
        	// comparing category for displaying data

    );
     setFilterSanPham(newItem)
  };
  useEffect(()=>{
    const fetchSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/products');
      setsanpham(data);
    } ;
    fetchSanpham();
  },[]);
  useEffect(()=>{
    const fetchSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/products/productByCategory/1');
      setFilterSanPham(data);
    } ;
    fetchSanpham();
  },[]);

  const[loaisanpham,setLoaisanpham] = useState([])

  useEffect(()=>{
    const fetchLoaiSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/categories');
      setLoaisanpham(data);
    } ;
    fetchLoaiSanpham();
  },[]);
  
  return (
    <>
    <Banner />
    <Category item={loaisanpham} />
    <Button cateloryItem={loaisanpham} filterItems={filterItem}  />

    <PCard  item={filterSanPham}/>
    </>
            
            
  )
}

export default Home