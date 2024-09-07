import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FaMinus ,FaPlus,FaFacebook,FaTwitter,FaLinkedin,FaPinterest    } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
function SingleProduct({item,cart,setCart}){
    let [count, setCount] = useState(1);
    const addToCart = (id,name,price,count,imgSrc) =>{
      const obj = {
        id,name,price,count,imgSrc
      }
      setCart([...cart, obj]);
    toast.success('Item added on cart', {
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
    console.log(cart)
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
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
<div class=" py-5 px-32 font-body text-2xl">
    
        <div class=" px-5">
            <div class=" flex mb-32 ">
                <div id="product-carousel " class="mr-10 py-6 px-10  bg-white w-[1000px] " data-ride="carousel">
                    <div class="carousel-inner bg-light">
                        <div class="carousel-item active ">
                            {
                            
                        <img className='w-full mt-11'
                            src={require("../Material"+ item.thumbnail)}
                               height={700}
                            />
                           
                        }
                    </div>
                </div>
            </div>

            <div class="  mb-30 bg-white p-10">
                <div class=" bg-light p-30">
                    {/* <h3 className='uppercase'>{item.name}</h3> */}
                    <div class="flex mb-3">
                        <div class="text-primary mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star-half-alt"></small>
                            <small class="far fa-star"></small>
                        </div>
                        <small class="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 class="font-weight-semi-bold mb-4">
                    {/* {parseInt(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(",", ".")} */}
                    </h3>
                    <p class="mb-4 text-sm opacity-80">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy</p>
                    <div class="flex mb-3">
                        <strong class="text-dark mr-3">Sizes:</strong>
                        <form className='flex mx-4 justify-between w-[200px] text-center'>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input  mx-3" id="size-1" name="size"/>
                                <label class="custom-control-label" for="size-1">XS</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="size-2" name="size"/>
                                <label class="custom-control-label" for="size-2">S</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="size-3" name="size"/>
                                <label class="custom-control-label" for="size-3">M</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="size-4" name="size"/>
                                <label class="custom-control-label" for="size-4">L</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="size-5" name="size"/>
                                <label class="custom-control-label" for="size-5">XL</label>
                            </div>
                        </form>
                    </div>
                    <div class="flex mb-4">
                        <strong class="text-dark mr-3">Colors:</strong>
                        <form className='flex mx-4 justify-between w-[400px]'>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3 " id="color-1" name="color"/>
                                <label class="custom-control-label" for="color-1">Black</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="color-2" name="color"/>
                                <label class="custom-control-label" for="color-2">White</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="color-3" name="color"/>
                                <label class="custom-control-label" for="color-3">Red</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="color-4" name="color"/>
                                <label class="custom-control-label" for="color-4">Blue</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input mx-3" id="color-5" name="color"/>
                                <label class="custom-control-label" for="color-5">Green</label>
                            </div>
                        </form>
                    </div>
                    <div class="flex align-items-center mb-4 pt-2 items-center justify-start text-[15px]">
                        <div class="input-group quantity mr-5 flex" >
                            <div class="input-group-btn">
                                <button onClick={decrementCount} class="btn btn-primary btn-minus bg-yellow-400 p-3">
                                    <FaMinus/>
                                </button>
                            </div>
                            <input type="text" class="form-control bg-secondary border-0 text-center w-12" value={count}/>
                            <div class="input-group-btn">
                                <button onClick={incrementCount} class="btn btn-primary btn-plus bg-yellow-400 p-3">
                                    <FaPlus/>
                                </button>
                            </div>
                        </div>
                        <button class="btn btn-primary px-3 flex p-3 bg-yellow-400 items-center hover:bg-yellow-600 "
                         onClick={()=>addToCart(item.id,item.name,item.price,count,item.thumbnail)}  >
                            <FaCartShopping/>
                           <p className='ml-5'>Add To Cart</p> 
                        </button>
                    </div>
                    <div class="flex pt-2">
                        <strong class="text-dark mr-2 text-[15px]">Share on:</strong>
                        <div class="flex">
                            <a class="text-dark px-2" href="/">
                                <FaFacebook/>
                            </a>
                            <a class="text-dark px-2" href="/">
                                <FaTwitter/>
                            </a>
                            <a class="text-dark px-2" href="/">
                                <FaLinkedin/>
                            </a>
                            <a class="text-dark px-2" href="/">
                                <FaPinterest/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div></>
    

  
  )
}


export default SingleProduct;