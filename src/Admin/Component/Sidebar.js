import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // State để kiểm soát hiển thị dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <aside className="w-64 bg-gray-900 text-white max-w-full min-h-[720px]">
      {/* Logo */}
      <div className="py-4 pl-12 pr-6 ">
        <img src={require("../../Material/logo.jpg")} alt="Logo" className="w-[150px] bg-amber-50" />
      </div>
      {/* Navigation */}
      <nav className="text-sm">
        <ul>
          <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Link to="/admin" className='block border-b pb-3'>Trang Chủ</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Link to="/qlsanpham" className='block border-b pb-3'>Quản lý sản phẩm</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Link to="/qlloaisp" className='block border-b pb-3'>Quản lý loại sản phẩm</Link>
          </li>
          {/* <li className="relative">
            <div
              className="px-6 py-3 hover:bg-gray-800 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Quản lý hóa đơn
              <svg
                className="w-4 h-4 inline-block ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* Dropdown menu */}
            {/* {showDropdown && (
              <ul className="  ">
                <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
                <Link to="/hddanggiao"className='block border-b pb-3'>Đơn hàng đang giao</Link>
                </li>
                <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
                  <Link to="/hddagiao"className='block border-b pb-3'>Đơn hàng đã giao</Link>
                </li>
              </ul>
            )}
          </li> */} 
          <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Link to="/orders" className='block border-b pb-3'>Quản lý đơn hàng</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Link to="/qluser" className='block border-b pb-3'>Quản lý người dùng</Link>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
