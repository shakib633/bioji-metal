import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

   

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        
        
        <p className='mt-3 mr-3 text-success'>{user?.displayName}</p>

            <div class="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle  avatar">
              <div className=" ">


        {user ? <img  className="h-8 w-8 mx-auto bg-light-100 rounded-full" src={user?.photoURL ||user.displayName} alt="" /> :
         <button className="my-3">SignIn</button> }
                      
                 </div>
            </label>
            
            <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              
              <li><Link to='/myportfolio' className='font-semibold'>My Portfolio</Link></li>
             
              <li>{user ? <> 
        <button className='btn btn-ghost ' onClick={handleSignOut}> Sign out</button> </> : <Link to='/signin'><button className="btn btn-ghost">Sign In</button></Link>}</li>
              </ul>
              </div>
              
        
        </>
        

        
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Bioji Parts Ltd.</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
               <div className="navbar-end"> 
               <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
               </div>
                
            </div>
        </div>
    );
};

export default Header;