import WhatsappIcon from "../../assets/whatsapp.png";
import MailIcon from "../../assets/mail.png";
import CallIcon from "../../assets/telephone.png";

const FixedApp = () => {
  return (
    <section className="fixed-app">
      <div className="fixed h-full top-0 bottom-0 right-0 z-50 flex flex-col justify-center gap-4">
        <div className="bg-[#ffffff4d] md:py-6 py-3 px-1 rounded-l-lg shadow-lg backdrop-blur-md">
          <div className="flex flex-col items-center gap-4">
            {/* <a href="mailto:studio6interiors5292@gmail.com">
              <div className="flex flex-col items-center gap-2">
                <img src={MailIcon} className="md:w-10 md:h-10 w-6 h-6" />
                <div className="md:text-sm text-xs text-white">Mail </div>
              </div>
            </a> */}
            <a href="tel:+91-904 3463200">
              <div className="flex flex-col items-center gap-2">
                <img src={CallIcon} className="md:w-10 md:h-10 w-6 h-6" />
                <div className="md:text-sm text-xs text-white">Call </div>
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products">
              <div className="flex flex-col items-center gap-2">
                <img src={WhatsappIcon} className="md:w-10 md:h-10 w-6 h-6" />
                <div className="md:text-sm text-xs text-white">Whatsapp</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedApp;
