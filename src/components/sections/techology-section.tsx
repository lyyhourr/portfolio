import Image from "next/image";
import AnimationWrapper from "../animation-wrapper";

const technologies = [
  {
    name: "React.js",
    image: "/logo/react.png",
    gradient: "from-cyan-950/50 via-slate-900/80 to-blue-950/50",
    accent: "bg-cyan-500",
    glow: "bg-cyan-500/20",
    logoScale: "scale-100",
  },
  {
    name: "Next.js",
    image: "/logo/next.png",
    gradient: "from-violet-950/50 via-slate-900/80 to-blue-950/50",
    accent: "bg-violet-500",
    glow: "bg-violet-500/20",
    logoScale: "scale-125",
  },
  {
    name: "TypeScript",
    image: "/logo/ts.png",
    gradient: "from-blue-950/50 via-indigo-950/80 to-slate-900/50",
    accent: "bg-blue-500",
    glow: "bg-blue-500/20",
    logoScale: "scale-100",
  },
  {
    name: "Tailwind CSS",
    image: "/logo/tw.png",
    gradient: "from-cyan-950/50 via-teal-950/80 to-slate-900/50",
    accent: "bg-cyan-400",
    glow: "bg-cyan-400/20",
    logoScale: "scale-100",
  },
  {
    name: "Node.js",
    image: "/logo/node.png",
    gradient: "from-green-950/50 via-emerald-950/80 to-slate-900/50",
    accent: "bg-green-500",
    glow: "bg-green-500/20",
    logoScale: "scale-100",
  },
  {
    name: "Nest.js",
    image: "/logo/nest.svg",
    gradient: "from-red-950/50 via-rose-950/80 to-slate-900/50",
    accent: "bg-red-500",
    glow: "bg-red-500/20",
    logoScale: "scale-105",
  },
  {
    name: "Express.js",
    image: "/logo/expressjs.webp",
    gradient: "from-zinc-950/80 via-slate-900/80 to-neutral-950/80",
    accent: "bg-neutral-400",
    glow: "bg-neutral-400/20",
  },
  {
    name: "PostgreSQL",
    image: "/logo/psql.png",
    gradient: "from-indigo-950/50 via-blue-950/80 to-slate-900/50",
    accent: "bg-indigo-500",
    glow: "bg-indigo-500/20",
    logoScale: "scale-115",
  },
];

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-200">
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My &quot;YouTube Tech Stack&quot; — the tools I picked up while
            grinding through tutorials 🤣
          </p>
          <div className="w-32 h-0.5 bg-gray-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <AnimationWrapper
              key={tech.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tech.gradient} backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${tech.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                <div className="relative p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className={`object-contain transition-all duration-300 group-hover:scale-110 ${tech.logoScale}`}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-100 mb-3">
                    {tech.name}
                  </h3>

                  <div
                    className={`w-12 h-0.5 ${tech.accent} mx-auto rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        <div className="absolute top-20 left-10 w-1 h-1 bg-gray-500 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-gray-600 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-gray-500 rounded-full animate-bounce opacity-25"></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-gray-600 rounded-full animate-ping opacity-25 delay-1000"></div>
      </div>
    </section>
  );
}
