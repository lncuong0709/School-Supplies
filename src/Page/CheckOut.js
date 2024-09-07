import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ cart }) => {

  const navigate =useNavigate();
  const currentDate = new Date();
  const currentDay = ('0' + currentDate.getDate()).slice(-2);
  const currentHour = ('0' + currentDate.getHours()).slice(-2); 
  const currentMinute = ('0' + currentDate.getMinutes()).slice(-2); 
  const currentSecond = ('0' + currentDate.getSeconds()).slice(-2);
  const sodh = `${currentDay}${currentHour}${currentMinute}${currentSecond}`;
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [fullName,setFullName] = useState('');
    const[phone,setPhone]= useState('');

    const createBill = async (e) => {
      e.preventDefault();
      const order = {
        id: sodh,
        address: address,
        email: email ,
        fullname : fullName,
        phone_number: phone,
        total_money:totalPrice       
      };
      const order_detail = {
        order_id:  sodh,
        product_id: cart.id,
        price: cart.price ,
        number_of_products: cart.count
      };
      try {
          await axios.post('http://localhost:8080/api/v1/orders', 
            order
          );
          await axios.post('http://localhost:8080/api/v1/order_details', 
            order_detail
          );
         
          alert('User đã được tạo thành công!');
          navigate(`/`)
      } catch (error) {
          console.error('Error creating User:', error);
          alert('Có lỗi xảy ra khi tạo User.');
      }
  };
  console.log(cart)
  return (
    <>
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Secure Checkout
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>
              <form action="" className="mt-10 flex flex-col space-y-4" >
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-gray-500">Email</label>
                  <input onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="john.capler@fang.com" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
                </div>
                <div className="relative">
                  <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">Address</label>
                  <input onChange={(event) => setAddress(event.target.value)} type="text" id="card-number" name="card-number" placeholder="Address" className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
                  <img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" />
                </div>
                <div className="relative">
                  <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">Name</label>
                  <input onChange={(event) => setFullName(event.target.value)} type="text" id="card-number" name="card-number" placeholder="Name" className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
                  <img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" />
                </div>
                <div className="relative">
                  <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">Phone</label>
                  <input onChange={(event) => setPhone(event.target.value)} type="text" id="card-number" name="card-number" placeholder="Phone" className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
                  <img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" />
                </div>
              </form>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
              <button type="submit" onClick={createBill} className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
            </div>
            <div className="relative">
              <ul className=" flex justify-between">
              <li className="">Sản phẩm</li>
              <li className="ml-64">Đơn giá</li>
              <li className="">Thành tiền</li>
              </ul>
              <ul className="space-y-5">
              {cart.map((item) => {
                  const totalPriceSingle = item.price * item.count;
                  return (
                    <li key={item.id} className="flex justify-between">
                      <div className="inline-flex">
                        <img src={require(`../Material${item.imgSrc}`)} alt={item.name} className="max-h-16" />
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">{item.name}</p>
                          <p className="text-sm font-medium text-white text-opacity-80">x{item.count}</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white absolute right-32">{parseInt(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(",", ".")} </p>
                      <p className="text-sm font-semibold text-white absolute right-4">{parseInt(totalPriceSingle).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(",", ".")} </p>
                    </li>
                  );
                })}
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>{parseInt(totalPrice).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(",", ".")}</span></p>
              </div>
            </div>
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">+01 653 235 211 <span className="font-light">(International)</span></p>
              <p className="mt-1 text-sm font-semibold">support@nanohair.com <span className="font-light">(Email)</span></p>
              <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col"><span className="text-sm font-bold text-white">Money Back Guarantee</span><span className="text-xs font-medium text-white">within 30 days of purchase</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
