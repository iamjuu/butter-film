import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Banner1, Banner2, Banner3 } from './assets'

function App() {
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
      <div
        className="w-full h-screen flex relative"
        style={{
          backgroundImage: `url(${Caroseal[currentIndex].image})`,
          backgroundSize: "cover",
          filter: 'brightness(0.6) contrast(1.1)',
          backgroundPosition: "center",
          transition: "background-image 1s ease"
        }}>
        <div className='max-w-[1300px] bg-amber-200  flex justify-center w-full'>
          <div>

        <Navbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App