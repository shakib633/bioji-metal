import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(user);
  console.log(admin);
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
      {admin && <>
        <li><Link to= "/dashboard/makeAdmin">Make Admin </Link></li>      
        <li><Link to= "/dashboard/addProduct">Add a Product</Link></li>
        <li><Link to= "/dashboard/manageAllOrders">Manage All orders </Link></li>
        <li><Link to= "/dashboard/manageProducts">Manage Products </Link></li>

      </>}
     
      {!admin && <>
        <li><Link to= "/dashboard/addReview"> Add A Review  </Link></li>
        <li><Link to= "/dashboard/myOrders"> My Orders  </Link></li>


      
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
