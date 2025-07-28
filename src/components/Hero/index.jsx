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
        <div className="container">
          <div className="absolute z-30 h-screen flex items-center justify-center">
            <div className="max-w-[800px] text-left mt-18">
              <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold leading-tight text-white uppercase">
                Design Beyond <br /> Live Extraordinary
              </h1>
              <p className="mb-5 lg:text-lg md:text-base text-sm leading-relaxed! text-white">
                Living | Kitchen | Dinning
              </p>
              <div className="w-full flex pr-16 lg:pr-0">
                <a
                  href="/signin"
                  className="block w-full px-7 py-2 lg:text-lg md:text-base text-sm text-center text-black font-bold bg-[#DBA160] hover:opacity-70"
                >
                  Starting at ₹ 3.4Lacs*
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {heroBanner.map((hero, h) => {
              return (
                <div key={Math.random()}>
                  <div className="h-screen before:content-[''] before:absolute before:inset-0 before:bg-black/5">
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
        </div>
      </main>
    </>
  );
};

export default Hero;
