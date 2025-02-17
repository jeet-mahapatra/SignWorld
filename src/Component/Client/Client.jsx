import React, { useState, useEffect, useRef } from 'react';
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';
import client5 from '../../assets/client5.jpg';
import client6 from '../../assets/client6.jpg';
import client7 from '../../assets/client7.jpg';
import client8 from '../../assets/client8.jpg';
import client9 from '../../assets/client9.jpg';
import client10 from '../../assets/client10.jpg';
import client11 from '../../assets/client11.jpg';
import client12 from '../../assets/client12.jpg';
import client13 from '../../assets/client13.jpg';
import client14 from '../../assets/client14.jpg';
import client15 from '../../assets/client15.jpg';

const Client = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const clients = [
    { id: 1, img: client1 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
    { id: 4, img: client4 },
    { id: 5, img: client5 },
    { id: 6, img: client6 },
    { id: 7, img: client7 },
    { id: 8, img: client8 },
    { id: 9, img: client9 },
    { id: 10, img: client10 },
    { id: 11, img: client11 },
    { id: 12, img: client12 },
    { id: 13, img: client13 },
    { id: 14, img: client14 },
    { id: 15, img: client15 }
  ];

  const visibleSlides = 15; // Changed from 6 to 5
  const totalSlides = 15;
  const maxIndex = 31;

  const moveNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  const movePrev = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev - 1;
      return nextIndex < 0 ? maxIndex : nextIndex;
    });
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(moveNext, 900);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const jumpToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id='client' className="bg-white py-16 rounded-xl overflow-hidden mx-4 my-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Clients</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={movePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Logo Carousel */}
          <div 
            className="overflow-hidden mx-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={slideRef}
              className="flex gap-4 md:gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                width: `${(totalSlides * 100) / visibleSlides}%`
              }}
            >
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 w-[calc(100%/2-0.5rem)] md:w-[calc(100%/5-1.75rem)] aspect-[3/2] group"
                >
                  <img
                    src={client.img}
                    alt=""
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 p-2 md:p-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={moveNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => jumpToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
