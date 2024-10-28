import React from "react";
import { roundClockLogo, homepage1, homepage2, homepage3, question } from '../assets';
import { FaArrowUp } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="p-4 mx-auto container">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <img src={roundClockLogo} alt="Round o' Clock Logo" className="" />
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">...</h1>
      </header>

      {/* Main Section */}
      <section className="mx-auto max-w-[634px] text-center mt-5 px-4">
        {/* Welcome Message */}
        <div>
          <h6 className="text-[#363649] font-semibold text-4xl md:text-6xl lg:text-[80px] leading-tight">
            Welcome to Nexus Hub
          </h6>
          <p className="mt-4 text-[#000000] font-semibold flex justify-center space-x-2">
            <span>Opens 8:00AM</span> <span>|</span> <span>Closes 9:00PM</span>
          </p>
        </div>

        {/* Images Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          <img src={homepage1} alt="Workspace 1" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
          <img src={homepage2} alt="Workspace 2" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
          <img src={homepage3} alt="Workspace 3" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
        </div>

     
        <button className="bg-[#FEDC44] border rounded-full w-full max-w-xs md:max-w-sm lg:max-w-[500px] mt-5 py-3 md:py-5 text-[#000000] font-semibold flex items-center justify-center gap-2 mx-auto">
          Get In <FaArrowUp />
        </button>
      </section>

    
      <footer className="p-3 flex flex-col md:flex-row gap-5 justify-between mt-8">
        <div className="p-5 rounded-xl w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-stone-50 text-center md:text-left">
          <p className="text-[#000000] text-sm font-bold">First time here?</p>
          <p className="text-[#5C5C5B] text-sm">Take a virtual tour of our workspace</p>
        </div>
        <div className="p-5 flex gap-3 items-center rounded-xl w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-stone-50 text-center md:text-left">
        <img src={question} className="w-9 h-9"/>

            <div>

          <p className="text-[#000000] text-sm font-bold"> Hub Guideline</p>
          <p className="text-[#5C5C5B] text-sm">Read about our policy and operational guidelines</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
