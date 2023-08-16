import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/parts/noAuth/Footer";
import BodyPage from "@/components/BodyPage";
import HerosectionMale from "@/components/HeroSection";
import HerosectionFemale from "@/components/HeroSectionFemale";
import AuthComponent from "@/parts/withAuth/AuthComponent";

export default function Home() {
  const [isGender, setIsGender] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const localGender = localStorage.getItem("gender");
    setIsGender(localGender);
  }, []);

  function handleGender(gender) {
    localStorage.setItem("gender", gender);
    setIsGender(gender);
    router.push("/");
  }

  return (
    <div>
      <AuthComponent />
      <div className="hidden md:block">
        <BodyPage />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
