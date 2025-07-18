import SocialLinks from "../social-links";

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-black border-t border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <SocialLinks />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mam Lyhua.
          </p>
        </div>
      </div>
    </footer>
  );
}
