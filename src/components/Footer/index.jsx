import { FaWhatsapp } from "react-icons/fa";
import {
  companyDetails,
  footerNav,
  socialMediaLinks,
} from "../../constants/footerConstant";
import studio6logo from "../../assets/STUDIO6LOGO.png";

const MapEmbed = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-lg">
      <iframe
        title="Studio6 Interiors Location"
        src="https://www.google.com/maps?q=STUDIO6+interiors,+Vadakku+sambala+thottam,+Kannampalayam,+Coimbatore,+Tamil+Nadu+641402&output=embed"
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer lg:pt-16 md:pt-12 pt-8 sm:pb-0 pb-[120px]">
      <div className="container">
        <div className="bg-gray-800 text-white lg:py-10 lg:px-8 p-4 rounded-3xl">
          <div className="lg:mb-10 mb-6">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
              <div className="lg:w-2/6 px-4">
                <img
                  src={studio6logo}
                  alt="logo"
                  width={80}
                  height={20}
                />
              </div>
              <div className="lg:w-3/6 px-4">
                <div className="flex lg:flex-row flex-col justify-center gap-4">
                  {footerNav.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="lg:text-base md:text-sm text-xs text-white transition-colors duration-200 !underline"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/6 px-4">
                <div className="flex flex-row gap-4">
                  {socialMediaLinks.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="text-white text-2xl"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mb-10 mb-6">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
              <div className="lg:w-2/6 px-4">
                <h4 className="md:text-lg text-base text-primary font-semibold mb-4">
                  Contact us:
                </h4>

                <div className="flex flex-col gap-4 mt-2">
                  {companyDetails.map((item, index) => (
                    <div
                      className="text-white  transition-colors duration-200 flex flex-row gap-1"
                      key={index}
                    >
                      <h5 className="lg:text-base md:text-sm text-xs">
                        {item.title}:
                      </h5>
                      <a
                        href={item.href}
                        className={item.href ? "hover:text-primary" : ""}
                      >
                        <p className="lg:text-base md:text-sm text-xs">
                          {item.desc}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/6 w-full lg:px-4">
                <MapEmbed />
              </div>
              <div className="lg:w-2/6 lg:px-4">
                <div className="bg-dark/20 lg:py-10 py-4 rounded-2xl">
                  <div className="flex flex-row justify-between items-center px-4 py-2">
                    {/* <input
                      type="email"
                      placeholder="Email"
                      className="w-1/2 lg:p-4 p-2 rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary border-2"
                    /> */}
                    <a
                      href="https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products"
                      className="flex items-center gap-2 w-full h-full ml-4 !bg-primary text-black !p-2 lg:!p-4 rounded-md hover:bg-primary-dark transition-colors duration-200 lg:text-base md:text-sm text-xs font-bold"
                    >
                      <div className="bg-[#28a519] p-2 rounded-full shadow-md">
                        <FaWhatsapp className="text-white w-6 h-6" />
                      </div>
                      Book a free consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="lg:mt-10 mt-6">
            <div className="px-4">
              <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start gap-4">
                <p className="text-white lg:text-base md:text-sm text-xs">
                  © {new Date().getFullYear()} Positivus. All rights reserved.
                </p>

                <a
                  href="#"
                  className="text-white transition-colors duration-200 !underline lg:text-base md:text-sm text-xs"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
