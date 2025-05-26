import { Button } from "@/components/ui/button";
import { Facebook, Github, Send } from "lucide-react";
import Link from "next/link";

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/lyyhourr",
    label: "GitHub",
  },
  {
    icon: Send,
    href: "https://t.me/lyhuamam",
    label: "Telegram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/lyy.hour.812552",
    label: "Facebook",
  },
];

export default function SocialLinks() {
  return socialLinks.map((social, index) => (
    <Link
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
    >
      <Button
        variant="outline"
        size="icon"
        className="border-gray-700 bg-gray-900/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-110"
      >
        <social.icon className="h-5 w-5" />
      </Button>
    </Link>
  ));
}
