import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const MensDetails = () => {
  const arrivalLoaderProducts = useLoaderData();

  return (
    <div className="min-h-screen w-full  flex justify-center items-center p-2 mt-2">
      <div className="min-h-screen w-[90%]  p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {arrivalLoaderProducts.map((elem) => (
          <Link to={elem.id}>
            <div key={elem.id} className="h-90  p-2 cursor-pointer">
              <div className="h-[50%] w-full   rounded-2xl overflow-hidden">
                <img src={elem.img} alt="" />
              </div>
              <div>
                <h2 className="text-2xl roboto">{elem.productName}</h2>
                <p className="para roboto">{elem.shortDesc}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl ">${elem.price}</h3>
                  <button className="border-2 px-1 rounded-full cursor-pointer">
                    Buy Now <i className="ri-shopping-bag-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MensDetails;

export const mensLoader = async () => {
  const res = await fetch("http://localhost:3000/topMensCollection");
  return res.json();
};
