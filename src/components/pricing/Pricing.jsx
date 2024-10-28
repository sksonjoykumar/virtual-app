import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <div id="pricing" className="max-w-7xl mx-auto px-10 mt-10">
      <div className="heading mb-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Pricing
        </h1>
      </div>
      <div className="card-container flex gap-10 justify-center flex-wrap">
        <div className="border border-gray-600 shadow-xl shadow-gray-800 opacity-80 rounded-xl p-10 cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-normal my-5">Free</h2>
          <h1 className="text-5xl my-5">
            $0 <span className="text-sm">/Month</span>
          </h1>

          <div className="flex gap-3 flex-col mt-10">
            <div className="flex gap-3 ">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Private board sharing</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>5G Gb Storage</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Web Analytics</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Private Mode</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-orange-800 px-6 py-3 my-5 rounded-md w-full mt-[3rem]"
          >
            Subscribe
          </button>
        </div>
        <div className="border border-gray-600 shadow-xl shadow-gray-800 opacity-80 rounded-xl p-10 cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-normal my-5">
            Pro{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to bg-orange-800  text-[1.2rem] font-semibold">
              (Most Popular)
            </span>
          </h2>
          <h1 className="text-5xl my-5">
            $10 <span className="text-sm">/Month</span>
          </h1>

          <div className="flex gap-3 flex-col mt-10">
            <div className="flex gap-3 ">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Private board sharing</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>5G Gb Storage</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Web Analytics</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Private Mode</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-orange-800 px-6 py-3 my-5 rounded-md w-full mt-[3rem]"
          >
            Subscribe
          </button>
        </div>
        <div className="border border-gray-600 shadow-xl shadow-gray-800 opacity-80 rounded-xl p-10 cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-normal my-5">Enterprise</h2>
          <h1 className="text-5xl my-5">
            $200 <span className="text-sm">/Month</span>
          </h1>

          <div className="flex gap-3 flex-col mt-10">
            <div className="flex gap-3 ">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Private board sharing</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>5G Gb Storage</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Web Analytics</p>
            </div>
            <div className="flex gap-3">
              <FaRegCheckCircle size={20} color="#fff" />
              <p>Private Mode</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-orange-800 px-6 py-3 my-5 rounded-md w-full mt-[3rem]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
