import Slider from "react-slick";
import { heroBanner } from "../../constants/heroConstant";

const Hero = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <main className="hero-banner lg:pb-16 md:pb-12 pb-8" id="hero">
        <div className="slider-container relative">
          <Slider {...settings}>
            {heroBanner.map((hero, h) => {
              return (
                <div key={Math.random()}>
                  <div className="h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-black/5">
                    <img
                      src={hero.src}
                      alt={hero.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>

          {/* Mobile view - centered / Desktop view - left */}
          <div className="absolute inset-0 z-30 flex flex-col 
                          items-center justify-center text-center px-4
                          lg:items-start lg:justify-center lg:text-left lg:px-20">
            <div className="max-w-[800px]">
              <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold leading-tight text-white uppercase">
                Design Beyond <br /> Live Extraordinary
              </h1>
              <p className="mb-5 lg:text-lg md:text-base text-sm leading-relaxed text-white">
                Living | Kitchen | Dinning
              </p>
              <div className="w-full flex justify-center lg:justify-start">
                <a
                  href="https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products"
                  className="px-7 py-2 lg:text-lg md:text-base text-sm text-center text-black font-bold bg-[#DBA160] hover:bg-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Starting at ₹ 3.4Lacs*
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
