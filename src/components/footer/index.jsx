import React from "react";
import { Instagram } from "../../assets";
import InstButton from "../button";

const index = () => {
  return (
    <div className="w-full  items-center justify-center flex ">
      <div className="flex  bg-[#BD392D] p-5  max-w-7xl w-full items-center justify-between">
        <div>
        <h1 className="text-2xl text-white font-[400]">THE BUTTER FILMS</h1>
        <InstButton

              imgclassName="w-14"
              className="flex px-2 py-2 border rounded-lg border-white justify-center items-center hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              icon={Instagram}
            />
        </div>

      <div></div>
      </div>
    </div>
  );
};

export default index;
