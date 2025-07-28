import Slider from "react-slick";
import { useState } from "react";
import { TitleHeading } from "../TitleHeader";
import { FaArrowRightLong } from "react-icons/fa6";
import { designs } from "../../constants/designConstant";

const DesignSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <section
      className="design-slider lg:py-16 md:py-12 py-8"
      id="design-slider"
    >
      <div className="lg:w-[93%] w-full lg:ml-auto m-auto p-4">
        <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-4 gap-8">
          <div className="lg:w-1/3">
            <div>
              <TitleHeading className="text-white mb-4 uppercase">
                50+ Beautiful design <br /> interiors
              </TitleHeading>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <div className="flex pr-16 lg:pr-0">
                <a
                  href="/signin"
                  className="block px-7 py-2 lg:text-lg md:text-base text-sm text-center text-black font-bold bg-[#DBA160] hover:opacity-70"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="slider-container">
              <Slider {...settings}>
                {designs.map((design, index) => {
                  const isVisible = index === activeSlide;

                  return (
                    <div className="md:px-4" key={`designs1-${index}`}>
                      <div
                        className={
                          isVisible
                            ? "lg:h-[550px] h-[320px]"
                            : "lg:h-[500px] h-[320px]"
                        }
                      >
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={design.src}
                            alt={`designs1-${index}`}
                            className="h-full object-cover"
                          />

                          {isVisible && (
                            <div className="absolute bottom-5 left-5">
                              <div className="flex flex-row items-end">
                                <div className="bg-white px-8 py-4">
                                  <div>
                                    <p className="text-black lg:text-base md:text-sm text-xs">
                                      {index + 1} — {design.type}
                                    </p>
                                    <h3 className="text-black lg:text-2xl md:text-lg text-base font-bold mb-2">
                                      {design.name}
                                    </h3>
                                  </div>
                                </div>
                                <span className="w-14 h-14 bg-primary flex items-center justify-center text-white lg:text-2xl md:text-lg text-base font-bold">
                                  <FaArrowRightLong />
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSlider;
