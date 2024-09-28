import React from "react";
import image from "../../src/assets/image/Image (1).png";
import text from "../../src/assets/image/Values.png";

const BookTrip = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 ">
      <div className="md:col-span-1 order-2 md:order-1 text-base space-y-4">
        <p className="font-bold text-[#5E6282]">Easy and Fast</p>
        <h1 className="text-2xl md:text-4xl text-[#14183E] font-bold">
          Book your next trip in 3 easy steps
        </h1>
        <img src={text} alt="" />
      </div>
      <div className="md:col-span-1   order-1 md:order-2 cursor-pointer">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default BookTrip;
