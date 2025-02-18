import React, { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/static1.jpg";
import backgroundImage2 from "../../assets/static2.jpg";
import backgroundImage3 from "../../assets/static3.jpg";
import backgroundImage4 from "../../assets/static4.jpg";
import backgroundImage5 from "../../assets/static5.jpg";

const LandBody = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[tomato] via-[#ff8c00] to-[orange] text-white rounded-xl overflow-hidden mx-4 my-8 shadow-2xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-6xl text-white font-extrabold mb-4">
              Signworld
            </h1>
            <div className="  text-2xl font-light mb-8">
              <p className="hidden md:block"> We delivers
              high-quality, customized signage solutions for businesses. From
              LED displays to storefront signs, we ensure durability and
              creativity. Our display boards are designed to enhance brand
              visibility with innovative designs and premium materials.</p>
              <br />
              <b>Signworld – Where Creativity Meets Excellence.</b>
            </div>

            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 text-white-600 font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Image Carousel Section */}
          <div className="md:w-1/2 w-full h-96 flex items-center justify-center mt-8 mb-2 md:mt-0">
            <div className="relative w-full h-full">
              {backgroundImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImageIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandBody;
