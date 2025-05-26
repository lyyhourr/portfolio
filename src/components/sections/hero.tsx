import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import SocialLinks from "../social-links";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });

export default function HeroSection() {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10",
        spaceGrotesk.className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <Image
              src="/naruto.jpg"
              alt="Profile"
              width={160}
              priority
              height={160}
              className="relative rounded-full object-cover border-4 border-gray-700 shadow-2xl"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-white">
              MAM LYHUA
            </h1>
            <div className="text-xl sm:text-2xl text-gray-300 mb-2">
              4th Year MIS Student & Gen Z Developer
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I break things, fix them, and pretend it was intentional... while
            praying it works in production 🤣.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
