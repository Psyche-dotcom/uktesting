import React, { useState, useEffect } from "react";
import Footer from "@/parts/noAuth/Footer";
import BodyPage from "@/components/BodyPage";
import HerosectionFemale from "@/components/HeroSectionFemale";

export default function Home() {
  return (
    <div>
      <HerosectionFemale />
      <div className="hidden md:block">
        <BodyPage />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
