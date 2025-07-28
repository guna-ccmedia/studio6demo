import { counterData } from "../../constants/companyHeroConstant";
import Counter from "../CounterWidget";
import { SubTitleHeading, TitleHeading } from "../TitleHeader";
import aboutimg from "../../assets/about-image.svg";

const AboutUs = () => {
  return (
    <section className="about-us lg:py-16 md:py-12 py-8" id="about-us">
      <div className="">
        <div className="container">
          <TitleHeading className="text-center text-white mb-4">
            About Us
          </TitleHeading>

          <div className="lg:my-16 md:my-12 my-8">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
              <div className="lg:w-1/2 md:w-1/2 w-full">
                <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                  At Studio6 Interiors, our story began with a passion for
                  design and innovation. After gaining hands-on experience at a
                  top interior firm in Bangalore, I launched Studio6 in 2019
                  with a vision to transform everyday spaces into functional,
                  aesthetic environments. Today, we've completed 250+
                  residential and commercial projects — each crafted with care,
                  creativity, and commitment.
                </p>
                <SubTitleHeading className=" text-primary mb-4">
                  What drives us?
                </SubTitleHeading>
                <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                  The satisfaction on our clients’ faces when they see their
                  dream space come to life — on time, on budget, and beyond
                  expectations. Whether it’s modular kitchens, home interiors,
                  or office makeovers, Studio6 delivers smart, stylish, and
                  affordable interiors you’ll love to live in.
                </p>
                {/* <a
                  href="/signin"
                  className="px-16 py-2 lg:text-lg md:text-base text-sm text-center text-black font-semibold bg-primary hover:opacity-70 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-primary/90"
                >
                  Read for More
                </a> */}
              </div>

              <div className="lg:w-1/2 md:w-1/2 w-full">
                <div className="lg:h-[400px] md:h-[320px] h-[260px] lg:pt-5 pt-2 lg:pl-5 pl-2 relative">
                  <img
                    src={aboutimg}
                    className="w-full h-full object-contain rounded-2xl shadow-2xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center rounded-xs bg-dark/20 px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:gap-8 md:gap-6 gap-4 p-6 ">
              {counterData.map((item, index) => (
                <Counter key={index} end={item.end} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
