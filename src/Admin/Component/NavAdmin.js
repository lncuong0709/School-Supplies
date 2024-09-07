import React from 'react'
import { FaSearch,FaComments,FaBell   } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const NavAdmin = ({isUser,setIsUser}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsUser(false);
        navigate("/");
      };
  return (
    <nav class="flex justify-between items-center shadow-md bg-white p-4 mb-2">
        <div class="flex items-center">

            <button class="mr-6" data-widget="pushmenu">
                <i class="fas fa-bars"></i>
            </button>
            
            <a href="/" class="mr-6">Home</a>
            
            
        </div>
        <div class="flex items-center">
        
            <div class="relative mr-6 flex">
            <button onClick={handleLogout} className='m-6 flex items-center justify-between '>
                Logout
                <IoLogOutOutline className='ml-2'/>
            </button>
            <button data-widget="navbar-search">
                <FaSearch/>
            </button>
                
            <div class="absolute top-0 right-0 mt-12 w-64 bg-white border border-gray-300 p-2 rounded-md shadow-md hidden">
                    
            </div>
            </div>
            
            <div class="relative mr-6">
                <button className="relative">
                    <FaComments className='text-xl'/>
                    <span class="absolute bottom-4 left-3 text-white bg-red-500 p-1 text-[10px] rounded-ee-full ">3</span>
                </button>
                
                <div class="absolute top-0 right-0 mt-12 bg-white border border-gray-300 p-4 rounded-md shadow-md hidden">
                    
                </div>
            </div>
            
            <div class="relative mr-6">
                <button className="relative">
                    <FaBell className='text-xl'/>
                    <span  class="absolute bottom-4 left-3 text-white bg-red-500 p-1 text-[10px] rounded-ss-full ">15</span>
                </button>
            
                <div class="absolute top-0 right-0 mt-12 bg-white border border-gray-300 p-4 rounded-md shadow-md hidden">
                
                </div>
            </div>
            
            <button data-widget="fullscreen" class="mr-6">
                <i class="fas fa-expand-arrows-alt"></i>
            </button>
        
            <button data-widget="control-sidebar">
                <i class="fas fa-th-large"></i>
            </button>
        </div>
    </nav>


  )
}

export default NavAdmin