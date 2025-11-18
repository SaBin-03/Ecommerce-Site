import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const KidsProductDetails = () => {

  const navigate = useNavigate();

  const arrivalsDetails = useLoaderData();
  return (
    <div className="flex justify-center items-center">
      <div className="h-[80vh] w-[90%] grid grid-cols-1 md:grid-cols-2 p-2 gap-1">
        <div className="h-[90%] md:h-full overflow-hidden rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={arrivalsDetails.img}
            alt=""
          />
        </div>
        <div className="h-full flex justify-around items-center flex-col p-2 bg-gray-100 rounded-2xl">
          <div className="flex justify-around md:h-1/2 items-center flex-col">
            <h1 className="text-2xl md:text-5xl roboto">{arrivalsDetails.productName}</h1>
            <p>{arrivalsDetails.shortDesc}</p>
            <p className=" md:text-[12px] roboto text-gray-500">{arrivalsDetails.longDesc}</p>
          </div>
          <div className="flex justify-between items-center w-full h-10">
            <h1 className="roboto md:text-4xl ">${arrivalsDetails.price}</h1>
            <button className="border-2 px-1 md:px-2 rounded-full md:text-xl cursor-pointer roboto">Add to Cart <i className="ri-shopping-cart-line cursor-pointer text-xl m-2"></i> </button>
          </div>
          <button onClick={(()=>{navigate("/KidsSection")})} className="border-2 px-2 rounded-full md:text-xl cursor-pointer"> <i class="ri-arrow-left-fill"></i> Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default KidsProductDetails;

export const kidsProducDetalsLoder = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:3000/topKidsCollection/" + id);
  return res.json();
};
