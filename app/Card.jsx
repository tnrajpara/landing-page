import React from "react";
import Image from "next/image";
import Link from "next/link";

const temp = ({ details }) => {
  return (
    <div>
      {details.map((item) => {
        return (
          <>
            <div className="border border-black rounded-lg p-4">
              <div className="flex justify-center relative ">
                <Image
                  src={item.url}
                  alt="not found"
                  width={250}
                  height={250}
                  className="rounded-lg bg-contain w-full h-auto"
                />
              </div>
              <div className="flex justify-center mt-3">
                <h1 className="text-xl font-semibold">{item.name}</h1>
              </div>
              <div className="flex justify-center mt-3">
                <Link
                  className="text-xl text-black hover:border-b-4 border-black border  p-2 rounded-lg"
                  href={item.link}
                >
                  View details
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default temp;
