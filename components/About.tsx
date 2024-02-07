import React from "react";
import PageLayout from "./PageLayout";
import Image from "next/image";

export default function About() {

  const EducationText = ({ schoolName, date }: { date: string, schoolName: string }) => (
    <div className="max-w-3xl flex items-center gap-1 text-sm md:text-base lg:text-lg">
      <p>
        -{schoolName}
      </p>
      <p className="text-xs md:text-base  text-gray-500">({date})</p>
    </div>
  )
  return (
    <PageLayout scrollDownTo="contact" scrollUpTo="experience">
      <main className=" flex flex-col  lg:gap-10 px-10 py-5 lg:py-20 h-full">
        <section className="flex flex-col  items-center">
          <p className=" text-sm lg:text-lg text-gray-600">Get To Know More</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl ">About Me</p>
        </section>
        <section className="flex flex-col  lg:mt-0 lg:flex-row justify-center    h-full items-center">
          <div className="flex flex-col lg:flex-row  gap-6">
            <div className="mx-auto lg:mx-0 w-2/3 flex justify-center  lg:justify-end items-center  ">
              <Image
                priority
                src={"/about-me.png"}
                width={400}
                height={400}
                alt="about me img"

              />
            </div>
            <div className="w-full flex items-center flex-col justify-between h-full gap-1 lg:gap-8 text-lg">
              <div className="h-full w-full flex flex-col gap-3">
                <p className="text-start text-2xl">Education:  </p>
                <EducationText date="Current" schoolName="Setect Insitute" />
                <EducationText date="Current" schoolName="ACE" />
                <EducationText date="completed 2023" schoolName="KIT python course" />
                <EducationText date="graduted 2020" schoolName="Highschool" />
              </div>
              <div className="w-full h-2 bg-black my-3"></div>
              <div className="h-full w-full">
                <p>Personal:  </p>
                <p className="max-w-3xl text-justify text-sm sm:text-base ">
                  Lorem ipsum dolor sitmet consectetur adipisicing elit.
                  Perferendis fugiat aut facilis optio aliquam itaque quos

                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
