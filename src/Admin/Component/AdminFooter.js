import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </div>
        <div className="text-sm">
          Designed with <span className="text-red-500">&hearts;</span> by Your Company
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
