import React, { useState } from 'react';
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';
import work6 from '../../assets/work6.jpg';
import work7 from '../../assets/work7.jpg';
import work8 from '../../assets/work8.jpg';
import work9 from '../../assets/work9.jpg';
import work10 from '../../assets/work10.jpg';
import work11 from '../../assets/work11.jpg';
import work12 from '../../assets/work12.jpg';
import work13 from '../../assets/work13.jpg';
import work14 from '../../assets/work14.jpg';
import work15 from '../../assets/work15.jpg';
import work16 from '../../assets/work16.jpg';
import work17 from '../../assets/work17.jpg';
import work18 from '../../assets/work18.jpg';
import work19 from '../../assets/work19.jpg';
import work20 from '../../assets/work20.jpg';
import work21 from '../../assets/work21.jpg';
import work22 from '../../assets/work22.jpg';
import work23 from '../../assets/work23.jpg';
import work24 from '../../assets/work24.jpg';
import work25 from '../../assets/work25.jpg';
import work26 from '../../assets/work26.jpg';
import work27 from '../../assets/work27.jpg';

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const works = [
    { id: 1, img: work1 },
    { id: 2, img: work2 },
    { id: 3, img: work3 },
    { id: 4, img: work4 },
    { id: 5, img: work5 },
    { id: 6, img: work6 },
    { id: 7, img: work7 },
    { id: 8, img: work8 },
    { id: 9, img: work9 },
    { id: 10, img: work10 },
    { id: 11, img: work11 },
    { id: 12, img: work12 },
    { id: 13, img: work13 },
    { id: 14, img: work14 },
    { id: 15, img: work15 },
    { id: 16, img: work16 },
    { id: 17, img: work17 },
    { id: 18, img: work18 },
    { id: 19, img: work19 },
    { id: 20, img: work20 },
    { id: 21, img: work21 },
    { id: 22, img: work22 },
    { id: 23, img: work23 },
    { id: 24, img: work24 },
    { id: 25, img: work25 },
    { id: 26, img: work26 },
    { id: 27, img: work27 },
  ];

  const openPreview = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div id='work' className="py-20 px-4 bg-gradient-to-b  rounded-xl overflow-hidden mx-4 my-8 shadow-2xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Work Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <div 
                key={work.id} 
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openPreview(work)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={work.img}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-pointer transition-all duration-300"
          onClick={closePreview}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage.img}
              className="max-w-full max-h-[90vh] object-contain animate-fadeIn"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all"
              onClick={closePreview}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;