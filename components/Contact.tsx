"use client";
import React from "react";
import PageLayout from "./PageLayout";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/contact";
import { scrollToSection } from "./Navbar";
import Routes from "./Routes";

export default function Contact() {
  return (
    <PageLayout scrollDownTo="home" scrollUpTo="about" disableScrollDown>
      <main className=" flex flex-col h-full md:mt-0 mt-8 justify-evenly">
        <section className="flex flex-col gap-6 lg:gap-16 ">
          <div className="text-center">
            <p className="text-lg text-gray-600">Get in Touch</p>
            <p className="text-4xl lg:text-7xl ">Contact Me</p>
          </div>
          <div className="border-2 border-black rounded-2xl grid sm:grid-cols-2 gap-5 py-2 lg:py-8 w-[90%] md:w-[70%] lg:w-[55%] xl:w-[50%] mx-auto pl-5">
            {contact.map((item) => (
              <Link
                href={item.href}
                key={item.text}
                className={`flex items-center  ${
                  item.img === "fb2" && "hover:underline"
                } ${item.img === "tele" && "hover:underline"}`}
              >
                <Image
                  src={`/contact/${item.img}.png`}
                  width={50}
                  height={50}
                  alt=""
                  className=" p-2 "
                />
                <p className="text-lg">{item.text}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-3 font-sans mt-5">
          <div className="grid grid-cols-2   text-xl gap-1 sm:gap-3 md:flex md:justify-center">
            <Routes />
          </div>
          <p
            className={` text-sm sm:text-xl text-gray-400 text-center hover:text-black transition-all cursor-default`}
          >
            Copyright © 2024 Mam Lyhua. All Rights Reserved.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
