import { aboutme, education } from "@/data/about";
import Image from "next/image";
import PageLayout from "./PageLayout";

export default function About() {
  const EducationText = ({ schoolName }: { schoolName: string }) => (
    <div className="max-w-3xl flex items-center gap-1 text-sm md:text-base lg:text-lg">
      <p>-{schoolName}</p>
      {/* <p className="text-xs md:text-base  text-gray-500">({date})</p> */}
    </div>
  );
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
                unoptimized
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex items-center flex-col justify-between h-full gap-1 lg:gap-8 text-lg">
              <div className="h-full w-full flex flex-col gap-3">
                <p className="text-start text-2xl">Education: </p>
                {education.map((item) => (
                  <EducationText
                    // date={item.date}
                    schoolName={item.school}
                    key={item.school}
                  />
                ))}
              </div>
              <div className="w-full h-2 bg-black my-3"></div>
              <div className="h-full w-full">
                <p>Personal: </p>
                <p className="max-w-3xl text-justify text-sm sm:text-base ">
                  {aboutme}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
