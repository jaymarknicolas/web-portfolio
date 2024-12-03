import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
interface Experience {
  title: string;
  description: string;
  date_range: string;
  link: string;
}

const experiences: Experience[] = [
  {
    title: "Lorem ipsum odor amet.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nibh dolor ut ullamcorper eget. Nascetur est proin magnis vehicula accumsan quam nulla. Nisl consectetur sagittis sem; lacinia sociosqu blandit.",
    date_range: "Jun 2017 - Dec 2019",
    link: "",
  },
  {
    title: "Lorem ipsum odor amet.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nibh dolor ut ullamcorper eget. Nascetur est proin magnis vehicula accumsan quam nulla. Nisl consectetur sagittis sem; lacinia sociosqu blandit.",
    date_range: "Jun 2017 - Dec 2019",
    link: "",
  },
  {
    title: "Lorem ipsum odor amet.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nibh dolor ut ullamcorper eget. Nascetur est proin magnis vehicula accumsan quam nulla. Nisl consectetur sagittis sem; lacinia sociosqu blandit.",
    date_range: "Jun 2017 - Dec 2019",
    link: "",
  },
  {
    title: "Lorem ipsum odor amet.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nibh dolor ut ullamcorper eget. Nascetur est proin magnis vehicula accumsan quam nulla. Nisl consectetur sagittis sem; lacinia sociosqu blandit.",
    date_range: "Jun 2017 - Dec 2019",
    link: "",
  },
];

const WorkExperience = () => {
  return (
    <div className="my-16">
      <div className="space-y-12 w-8/12 mb-16">
        <div className="text-wrapper">
          <h1 className="uppercase font-bold text-8xl">
            <span className="text-white">3 YEARS OF</span>
            <br />
            <span className="text-[#515153]">EXPERIENCE</span>
          </h1>
        </div>
      </div>
      <div className="space-y-8 mb-8">
        {experiences.map((item, index) => (
          <Link href={item.link} key={index}>
            <Card className="grid grid-cols-7 rounded-2xl py-8 px-12 bg-black border-none gap-5 transition-colors delay-75 hover:bg-[#363636]/35 cursor-pointer ">
              <CardContent className="col-span-7 flex flex-col justify-center items-start p-0 relative group space-y-8">
                <h4 className="text-white font-semibold text-2xl">
                  {item.title}
                </h4>
                <p className="text-[#998F8F] font-medium text-xl">
                  {item.description}
                </p>
                <span className="text-[#998F8F] text-sm">
                  {item.date_range}
                </span>
                <IoIosArrowRoundForward
                  size={30}
                  className="text-primary absolute  -rotate-45 top-2 right-3 group-hover:top-0 group-hover:right-0 transition-all delay-75"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {experiences && experiences.length > 3 && (
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

export default WorkExperience;
