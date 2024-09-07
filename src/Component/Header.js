import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';



const Header = ({cart,isUser,setIsUser}) => {
  const [search, setSearch] = useState("")
  const navigate =useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${search}`)

  }
  

  return (
    <header className='h-[5rem] shadow-md bg-white '>
      <div className='h-full container mx-auto flex  items-center px-10 justify-between '>
          <div>
              <Link to="/">
              <img src={require('../Material/logo.jpg')} alt='logo' width="100" height="50px"/>
              </Link>
              
          </div>
          <form className='w-[40%]'onSubmit={handleSubmit}>
          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md '>
             <input type='text' placeholder='Search product here...' className='w-full outline-none pl-2'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
             
             />
             <button className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
               <IoSearchOutline />
             </button>
             
          </div>
          </form>
          <div className=' flex items-center gap-5'>
              <div className='text-4xl cursor-pointer'>
                <FaRegUserCircle />
              </div>

              <div className='text-3xl relative'>
                <Link to="/cart">
                <span><BsCart3 /></span>
                <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-[-5px] left-5'>
                  <p className='text-xs'>{cart.length}</p>
                </div>
                </Link>
              </div>
              <div>
                <Link to="/login" className='px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white'>Login</Link>
              </div>
          </div>
          
      </div>
    </header>
  )
}

export default Header;