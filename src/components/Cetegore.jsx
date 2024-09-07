import React from "react";
import setting from "../assets/iceon/Category.svg";
import weather from "../assets/iceon/Category (1).svg";
import flight from "../assets/iceon//Category (2).svg";
import mouth from "../assets/iceon/Category Active.svg";

const Cetegore = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <p className="text-base font-bold text-[#5E6282]">CATEGORY</p>
        <h2 className="text-4xl font-bold">We Offer Best Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
        <div className="flex justify-center items-center">
          <img className="h-80 w-80 object-contain" src={flight} alt="flight" />
        </div>
        <div className="flex justify-center items-center">
          <img className="h-80 w-80 object-contain" src={mouth} alt="mouth" />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-80 w-80 object-contain"
            src={setting}
            alt="setting"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-80 w-80 object-contain"
            src={weather}
            alt="weather"
          />
        </div>
      </div>
    </div>
  );
};

export default Cetegore;
