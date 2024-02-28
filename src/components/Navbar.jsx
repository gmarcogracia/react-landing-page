import React, { useState } from "react";
//import {} from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Contact</li>
        <li className="p-4">About</li>
        <li className="p-4">Resources</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav==false ? <AiOutlineClose size={20}/>:   <AiOutlineMenu size={20} /> }
     
      </div>
      
      <div className={nav==true ? 'fixed left-[-100%]' : "absolute left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden"}>
     
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-100">Home</li>
          <li className="p-4 border-b border-gray-100">Contact</li>
          <li className="p-4 border-b border-gray-100">About</li>
          <li className="p-4 border-b border-gray-100">Resources</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
