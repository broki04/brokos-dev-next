import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const SOCIAL_LINKS: { icon: IconType; href: string; label: string }[] = [
  { icon: FaGithub, href: "https://github.com/broki04", label: "GitHub" },
  {
    icon: FaInstagram,
    href: "https://instagram.com/brokikrul",
    label: "Instagram",
  },
  { icon: FaXTwitter, href: "https://x.com/brokicwoki", label: "Twitter" },
];
