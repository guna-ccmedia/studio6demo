import { SubTitleHeading, TitleHeading } from "../TitleHeader";
import interiorimg1 from "../../assets/images/home_interior_22.jpg";

const ModularKitchen = () => {
  return (
    <section
      className="modular-kitchen lg:py-16 md:py-12 py-8"
      id="modular-kitchen"
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
                Modular Kitchen
              </TitleHeading> */}
              <SubTitleHeading className=" text-primary mb-4">
                That Blend Style with Smart Storage
              </SubTitleHeading>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                At Studio6 Interiors, we design modular kitchens that are not
                just beautiful, but brilliantly functional. Whether you're
                looking for a compact kitchen for apartments or a spacious
                layout for large homes, our custom modular kitchen solutions are
                crafted to suit your space, style, and budget.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                From L-shaped, U-shaped, parallel kitchens, to island counters,
                we bring smart layouts, premium materials, and clutter-free
                storage — all delivered with on-time installation and
                personalized design support.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Transform your cooking space into a statement of comfort, class,
                and convenience with Studio6 Modular Kitchens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularKitchen;
