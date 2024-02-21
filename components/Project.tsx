import React, { useState } from "react";
import PageLayout from "./PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/fonts/font";
import { Github, LucideView } from "lucide-react";
import { project_data } from "@/data/project";
export default function Project() {
  return (
    <PageLayout
      scrollDownTo="experience"
      scrollUpTo="home"
      className="bg-gray-100"
    >
      <main className=" flex flex-col h-full ">
        <section className="flex flex-col  items-center pt-3">
          <p className=" text-sm lg:text-lg text-gray-600">Browse My Recent</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl ">Projects</p>
        </section>
        <section className="flex gap-3 flex-col justify-center -mt-8 h-full items-center">
          <p className="text-sm  text-gray-500 text-center">
            &#x2015;&#x2015; swipe to see more &#x2015;&#x2015;
          </p>
          <Carousel className="w-[95%] md:w-[70%]">
            <CarouselContent>
              {project_data.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 ">
                  <div className="rounded-lg group  flex flex-col h-[500px]   bg-white ">
                    <div className="  h-[350px]  cursor-pointer group2 rounded-t-md relative   w-full overflow-hidden ">
                      <Image
                        priority
                        src={`/projects/${item.image}.png`}
                        fill
                        alt=""
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col gap-3 my-3 w-[95%] mx-auto">
                      <p className={`text-gray-500 text-sm`}>
                        {" "}
                        &#x2015; &#160; {index + 1}.{item.type}
                      </p>
                      <p className={`${montserrat.className} text-2xl`}>
                        {item.title}
                      </p>
                      <p className="text-gray-500 h-[80px] overflow-auto text-sm">
                        {item.about}
                      </p>
                      <div className="flex  items-center gap-4">
                        <Link
                          href={item.githubUrl}
                          className="flex text-gray-500 hover:text-black hover:underline transition-all"
                        >
                          <Github />
                          <span>Github</span>
                        </Link>
                        <Link
                          href={item.websiteUrl}
                          className="flex text-gray-500 hover:text-black hover:underline transition-all group-hover:animate-bounce group-hover:text-black"
                        >
                          <LucideView />
                          <span>Live Website</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
      </main>
    </PageLayout>
  );
}
