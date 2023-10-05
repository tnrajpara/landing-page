import React from "react";
import Card from "../Card";

const FeatureProduct = () => {
  const productDetails = [
    {
      id: 1,
      name: "Pack of 4 Classic Polo T-Shirts",
      price: 1000,
      url: "/four-tshirts.webp",
    },
    {
      id: 2,
      name: "Set of 5 Neckline T-Shirts",
      price: 1000,
      url: "/five-tshirts.webp",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-6 lg:mb-10">
        <h1 className="text-3xl font-semibold mt-10">Featured Products</h1>
        <div className="lg:grid mt-10 grid-cols-1 lg:grid-cols-3">
          <Card details={productDetails} />
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
