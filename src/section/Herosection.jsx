import React from "react";

const Herosection = () => {
  return (
    <div>
      <div className=" h-[75vh] overflow-hidden bg-gray-100 flex justify-center items-center mt-2 md:flex-row flex-col-reverse">
        <div className="h-1/2 w-full md:h-full md:w-1/2  flex justify-around items-center flex-col p-3">
          <div className="flex justify-around items-center flex-col">
            <h1 className="text-2xl md:text-4xl lg:text-7xl roboto uppercase font-semibold">
              Find Clothes That Matches Your Style
            </h1>
            <p className="roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              aliquid?
            </p>
            <button className="bg-black text-white md:px-10 px-30 rounded-full md:py-2 cursor-pointer">
              Buy Now
            </button>
          </div>
          <div className="h-[18%] w-full  grid grid-cols-3 gap-1 md:gap-3 place-items-center">
            <div className="h-full p-2  w-full">
              <h2 className="md:text-2xl">200+</h2>
              <h2 className="text-gray-500 roboto">International Brands</h2>
            </div>
            <div className="h-full p-2  w-full">
              <h2 className="md:text-2xl">1500+</h2>
              <h2 className="text-gray-500 roboto">High Quality Products</h2>
            </div>
            <div className="h-full p-2  w-full">
              <h2 className="md:text-2xl">3000+</h2>
              <h2 className="text-gray-500 roboto">Happy Customer</h2>
            </div>
          </div>
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2 overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src="src/assets/heroimg.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
