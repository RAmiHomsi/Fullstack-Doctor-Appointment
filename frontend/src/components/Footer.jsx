import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        {/* ------- Left Side ------- */}
        <div className="md:flex-2">
          <img className="mb-5 w-25" src={assets.logo} alt="Logo" />
          <p className="w-full text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* ------- Center Side ------- */}
        <div className="md:flex-1">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="text-gray-600 space-y-2">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------- Right Side ------- */}
        <div className="md:flex-1">
          <p className="text-xl font-medium mb-5">CONTACT</p>
          <ul className="text-gray-600 space-y-2">
            <li>+1-212-456-7890</li>
            <li>NDYMC.heal@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------- Footer Bottom ------- */}
      <div className="mt-10">
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-600">
          &copy; 2024 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
