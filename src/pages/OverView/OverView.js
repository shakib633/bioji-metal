import React from 'react';
import {RiExchangeDollarFill} from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'
import { HiCube , HiOutlineUserGroup} from "react-icons/hi";
import { MdLocalShipping } from "react-icons/md";


const OverView = () => {
    return (
        <div className="mt-10 text-center">
            <div>
                <h2>Our Business overview</h2>
            </div>
            <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow"> 
             <div className="stat"> 
             <div className="stat-title"><HiOutlineUserGroup className="text-4xl w-3/4"></HiOutlineUserGroup></div>
             <div className="font-black text-4xl">100+</div>
             <div className="stat-desc">Customers</div>
             </div>
             <div className="stat"> 
             <div className="stat-title"><RiExchangeDollarFill className="text-4xl w-3/4"></RiExchangeDollarFill></div>
             <div className="font-black text-4xl">120M+</div>
             <div className="stat-desc">Annual Revenue</div>
             </div>
             <div className="stat"> 
             <div className="stat-title"><FaUsers className="text-4xl w-3/4"></FaUsers></div>
             <div className="font-black text-4xl">33k+</div>
             <div className="stat-desc">Reviews</div>
             </div>
             <div className="stat"> 
             <div className="stat-title"><HiCube className="text-4xl w-3/4"></HiCube></div>
             <div className="font-black text-4xl">150+</div>
             <div className="stat-desc">products</div>
             </div>
             <div className="stat"> 
             <div className="stat-title"><MdLocalShipping className="text-4xl w-3/4"></MdLocalShipping></div>
             <div className="font-black text-4xl">185+</div>

             <div className="stat-desc"> Shipping service</div>
             </div>
            </div>
            
        </div>
    );
};

export default OverView;