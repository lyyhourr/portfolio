import { cn } from "@/lib/utils";
import { Building2, Calendar, MapPin } from "lucide-react";

const workExperience = [
  {
    company: "KG Software Solutions.",
    position: "Frontend Internship",
    duration: "Sep 2023 - Mar 2024",
    location: "Phnom Penh",
    type: "Part-time",
    description: [
      "Built basic UI components and layouts to support ongoing projects.",
      "Assisted senior developers with frontend development tasks and bug fixes.",
    ],
    technologies: ["React Js", "TypeScript", "Tailwind CSS", "Next.Js"],
    gradient: "from-blue-900/20 to-indigo-900/20",
    iconBg: "from-blue-600 to-indigo-600",
  },
  {
    company: "Edemy.",
    position: "Junior React Js Developer",
    duration: "Apr 2024 - Mar 2025",
    location: "Phnom Penh",
    type: "Full-time",
    description: [
      "Developed the frontend of the MIS system using React.js.",
      "Integrated frontend  with backend APIs to ensure seamless data flow.",
      "Collaborated closely with senior backend developers to implement and troubleshoot features.",
    ],
    technologies: ["React Js", "TypeScript", "Mantine UI"],
    gradient: "from-emerald-900/20 to-teal-900/20",
    iconBg: "from-emerald-600 to-teal-600",
  },
  {
    company: "LDI.",
    position: "Full Stack Developer",
    duration: "Apr 2025 - Current",
    location: "Phnom Penh",
    type: "Full-time",
    description: [
      "Develop and maintain ERP and CRM systems, handling both frontend and backend development.",
      "Actively learning and improving DevOps skills to better support deployment and infrastructure management.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Shadcn UI",
      "Nest js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    gradient: "from-purple-900/20 to-pink-900/20",
    iconBg: "from-purple-600 to-pink-600",
  },
];

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-200">
            Work Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
          <div className="w-32 h-0.5 bg-gray-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700/50 hidden md:block"></div>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full border-4 border-gray-900 hidden md:block"></div>
                <div className="md:ml-20">
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl bg-gradient-to-br backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-[1.01] hover:-translate-y-1",
                      job.gradient
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gray-600/10 rounded-full blur-xl"></div>
                    <div className="relative p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={cn(
                              "w-12 h-12 bg-gradient-to-br  rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300",
                              job.iconBg
                            )}
                          >
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                              {job.position}
                            </h3>
                            <p className="text-lg text-gray-300 font-semibold">
                              {job.company}{" "}
                              {job.company.includes("Edemy") ? (
                                <span className="text-sm">
                                  ( Learned a lot there 🥺 )
                                </span>
                              ) : (
                                ""
                              )}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{job.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                              <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <ul className="space-y-2">
                          {job.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-700/30 hover:bg-gray-700/50 hover:text-gray-200 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-10 w-1 h-1 bg-gray-500 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-gray-600 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-gray-500 rounded-full animate-bounce opacity-25"></div>
      </div>
    </section>
  );
}
