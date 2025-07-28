import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../../constants/testimonialsConstant";
import { TitleHeading } from "../TitleHeader";

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: false, // Disable RTL for this slider
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const rtlSettings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: true, // Enable RTL
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const randomColor = () => {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A8",
      "#FFD733",
      "#8E44AD",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const colors = [
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#FCD34D",
  ];

  const getRandomColor = (index) => {
    return colors[index % colors.length]; // consistent random per index
  };

  return (
    <section className="testimonials lg:py-16 md:py-12 py-8" id="testimonials">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-normal lg:text-2xl md:text-xl text-lg text-center text-primary mb-4">
            HAPPY CUSTOMERS
          </h2>

          <TitleHeading className="text-center text-white mb-4">
            What The People Think About Us
          </TitleHeading>
        </div>
      </div>

      <div className="p-4">
        <div className="slider-container my-5">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                className="relative lg:px-4 md:px-2 px-1"
                key={`testimonials1-${index}`}
              >
                <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4 lg:min-h-[150px] md:min-h-[185px] min-h-[220px] h-full">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 relative z-10">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                        style={{ backgroundColor: getRandomColor(index) }}
                      >
                        {testimonial.name?.charAt(0).toUpperCase()}
                      </span>
                      <div>
                        <h4 className="md:text-lg text-base font-bold text-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <FaQuoteLeft
                      style={{
                        marginRight: "24px",
                        fontSize: "36px",
                        opacity: 0.2,
                        color: randomColor(),
                      }}
                      className="absolute md:right-0 md:top-0 top-2 right-0 md:mr-6 md:mt-2 z-1"
                    />
                  </div>
                  <div>
                    <p className="lg:text-base md:text-sm text-xs text-gray-600">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slider-container my-5">
          <Slider {...rtlSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                className="relative lg:px-4 md:px-2 px-1"
                key={`testimonials2-${index}`}
              >
                <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4 lg:min-h-[150px] md:min-h-[185px] min-h-[220px] h-full">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 relative z-10">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                        style={{ backgroundColor: getRandomColor(index + 1) }}
                      >
                        {testimonial.name?.charAt(0).toUpperCase()}
                      </span>
                      <div>
                        <h4 className="md:text-lg text-base text-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <FaQuoteLeft
                      style={{
                        marginRight: "24px",
                        fontSize: "36px",
                        opacity: 0.2,
                        color: randomColor(),
                      }}
                      className="absolute md:right-0 md:top-0 top-2 right-0 md:mr-6 md:mt-2 z-1"
                    />
                  </div>
                  <div>
                    <p className="lg:text-base md:text-sm text-xs text-gray-600">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
