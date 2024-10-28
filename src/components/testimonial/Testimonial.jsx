import React from "react";
import user1 from "../../assets/profile-pictures/user1.jpg";
import user2 from "../../assets/profile-pictures/user2.jpg";
import user3 from "../../assets/profile-pictures/user3.jpg";
import user4 from "../../assets/profile-pictures/user4.jpg";
import user5 from "../../assets/profile-pictures/user5.jpg";
import user6 from "../../assets/profile-pictures/user6.jpg";

function Testimonial() {
  return (
    <div id="testimonial" className="max-w-7xl mx-auto px-10 mt-10 md:mt-20">
      <div className="">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          What People are saying
        </h1>
        <div className="say-container grid md:grid-cols-3 grid-flow-row  gap-7 mt-[3rem]">
          <div className="  border border-gray-800 shadow-sm p-7 rounded-xl ">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas accusantium perspiciatis quidem corporis dolor reprehenderit,
              atque facilis minima necessitatibus! atque facilis minima
              necessitatibus!
            </p>
            <div className="flex items-center gap-4 mt-[3rem]">
              <img
                src={user1}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-100">John Doe</h3>
                <p className="text-sm text-gray-400">Stellar Solution</p>
              </div>
            </div>
          </div>
          <div className=" border border-gray-800  shadow-sm p-7 rounded-xl ">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas accusantium perspiciatis quidem corporis dolor reprehenderit,
              atque facilis minima necessitatibus! atque facilis minima
              necessitatibus!
            </p>
            <div className="flex items-center gap-4 mt-[3rem]">
              <img
                src={user2}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-100">Emma </h3>
                <p className="text-sm text-gray-400">Stellar Solution</p>
              </div>
            </div>
          </div>
          <div className=" border border-gray-800  shadow-sm p-7 rounded-xl">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas accusantium perspiciatis quidem corporis dolor reprehenderit,
              atque facilis minima necessitatibus! atque facilis minima
              necessitatibus!
            </p>
            <div className="flex items-center gap-4 mt-[3rem]">
              <img
                src={user3}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-100">Rock</h3>
                <p className="text-sm text-gray-400">Stellar Solution</p>
              </div>
            </div>
          </div>
          <div className="  border border-gray-800 shadow-sm p-7 rounded-xl ">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas accusantium perspiciatis quidem corporis dolor reprehenderit,
              atque facilis minima necessitatibus! atque facilis minima
              necessitatibus!
            </p>
            <div className="flex items-center gap-4 mt-[3rem]">
              <img
                src={user4}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-100">Alex</h3>
                <p className="text-sm text-gray-400">Stellar Solution</p>
              </div>
            </div>
          </div>
          <div className=" border border-gray-800  shadow-sm p-7 rounded-xl ">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas accusantium perspiciatis quidem corporis dolor reprehenderit,
              atque facilis minima necessitatibus! atque facilis minima
              necessitatibus!
            </p>
            <div className="flex items-center gap-4 mt-[3rem]">
              <img
                src={user5}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-100">Mr. Harry</h3>
                <p className="text-sm text-gray-400">Stellar Solution</p>
              </div>
            </div>
          </div>
          <div className=" border border-gray-800  shadow-sm p-7 rounded-xl">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas accusantium perspiciatis quidem corporis dolor reprehenderit,
              atque facilis minima necessitatibus! atque facilis minima
              necessitatibus!
            </p>
            <div className="flex items-center gap-4 mt-[3rem]">
              <img
                src={user6}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-100">Sophia</h3>
                <p className="text-sm text-gray-400">Stellar Solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
