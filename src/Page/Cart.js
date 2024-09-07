import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus ,FaPlus,FaFacebook,FaTwitter,FaLinkedin,FaPinterest    } from "react-icons/fa";
const Cart = ({ cart, setCart }) => {
  const [count,setCount] = useState('');
  function incrementCount(count) {
    count = count + 1;
    setCount(count);
  }
  function decrementCount(count) {
    count = count - 1;
    if(count>0){
        setCount(count);
    }
    else{
        count= 1;
        setCount(count);
    }    
  }
  return (
    <>
      <div className="container mx-auto my-5 max-w-3xl">
        {cart.length === 0 ? (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
              <Link to={"/"} className="inline-block mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">Continue Shopping...</Link>
            </div>
          </>
        ) : (
          
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center ">Shopping Cart</h2>
      {cart.map((product) => (
      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
              <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" class="shrink-0 md:order-1">
                  <img class="h-20 w-20 dark:hidden" src={require(`../Material${product.imgSrc}`)} alt="imac image" />
                </a>

                <label for="counter-input" class="sr-only">Choose quantity:</label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
              <div class="input-group quantity mr-5 flex" >
                            <div class="input-group-btn">
                                <button  class="btn btn-primary btn-minus bg-yellow-400 p-3">
                                    <FaMinus/>
                                </button>
                            </div>
                            <input type="text" class="form-control bg-secondary border-0 text-center w-12" value={product.count}/>
                            <div class="input-group-btn">
                                <button  class="btn btn-primary btn-plus bg-yellow-400 p-3">
                                    <FaPlus/>
                                </button>
                            </div>
                        </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">{parseInt(product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(",", ".")} </p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{product.name}</a>

                <div class="flex items-center gap-4">

                  <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
     ))}
  </div>
</section>

        )}
      </div>

      {cart.length !== 0 && (
        <div className="container mx-auto text-center my-5">
          <div className="flex justify-center items-center">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded mr-4 hover:bg-yellow-600 transition duration-300">
              <Link to='/checkout'>CheckOut</Link>
            </button>
            <button onClick={() => setCart([])} className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">Clear Cart</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
