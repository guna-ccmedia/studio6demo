import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { TitleHeading } from "../TitleHeader";
import { workSteps } from "../../constants/howItWorksConstant";
import dottedwave from "../../assets/dottedwave.png";

const STEP_DELAY = 3000;

const HowItWorks = () => {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((prev) => (prev >= workSteps.length - 1 ? -1 : prev + 1));
    }, STEP_DELAY);

    return () => clearInterval(id); // tidy up on unmount
  }, []);

  useEffect(() => {
    if (
      activeStep !== -1 &&
      stepRefs.current[activeStep] &&
      containerRef.current
    ) {
      const container = containerRef.current;
      const stepElement = stepRefs.current[activeStep];

      const containerRect = container.getBoundingClientRect();
      const stepRect = stepElement.getBoundingClientRect();

      const scrollLeft =
        stepElement.offsetLeft -
        container.offsetLeft -
        container.clientWidth / 2 +
        stepElement.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeStep]);

  return (
    <section className="how-it-works lg:py-16 md:py-12 py-8" id="how-it-works">
      <div className="bg-black">
        <div className="container relative">
          <div className="text-center lg:mb-16 md:mb-12 mb-8">
            <TitleHeading className="text-center text-primary mb-4">
              How it works
            </TitleHeading>
            <p className="mb-5 md:text-base text-sm text-gray-400 font-light">
              Mobile banking differs from mobile payments, which involves the
              use of <br /> a mobile device
            </p>
          </div>

          <div className="relative h-full">
            <div
              className="relative h-full flex flex-row items-center justify-between z-10 overflow-x-auto no-scrollbar"
              ref={containerRef}
            >
              {workSteps.map((step, s) => {
                return (
                  <div
                    key={s}
                    className={`relative w-[270px] md:mb-2 mb-8 xl:h-auto lg:h-[450px] grow-0 shrink-0 basis-[270px] p-4`}
                    ref={(el) => (stepRefs.current[s] = el)}
                  >
                    <div className="flex flex-col items-center">
                      {step.src ? (
                        // <img
                        //   src={step.src}
                        //   alt={step.title}
                        //   className="w-8 h-8"
                        // />
                        <div
                          className={`work-steps relative flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 transition-all duration-300 lg:mb-10 md:mb-8 mb-6 ${s <= activeStep
                              ? "bg-primary text-white border-primary scale-105 shadow-lg"
                              : "bg-primary/30 text-primary border-primary"
                            } ${s !== workSteps.length - 1 &&
                            "before:content-[''] before:absolute before:top-0 before:left-[100%] before:bottom-0 before:right-0 before:w-[140px] before:h-[1px] before:m-auto before:bg-white"
                            }`}
                        >
                          <>{step.src}</>
                          {s !== workSteps.length - 1 && (
                            <FaChevronRight className="block absolute text-white right-[-150px]" />
                          )}
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                          <span className="text-white text-xl">{s + 1}</span>
                        </div>
                      )}
                      <div className="flex flex-col md:min-h-[150px] min-h-[120px] items-center">
                        <h3 className="lg:text-lg md:text-base text-sm font-bold mb-4 text-white text-center">
                          {step.title}
                        </h3>
                        <p className="lg:text-lg md:text-base text-sm text-white font-light text-center">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
