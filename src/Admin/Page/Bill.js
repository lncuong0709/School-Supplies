import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Bill = () => {
    const[bill,setBill]= useState([]);
    const navigate =useNavigate();
    useEffect(()=>{
        const fetchSanpham =async ()=>{
          const{ data}= await axios.get('http://localhost:8080/api/v1/orders');
          setBill(data);
        };
        fetchSanpham();
      },[]);

    const handleDetail =(sohd)=>{
      navigate(`/cthd/${sohd}`)
    }
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
                <table className="w-full mx-auto border-collapse table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Số đơn hàng</th>
                      <th className="border border-gray-300 px-4 py-2">Tên khách hàng</th>
                      <th className="border border-gray-300 px-4 py-2">Địa chỉ khách hàng</th>
                      <th className="border border-gray-300 px-4 py-2">Email khách hàng</th>
                      <th className="border border-gray-300 px-4 py-2">Số điện thoại</th>
                      <th className="border border-gray-300 px-4 py-2">Địa chỉ giao hàng</th>
                      <th className="border border-gray-300 px-4 py-2">Phương thức thanh toán</th>
                      <th className="border border-gray-300 px-4 py-2">Tổng tiền</th>                 
                    </tr>
                  </thead>
                  <tbody>
                    {
                        bill.map((item)=>(
                     <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.fullname}</td>
                   
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.address}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.email}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.phoneNumber}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.shipping_address}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.payment_method}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.total_money}</td>

                    <td className="border border-gray-300 px-4 py-2 text-center" >
                      <button onClick={()=>handleDetail(item.id)}>Chi tiết</button>
                    </td>
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

export default Bill