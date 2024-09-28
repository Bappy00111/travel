import React from "react";
import footer from '../../src/assets/image/Outbound (1).png'

const Footer = () => {
  return (
    <footer className="my-5">
      <div className="container mx-auto">
        {/* Grid setup for different screen sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4  text-2xl lg:text-4xl">Jadoo.</h3>
            <ul className="space-y-2  text-base font-bold text-[#5E6282]">
              <li>
                <a href="#">
                  Book your trip in minute, get full Control for much longer.
                </a>
              </li>
             
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-base font-bold text-[#5E6282]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-base font-bold text-[#5E6282]">
              <li>
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affilates</a>
              </li>
              
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">More</h3>
            <ul className="space-y-2 text-base font-bold text-[#5E6282]">
              <li>
                <a href="#"> Airlinefees</a>
              </li>
              <li>
                <a href="#">Airline</a>
              </li>
              <li>
                <a href="#">Low fare tips</a>
              </li>
              
            </ul>
          </div>

          {/* Column 5 (only shows on large screens) */}
          <div className="">
            <h3 className="font-bold mb-4">Social</h3>
            <ul className="space-y-2  text-base font-bold text-[#5E6282]">
              <li>
                <a href="#">
                  <img src={footer} alt="" />
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
