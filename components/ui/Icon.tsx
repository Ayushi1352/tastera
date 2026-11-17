import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaStar, FaYoutube } from "react-icons/fa";
import {
  LuArrowRight,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClock3,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMoveRight,
  LuPhone,
  LuPhoneCall,
  LuPlus,
  LuUser,
  LuUsers,
  LuUtensils,
  LuX,
} from "react-icons/lu";
import { RiDoubleQuotesL } from "react-icons/ri";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaYoutube,
  LuArrowRight,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClock3,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMoveRight,
  LuPhone,
  LuPhoneCall,
  LuPlus,
  LuUser,
  LuUsers,
  LuUtensils,
  LuX,
  RiDoubleQuotesL,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu); the filled icons keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? LuUtensils;
  const outline = name.startsWith("Lu");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};
