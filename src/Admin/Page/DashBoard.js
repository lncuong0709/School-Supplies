import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Info Cards */}
            <div className="custom-card bg-blue-500 text-white">
              <h2 className="custom-card-header">Users</h2>
              <p className="custom-card-content">1,234</p>
            </div>
            <div className="custom-card bg-green-500 text-white">
              <h2 className="custom-card-header">Sales</h2>
              <p className="custom-card-content">$5,678</p>
            </div>
            <div className="custom-card bg-yellow-500 text-white">
              <h2 className="custom-card-header">Revenue</h2>
              <p className="custom-card-content">$12,345</p>
            </div>
            <div className="custom-card bg-red-500 text-white">
              <h2 className="custom-card-header">Expenses</h2>
              <p className="custom-card-content">$2,345</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Hoạt động gần đây</h2>
            <ul className="list-disc pl-5">
              <li>Người dùng John Doe đã đăng ký</li>
              <li>Sản phẩm ABC đã được bán</li>
              <li>Người dùng Jane Smith để lại đánh giá</li>
              <li>Sản phẩm mới XYZ được thêm vào</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Product ABC</td>
                  <td className="px-6 py-4 whitespace-nowrap">50</td>
                  <td className="px-6 py-4 whitespace-nowrap">$500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Product XYZ</td>
                  <td className="px-6 py-4 whitespace-nowrap">30</td>
                  <td className="px-6 py-4 whitespace-nowrap">$300</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Product LMN</td>
                  <td className="px-6 py-4 whitespace-nowrap">20</td>
                  <td className="px-6 py-4 whitespace-nowrap">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
