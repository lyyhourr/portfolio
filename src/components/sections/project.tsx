import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const projects = [
  {
    title: "Pop Horn",
    description:
      "My very first web project that got me out of tutorial hell and helped me understand what  API is. The code is messy, but I'm still proud of it.",
    image: "/pophorn.png",
    technologies: ["Next.js", "TypeScript", "Shadcn UI", "Swiper Js"],
    live: "https://pophorn.vercel.app",
  },
  {
    title: "Flex Gear",
    description:
      "This is where I started learning React Context and got a better understanding of React hooks.",
    image: "/flex-gear.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    live: "https://flexgearr.vercel.app/",
  },
  {
    title: "Recipe Box",
    description:
      "I built this project with a friend — it was my first time using Git and working with someone else on the same codebase.( basically just add, commit, push 🤣 )",
    image: "/flex-gear.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://recipesboxx.netlify.app/",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Projects I worked on in my free time during my 6-month internship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-gray-900/80 border-gray-700/50 hover:border-white/50 transition-all duration-500 transform  hover:shadow-2xl hover:shadow-white/10"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover  transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3 text-white group-hover:text-gray-300 transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="mb-4 text-gray-300">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    asChild
                    className="bg-white text-black hover:bg-gray-200 border-0 shadow-lg shadow-white/10"
                  >
                    <Link href={project.live} target="_blank">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
