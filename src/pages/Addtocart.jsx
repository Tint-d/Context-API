import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { useContextCustom } from "../context/StateContext";

const Addtocart = () => {
  const {
    state: { cart },dispatch
  } = useContextCustom();

  const [mainTotal,setMainTotal] = useState(0)

  const navigate = useNavigate()

  useEffect(() =>{
    setMainTotal(total)
  },[]);

  
  const total =() =>  cart.reduce((total,item) =>  (total + item.price),0)
  
  const incresePrice = (price) =>{
    setMainTotal(mainTotal + price)
  }

  
  const decresePrice = (price) =>{
    setMainTotal(mainTotal - price)
  }

  return (
    <>
   {cart.length > 0 ?(
    <div className="mt-10">
      <h2 className=" text-center text-3xl font-bold mb-5 text-gray-500 tracking-wider">
        Your Bag
      </h2>
      <div className="  w-[60%] mx-auto">
        {cart.map((item) => {
          return <SingleCart key={item?.id} product={item} incresePrice={incresePrice} decresePrice={decresePrice}/>;
        })}
      </div>
      <hr className="mt-5 w-[60%] mx-auto items-center flex text-center" />
      <div className=" flex justify-between mx-auto w-[60%] items-center mt-5">
        <h2 className=" text-center text-3xl font-bold mb-5 text-gray-500 tracking-wider">
          Total
        </h2>
        <p className=" text-center text-xl font-bold mb-5 text-gray-500 tracking-wider">
          ${mainTotal.toFixed(2)}
        </p>
      </div>
      <div className=" flex justify-center">
        <button onClick={() => dispatch({type:"CART_EMPTY"})} className="px-8 py-2 border-2 border-red-500 text-red-500 rounded-lg">Clear Cart</button>
      </div>
    </div>

   ):(
    <div>
       <div className="flex justify-center">
          <div className="bg-gray-300 p-10 mt-20 animate__animated animate__bounceInDown animate__delay-1">
          <h1 className=" text-center text-4xl font-semibold tracking-wider my-5 text-white">
            Your Cart is Empty 
          </h1>
          <button
            onClick={() => navigate("/")}
            className=" text-center text-primary bg-info px-5 py-2  shadow-lg capitalize rounded transition transform hover:scale-90"
          >
            go shopping
          </button>

          </div>
        </div>
    </div>
   )}
    </>
  );
};

export default Addtocart;
