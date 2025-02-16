import React from 'react';
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';
import work6 from '../../assets/work6.jpg';
import work7 from '../../assets/work7.jpg';
import work8 from '../../assets/work8.jpg';
import work9 from '../../assets/work9.jpg';

const Work = () => {
  const works = [
    { id: 1, img: work1, title: 'LED Signage', description: 'Modern LED display solutions' },
    { id: 2, img: work2, title: 'Neon Signs', description: 'Custom neon lighting designs' },
    { id: 3, img: work3, title: 'Shop Front', description: 'Retail storefront branding' },
    { id: 4, img: work4, title: 'Digital Displays', description: 'Interactive digital signage' },
    { id: 5, img: work5, title: 'Wall Wraps', description: 'Commercial branding' },
    { id: 6, img: work6, title: 'Wayfinding', description: 'Directional signage systems' },
    { id: 7, img: work7, title: 'Gate Font Graphics', description: 'Custom installations' },
    { id: 8, img: work8, title: 'Monument Signs', description: 'Architectural signage' },
    { id: 9, img: work9, title: 'Event Displays', description: 'Temporary event signage' },
  ];

  return (
    <div id='work' className="py-20 px-4 bg-gradient-to-b from-cyan-300 via-teal-300 to-emerald-100">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our diverse portfolio of signage solutions that have helped businesses 
          make their mark and stand out from the competition.
        </p>
      </div>

      {/* Work Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div 
              key={work.id} 
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {work.description}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;