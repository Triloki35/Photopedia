import React from 'react';
import { NavLink ,  Link} from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io";

import logo from "../assets/logo.png";
import {categories} from "../utils/data";

const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black tansition-all duration-200 ease-in-out capitailize";
const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black tansition-all duration-200 ease-in-out capitailize";

// const categories = [
//   {name:'Animals'},
//   {name:'Wallpapers'},
//   {name:'Photography'},
//   {name:'Gaming'},
//   {name:'Coding'},
//   {name:'Others'}
// ]

const Sidebar = ({user,closeToggle}) => {

  // console.log(user.image); 

  const handleCloseSidebar = (closeToggle)=>{
    // console.log("user=" + {user});
    if(closeToggle)
      closeToggle(false);
  }

  return (
    <div className='flex flex-col justify-between bg-white overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col '>
        <Link
          to="/"
          className='flex p-5 gap-2 my-6 pt-1 w-190 items-center'
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt='logo' className='w-full'/>
        </Link>
        
         <div className='flex flex-col gap-5'>
            <NavLink
              to="/"
              className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}
            >
              <AiFillHome/> Home
            </NavLink>
            <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Categories</h3>
            {categories.slice(0,categories.length - 1).map((category)=>(
              <NavLink
                to={`/category/${category.name}`}
                className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                onClick={handleCloseSidebar}
                key={category.name}
              >
                <img src={category.image} className='w-8 h-8 rounded-full shadow-sm' alt='category'/>
                {category.name}
              </NavLink>
            ))}
         </div>
      </div>

      {user && (
        
        <Link
          to={`user-profile/${user._id}`}
          className = "flex my-5 mb-3 gap-3 p-2 items-center bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={ user.image } className="w-10 h-10 rounded-full" alt="profile_pic" />
          <p>{ user.userName }</p>
          <IoIosArrowForward/>
        </Link>
       
      )}

    </div>
  )
}

export default Sidebar;