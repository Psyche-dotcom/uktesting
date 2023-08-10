import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/parts/noAuth/Footer";
import BodyPage from "@/components/BodyPage";
import HerosectionFemale from "@/components/HeroSectionFemale";
import IframePage from "@/components/IFrame";

export default function Home() {
  return (
    <div>
      <IframePage />
      <div
        className=" m-auto mb-10 view-page text-center"
        style={{ padding: "10rem 0" }}
      >
        <section
          style={{ maxWidth: "60rem", height: "30rem" }}
          className="w-full m-auto rounded-md card-view flex justify-center"
        >
          <div className="self-center">
            <p className="text-2xl font-semibold mb-5 text-black">You are...</p>
            <div className="flex gap-8">
              <Link className="home-image" href="/Malepage">
                <Image src="/asset/male.png" height={80} width={80} />
              </Link>
              <Link className="home-image" href="/Femalepage">
                <Image src="/asset/female.png" height={72} width={72} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden md:block">
        <BodyPage />
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
