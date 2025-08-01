import { FaHome } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { TfiGallery } from "react-icons/tfi";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "How It Works", href: "#how-it-works" },
  // {
  //   name: "Products",
  //   // href: "#company-hero",
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "Modular Kitchen",
  //       path: "#modular-kitchen",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Living Room",
  //       path: "#living-room",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Bedroom Design",
  //       path: "#bedroom-design",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Dining Room Design",
  //       path: "#dining-room",
  //       newTab: false,
  //     },
  //   ],
  // },
  { name: "Pricing", href: "#offer-packages" },
  { name: "Gallery", href: "#what-we-do" },
  { name: "About", href: "#about-us" },
];

const navigationFrFixed = [
  { name: "Home", Icon: FaHome, href: "#hero" },
  { name: "Pricing", Icon: IoIosPricetags, href: "#offer-packages" },
  { name: "Gallery", Icon: TfiGallery, href: "#what-we-do" },
  { name: "Menu", Icon: FiMenu, href: "#menu" },
]

export { navigation, navigationFrFixed };
