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
              My first internship started in September 2023. Back then, I didn’t
              even know what Flexbox or Grid were — all I had was basic HTML and
              confidence to show up and do my best. Luckily, I had a friend who
              helped me along the way. That’s when my coding journey truly
              began.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Outside of coding, I love watching anime — my top 1 of the list is{" "}
              <span className="text-white font-semibold">Naruto Kunn</span>. I
              also love football ( fan Neymar 🇧🇷 ) and music (fan Tena Zin).
              Riding moto to work + Tena songs is the best.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: "1+", label: "Years Work Experience" },
                { number: "3+", label: "Freelance Projects" },
                { number: "4+", label: "Bugs Ship in Production 💅" },
                { number: "1000+", label: "Project Ideas (All Failed 🤡)" },
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
              src="/nhom.jpg"
              alt="Workspace"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-2xl border border-gray-700/50 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
