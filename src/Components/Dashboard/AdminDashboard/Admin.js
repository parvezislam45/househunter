import React from "react";
import { Link, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center">
        <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/admin">House</Link></li>
            <li><Link to="/admin/all">All Product</Link></li>
                   <li><Link to="/admin/alluser">All User</Link></li>
                   <li><Link to="/admin/add">Add New Item</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
