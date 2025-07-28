import { useState, useEffect } from "react";
import { navigation } from "../../constants/headerConstant";
import FixedBottom from "../FixedBottom";
import studio6logo from "../../assets/STUDIO6LOGO.png";

export default function Header() {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleNavClick = (href) => {
    const target = document.querySelector(href);

    if (target) {
      const offset = 80; // Customize this value based on your header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
      const isSubmenuItem = navigation.some((nav) =>
        nav.submenu?.some((sub) => sub.path === href)
      );

      setActiveSection(isSubmenuItem ? "products" : href);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = 80; // adjust based on header height
      let closestSection = null;
      let minDistance = Infinity;

      for (const nav of navigation) {
        if (nav.href) {
          const section = document.querySelector(nav.href);
          if (section) {
            const distance = Math.abs(
              section.getBoundingClientRect().top - offset
            );
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = nav.href;
            }
          }
        }

        if (nav.submenu) {
          for (const sub of nav.submenu) {
            const section = document.querySelector(sub.path);
            if (section) {
              const distance = Math.abs(
                section.getBoundingClientRect().top - offset
              );
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = "products";
              }
            }
          }
        }
      }

      if (closestSection) {
        setActiveSection(
          closestSection === "products" ? null : `#${closestSection}`
        );
        setActiveSection((prev) =>
          closestSection === "products" ? "products" : closestSection
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const { classList } = document.body;

    if (navbarOpen) {
      classList.add("overflow-hidden");
    } else {
      classList.remove("overflow-hidden");
    }

    return () => classList.remove("overflow-hidden");
  }, [navbarOpen]);

  return (
    <>
      <header
        className={`header top-0 left-0 z-99 flex w-full items-center ${sticky
          ? "shadow-sticky fixed z-9999 bg-black/80 backdrop-blur-xs transition"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <a
                href="/"
                className={`header-logo block w-full ${sticky ? "md:py-5 py-2 lg:py-2" : "py-6"
                  } `}
              >
                <img
                  src={studio6logo}
                  alt="logo"
                  width={80}
                  height={20}
                  className="w-full"
                />
                <img
                  src={studio6logo}
                  alt="logo"
                  width={80}
                  height={20}
                  className="w-full hidden"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="lg:flex grow justify-center">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary !bg-transparent absolute top-1/2 right-4 translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden sm:block hidden outline outline-white"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${navbarOpen ? "top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "opacity-0" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${navbarOpen ? "top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`grow navbar border-body-color/50 fixed top-0 bottom-0 lg:h-auto h-screen z-50 w-[250px] rounded-r-lg border-[.5px] bg-black px-6 py-4 duration-700 lg:visible lg:static lg:w-auto lg:border-none  lg:!bg-transparent lg:opacity-100 ${navbarOpen ? "left-0 opacity-100" : "left-[-100%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {navigation.map((nav, index) => (
                      <li key={index} className="group relative">
                        {nav.href ? (
                          <a
                            href={nav.href}
                            className={`flex py-2 md:text-base text-sm font-bold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${activeSection === nav.href
                              ? "text-primary"
                              : "text-white hover:text-primary"
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(nav.href);
                            }}
                          >
                            {nav.name}
                          </a>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex py-2 md:text-base text-sm font-bold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${activeSection === "products"
                                ? "text-primary"
                                : "text-white hover:text-primary"
                                }`}
                            >
                              {nav.name}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative top-full left-0 rounded-sm bg-black/80 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {nav.submenu.map((submenuItem, index) => (
                                <a
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-white hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(submenuItem.path);
                                  }}
                                >
                                  {submenuItem.title}
                                </a>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-24 lg:pr-0">
                <a
                  href="tel:+91-904 3463200"
                  className="hidden px-7 py-2 md:text-base text-sm text-black font-bold bg-[#DBA160] hover:opacity-70 md:block rounded-4xl"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Backdrop navbarOpen={navbarOpen} navbarToggler={navbarToggleHandler} />

      <FixedBottom
        active={activeSection}
        handleNavClick={handleNavClick}
        navbarOpen={navbarOpen}
        navbarToggler={navbarToggleHandler}
      />
    </>
  );
}

const Backdrop = ({ navbarOpen, navbarToggler }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 backdrop-blur-xs ${navbarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={navbarToggler}
    ></div>
  );
};
