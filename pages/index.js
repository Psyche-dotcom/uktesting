import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/parts/noAuth/Footer";
import BodyPage from "@/components/BodyPage";
import HerosectionMale from "@/components/HeroSectionMale";
import HerosectionFemale from "@/components/HeroSectionFemale";

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
      {!isGender && (
        <div className=" lg:py-20 md:mb-10 p-5 sm:p-10 view-page text-center">
          <section
            style={{ maxWidth: "60rem", height: "35rem" }}
            className="w-full m-auto rounded-md card-view flex justify-center"
          >
            <div className="self-center">
              <p className="text-2xl font-semibold mb-5 text-black">
                You are...
              </p>
              <div className="flex gap-8">
                <button
                  className="home-image"
                  onClick={() => handleGender("male")}
                >
                  <Image src="/asset/male.png" height={80} width={80} />
                </button>
                <button
                  className="home-image"
                  onClick={() => handleGender("female")}
                >
                  <Image src="/asset/female.png" height={72} width={72} />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
      {isGender === "male" && <HerosectionMale />}
      {isGender === "female" && <HerosectionFemale />}

      <div className="hidden md:block">
        <BodyPage />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
