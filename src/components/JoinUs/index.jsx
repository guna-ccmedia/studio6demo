import WhatsappIcon from "../../assets/whatsapp.png";
import MailIcon from "../../assets/mail.png";

const JoinUs = () => {
  return (
    <section className="join-us lg:py-16 md:py-12 py-8" id="join-us">
      <div className="bg-[#E89C36] md:py-10 py-6">
        <div className="container">
          <div className="flex flex-row flex-wrap gap-4 items-center justify-between">
            <h3 className="lg:text-xl md:text-lg text-base font-semibold">
              Join the evolution of <br /> with our AI-powered art gallery
            </h3>

            <div className="flex flex-row items-center lg:justify-center gap-5">
              <h4 className="lg:text-xl md:text-lg text-base font-semibold pr-10">
                Join us
              </h4>

              <a href="#">
                <div className="flex flex-col items-center gap-2">
                  <img src={MailIcon} className="w-10 h-10" />
                  <div className="md:text-base text-sm">Mail </div>
                </div>
              </a>

              <a href="#">
                <div className="flex flex-col items-center gap-2">
                  <img src={WhatsappIcon} className="w-10 h-10" />
                  <div className="md:text-base text-sm">Whatsapp</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
