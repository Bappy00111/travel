import React from "react";
import playImg from "../assets/iceon/Play button.svg";
import cover from '../assets/image/Traveller 1.png';

const Cover = () => {
  return (
    <div className="grid md:grid-cols-2 lg:h-[calc(100vh-40px)] items-center">
      <div className="col-span-1 order-2 md:order-1">
        <div className="space-y-6">
          <b className="tracking-wide text-[#DF6951]">
            Best Destinations around the world
          </b>
          <h4 className="text-3xl md:text:4xl lg:text-6xl font-bold space-y-2">
            Travel, enjoy <span>and live a new </span>  <span>and full life</span>
            
          </h4>
          <p className="text-base text-[#5E6282] leading-8">
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="flex space-x-6">
            <button className="bg-[#F1A501] px-4 py-2 text-white rounded-lg">
              Find out more
            </button>
            <button className="flex px-4 py-2 rounded-lg">
              <span>
                <img className="h-8 w-12" src={playImg} alt="" />
              </span>
              <span>Play Demo</span>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-1 order-1 md:order-2">
        <img src={cover} alt="" />
      </div>
    </div>
  );
};

export default Cover;
