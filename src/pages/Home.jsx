import React, { useState } from "react";
import {
  roundClockLogo,
  homepage1,
  homepage2,
  homepage3,
  question,
  hamburgerIcon,
  overlayBgImage,
} from "../assets";
import { FaArrowUp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-4 mx-auto container">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <img src={roundClockLogo} alt="Round o' Clock Logo" className="" />
        <img
          src={hamburgerIcon}
          className="w-6 cursor-pointer"
          onClick={toggleMenu}
        />
      </header>

      {/* Main Section */}
      <section className="mx-auto max-w-[634px] text-center mt-5 px-4">
        {/* Welcome Message */}
        <div>
          <h6 className="text-[#363649] font-caslon font-medium text-4xl md:text-6xl lg:text-[80px] leading-tight">
            Welcome to Nexus Hub
          </h6>
          <p className="mt-4 text-[#000000] font-semibold flex justify-center space-x-2">
            <span>Opens 8:00AM</span> <span>|</span> <span>Closes 9:00PM</span>
          </p>
        </div>

        {/* Images Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          <img
            src={homepage1}
            alt="Workspace 1"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <img
            src={homepage2}
            alt="Workspace 2"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <img
            src={homepage3}
            alt="Workspace 3"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>

        <button className="bg-[#FEDC44] border rounded-full w-full max-w-xs md:max-w-sm lg:max-w-[500px] mt-5 py-3 md:py-5 text-[#000000] font-semibold flex items-center justify-center gap-2 mx-auto">
          Get In <FaArrowUp />
        </button>
      </section>

      <footer className="p-3 flex flex-col md:flex-row gap-5 justify-between mt-8">
        <div className="p-5 rounded-xl w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-stone-50 text-center md:text-left">
          <p className="text-[#000000] text-sm font-bold">First time here?</p>
          <p className="text-[#5C5C5B] text-sm">
            Take a virtual tour of our workspace
          </p>
        </div>
        <div className="p-5 flex gap-3 items-center rounded-xl w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-stone-50 text-center md:text-left">
          <img src={question} className="w-9 h-9" />

          <div>
            <p className="text-[#000000] text-sm font-bold"> Hub Guideline</p>
            <p className="text-[#5C5C5B] text-sm">
              Read about our policy and operational guidelines
            </p>
          </div>
        </div>
      </footer>

      {/* OVERLAY SECTION */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-green-800 to-yellow-50 duration-300">
          <div className="bg-transparent w-full h-full flex flex-col items-center justify-center p-8 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <IoMdClose />
            </button>
            {/* Overlay Content */}
            <div className=" w-full max-w-5xl mx-auto">
              <div className="grid grid-cols-2 gap-8 w-full">
                {/* Left side with image and welcome text */}
                <div className="relative h-full">
                  <img
                    src={overlayBgImage}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <h2 className="text-[#4FA83D] text-6xl font-caslon font-normal absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Welcome
                    <br />
                    to Nexus
                  </h2>
                </div>

                {/* Right side content */}
                <div className="flex flex-col gap-8">
                  {/* Top cards container */}
                  <div className="grid grid-cols-2 gap-8">
                    {/* New Hub User Card */}
                    <Link
                      to={"/new-user"}
                      className="bg-white rounded-md p-8 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <h3 className="text-[#EEEEEF] font-black text-5xl mb-2">
                        New Hub User
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-[#434641] text-xl">
                          New Hub <br /> User?
                        </p>
                        <IoArrowForwardOutline />
                      </div>
                    </Link>

                    {/* New Staff Card */}
                    <div className="bg-white rounded-md flex flex-col justify-between p-8 hover:scale-105 transition-transform cursor-pointer">
                      <h3 className="text-[#EEEEEF] font-extrabold text-5xl mb-2">
                        New Staff
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-[#434641] text-xl">
                          New <br /> Staff
                        </p>
                        <IoArrowForwardOutline />
                      </div>
                    </div>
                  </div>

                  {/* Admin Card */}
                  <div className="bg-white rounded-md flex flex-col gap-7 p-4 hover:scale-105 transition-transform cursor-pointer">
                    <h3 className="text-[#EEEEEF] font-extrabold text-7xl">
                      Admin
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-[#434641] text-xl">Admin Login</p>
                      <IoArrowForwardOutline />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
