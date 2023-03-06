import React from "react";
import Card from "../components/Card";
import { useContextCustom } from "../context/StateContext";

const Products = () => {
  const {
    state: { products },
  } = useContextCustom();
  return (
    <div className=" flex flex-wrap gap-10 mt-10 ">
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
