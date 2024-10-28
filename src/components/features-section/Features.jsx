import React from "react";
import { FaRegComment, FaLaptopCode, FaCodeFork } from "react-icons/fa6";
import { MdOutlineCodeOff } from "react-icons/md";
import { SiCodefresh, SiCodefactor } from "react-icons/si";

function Features() {
  return (
    <div id="features" className="max-w-7xl mx-auto px-10 pt-10 md:pt-20">
      <div className="heading text-center">
        <h3 className="font-semibold text-3xl">Feature</h3>
        <h1 className="font-semibold text-3xl md:text-6xl mt-10">
          Easily build
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to bg-orange-800 ml-4">
            your code
          </span>
        </h1>
      </div>
      <div className="card-container mt-20 ">
        <div className=" grid md:grid-cols-3 grid-flow-row md:grid-flow-col gap-10 md:gap-[0rem] xl:gap-[4rem] ">
          <div className="px-3">
            <div className="flex gap-4 items-center justify-center sm:justify-start">
              <FaRegComment size={25} color="#E06215" />
              <p className="font-semibold text-1xl">Drag-and-Drop Interface</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-tight px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rem neque maxime consectetur consequatur nobis, quisquam iure
              similique ipsam vero!
            </p>
          </div>
          <div className="px-3">
            <div className="flex gap-4 items-center  justify-center sm:justify-start">
              <FaLaptopCode size={25} color="#E06215" />
              <p className="font-semibold text-1xl">Drag-and-Drop Interface</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-tight px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rem neque maxime consectetur consequatur nobis, quisquam iure
              similique ipsam vero!
            </p>
          </div>
          <div className="px-3">
            <div className="flex gap-4 items-center  justify-center sm:justify-start">
              <FaCodeFork size={25} color="#E06215" />
              <p className="font-semibold text-1xl">Drag-and-Drop Interface</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-tight px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rem neque maxime consectetur consequatur nobis, quisquam iure
              similique ipsam vero!
            </p>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 grid-flow-row md:grid-flow-col gap-10 md:gap-[0rem] xl:gap-[4rem] mt-20">
          <div className="px-3">
            <div className="flex gap-4 items-center  justify-center sm:justify-start">
              <MdOutlineCodeOff size={25} color="#E06215" />
              <p className="font-semibold text-1xl">Drag-and-Drop Interface</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-tight px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rem neque maxime consectetur consequatur nobis, quisquam iure
              similique ipsam vero!
            </p>
          </div>
          <div className="px-3">
            <div className="flex gap-4 items-center  justify-center sm:justify-start">
              <SiCodefresh size={25} color="#E06215" />
              <p className="font-semibold text-1xl">Drag-and-Drop Interface</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-tight px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rem neque maxime consectetur consequatur nobis, quisquam iure
              similique ipsam vero!
            </p>
          </div>
          <div className="px-3">
            <div className="flex gap-4 items-center  justify-center sm:justify-start">
              <SiCodefactor size={25} color="#E06215" />
              <p className="font-semibold text-1xl">Drag-and-Drop Interface</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-tight px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rem neque maxime consectetur consequatur nobis, quisquam iure
              similique ipsam vero!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
