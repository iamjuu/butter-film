import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { Banner1, Banner2, Banner3, Card1, Card2, Card3 } from "../../assets";
import Footer from "../../components/footer";
function index() {
  const Caroseal = [
    { id: 1, image: Banner1 },
    { id: 2, image: Banner2 },
    { id: 3, image: Banner3 },
  ];

  const Card =[
    {id:1,image:Card1},
    {id:2,image:Card2},
    {id:3,image:Card3}

  ]

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
            transition: "background-image 1s ease ",
          }}
        >
          <div className="max-w-[1300px] w-full  flex justify-center">
            <div className="w-full flex-col gap-[50%]  flex py-5">
              <Navbar />
              <div className=" p-5 flex justify-center">
                <h1 className="text-white text-4xl global-font">
                  Real Editorial Wedding photography
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* **************section************* */}
        <div className="w-full flex justify-center bg-amber-50">
      <div className="max-w-7xl  pt-5 md:pt-30  w-full py-12 ">
        <div className="mb-12 w-full flex justify-center">
          <div className="w-full md:w-4/5">
            <h1 className=" text-lg   md:text-5xl lg:text-6xl font-normal global-font text-red-700 tracking-wide leading-tight">
              A MODERN APPROACH<br />
              TO AN AGE-OLD TRADITION
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-between flex-row md:flex-row md:flex-wrap gap-6">
          {Card.map((item) => (
            <div key={item.id} className="flex-1 min-w-[200px] relative overflow-hidden group">
              <img 
                className="w-full h-[500px] object-cover transition-transform duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                src={item.image} 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer/>
      </div>
    </>
  );
}

export default index;
