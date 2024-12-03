import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    image: "/project.png",
    title: "NajmAI",
    description: "SaaS Framer Template",
    link: "",
  },
  {
    image: "/project.png",
    title: "NajmAI",
    description: "SaaS Framer Template",
    link: "",
  },
  {
    image: "/project.png",
    title: "NajmAI",
    description: "SaaS Framer Template",
    link: "",
  },
  {
    image: "/project.png",
    title: "NajmAI",
    description: "SaaS Framer Template",
    link: "",
  },
];

const RecentProjects = () => {
  return (
    <div className="my-16">
      <div className="space-y-12 w-8/12 mb-16">
        <div className="text-wrapper">
          <h1 className="uppercase font-bold text-8xl">
            <span className="text-white">RECENT</span>
            <br />
            <span className="text-[#515153]">PROJECTS</span>
          </h1>
        </div>
      </div>
      <div className="space-y-8 mb-8">
        {projects.map((item, index) => (
          <Link href={item.link} key={index}>
            <Card className="grid grid-cols-7 rounded-2xl p-8 bg-black border-none gap-5 transition-colors delay-75 hover:bg-[#363636]/35 cursor-pointer">
              <CardHeader className="col-span-2 p-0">
                <CardTitle>
                  <Image
                    src={item.image}
                    alt="project"
                    width={202}
                    height={211}
                    className="rounded-lg w-full"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="col-span-5 flex flex-col justify-center items-start p-0 relative group">
                <h4 className="text-white font-semibold text-2xl">
                  {item.title}
                </h4>
                <p className="text-[#998F8F] font-medium text-xl">
                  {item.description}
                </p>
                <IoIosArrowRoundForward
                  size={30}
                  className="text-primary absolute  -rotate-45 top-2 right-3 group-hover:top-0 group-hover:right-0 transition-all delay-75"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {projects && projects.length > 3 && (
        <Link
          href="/"
          className="relative text-primary border-primary border rounded-lg text-sm font-medium p-4 inline-flex items-center justify-start gap-x-2 hover:gap-x-5 pr-16 group"
        >
          View More
          <IoIosArrowRoundForward
            size={35}
            className="text-primary  transition-all delay-75 absolute right-5 group-hover:right-1"
          />
        </Link>
      )}
    </div>
  );
};

export default RecentProjects;
