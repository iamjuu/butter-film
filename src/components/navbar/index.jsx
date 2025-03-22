import React, { useState, useEffect } from "react";
import { Banner1, Banner2, Banner3, Instagram } from "../../assets";
import InstButton from "../button";

const Caroseal = [
  { id: 1, image: Banner1 },
  { id: 2, image: Banner2 },
  { id: 3, image: Banner3 },
];

const Index = () => {
  return (
    <div className="bg-red-200">
      <div className="flex justify-between w-full  bg-opacity-50  md:flex-row flex-col md:gap-0 gap-4">
        <div className="flex items-center justify-center md:justify-start px-2 py-2 text-white font-bold">
          THE BUTTER FILMS
        </div>
        <div className="flex items-center justify-center">
          <ul className="gap-10 md:gap-10 sm:gap-6\ flex text-white font-medium flex-wrap justify-center">
            <li className="cursor-pointer  text-[16px] font-[400] hover:underline">
              HOME
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:underline">
              STORIES
            </li>
            <li className="cursor-pointer  hover:underline">ABOUT</li>
            <li className="cursor-pointer hover:underline">ENQUIRE</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <InstButton
            imgclassName="w-[68px]"
            className="flex px-2 py-2 border rounded-lg border-white  justify-center items-center"
            icon={Instagram}
          />
        </div>
      </div>
  
    </div>
  );
};

export default Index;
