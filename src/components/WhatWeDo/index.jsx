import { TitleHeading } from "../TitleHeader";
import interiorimg1 from "../../assets/images/home_interior_1.jpg";
import interiorimg2 from "../../assets/images/home_interior_2.jpg";
import interiorimg3 from "../../assets/images/home_interior_3.jpg";
import interiorimg4 from "../../assets/images/home_interior_4.jpg";
import interiorimg5 from "../../assets/images/home_interior_5.jpg";

const WhatWeDo = () => {
  const src =
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <section className="what-we-do lg:py-16 md:py-12 py-8" id="what-we-do">
        <div className="bg-black">
          <div className="container">
            <div className="text-center lg:mb-16 md:mb-12 mb-8">
              <TitleHeading className="text-center text-white mb-4">
                Gallery
              </TitleHeading>
            </div>

            <div class="parent">
              <div class="div1 relative">
                <img
                  src={interiorimg1}
                  className="w-full h-full object-cover"
                />
              </div>
              <div class="div2 relative">
                <img
                  src={interiorimg2}
                  className="w-full h-full object-cover"
                />
               
              </div>
              <div class="div3 relative">
                <img
                  src={interiorimg3}
                  className="w-full h-full object-cover"
                />
              </div>
              <div class="div4 relative">
                <img
                  src={interiorimg4}
                  className="w-full h-full object-cover"
                />
              </div>
              <div class="div5 relative">
                <img
                  src={interiorimg5}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
