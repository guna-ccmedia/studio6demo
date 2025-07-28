import { SubTitleHeading, TitleHeading } from "../TitleHeader";
import interiorimg1 from "../../assets/images/home_interior_26.jpg";

const LivingRoom = () => {
  return (
    <section className="living-room lg:py-16 md:py-12 py-8" id="living-room">
      <div className="bg-black">
        <div className="container">
          <div className="flex lg:flex-row-reverse flex-col items-center justify-between gap-10">
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
                Living Room
              </TitleHeading> */}
              <SubTitleHeading className=" text-primary mb-4">
                Interiors That Make Every Moment Feel Like Home
              </SubTitleHeading>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Your living room is where stories are shared, laughter echoes,
                and first impressions are made. At Studio6 Interiors, we craft
                living room designs that perfectly balance comfort, elegance,
                and functionality.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Whether you love minimalist modern, luxe contemporary, or cozy
                traditional vibes — we bring your style to life with the right
                furnishings, lighting, wall treatments, and layout planning.
                Every element is designed to reflect your personality while
                making the most of your space.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                From TV units and false ceilings to space-saving storage and
                statement décor, we turn your living room into a space you’ll
                love coming home to
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingRoom;
