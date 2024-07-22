"use client";
import { spaceGrotesk } from "@/fonts/font";
import Image from "next/image";
import React from "react";
import Navbar, { scrollToSection } from "./Navbar";

export default function HomePage() {
  const TextStroke = ({
    className,
    strokeLevel,
    text,
  }: {
    text: string;
    className?: string;
    strokeLevel?: string;
  }) => (
    <span
      style={{
        color: "white",
        WebkitTextStroke: `${strokeLevel || 2}px black`,
      }}
      className={className}
    >
      {text}
    </span>
  );
  return (
    <div className="w-full h-screen flex flex-col  px-5 xl:px-32">
      <Navbar />
      <main className="flex flex-col lg:flex-row-reverse lg:gap-4  h-full items-center justify-evenly -mt-20">
        <section className="w-full flex justify-center items-center lg:justify-start">
          <Image
            priority
            src={"/code-guy.png"}
            width={10000}
            height={10000}
            alt=""
            unoptimized
            className="w-[500px] lg:w-[600px]"
          />
        </section>
        <section className="w-full flex justify-center -mt-20 lg:mt-0  flex-col gap-2 items-center lg:items-end lg:p-2 ">
          <div className="text-center">
            <p
              className={` uppercase text-4xl sm:text-5xl lg:text-7xl lg:text-center font-extrabold ${spaceGrotesk.className}`}
            >
              {TextStroke({ text: "Hi there!!", className: "" })}
              <br />
              <span className={`font-extrabold`}>I&apos;m Mam Lyhua</span>
            </p>
            <div className="flex gap-4 w-full pt-7 justify-center lg:gap-12">
              <button
                className="text-black text-lg px-3 py-2 lg:py-5 lg:px-7 lg:text-2xl bg-slate-100 hover:bg-slate-200 transition-all border-black border-2 rounded-md"
                onClick={() => scrollToSection("contact")}
              >
                Contact Now
              </button>
              <button
                className="bg-black hover:bg-slate-900 transition-all text-lg px-5 py-2 lg:py-5 lg:px-7 lg:text-2xl text-white rounded-md"
                onClick={() => scrollToSection("project")}
              >
                Explore More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
