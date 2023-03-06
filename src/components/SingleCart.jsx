import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useContextCustom } from "../context/StateContext";

const SingleCart = ({ product, incresePrice, decresePrice }) => {
  const [qty, setQty] = useState(1);
  const { dispatch } = useContextCustom();

  const oneItemPrice = product.price * qty;

  const increse = () => {
    setQty((prev) => prev + 1);
    incresePrice(product.price);
  };

  const decrese = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decresePrice(product.price);
    }
  };


  const delBtn = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    decresePrice(oneItemPrice);
  };

  return (
    <div className="">
      <div className=" flex mb-5 justify-around items-center">
        <div className=" flex gap-10 items-center">
          <img className="h-[100px] object-cover" src={product?.image} alt="" />
          <div>
            <p className=" text-gray-600 font-bold">
              {product?.title.substring(0, 20)}
            </p>
            <p className=" text-gray-600 font-bold">${oneItemPrice}</p>
            <p
              onClick={delBtn}
              className=" text-red-500 font-bold cursor-pointer select-none"
            >
              remove
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center ml-auto">
          <p onClick={increse}>
            <MdOutlineKeyboardArrowUp className=" font-extrabold text-2xl cursor-pointer" />
          </p>
          <p>{qty}</p>
          <p onClick={decrese}>
            <MdOutlineKeyboardArrowDown className=" font-extrabold text-2xl cursor-pointer" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
