import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerNav = [
  { name: "About us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Use Cases", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
];

const socialMediaLinks = [
  { icon: FaLinkedin, href: "#" },
  { icon: FaFacebook, href: "#" },
  { icon: FaXTwitter, href: "#" },
];

const companyDetails = [
  {
    title: "Email",
    desc: "studio6interiors5292@gmail.com",
    href: "mailto:studio6interiors5292@gmail.com",
  },
  { title: "Phone", desc: "904-346-3200", href: "tel:+91-904 3463200" },
  {
    title: "Address",
    desc: "1/98, STUDIO6 interiors Vadakku sambala thottam, kannampalayam, (opposite DMART -Ravuthur, Coimbatore, Tamil Nadu 641402",
    href: "",
  },
];

export { footerNav, socialMediaLinks, companyDetails };
