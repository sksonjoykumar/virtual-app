import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // handleMobileToggle;
  const handleMobileToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 md:px-20 mx-auto relative text-sm">
        <div className=" flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 mr-2 object-cover"
            />
            <a href="#hero-section">
              <span className="text-xl tracking-tight">Virtual</span>
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className=" hover:text-[#FC830F] transition-all duration-300">
              <a href="#features">Features</a>
            </li>
            <li className=" hover:text-[#FC830F] transition-all duration-300">
              <a href="#workflow">Workflow</a>
            </li>
            <li className=" hover:text-[#FC830F] transition-all duration-300">
              <a href="#pricing">Pricing</a>
            </li>
            <li className=" hover:text-[#FC830F] transition-all duration-300">
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md  hover:text-[#FC830F] transition-all duration-300"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          {/* mobile Response  */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button type="button" onClick={handleMobileToggle}>
              {mobileMenu ? <IoClose size={25} /> : <FaBars size={25} />}
            </button>
          </div>
          {mobileMenu && (
            <div className="fixed top-[65px] right-0 text-center z-20 bg-neutral-900 w-full p-5 flex  flex-col justify-center items-center lg:hidden">
              <ul className="">
                <li className=" hover:text-[#FC830F] transition-all duration-300 py-2">
                  <a href="#features">Features</a>
                </li>
                <li className=" hover:text-[#FC830F] transition-all duration-300 py-2">
                  <a href="#workflow">Workflow</a>
                </li>
                <li className=" hover:text-[#FC830F] transition-all duration-300 py-2">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className=" hover:text-[#FC830F] transition-all duration-300 py-2">
                  <a href="#testimonial">Testimonial</a>
                </li>
              </ul>
              <div className="mt-5 space-x-5 nav-btn">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md  hover:text-[#FC830F] transition-all duration-300"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-2 rounded-md"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
