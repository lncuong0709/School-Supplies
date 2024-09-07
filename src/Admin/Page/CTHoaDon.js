import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CTHoaDon = () => {
  const { id } = useParams();
  const [bill,setBill]= useState([])
  useEffect(() => {
    const fetchSanpham = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/order_details/order/${id}`);
        setBill(data);

      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    };
    fetchSanpham();
  }, [id]);
  return (
    <section className="content">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">DataTable with minimal features & hover style</h3>
              </div>
              <div className="p-4">
                <table className="w-[700px] mx-auto border-collapse table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Mã hóa đơn</th>
                      <th className="border border-gray-300 px-4 py-2">Mã sản phẩm</th>
                      <th className="border border-gray-300 px-4 py-2">Số lượng</th>
                      <th className="border border-gray-300 px-4 py-2">Giá</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                        bill.map((item)=>(
                     <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.order_id}</td>
                         <td className="border border-gray-300 px-4 py-2 text-center">{item.product_id}</td>
                         <td className="border border-gray-300 px-4 py-2 text-center">{item.number_of_products}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.price}</td>
                   
                    


                  </tr>
                        ))
                    
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTHoaDon