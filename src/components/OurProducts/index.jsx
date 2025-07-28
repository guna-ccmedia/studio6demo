import { TitleHeading } from "../TitleHeader";
import BedroomDesign from "../BedroomDesign";
import Diningroom from "../Diningroom";
import LivingRoom from "../LivingRoom";
import ModularKitchen from "../ModularKitchen";

const OurProducts = () => {
  return (
    <>
      <section
        className="our-products lg:py-16 md:py-12 py-8"
        id="our-products"
      >
        <div className="container">
          {/* <TitleHeading className="text-white text-center mb-2">
            Our Products
          </TitleHeading> */}

          <ModularKitchen />
          <LivingRoom />
          <BedroomDesign />
          <Diningroom />
        </div>
      </section>
    </>
  );
};

export default OurProducts;
