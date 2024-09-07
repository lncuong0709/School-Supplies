import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Billed = () => {
    const[bill,setBill]= useState([]);
    const navigate =useNavigate();
    useEffect(()=>{
        const fetchSanpham =async ()=>{
          const{ data}= await axios.get('http://localhost:8080/api/v1/orders');
          setBill(data);
        } ;
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
                      <th className="border border-gray-300 px-4 py-2">Tổng tiền</th>
                      <th className="border border-gray-300 px-4 py-2">Trạng thái đơn hàng</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                        bill.map((item)=>(
                     <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.sodh}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.name_customer}</td>
                   
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.address}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.email}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.phone}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.total}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center" >
                      <button onClick={()=>handleDetail(item.sodh)}>Chi tiết</button>
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

export default Billed