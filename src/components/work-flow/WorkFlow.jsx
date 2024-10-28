import React from "react";
import codeImg from "../../assets/code.jpg";
import { FaRegCheckCircle } from "react-icons/fa";

function WorkFlow() {
  return (
    <div id="workflow" className="max-w-7xl mx-auto px-10 mt-10 md:mt-20">
      <div className="heading text-center">
        <h1 className=" font-semibold text-3xl md:text-4xl lg:text-5xl">
          Accelerate your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to bg-orange-800 ml-4">
            codding workflow
          </span>
        </h1>
      </div>
      <div className="flex gap-5 md:gap-10 mt-4 md:mt-10  mx-5 md:mx-10 flex-col md:flex-row">
        <section className="section-1 w-full md:w-1/2">
          <img
            src={codeImg}
            alt="code-img"
            className="w-full h-full object-cover"
          />
        </section>
        <section className="section-2 w-full md:w-1/2 mt-10 md:mt-[4rem]">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <FaRegCheckCircle size={22} color="#059862" />
              <h1 className="text-[20px]">Code marge made easy</h1>
            </div>
            <p className="text-[.9rem] leading-normal text-gray-500 mt-2 ml-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, nihil. Lorem, nihil. Lorem
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <FaRegCheckCircle size={22} color="#059862" />
              <h1 className="text-[20px]">Code marge made easy</h1>
            </div>
            <p className="text-[.9rem] leading-normal text-gray-500 mt-2 ml-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, nihil. Lorem, nihil. Lorem
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <FaRegCheckCircle size={22} color="#059862" />
              <h1 className="text-[20px]">Code marge made easy</h1>
            </div>
            <p className="text-[.9rem] leading-normal text-gray-500 mt-2 ml-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, nihil. Lorem, nihil. Lorem
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <FaRegCheckCircle size={22} color="#059862" />
              <h1 className="text-[20px]">Code marge made easy</h1>
            </div>
            <p className="text-[.9rem] leading-normal text-gray-500 mt-2 ml-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, nihil. Lorem, nihil. Lorem
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkFlow;
