import {
  Atom,
  Code,
  Database,
  FileCode,
  Hexagon,
  Palette,
  Route,
  Server,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    icon: Code,
    gradient: "from-slate-700/40 to-gray-700/40",
    iconBg: "from-slate-600 to-gray-600",
    accent: "bg-slate-500/30",
  },
  {
    name: "React.js",
    icon: Atom,
    gradient: "from-blue-900/30 to-slate-800/40",
    iconBg: "from-blue-700 to-slate-600",
    accent: "bg-blue-600/30",
  },
  {
    name: "TypeScript",
    icon: FileCode,
    gradient: "from-blue-900/30 to-indigo-900/30",
    iconBg: "from-blue-600 to-indigo-600",
    accent: "bg-blue-500/30",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    gradient: "from-cyan-900/30 to-teal-900/30",
    iconBg: "from-cyan-600 to-teal-600",
    accent: "bg-cyan-500/30",
  },
  {
    name: "Node.js",
    icon: Server,
    gradient: "from-green-900/30 to-emerald-900/30",
    iconBg: "from-green-600 to-emerald-600",
    accent: "bg-green-500/30",
  },
  {
    name: "Express.js",
    icon: Route,
    gradient: "from-gray-800/40 to-slate-800/40",
    iconBg: "from-gray-600 to-slate-600",
    accent: "bg-gray-500/30",
  },
  {
    name: "Nest.js",
    icon: Hexagon,
    gradient: "from-red-900/30 to-pink-900/30",
    iconBg: "from-red-600 to-pink-600",
    accent: "bg-red-500/30",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    gradient: "from-blue-900/30 to-slate-900/30",
    iconBg: "from-blue-600 to-slate-600",
    accent: "bg-blue-500/30",
  },
];

export default function TechnologySection() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-200">
            Technologies & Tools I Used
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My &quot;YouTube Tech Stack&quot; — the tools I picked up while
            grinding through tutorials 🤣
          </p>
          <div className="w-32 h-0.5 bg-gray-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tech.gradient} backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute top-2 right-2 w-8 h-8 bg-gray-600/10 rounded-full blur-lg"></div>

              <div className="relative p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${tech.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-all duration-300`}
                >
                  <tech.icon className="h-8 w-8 text-gray-100" />
                </div>

                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-gray-100 transition-colors duration-300 mb-2">
                  {tech.name}
                </h3>

                <div
                  className={`w-12 h-0.5 ${tech.accent} mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            </div>
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
