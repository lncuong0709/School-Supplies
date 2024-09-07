import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const QLSanPham = () => {
    const[sanpham,setsanpham] = useState([])
    
    const navigate =useNavigate();
    useEffect(()=>{
        const fetchSanpham =async ()=>{
          const{ data}= await axios.get('http://localhost:8080/api/v1/products');
          setsanpham(data);
        } ;
        fetchSanpham();
      },[]);
      const deleteProduct = async (item) => {
       
        try {
          // Sử dụng Axios để gửi yêu cầu DELETE đến endpoint chính xác
          await axios.delete(`http://localhost:8080/api/v1/products/${item.product_id}`);
          window.location.reload();
          // Thông báo xóa thành công nếu yêu cầu thành công
          toast.success('Loại sản phẩm đã được xóa thành công', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          
        } catch (error) {
          // Xử lý lỗi nếu yêu cầu DELETE gặp lỗi
          console.error('Lỗi khi xóa sản phẩm:', error);
          toast.error('Đã xảy ra lỗi khi xóa sản phẩm', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      };
      const handleSubmit = (e,id)=>{
        e.preventDefault();
        navigate(`/addsanpham/${id}`)
    
      }
      const handleEditSubmit = (e,id)=>{
        e.preventDefault();
        navigate(`/updatesanpham/${id}`)
    
      }
      
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <section className="content">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">DataTable with minimal features & hover style</h3>
              </div>
              <div className="p-4">
                <table className="w-full border-collapse table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Mã sản phẩm</th>
                      <th className="border border-gray-300 px-4 py-2">Tên sản phẩm</th>
                      <th className="border border-gray-300 px-4 py-2">Mã loại</th>
                      <th className="border border-gray-300 px-4 py-2">Giá bán</th>
                      <th className="border border-gray-300 px-4 py-2">Nhóm lệnh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        sanpham.map((item)=>(
                     <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.category_id}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                    

                    <td className="border border-gray-300 px-4 py-2 flex justify-between">
                      <div action="add" method="POST" className='p-3 bg-green-300' >
                        <input type="hidden" name="maSP" />
                        <button type="submit" className="btn btn-danger " onClick={(e)=>handleSubmit(e,item.id)}>Thêm</button>
                      </div>
                      <form action="put" method="PUT" className='p-3 bg-yellow-300'>
                        <input type="hidden" name="maSP" />
                        <button type="submit" className="btn btn-danger" onClick={(e)=>handleEditSubmit(e,item.id)}>Sửa</button>
                      </form>
                      <div className='p-3 bg-red-300' >
                        <input type="hidden" name="maSP" />
                        <button onClick={()=> deleteProduct(item)} type="submit" className="btn btn-danger">Xóa</button>
                      </div>
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
    </section></>
    
  )
}

export default QLSanPham