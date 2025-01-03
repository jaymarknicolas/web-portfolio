import React from "react";
import { Banner } from "./components/Banner";
import RecentProjects from "./components/RecentProjects";
import WorkExperience from "./components/WorkExperience";
import Tools from "./components/Tools";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Banner />
      <RecentProjects />
      <WorkExperience />
      <Tools />
      <CTA />
    </div>
  );
}
