import React, { useEffect, useState } from 'react';
import SingleProduct from '../Component/SingleProduct';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Component/Breadcrumb';

const CategoryProduct = ({ cart, setCart }) => {
  const [sanpham, setsanpham] = useState([]);
  const { product_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSanpham = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/products/${product_id}`);
        setsanpham(data);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchSanpham();
  }, [product_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Có lỗi xảy ra: {error.message}</p>;
  }

  return (
    <>
      <Breadcrumb />
      <SingleProduct item={sanpham} cart={cart} setCart={setCart} />
    </>
  );
};

export default CategoryProduct;
