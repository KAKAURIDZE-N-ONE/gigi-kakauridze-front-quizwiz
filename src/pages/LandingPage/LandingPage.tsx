import React from "react";
import useScrollTo from "@/hooks/useScrollTo";
import { Hero } from "./components/Hero";

const LandingPage: React.FC = () => {
  useScrollTo({});

  return (
    <div className="landing Page overflow-hidden">
      <Hero />
    </div>
  );
};

export default LandingPage;
