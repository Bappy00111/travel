import React from 'react';
import image from '../../src/assets/image/Image (1).png'
import text from '../../src/assets/image/Values.png'

const BookTrip = () => {
  return (
    <div className='my-10 grid md:grid-cols-2 gap-5 '>
        <div className='md:col-span-1 text-base space-y-4'>
          <p className='font-bold text-[#5E6282]'>Easy and Fast</p>
          <h1 className='text-4xl text-[#14183E] font-bold'>Book your next trip 
          in 3 easy steps</h1>
          <img src={text} alt="" />
        </div>
        <div className='md:col-span-1 cursor-pointer flex justify-center items-center'>
          <img src={image} alt="" />
        </div>
    </div>
  );
};

export default BookTrip;