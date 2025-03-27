import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { Banner1, Banner2, Banner3 } from "../../assets";

function index() {
  const Caroseal = [
    { id: 1, image: Banner1 },
    { id: 2, image: Banner2 },
    { id: 3, image: Banner3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Caroseal.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [Caroseal.length]);

  return (
    <>
    <div>

      <div
        className="w-full justify-center   h-screen flex relative"
        style={{
          backgroundImage: `url(${Caroseal[currentIndex].image})`,
          backgroundSize: "cover",
          filter: "brightness(0.6) contrast(1.1)",
          backgroundPosition: "center",
          transition: "background-image 1s ease",
        }}
      >
        <div className="max-w-[1300px] w-full  flex justify-center">
          <div className="w-full flex-col gap-[50%]  flex py-5">
            <Navbar />
            <div className=" p-5 flex justify-center">
              <h1 className="text-white text-4xl global-font">
              Real Editorial Wedding  photography
                            </h1>
            </div>
          </div>
        </div>
      </div>

      {/* **************section************* */}


      <div className="w-full flex justify-center">
        <div className="max-w-[1300px] w-full bg-amber-200">
          <div>

          <h1 className="text-[54px] font-[400] global-font" >A MODERN APPROACH  <br /> 
          TO AN AGE  OLD TRADITION</h1>
          </div>


<div>
  
</div>

        </div>
        <div></div>
      </div>
      </div>
 
    </>
  );
}

export default index;
