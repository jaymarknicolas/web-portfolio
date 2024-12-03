import React from "react";
import { GoStack } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Banner = () => {
  return (
    <>
      <div className="space-y-12 w-8/12 mb-16">
        <div className="text-wrapper">
          <h1 className="uppercase font-bold text-8xl">
            <span className="text-white">SOFTWARE</span>
            <br />
            <span className="text-[#515153]">ENGINEER</span>
          </h1>
          <h4 className="font-bold text-3xl">
            <span className="text-white">&</span>{" "}
            <span className="text-[#515153]">ASPIRING</span>{" "}
            <span className="text-white">UX/UI DESIGNER</span>
          </h4>
        </div>
        <p className="text-lg text-[#515153]">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
        <div className="summary flex items-center gap-x-8">
          <div className="flex flex-col">
            <h2 className="text-[86px] font-bold text-white leading-[100px] ">
              +3
            </h2>
            <p className="font-medium text-lg text-[#515153] uppercase">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[86px] font-bold text-white leading-[100px] ">
              +50
            </h2>
            <p className="font-medium text-lg text-[#515153] uppercase">
              Project Closed
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[86px] font-bold text-white leading-[100px] ">
              +10
            </h2>
            <p className="font-medium text-lg text-[#515153] uppercase">
              Total clients
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-x-5 h-[328px] mb-16">
        <div className="col-span-3 bg-primary rounded-2xl p-8 flex flex-col justify-between cursor-pointer hover:bg-primary/90 transition-colors delay-75">
          <div className="space-y-8">
            <GoStack size={40} className="text-white" />
            <h4 className="text-white text-2xl uppercase font-medium">
              DYNAMIC ANIMATION, MOTION DESIGN
            </h4>
          </div>
          <span className="icon-wrapper float-end self-end text-white border-white border rounded-sm hover:text-primary hover:bg-white ">
            <IoIosArrowRoundForward size={30} className="text-inherit" />
          </span>
        </div>
        <div className="col-span-4 bg-[#C5FF41] hover:bg-[#C5FF41]/90 rounded-2xl p-8 flex flex-col justify-between cursor-pointer  transition-colors delay-75">
          <div className="space-y-8">
            <GoStack size={40} className="text-black" />
            <h4 className="text-black text-2xl uppercase font-medium">
              DYNAMIC ANIMATION, MOTION DESIGN
            </h4>
          </div>
          <span className="icon-wrapper float-end self-end text-balance border-black border rounded-sm  hover:text-[#C5FF41] hover:bg-black ">
            <IoIosArrowRoundForward size={30} className="text-inherit" />
          </span>
        </div>
      </div>
    </>
  );
};
