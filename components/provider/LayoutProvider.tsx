"use client";
import Header from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { Profile } from "../global/Profile";
import NeonCursor from "./CanvasCursor";

const LayoutProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="relative">
      <Header />
      <div className="container mx-auto  mt-[11.5rem]">
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-4 relative"></div>
          <div className="col-start-6 col-end-13 ">{children}</div>
        </div>
      </div>
      <Profile />

      <Footer />
      <NeonCursor />
    </main>
  );
};

export default LayoutProviders;
