import React, { useState, useEffect } from "react";

import backgroundImage2 from "../../assets/static1.jpg";
import backgroundImage3 from "../../assets/static2.jpg";
import backgroundImage4 from "../../assets/static3.jpg";
import backgroundImage5 from "../../assets/static4.jpg";
import backgroundImage6 from "../../assets/static5.jpg";
import backgroundImage1 from "../../assets/static6.jpg";

const LandBody = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        id="about"
        className="relative min-h-screen border-none w-full pb-3 overflow-hidden"
      >
        {/* Background Images */}
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[2]"></div>

        {/* Content Container - Updated positioning */}
        <div className="relative z-[3] container mx-auto px-0 h-screen flex items-end">
          <div className="max-w-3xl text-white px-4 pb-20">
            <h1 className="text-5xl font-bold mb-6">
              SignWorld !
            </h1>

            <p className="text-l mb-8">
              SignWorld specializes in high-quality, custom signage solutions
              designed to elevate your brand. From storefront signs to LED
              displays, we create visually striking designs tailored to your
              business needs.
              <br />
              Our expert team ensures precision, durability, and
              creativity in every project, using advanced materials and modern
              technology.
              <br />
               We cater to various
              industries, including retail, hospitality, and corporate sectors,
              delivering impactful branding solutions. At SignWorld, we believe
              your brand deserves to stand out
            </p>
            {/* Decorative Line */}
            <div className="w-1/2 h-1 bg-blue-600 mb-8"></div>

            {/* Call to Action Buttons */}
            <div className="flex gap-6">
              <a
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-transparent border-2 border-white 
              hover:bg-white hover:text-black rounded-3xl transition 
              duration-300 text-white font-semibold relative group cursor-pointer"
              >
                <span className="absolute inset-0 bg-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-200"></span>
                <span className="relative">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandBody;
