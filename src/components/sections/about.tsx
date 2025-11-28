import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              My Coding
              <span className="text-gray-300"> Journey</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              I began learning coding seriously during my internship, starting
              with basic HTML and a lot of curiosity. Guided by a friend, I
              learned the basics and soon could build projects on my own. I
              discovered how fun coding can be and have been exploring new
              technologies, trying out different tools, and creating projects
              that solve real-world problems. Coding has taught me patience,
              problem-solving, and the joy of seeing ideas come to life.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Outside of coding, I enjoy watching movies, playing football, and
              music. I believe that balancing work, hobbies, and fun helps me
              stay motivated and keep growing every day.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: "2+", label: "Years of Work Experience" },
                { number: "24/7", label: "Passion for Learning" },
                { number: "4+", label: "Freelance Projects Completed" },
                { number: "∞", label: "Opportunities to Grow" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
            <Image
              src="/me2.jpg"
              alt="Workspace"
              width={500}
              priority
              height={500}
              className="relative rounded-2xl shadow-2xl border border-gray-700/50 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
