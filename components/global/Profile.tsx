import React from "react";
import Image from "next/image";
import { FaDribbble, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    name: "Thread",
    url: "https://www.threads.net/",
    icon: <TbBrandThreads size={20} className="text-inherit" />,
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    icon: <FaDribbble size={20} className="text-inherit" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram size={20} className="text-inherit" />,
  },
  {
    name: "Email",
    url: "mailto:example@example.com",
    icon: <HiOutlineMail size={20} className="text-inherit" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin size={20} className="text-inherit" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: <FaGithub size={20} className="text-inherit" />,
  },
];

export const Profile = () => {
  return (
    <div className="fixed mx-auto container bottom-0 left-0 right-0 -z-10  top-0 mt-[21.5rem]">
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-4 relative">
          <div className="  bg-white rounded-tl-2xl rounded-tr-2xl p-16 space-y-10 pb-10 ">
            <div
              className="container mx-auto rounded-2xl w-full relative overflow-hidden pt-16"
              style={{
                background:
                  "linear-gradient(220.21deg, #691E02 3.31%, #C24617 63.27%)",
              }}
            >
              <Image
                src="/nick.png"
                alt="Jay Mark Nicolas"
                width={322}
                height={415}
                objectFit="cover"
                className="block mx-auto !-mb-1"
              />
            </div>
            <div className="description">
              <h2 className="text-2xl font-bold uppercase text-center">
                Jay Mark Nicolas
              </h2>
              <p className="font-medium text-lg text-center text-[#998F8F]">
                A Software Engineer who has developed countless innovative
                solutions.
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="no-underline text-primary flex items-center justify-center"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-start-6 col-end-13"></div>
      </div>
    </div>
  );
};
