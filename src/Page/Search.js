import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PCard from '../Component/Card';

const Search = () => {
  const[sanpham,setsanpham] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { value } = useParams(); // Truy cập vào giá trị của tham số "value"
  useEffect(() => {
    const fetchSanpham = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/products/productByName/${value}`);
        setsanpham(data);
        setLoading(false); // Đặt loading thành false sau khi dữ liệu đã được tải
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        setError(error); // Xử lý lỗi bằng cách đặt state error
        setLoading(false); // Đặt loading thành false trong trường hợp có lỗi
      }
    };
    fetchSanpham();
  }, [value]);
  if (loading) {
    return <p>Loading...</p>;
  }

  // Xử lý trường hợp có lỗi
  if (error) {
    return <p>Có lỗi xảy ra: {error.message}</p>;
  }
  return (
    <>
    <p>Search {value}</p>
    <PCard item={sanpham} />
    </>
  );
};

export default Search