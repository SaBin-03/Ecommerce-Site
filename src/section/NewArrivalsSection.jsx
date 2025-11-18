import React from "react";
import { newarrivalsProduct, topWomensCollection } from "../apifile/index";
import { useNavigate } from "react-router-dom";

const NewArrivalsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full  flex justify-center items-center flex-col p-2 mt-2 ">
      <div className=" h-full w-full md:h-1/2 md:w-[80%]  p-1 md:p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-4xl text-black uppercase font-semibold">
            New Arrivals
          </h2>
          <button
            onClick={() => {
              navigate("/NewArrivals");
            }}
            className="border-2 text-[10px] md:text-[15px] px-1 md:px-3 rounded-full cursor-pointer "
          >
            View More <i class="ri-arrow-right-up-line"></i>{" "}
          </button>
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-4 md:gap-3">
          {newarrivalsProduct.map((elem) => (
            <div className="h-full md:h-[80%]  p-2 flex justify-center items-center flex-col cursor-pointer">
              <div className="h-full md:h-1/2 w-full  rounded-2xl overflow-hidden">
                <img  
                  className="h-full w-full object-cover"
                  src={elem.img}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl roboto">{elem.productName}</h2>
                <h3>${elem.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-full md:h-1/2 md:w-[80%] p-1 md:p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[15px] md:text-4xl text-black uppercase font-semibold">
            Top Women's Collection
          </h2>
          <button
            onClick={() => {
              navigate("/WomensSection");
            }}
            className="border-2 text-[10px] md:text-[15px] px-1 md:px-3 rounded-full cursor-pointer "
          >
            View More <i class="ri-arrow-right-up-line"></i>{" "}
          </button>
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-4 md:gap-3">
          {topWomensCollection.map((elem) => (
            <div className="h-full  md:h-[80%]  p-2 flex justify-center items-center flex-col cursor-pointer">
              <div className="h-full md:h-1/2 w-full  rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={elem.img}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl roboto">{elem.productName}</h2>
                <h3>${elem.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
