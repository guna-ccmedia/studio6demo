import { FaChevronDown } from "react-icons/fa";
import { TitleHeading } from "../TitleHeader";
import { offerPackages } from "../../constants/offerPackagesConstant";
import { PricingBackground, TickIcon } from "../../svg/svg";
import { useState } from "react";

const OfferPackages = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleNavClick = (href) => {
    let uri = `#${href}`;
    const target = document.querySelector(uri);

    if (target) {
      const offset = 80; // Customize this value based on your header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActiveSection(href);
    }
  };

  return (
    <>
      <section
        className="offer-packages lg:py-16 md:py-12 py-8"
        id="offer-packages"
      >
        <div className="bg-black">
          <div className="container">
            <div className="text-center lg:mb-16 md:mb-12 mb-8">
              <TitleHeading className="text-center text-white mb-4 uppercase">
                Offer Packages
              </TitleHeading>
            </div>

            <div className="grid md:grid-cols-3 gap-4 lg:mb-16 md:mb-12 mb-8">
              {offerPackages.map((packageItem, index) => (
                <div key={index}>
                  <div
                    className="bg-white relative"
                    onClick={() => {
                      console.log(packageItem.id);
                      handleNavClick(packageItem.id);
                    }}
                  >
                    <div className="relative md:h-[340px] sm:[280px] h-[200px]">
                      <img
                        src={packageItem.src}
                        alt={packageItem.name}
                        className="w-full h-full object-cover mb-4"
                      />
                      {/* <span className="bg-[#E87070] p-2 absolute top-5 left-5 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      -30%
                    </span> */}
                    </div>

                    <div className="px-6 py-4">
                      {/* <div className="uppercase lg:text-lg md:text-base text-sm text-black">
                      offer
                    </div> */}
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-black mb-2 uppercase">
                        {packageItem.name}
                      </h3>
                      <p className="lg:text-base md:text-sm text-xs text-gray-600 mb-2">
                        {packageItem.type}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[#A36E2A] font-bold lg:text-lg md:text-base text-sm">
                          {packageItem.newPrice}
                        </span>
                        {/* <span className="text-gray-500 line-through lg:text-lg md:text-base text-sm">
                        {packageItem.oldPrice}
                      </span> */}
                      </div>
                      <button
                        className="flex items-center gap-2 !bg-primary text-black !p-2 lg:!p-4 rounded-md hover:bg-primary-dark transition-colors duration-200 md:text-sm text-xs font-bold mt-4 md:hidden"
                        onClick={() => handleToggle(index)}
                      >
                        {activeIndex === index
                          ? "Hide Details"
                          : "View Details"}
                        <FaChevronDown className="text-black w-3 h-3" />
                      </button>

                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden transform ${activeIndex === index
                            ? "max-h-[1000px] opacity-100 scale-100 mt-8 md:mt-12"
                            : "max-h-0 opacity-0 scale-95 mt-0"
                          }`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {packageItem.content.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="text-gray-700 flex flex-col">
                                <div className="lg:text-xl md:text-lg text-base font-bold">
                                  <div className="flex gap-2 items-center mb-4">
                                    <span class="bg-primary/10 text-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                                      <TickIcon />
                                    </span>
                                    {item.title}
                                  </div>
                                </div>
                                <ul className="pl-6 list-disc flex flex-col justify-center gap-2">
                                  {item.description.map((desc, descIdx) => (
                                    <li
                                      key={descIdx}
                                      className="lg:text-xl md:text-lg text-base"
                                    >
                                      {desc}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-[129px] h-[108px]">
                      <PricingBackground />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10 md:block hidden">
              {offerPackages.map((packageItem, index) => (
                <div
                  key={index}
                  className="lg:mb-16 md:mb-12 mb-8"
                  id={packageItem.id}
                >
                  <div className="relative md:h-[340px] sm:[280px] h-[200px]">
                    <img
                      src={packageItem.src}
                      alt={packageItem.name}
                      className="w-full h-full object-cover mb-4"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 p-4 flex flex-col justify-center items-center">
                      <h4 className="lg:text-[30px] md:text-2xl text-xl font-semibold text-white mb-4">
                        {packageItem.name}
                      </h4>
                      <p className="lg:text-base md:text-sm text-xs text-white mb-4">
                        {packageItem.type}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[#A36E2A] font-bold lg:text-lg md:text-base text-sm">
                          {packageItem.newPrice}
                        </span>
                        {/* <span className="text-gray-500 line-through lg:text-lg md:text-base text-sm">
                        {packageItem.oldPrice}
                      </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {packageItem.content.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="text-gray-700 flex flex-col">
                            <div className="lg:text-xl md:text-lg text-base font-bold">
                              <div className="flex gap-2 items-center mb-4">
                                <span class="bg-primary/10 text-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                                  <TickIcon />
                                </span>
                                {item.title}
                              </div>
                            </div>
                            <ul className="pl-6 list-disc flex flex-col justify-center gap-2">
                              {item.description.map((desc, descIdx) => (
                                <li
                                  key={descIdx}
                                  className="lg:text-xl md:text-lg text-base"
                                >
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferPackages;
