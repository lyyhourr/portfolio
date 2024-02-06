import React from "react";
import PageLayout from "./PageLayout";

export default function Experience() {
  return (
    <PageLayout scrollDownTo="about" scrollUpTo="project">
      <main className=" flex flex-col  lg:gap-10 px-10 py-3 lg:py-10 h-full">
        <section className="flex flex-col  items-center">
          <p className="text-lg text-gray-600">Explore My</p>
          <p className="text-4xl ">Experiences</p>
        </section>
      </main>
    </PageLayout>
  );
}
