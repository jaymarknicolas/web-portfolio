import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons";

import { FaWordpressSimple, FaFigma, FaLaravel } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

interface Tool {
  icon: IconType;
  title: string;
  description: string;
}

const projects: Tool[] = [
  {
    icon: FaWordpressSimple,
    title: "Lorem ipsum",
    description: "Lorem ipsum odor amet",
  },
  {
    icon: FaFigma,
    title: "Lorem ipsum",
    description: "Lorem ipsum odor amet",
  },
  {
    icon: FaLaravel,
    title: "Lorem ipsum",
    description: "Lorem ipsum odor amet",
  },
  {
    icon: RiNotionFill,
    title: "Lorem ipsum",
    description: "Lorem ipsum odor amet",
  },
  {
    icon: RiNextjsFill,
    title: "Lorem ipsum",
    description: "Lorem ipsum odor amet",
  },
];

const Tools = () => {
  return (
    <div className="my-16">
      <div className="space-y-12 w-8/12 mb-16">
        <div className="text-wrapper">
          <h1 className="uppercase font-bold text-8xl">
            <span className="text-white">PREMIUM</span>
            <br />
            <span className="text-[#515153]">TOOLS</span>
          </h1>
        </div>
      </div>
      <div className="space-y-8 mb-8 flex flex-row flex-wrap gap-4">
        {projects.map((item, index) => (
          <Card
            className="grid grid-cols-7 rounded-2xl p-4 bg-black border-none gap-5 transition-colors delay-75 hover:bg-[#363636]/35 cursor-pointer basis-[49%] !m-0"
            key={index}
          >
            <CardHeader className="col-span-2 p-0">
              <CardTitle>
                <item.icon className="text-black bg-white rounded-2xl p-4 w-full h-full" />
              </CardTitle>
            </CardHeader>
            <CardContent className="col-span-5 flex flex-col justify-center items-start p-0 relative group">
              <h4 className="text-white font-semibold text-2xl">
                {item.title}
              </h4>
              <p className="text-[#998F8F] font-medium text-xl">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tools;
