"use client";
import { imbPlexSans, prozaLibre } from "@/fonts/font";
import { Download, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const routes = ["project", "experience", "about", "contact"];
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [onPage, setOnPage] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  const ResumeButton = () => {
    const handleDownload = () => {
      const fileUrl = "/cv/cv_mamlyhua.pdf";

      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "mamlyhua-CV.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    return (
      <button
        className="bg-black rounded-md text-lg px-3 py-2 sm:px-5 sm:py-2 text-white flex items-center gap-1  transition-all hover:bg-slate-900"
        onClick={handleDownload}
      >
        <Download />
        Resume
      </button>
    );
  };

  return openMenu ? (
    <motion.div
      className={`${imbPlexSans.className} fixed w-screen h-screen bg-white p-10`}
      initial={{ y: -500 }}
      animate={{ y: 0 }}
    >
      <div className="flex w-full justify-end">
        <button className="" onClick={() => setOpenMenu(false)}>
          <X className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 ">
        <button
          className={` text-lg uppercase hover:text-xl hover:underline transition-all ${
            "home" === onPage && "underline text-3xl"
          }`}
          onClick={() => {
            scrollToSection("home"), setOpenMenu(false);
          }}
        >
          Home
        </button>
        {routes.map((item) => (
          <button
            key={item}
            className={` text-lg uppercase hover:text-xl hover:underline transition-all ${
              item === onPage && "underline text-3xl"
            }`}
            onClick={() => {
              scrollToSection(item), setOpenMenu(false);
            }}
          >
            {item}
          </button>
        ))}
        {ResumeButton()}
      </div>
    </motion.div>
  ) : (
    <nav
      className={`${imbPlexSans.className} flex z-10 items-center w-full h-[70px] justify-between`}
    >
      <section>
        <button
          className={`${prozaLibre.className} text-2xl lg:text-3xl uppercase`}
          onClick={() => scrollToSection("home")}
        >
          hour.dev
        </button>
      </section>
      <section className="hidden lg:flex gap-5 items-center">
        {routes.map((item) => (
          <button
            key={item}
            className={` text-lg uppercase hover:text-xl hover:underline transition-all ${
              item === onPage && "underline text-3xl"
            }`}
            onClick={() => {
              scrollToSection(item), setOnPage(item);
            }}
          >
            {item}
          </button>
        ))}
      </section>
      <section className="flex items-center gap-2">
        {ResumeButton()}
        <button className="lg:hidden" onClick={() => setOpenMenu(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </section>
    </nav>
  );
}
