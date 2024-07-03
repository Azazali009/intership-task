import React from "react";
import MainMenu from "./mainMenu/MainMenu";

const HeroSection = () => {
  return (
    <div className=" relative text-[#FCFCFD] bg-herobg min-h-[45rem] bg-cover bg-no-repeat">
      <div className=" absolute top-0 left-0 w-full h-full bg-[#1A2D54]/50">
        <MainMenu />

        <div className=" gap-12 flex mt-20 flex-col justify-center items-center">
          <h1 className=" leading-8 text-5xl  font-bold max-w-[60%] ">
            <span className="block"> Learn the fundamentals with our</span>{" "}
            <br />{" "}
            <span className=" block  ml-8">
              Expert in <span className="text-[#00CBFF] ">web design</span>
            </span>
          </h1>
          <p className=" text-2xl capitalize ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className=" space-y-3">
            <div className=" relative w-[40rem]">
              <input
                type="text"
                placeholder="search courses"
                className=" w-full px-2 h-14 rounded-md"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                className="size-5 absolute top-[50%] -translate-y-[50%] text-gray-500/55 right-3 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <p className=" text-center font-semibold text-xl capitalize ">
              Lorem ipsum, dolor sit amet consectetur
            </p>
          </div>

          <div className=" gap-4 flex items-center">
            <img src="/logo.png" className=" w-56" alt="" />
            <img src="/logo.png" className=" w-56" alt="" />
            <img src="/logo.png" className=" w-56" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
