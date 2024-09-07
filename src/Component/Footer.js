import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter,FaFacebook,FaLinkedin,FaInstagram    } from "react-icons/fa";
const Footer = () => {
  return (
    <div class=" bg-[#3D464D] text-xl mt-5 pt-5 w-full text-white px-24">
    <div class="flex pt-14 ">
        <div class=" mb-5 pr-6 ">
            <h5 class="text-2xl uppercase mb-4">Get In Touch</h5>
            <p class="mb-4 w-[500px]">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
            <div className='flex items-center justify-between w-[270px]'>
              <span className='text-red-500 mb-2' ><FaLocationDot/></span>  
              <p class="mb-2">123 Street, New York, USA</p>
            </div>
            <div className='flex items-center justify-between w-[212px]'>
              <span className='text-red-500 mb-2' ><FaLocationDot/></span>  
              <p class="mb-2">info@example.com</p>
            </div>
            <div className='flex items-center justify-between w-[185px]'>
              <span className='text-red-500 mb-2' ><FaLocationDot/></span>  
              <p class="mb-2">+012 345 67890</p>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="flex">
                <div class="lg:w-1/3 mb-5">
                    <h5 class="text-2xl uppercase mb-4">Quick Shop</h5>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Home</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                        <a class="text-secondary" href="/"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                    </div>
                </div>
                <div class="lg:w-1/3 mb-5">
                    <h5 class="text-secondary text-uppercase mb-4">My Account</h5>
                    <div class="  justify-content-start">
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Home</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                        <a class="block" href="/"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                        <a class="text-secondary" href="/"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                    </div>
                </div>
                <div class="lg:w-1/3 mb-5">
                    <h5 class="text-2xl uppercase mb-4">Newsletter</h5>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <form action="">
                        <div class="input-group">
                        <input type="text" className="border border-gray-400 py-2 px-3 w-full rounded-l-md focus:outline-none" placeholder="Your Email Address" />
                            <div class="input-group-append">
                                <button class="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <h6 class="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div class="flex">
                        <a class="btn btn-primary btn-square mr-2" href="#"><FaTwitter/></a>
                        <a class="btn btn-primary btn-square mr-2" href="#"><FaFacebook/></a>
                        <a class="btn btn-primary btn-square mr-2" href="#"><FaLinkedin/></a>
                        <a class="btn btn-primary btn-square" href="#"><FaInstagram/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex border-top mx-xl-5 py-4">
        <div class="col-md-6 px-xl-0">
            <p class="mb-md-0 text-center text-md-left text-secondary">
                &copy; <a class="text-primary" href="#">Domain</a>. All Rights Reserved. Designed
                by
                <a class="text-primary" href="https://htmlcodex.com">HTML Codex</a>
                <br/>
                Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </p>
        </div>
        <div class="col-md-6 px-xl-0 text-center text-md-right">
            <img class="img-fluid" src="img/payments.png" alt=""/>
        </div>
    </div>
</div>
  )
}

export default Footer