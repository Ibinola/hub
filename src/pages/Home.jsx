import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import {
  hamburgerIcon,
  question,
  roundClockLogo,
  clock,
  faceIdPlaceholder,
} from "../assets";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { PiFingerprintThin } from "react-icons/pi";
import { Link, Outlet, useLocation } from "react-router-dom";

function Home() {
  const [toggle, setToggle] = useState("Biometric Scan");
  const location = useLocation();

  const isClockRoute =
    location.pathname.includes("/clock-in") ||
    location.pathname.includes("/clock-out");

  return (
    <div className="p-4 mx-auto max-w-[1300px] h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 mb-8">
        <img src={roundClockLogo} alt="Round o' Clock Logo" className="" />
        <div className="flex gap-16 items-center">
          <div className="bg-white text-sm rounded-full p-1 flex">
            <button
              onClick={() => setToggle("Biometric Scan")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                toggle === "Biometric Scan"
                  ? "bg-[#5C5C5B] text-white"
                  : "bg-white text-black"
              }`}
            >
              <span>
                <PiFingerprintThin />
              </span>
              Biometric Scan
            </button>
            <button
              onClick={() => setToggle("Face ID")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                toggle === "Face ID"
                  ? "bg-[#5C5C5B] text-white"
                  : " bg-white text-black"
              }`}
            >
              <span>
                <IoPersonSharp />
              </span>
              Face ID
            </button>
          </div>
          <img src={hamburgerIcon} className="w-6 cursor-pointer" />
        </div>
      </header>

      {!isClockRoute && <h3 className="text-end">FRI 6 SEP 10:20</h3>}

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row text-center justify-between flex-1 overflow-hidden">
        <Outlet />
        {!isClockRoute && (
          <>
            <section className="w-full lg:w-[602px]">
              <div className="mt-10 flex flex-col items-center">
                <img src={clock} alt="" className="" />
                <h2 className="text-black font-bold text-2xl flex items-center gap-2">
                  Hello, Good morning{" "}
                  <span>
                    <FiSun />
                  </span>
                </h2>
                <p className="text-[#00000099] font-light">
                  Use your face ID to get access in to the hub
                </p>
              </div>
              <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to={"/home/clock-in"}
                  className="w-full sm:w-auto bg-[#FEDC44] py-4 sm:py-6 px-8 sm:px-16 font-semibold text-sm flex items-center justify-center gap-8"
                >
                  <span>
                    <FaArrowUp />
                  </span>{" "}
                  Clock In
                </Link>
                <Link
                  to={"/home/clock-out"}
                  className="w-full sm:w-auto bg-[#EEEDED] py-4 sm:py-6 px-8 sm:px-16 font-semibold flex items-center justify-center text-sm gap-8"
                >
                  <span>
                    <FaArrowDown />
                  </span>{" "}
                  Clock Out
                </Link>
              </div>
            </section>

            <section className="w-full lg:w-[602px]">
              <div className="mt-12 items-center flex justify-center">
                <img src={faceIdPlaceholder} alt="Face ID Placeholder" />
              </div>
            </section>
          </>
        )}
      </section>

      <footer className=" flex flex-col md:flex-row gap-5 justify-between mt-8">
        <div className="p-5 rounded-xl w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-stone-50 text-center md:text-left">
          <p className="text-[#000000] text-sm font-bold">First time here?</p>
          <p className="text-[#5C5C5B] text-sm">
            Take a virtual tour of our workspace
          </p>
        </div>
        <div className="p-5 flex gap-3 items-center rounded-xl w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-stone-50 text-center md:text-left">
          <img src={question} className="w-9 h-9" />
          <div>
            <p className="text-[#000000] text-sm font-bold">Hub Guideline</p>
            <p className="text-[#5C5C5B] text-sm">
              Read about our policy and operational guidelines
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
