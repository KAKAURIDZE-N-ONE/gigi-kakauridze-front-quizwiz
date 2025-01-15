import React, { useEffect } from "react";
import useScrollTo from "@/hooks/useScrollTo";
import { Hero } from "./components/Hero";
import { getCategoriesLength } from "@/services/apiCategories";

const LandingPage: React.FC = () => {
  useScrollTo({});

  useEffect(() => {
    async function x() {
      await getCategoriesLength();
    }
    x();
  }, []);

  return (
    <div className="landing Page overflow-hidden">
      <Hero />
    </div>
  );
};

export default LandingPage;
