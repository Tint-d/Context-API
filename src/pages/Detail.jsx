import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextCustom } from "../context/StateContext";

const Detail = () => {
  const {
    state: { products },
  } = useContextCustom();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setProduct(data);
  };

  const fetchCategory = async () => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${product.category}`
    );
    const data = await api.json();
    const filterCategory = data?.filter((item) => item.id !== product.id);
    // setCategory(filterCategory);
  };

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, [ product]);

 

  return (
    <div>
      <div className="flex justify-around mt-10 items-center align-middle">
        <img className=" h-[400px]" src={product?.image} alt="" />
        <div className=" w-96">
          <h2 className=" text-xl text-gray-500 font-semibold capitalize mb-5">
            {product?.category}
          </h2>
          <h2 className=" text-2xl text-gray-500 font-semibold capitalize mb-5">
            {product?.title}
          </h2>
          <p className=" text-gray-500 font-medium leading-8 tracking-wider">
            {product?.description}
          </p>
          <p className="text-gray-500 font-medium text-lg  ">
            <span className=" text-xl font-semibold text-gray-800 mr-3">
              Price:
            </span>
            ${product?.price}
          </p>
          <p className=" text-lg font-medium text-gray-800">
            <span className=" text-xl font-semibold text-gray-800 mr-3">
              Rating:
            </span>{" "}
            {product?.rating?.rate}
          </p>
          <p className=" text-lg font-medium text-gray-800">
            <span className=" text-xl font-semibold text-gray-800 mr-3">
              Stock:
            </span>
            {product?.rating?.count}
          </p>
        </div>
      </div>
      <div>
        {/* <div className=" flex gap-5 ml-32">
          {category?.map((cat) => {
            return (
              <div key={cat.id}>
                <img
                  className="h-[100px] cursor-pointer"
                  src={cat?.image}
                  alt=""
                />
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
