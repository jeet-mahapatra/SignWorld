import React, { useState } from "react";
import backgroundImage from "../../assets/landImage.jpeg"; // Add your background image

const LandBody = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className="relative min-h-screen border-none bg-cover bg-center bg-no-repeat w-full pb-3"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-0">
          <div className="max-w-3xl text-white px-4 pt-20">
            <h1 className="text-5xl font-bold mb-6">
              SignWorld – Elevate Your Brand with Custom Signage Solutions
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
