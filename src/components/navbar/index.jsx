import React, { useState, useEffect } from "react";
import { Instagram } from "../../assets";
import InstButton from "../button";
import { X, Menu } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simple resize handler - no conditional rendering based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Add body class to prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full ">
      {/* Main Navigation - Only show when menu is closed */}
      {!isMenuOpen && (
        <div className="flex justify-between w-full items-center py-4 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center text-white font-bold text-xl md:text-2xl">
            THE BUTTER FILMS
          </div>

          {/* Toggle Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center justify-center">
            <ul className="gap-10 flex text-white font-medium">
              <li className="cursor-pointer text-base font-normal hover:underline transition-all duration-200">
                HOME
              </li>
              <li className="cursor-pointer text-base font-normal hover:underline transition-all duration-200">
                STORIES
              </li>
              <li className="cursor-pointer text-base font-normal hover:underline transition-all duration-200">
                ABOUT
              </li>
              <li className="cursor-pointer text-base font-normal hover:underline transition-all duration-200">
                ENQUIRE
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <InstButton
              imgclassName="w-14"
              className="flex px-2 py-2 border rounded-lg border-white justify-center items-center hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              icon={Instagram}
            />
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-row">
          <div className="w-1/3 ">
            <div className="h-full w-full bg-cover bg-center bg-no-repeat opacity-70" 
                 style={{ backgroundImage: "url('/path-to-your-wedding-image.jpg')" }}>
            </div>
          </div>
                    <div className="w-2/3 bg-black/40 flex flex-col">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-colors"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            
            <div className="flex flex-col justify-start items-end pr-12 h-full">
              <ul className="flex flex-col gap-8 text-white font-medium items-end">
                <li className="cursor-pointer text-[12px] font-normal hover:underline py-2 transition-all duration-200">
                  HOME
                </li>
                <li className="cursor-pointer text-[12px] font-normal hover:underline py-2 transition-all duration-200">
                  STORIES
                </li>
                <li className="cursor-pointer text-[12px] hover:underline py-2 transition-all duration-200">
                  ABOUT
                </li>
                <li className="cursor-pointer text-[12px] hover:underline py-2 transition-all duration-200">
                  ENQUIRE
                </li>
              </ul>
              
              <div className="mt-12">
                <InstButton
                  imgclassName="w-14"
                  className="flex px-3 py-3 border rounded-lg border-white justify-center items-center hover:bg-white hover:bg-opacity-10 transition-all duration-200 w-48"
                  icon={Instagram}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Index;