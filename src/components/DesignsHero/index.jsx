import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { TitleHeading } from "../TitleHeader";

const DesignsHero = () => {
  return (
    <section className="designs-hero lg:py-16 md:py-12 py-8" id="designs-hero">
      <div className="">
        <div className="container">
          <div className="relative bg-primary rounded-lg lg:h-[500px]">
            <div className="flex flex-col lg:flex-row justify-between items-center h-full">
              <div className="w-full lg:w-4/6 md:w-5/6 lg:py-10 md:py-8 py-4 lg:px-8 px-4">
                <div className="p-4 lg:p-12 md:p-10 flex-1">
                  <TitleHeading className="text-black mb-4">
                    50+ Beautiful design <br /> interiors
                  </TitleHeading>

                  {/* <p className="lg:text-lg md:text-base text-sm text-gray-700 mb-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis sit aliquam sit nullam.
                  </p> */}
                  <div className="flex gap-4 mb-6">
                    <button className="lg:text-lg md:text-base text-sm !bg-black text-white font-medium lg:!px-4 !px-2 py-2 rounded-md hover:bg-gray-800 transition">
                      Book for free consultation →
                    </button>
                    {/* <button className="lg:text-lg md:text-base text-sm !border-2 !border-black !bg-transparent text-black font-medium lg:!px-4 !px-2 py-2 rounded-md">
                      Learn more
                    </button> */}
                  </div>

                  {/* Social Buttons */}
                  <div className="flex gap-8">
                    {/* <a href="mailto:studio6interiors5292@gmail.com">
                      <div className="flex flex-col items-center">
                        <div className="bg-[#3769a0] p-2 rounded-full shadow-md">
                          <IoIosMail className="text-white w-6 h-6" />
                        </div>
                        <span className="text-black md:text-sm text-xs mt-1">
                          Mail
                        </span>
                      </div>
                    </a> */}
                    <a href="tel:+91-904 3463200">
                      <div className="flex flex-col items-center">
                        <div className="bg-[#3769a0] p-2 rounded-full shadow-md">
                          <IoMdCall className="text-white w-6 h-6" />
                        </div>
                        <span className="text-black md:text-sm text-xs mt-1">
                          Call
                        </span>
                      </div>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products">
                      <div className="flex flex-col items-center">
                        <div className="bg-[#28a519] p-2 rounded-full shadow-md">
                          <FaWhatsapp className="text-white w-6 h-6" />
                        </div>
                        <span className="text-black md:text-sm text-xs mt-1">
                          Whatsapp
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/6 md:w-5/6 px-4 mb-6 md:mb-0 h-full">
                <div className="lg:w-5/6 h-full">
                  <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden transform lg:-translate-y-6 md:-translate-y-3 translate-y-8 lg:translate-x-unset md:translate-x-6 translate-x-4 lg:scale-105 md:scale-103 scale-100 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="logo"
                      className="h-full w-full object-cover rounded-t-none md:rounded-tl-xl md:rounded-bl-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignsHero;
