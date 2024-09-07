import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Product from './Page/Product';
import Nav from './Component/Nav';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryProduct from './Page/CategoryProduct';
import ProductById from './Page/ProductById';
import Search from './Page/Search';
import { useState, useEffect } from 'react';
import Cart from './Page/Cart';
import Login from './Page/Login';
// Admin
import DashBoard from './Admin/Page/DashBoard';
import NavAdmin from './Admin/Component/NavAdmin';
import Sidebar from './Admin/Component/Sidebar';
import AdminFooter from './Admin/Component/AdminFooter';
import QLSanPham from './Admin/Page/QLSanPham';
import FormSanPham from './Admin/Page/FormSanPham';
import FormEditSP from './Admin/Page/FormEditSP';
import QLLoaiSP from './Admin/Page/QLLoaiSP';
import AddLoaiSP from './Admin/Page/AddLoaiSP';
import EditLoaiSP from './Admin/Page/EditLoaiSP';
import QLUser from './Admin/Page/QLUser';
import UpdateUser from './Admin/Page/UpdateUser';
import AddUser from './Admin/Page/AddUser';
import CheckOut from './Page/CheckOut';
import BlogPage from './Page/BlogPage';
import Bill from './Admin/Page/Bill';
import Billed from './Admin/Page/Billed';
import CTHoaDon from './Admin/Page/CTHoaDon';
// Frontend
function App() {
  const [cart, setCart] = useState([])
  const [isUser, setIsUser] = useState();

  useEffect(() => {
    const storedIsUser = localStorage.getItem('isUser');
    if (storedIsUser !== null) {
      setIsUser(JSON.parse(storedIsUser));
    } else {
      const isAdminPage = window.location.pathname.startsWith("/admin")||
      window.location.pathname.startsWith("/qlsanpham") ||

      window.location.pathname.startsWith("/addsanpham") ||
      window.location.pathname.startsWith("/updatesanpham") ||
      window.location.pathname.startsWith("/qlloaisp") ||
      window.location.pathname.startsWith("/addloaisanpham") ||
      window.location.pathname.startsWith("/updateloaisanpham") 
      ||
      window.location.pathname.startsWith("/qluser") 
      ||
      window.location.pathname.startsWith("/updateuser") 
      ||
      window.location.pathname.startsWith("/adduser") 
      ||
      window.location.pathname.startsWith("/admin") 
      ||
      window.location.pathname.startsWith("/orders") 
      ||
      window.location.pathname.startsWith("/cthd") 
      
      ;
      if (isAdminPage) {
        setIsUser(true); // Nếu đang ở trang admin, đặt isUser thành true
      } else {
        setIsUser(false); // Nếu không phải trang admin, đặt isUser thành false
      }
    }
  }, []);
  
  return (
    <body>
      <div className='bg-[#ebecf0] '>
        <BrowserRouter>
             {isUser ? (
            <div>
            <div className="flex  mb-1">
              <Sidebar/>
              <main className="flex-1 ">
              <NavAdmin isUser={isUser} setIsUser={setIsUser}/>
              <div className="bg-white p-6  rounded-lg shadow-md">
                <Routes>
                    <Route path='/admin' element={<DashBoard />} />
                    <Route path='/qlsanpham' element={<QLSanPham/>} />
                    <Route path='/addsanpham/:id' element={<FormSanPham/>} />
                    <Route path='/updatesanpham/:id' element={<FormEditSP/>} />
                    <Route path='/qlloaisp/' element={<QLLoaiSP/>} />
                    <Route path='/addloaisanpham/:id' element={<AddLoaiSP/>} />
                    <Route path='/updateloaisanpham/:id' element={<EditLoaiSP/>} />
                    <Route path='/qluser' element={<QLUser/>} />
                    <Route path='/updateuser/:id' element={<UpdateUser/>} />
                    <Route path='/adduser/:id' element={<AddUser/>} />
                    <Route path='/orders' element={<Bill/>} />
                    <Route path='/cthd/:id' element={<CTHoaDon/>} />
                    
                </Routes>
              </div>
            </main>
            
            </div>
            <AdminFooter/>
         </div>  
          
          ) : (
            <>
              <Header cart={cart} isUser={isUser} setIsUser={setIsUser} />
              <Nav/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product/:product_id' element={<CategoryProduct cart={cart} setCart={setCart}/>} />
                <Route path='/categories/:category_id' element={<ProductById/>} />
                <Route path='/search/:value' element={<Search/>} />
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
                <Route path='/login' element={<Login isUser={isUser} setIsUser={setIsUser} />} />
                <Route path='/checkout' element={<CheckOut  cart={cart}/>} />
                <Route path='/blog/' element={<BlogPage/>} />
              </Routes>
              <Footer />
            </>
          )}
          
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
