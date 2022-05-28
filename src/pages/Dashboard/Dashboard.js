import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
   <h2 className="text-5xl text-success">dashboard</h2>
   <Outlet></Outlet>

  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Profile</Link></li>
      <li><Link to= "/dashboard/addreview">Add a Review </Link></li>
      <li><Link to= "/dashboard/manageproduct">Manage Product</Link></li>
      <li><Link to= "/dashboard/manageallorders">Manage All Orders</Link></li>
      <li><Link to= "/dashboard/add a product">Add a product</Link></li>
      <li><Link to= "/dashboard/myprofile">My profile</Link></li>
      <li><Link to= "/dashboard/myorders">My orders</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
