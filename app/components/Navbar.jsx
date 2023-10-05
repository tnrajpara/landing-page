"use client";
import React, { useState } from "react";
import { MdReorder } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [order, setOrder] = useState(false);
  const handleListItems = () => {
    setOrder(!order);
  };
  return (
    <div>
      <div className="lg:ml-7 flex flex-wrap items-center px-4 py-5 justify-between lg:justify-start relative">
        <h1 className="lg:text-5xl text-3xl font-semibold">Eququirk.</h1>
        <ul className="lg:flex justify-center space-x-8 lg:ml-12 text-lg hidden">
          <li>Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        {order ? (
          <>
            <ul className="bg-gray-100 absolute top-0 right-0 w-72 flex flex-col space-y-10 px-3 py-7 lg:hidden">
              <li>
                <AiOutlineClose
                  className="absolute top-2 right-2 text-3xl"
                  onClick={() => {
                    setOrder(!order);
                  }}
                />
              </li>
              <li className="hover:bg-gray-200 px-2 py-2">Home</li>
              <li className="hover:bg-gray-200 px-2 py-2">Shop</li>
              <li className="hover:bg-gray-200 px-2 py-2">Product</li>
              <li className="hover:bg-gray-200 px-2 py-2">Pages</li>
              <li className="hover:bg-gray-200 px-2 py-2">Contact</li>
            </ul>
          </>
        ) : (
          <p></p>
        )}
        <MdReorder className="lg:hidden text-3xl" onClick={handleListItems} />
      </div>
    </div>
  );
};

export default Navbar;
