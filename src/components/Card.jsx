import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContextCustom } from "../context/StateContext";

const Card = ({ product }) => {
  const {state:{products,cart},dispatch} = useContextCustom();
  const { id } = useParams();

  return (
    <div className="flex flex-col card w-64 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          className="w-[300px] h-[300px] object-cover p-5"
          src={product.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-gray-500 mt-auto text-lg font-semibold">
          {product.title.substring(0, 20)}
        </h2>
        <div className=" flex  align-middle">
          <button onClick={() => dispatch({type:"ADD-TO_CART",payload:product})} className="btn btn-sm mr-2">Add to cart</button>
          <Link to={`/detail/${product.id}`}>
            <button className="btn btn-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
