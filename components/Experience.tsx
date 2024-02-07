import React, { ReactNode } from "react";
import PageLayout from "./PageLayout";
import { WorkExperience, techs } from "@/data/experince";
import Image from "next/image";
import { imbPlexSans, lato, montserrat, spaceGrotesk } from "@/fonts/font";

export default function Experience() {
  const Card = ({
    children,
    title,
  }: {
    children: ReactNode;
    title: string;
  }) => {
    return (
      <div className={` w-full border-2 border-gray-600 rounded-lg `}>
        <p
          className={`${lato.className} text-center text-2xl md:text-4xl text-gray-500 py-5`}
        >
          {title}
        </p>
        <main className="pb-3">{children}</main>
      </div>
    );
  };

  const ExperienceCard = ({
    detail,
    duration,
    title,
  }: {
    title: string;
    duration: string;
    detail: string;
  }) => (
    <div className="flex flex-col gap-1 w-full">
      <h1 className="text-lg first-letter:uppercase">
        {title} <span className="text-base text-gray-500">({duration})</span>
      </h1>
      <p className="text-gray-700 text-sm">-{detail}</p>
    </div>
  );

  return (
    <PageLayout scrollDownTo="about" scrollUpTo="project">
      <main className=" flex flex-col h-full xl:justify-center  lg:items-center gap-3 lg:gap-10 py-2">
        <section className="text-center">
          <p className="text-lg text-gray-600">Explore My</p>
          <p className="text-4xl lg:text-6xl ">Experiences</p>
        </section>
        <section className="flex flex-col lg:flex-row w-full px-3 sm:px-16 md:px-24 xl:px-16 gap-4 lg:gap-10 ">
          <Card title="Tech Used">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2  gap-5">
              {techs.map((item) => (
                <div
                  key={item.img}
                  className="flex ml-[30px] lg:ml-[50px] xl:ml-[100px] items-center   gap-2"
                >
                  <Image
                    key={item.img}
                    src={`/techs/${item.img}.svg`}
                    width={35}
                    height={35}
                    alt=""
                    className="rounded-md w-[35px] h-[35px] "
                  />
                  <p className="first-letter:uppercase ">{item.name}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card title="Work Experience">
            <div className="flex flex-col gap-2 pl-5">
              <div className="flex justify-center flex-col  gap-2 w-full">
                {WorkExperience.map((item) => (
                  <ExperienceCard
                    key={item.job}
                    detail={item.detail}
                    duration={item.duration}
                    title={item.job}
                  />
                ))}
              </div>
            </div>
          </Card>
        </section>
      </main>
    </PageLayout>
  );
}
