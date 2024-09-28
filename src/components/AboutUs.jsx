import React from 'react';
import gropImg from '../../src/assets/image/Group 64 (1).png' 

const AboutUs = () => {
  return (
    <div className='mt-20 grid md:grid-cols-2 space-y-5 items-center'>
        <div className='md:col-span-1 space-y-4'>
          <p className='font-bold text-[#5E6282]"'>Testimonials</p>
          <h1 className="text-2xl md:text-5xl text-[#14183E] font-bold tracking-wide">What people say <br />
          about Us.</h1>
        </div>
        <div className='md:col-span-1'>
          <img src={gropImg} alt="" />
        </div>
    </div>
  );
};

export default AboutUs;