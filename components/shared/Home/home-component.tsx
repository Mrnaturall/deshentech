"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const HomeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // delay for smoother transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`grid grid-cols-2 mx-auto bg-[#eeeeee] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-[50vh]">
        <h1 className="w-[200px] text-4xl font-extrabold ml-[100px] mt-15 font-sans">
          i am Engr. Ngozi Favour Nwachukwu
        </h1>
        <Button className="h-[25px] ml-[100px] mt-4">Download CV</Button>
      </div>
      <div></div>
    </div>
  );
};

export default HomeComponent;
