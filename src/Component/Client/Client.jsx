import React, { useState, useEffect, useRef } from 'react';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client6.png';
import client7 from '../../assets/client7.png';
import client8 from '../../assets/client8.png';
import client9 from '../../assets/client9.png';
import client10 from '../../assets/client10.png';
import client11 from '../../assets/client11.png';
import client12 from '../../assets/client12.png';
// Import other client logos similarly...

const Client = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const clients = [
    { id: 1, img: client1, name: 'Client 1' },
    { id: 2, img: client2, name: 'Client 2' },
    { id: 3, img: client3, name: 'Client 3' },
    { id: 4, img: client4, name: 'Client 4' },
    { id: 5, img: client5, name: 'Client 5' },
    { id: 6, img: client6, name: 'Client 6' },
    { id: 7, img: client7, name: 'Client 7' },
    { id: 8, img: client8, name: 'Client 8' },
    { id: 9, img: client9, name: 'Client 9' },
    { id: 10, img: client10, name: 'client 10' },
    { id: 11, img: client11, name: 'Client 11' },
    { id: 12, img: client12, name: 'Client 12' },
    // Add all 12 client objects here
  ];

  const moveNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      // Reset to 0 if we reach the end
      return nextIndex >= clients.length - 5 ? 0 : nextIndex;
    });
  };

  const movePrev = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev - 1;
      // Jump to end if we go below 0
      return nextIndex < 0 ? clients.length - 6 : nextIndex;
    });
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        moveNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div id='client' className="bg-white py-16">
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
              className="flex gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / 6)}%)`,
                width: `${(clients.length * 100) / 6}%`
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 w-[calc(100%/6-1.75rem)] aspect-[3/2] group"
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(clients.length - 5)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
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
