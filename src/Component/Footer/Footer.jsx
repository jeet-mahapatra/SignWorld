import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, } from "react-icons/fa";
// import { SiJustdial } from 'react-icons/si';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Signworld</h3>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <div>
                <p className="font-medium">Our Address</p>
                <p className="text-gray-200 font-medium">
                Signworld
                  <br />
                 <p  className="font-medium">Reg. Office:</p>Ground Floor, Near U.P. School, Sutahat, Buxi Bazar, Cuttack, Odisha-753001
 

                  <br />
                  <b  className="font-medium">B.O.:</b>
                  <p> 42, Vidyasagar Road, Bedia Para, Dumdum, Kolkata-700077, West Bengal.</p>
                 
                

                  <b  className="font-medium">B.O.:</b>
               <p> Shyam Vihar, Phase 2, Near Govt. Boy high School, New Delhi-110043</p>
                <b  className="font-medium">Factory :</b>
                  
                   <p>A21/22, Narayana Industrial area, Phase 2, New Delhi -110028</p>
                 
                  
                </p>
              </div>
            </div>

           

          

          
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li> <div className="flex items-center space-x-3">
             <a 
               href="https://jsdl.in/RSL-JZM1739712129" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-blue-200 transition duration-300"
             >
               Find us on Justdial
             </a>
           </div>
           </li>
              <li>          
                <a
                  onClick={() => scrollToSection("home")}
                  className="hover:text-blue-200 transition duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-200 transition duration-300 cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("work")}
                  className="hover:text-blue-200 transition duration-300 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-200 transition duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Business Hours */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday</p>
              <p className="text-gray-200">9:00 AM - 6:00 PM</p>
              <p className="mt-4">Saturday</p>
              <p className="text-gray-200">10:00 AM - 4:00 PM</p>
              <p className="mt-4">Sunday</p>
              <p className="text-gray-200">Closed</p>
            </div>

             <div className="flex items-center space-x-3">
              <FaPhone className="text-xl" />
              <a
                className="hover:text-blue-200 transition duration-300"
              >
                +91 9711607173
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <a className="hover:text-blue-200 transition duration-300">
              signworldccu@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <a className="hover:text-blue-200 transition duration-300">
                signworldkolkata@outlook.com
              </a>
            </div>
          
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-500 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} SignWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
