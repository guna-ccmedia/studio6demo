import { SubTitleHeading, TitleHeading } from "../TitleHeader";
import interiorimg1 from "../../assets/images/home_interior_9.jpg";

const Diningroom = () => {
  return (
    <section className="dining-room lg:py-16 md:py-12 py-8" id="dining-room">
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
                Dining Room
              </TitleHeading> */}
              <SubTitleHeading className=" text-primary mb-4">
                Designs That Bring People Together
              </SubTitleHeading>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                The dining room is more than just a place to eat — it’s where
                conversations begin and memories are made. At Studio6 Interiors,
                we design dining spaces that are warm, inviting, and tailored to
                your lifestyle.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                From elegant dining tables and storage units to mood-setting
                lighting and wall finishes, every element is chosen to create a
                stylish and functional setup. Whether it's a compact nook or a
                grand dining area, we optimize space, flow, and aesthetics.
              </p>
              <p className="mb-5 lg:text-lg md:text-base text-sm text-white">
                Host, dine, and unwind in a space that truly brings people
                together — with Studio6’s custom dining room designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diningroom;
