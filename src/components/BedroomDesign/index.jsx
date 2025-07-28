import { SubTitleHeading, TitleHeading } from "../TitleHeader";
import interiorimg1 from "../../assets/images/home_interior_10.jpg";

const BedroomDesign = () => {
  return (
    <section
      className="bedroom-design lg:py-16 md:py-12 py-8"
      id="bedroom-design"
    >
      <div className="bg-black">
        <div className="container">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
            <div className="lg:w-2/5 md:w-1/2 w-full">
              <div className="lg:h-[480px] md:h-[400px] h-[320px] lg:pt-5 pt-2 lg:pl-5 pl-2 relative">
                <span className="absolute top-0 left-0 lg:bottom-5 bottom-2 lg:right-5 right-2 bg-primary rounded-2xl z-0" />
                <img
                  src={interiorimg1}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>

            <div className="lg:w-3/5 md:w-1/2 w-full">
              {/* <TitleHeading className="text-white mb-4">
                Bedroom Designs
              </TitleHeading> */}
              <SubTitleHeading className=" text-primary mb-4">
                That Redefine Comfort and Calm
              </SubTitleHeading>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Your bedroom is your personal retreat — a space to relax,
                recharge, and truly be yourself. At Studio6 Interiors, we design
                bedrooms that blend luxury, functionality, and serenity,
                tailored to your lifestyle.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                From space-saving wardrobes and smart lighting to soothing color
                palettes and custom headboards, every detail is thoughtfully
                designed to create a peaceful and stylish environment.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Whether it’s a master bedroom, guest room, or kids’ space, we
                bring comfort, elegance, and smart design together — because
                great sleep begins with great interiors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BedroomDesign;
