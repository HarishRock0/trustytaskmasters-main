
import React from "react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-main-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
