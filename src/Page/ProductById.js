import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PCard from '../Component/Card';
import Button from '../Component/Button';
import Breadcrumb from '../Component/Breadcrumb';
import ButtonShop from '../Component/ButtonShop';
import { useParams } from 'react-router-dom';

const ProductById = () => {
  const[sanpham,setsanpham] = useState([])
  const {category_id} =useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //find sanpham in table sanpham va gan newItem vao bien tam FilterSanPham


  //fetch data FilterSanPham from productsIdOne

 //fetch data FilterSanPham from products


  const[loaisanpham,setLoaisanpham] = useState([])
   //fetch data FilterSanPham from categories
  useEffect(()=>{
    const fetchLoaiSanpham =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/categories');
      setLoaisanpham(data);
    } ;
    fetchLoaiSanpham();
  },[]);
  useEffect(() => {
    const fetchSanpham = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/products/productByCategory/${category_id}`);
        setsanpham(data);
        setLoading(false); // Đặt loading thành false sau khi dữ liệu đã được tải
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        setError(error); // Xử lý lỗi bằng cách đặt state error
        setLoading(false); // Đặt loading thành false trong trường hợp có lỗi
      }
    };
    fetchSanpham();
  }, [category_id]);
  if (loading) {
    return <p>Loading...</p>;
  }

  // Xử lý trường hợp có lỗi
  if (error) {
    return <p>Có lỗi xảy ra: {error.message}</p>;
  }
  return (
    <div>
          <Breadcrumb />
    <div className='flex'>
    <ButtonShop cateloryItem={loaisanpham}   />
    <PCard  item={sanpham}/>

    </div>

    </div>
  )
}

export default ProductById