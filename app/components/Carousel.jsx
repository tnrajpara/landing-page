"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();
  const items = [
    {
      id: 1,
      MainText: "4 t-shirts for just ₹1000!",
      description:
        "A stylish and affordable way to stock up on wardrobe essentials.",
    },
    {
      id: 2,
      MainText: "5 neck t-shirts for just ₹1000!",
      description:
        "Choose from a variety of necklines to find your perfect fit.",
    },
  ];
  const handleClick = () => {};

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="bg-gray-200 grid grid-cols-2 justify-items-center px-6 py-10 items-center justify-center lg:h-[40rem]">
      <div className="col-span-2 lg:col-span-1 flex justify-center flex-col lg:ml-10 space-y-10">
        <h1 className="font-semibold text-3xl lg:text-7xl">
          {currentSlide === 0 ? items[0].MainText : items[1].MainText}
        </h1>

        <h4 className="text-xl lg:text-2xl leading-9">
          {currentSlide === 0 ? items[0].description : items[1].description}
        </h4>
        <button
          className="bg-gray-900 text-gray-100 px-8 py-3"
          onClick={handleClick}
        >
          Show Now
        </button>
      </div>

      <div className="">
        <Image
          src={currentSlide === 0 ? "/four-tshirts.webp" : "/five-tshirts.webp"}
          alt="not found"
          width={500}
          height={500}
          className="hidden lg:block lg:w-[30rem] lg:h-[30rem]"
        />
      </div>

      <div className="lg:space-x-7 space-x-2 -ml-36 mt-10">
        <button
          className={
            currentSlide === 0
              ? "bg-gray-700 text-white px-3 py-3 rounded-full"
              : "bg-white px-3 py-3 rounded-full"
          }
          onClick={prevSlide}
        ></button>
        <button
          className={
            currentSlide === 1
              ? "bg-gray-700 text-white px-3 py-3 rounded-full"
              : "bg-white px-3 py-3 rounded-full"
          }
          onClick={nextSlide}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
