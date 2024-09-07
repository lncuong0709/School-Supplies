import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const Login = ({isUser,setIsUser}) => {
  const [name,setName] = useState("")

  const [passWord,setPassWord] = useState("")


  const [user,setUser] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchUser =async ()=>{
      const{ data}= await axios.get('http://localhost:8080/api/v1/users');
      setUser(data);
    } ;
    fetchUser();
  },[]);
  const handleLogin= (e)=>{
    e.preventDefault()
    const foundUser = user.find(u => u.phoneNumber === name && u.password === passWord);
    if (foundUser) {
      setIsUser(true);
      navigate("/admin");}

    else{
      setIsUser(false);
      toast.error('Your UserName or Password not true ', {
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
    <section className="w-[400px] mx-auto my-11  flex flex-col items-center justify-center mt-12 rounded-lg h-96 min-w-[20%] bg-gray-300">
    <div className="font-bold text-2xl">Log in</div>
    <form className="mt-4 text-sm font-semibold w-48 flex flex-col justify-start items-start" onSubmit={handleLogin}>
        <label>USERNAME</label>
        <input type="text" placeholder="Enter your username" className="border-none p-1 font-sans my-2 rounded w-full"
          onChange={(e)=> setName(e.target.value)}
        
        />
        <label>PASSWORD</label>
        <input type="password" placeholder="Enter your password" className="border-none p-1 font-sans my-2 rounded w-full" 
        onChange={(e)=> setPassWord(e.target.value)}/>
        <button type="submit" className="cursor-pointer border-none self-center mt-4 text-lg py-2 px-3 rounded bg-gray-600 text-white">Continue</button>
    </form>
    <div className="mt-8 mb-0.5 text-lg">Don't have an account yet?</div>
    <Link className="cursor-pointer mt-4 text-gray-600 font-bold" to="/register">Register one for free</Link>
</section>
    </>
    

  )
}

export default Login