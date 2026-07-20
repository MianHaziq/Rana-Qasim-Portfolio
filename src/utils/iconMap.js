import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiDocker,
  SiPostman,
  SiVercel,
  SiGit,
  SiTypescript,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

/**
 * Maps plain string keys (used in src/data/*.js) to icon components.
 * Keeps data files JSX-free while letting every section render real icons.
 */
export const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  docker: SiDocker,
  postman: SiPostman,
  vercel: SiVercel,
  git: SiGit,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
};

export function getIcon(key) {
  return iconMap[key] ?? null;
}
