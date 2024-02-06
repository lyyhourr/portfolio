import React from "react";
import PageLayout from "./PageLayout";
import Image from "next/image";

export default function About() {
  return (
    <PageLayout scrollDownTo="contact" scrollUpTo="experience">
      <main className=" flex flex-col  lg:gap-10 px-10 py-5 lg:py-20 h-full">
        <section className="flex flex-col  items-center">
          <p className=" text-sm lg:text-lg text-gray-600">Get To Know More</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl ">About Me</p>
        </section>
        <section className="flex flex-col  lg:mt-0 lg:flex-row justify-center -mt-20   h-full items-center">
          <div className="flex flex-col lg:flex-row  gap-6">
            <div className="mx-auto lg:mx-0 w-2/3 flex justify-center  lg:justify-end items-center ">
              <Image
                priority
                src={"/about-me.png"}
                width={400}
                height={400}
                alt="about me img"
                className="w-auto h-auto"
              />
            </div>
            <div className="w-full flex items-center h-full">
              <p className="max-w-3xl text-justify text-sm sm:text-base ">
                Lorem ipsum dolor sitmet consectetur adipisicing elit.
                Perferendis fugiat aut facilis optio aliquam itaque quos
                aperiam, nam porro voluptates. Ad iste pariatur qui animi
                doloremque ducimus officia similique aut?met consectetur
                adipisicing elit. Perferendis fugiat aut facilis optio aliquam
                itaque quos aperiam, nam porro voluptates. Ad iste pariatur qui
                animi doloremque ducimus officia similique aut?met consectetur
                adipisicing elit. Perferendis fugiat aut facilis optio aliquam
                itaque quos aperiam, nam porro voluptates. Ad iste pariatur qui
                animi doloremque ducimus officia similique aut?t?
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
