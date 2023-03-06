import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./Nav.css"
import { useContextCustom } from "../context/StateContext";

const Navbar = () => {
  const {state:{products,cart},search,setSearch} = useContextCustom();
  
  return (
  <div className=" flex justify-around items-center mx-auto bg-gray-100 p-5 mt-5 shadow-lg">
    <Link to={'/'}>
      <h2 className=" text-3xl font-bold text-teal-500">Comfity</h2>
    </Link>
    <div className=" flex gap-5">
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" className=" border-0 border-b-2 bg-transparent border-b-black active:border-0 focus:ring-0 focus:border-0"/>
        <Link to={'/addtocart'}>
        <div className=" relative">
            <button className="">
                <AiOutlineShoppingCart className=" text-3xl text-gray-500 z-1"/>
            </button>
            <span className="badge h-6 w-6  absolute bottom-5 left-5 ">{cart.length}</span>
        </div>
        </Link>
    </div>
  </div>
  );
};

export default Navbar;
