import { TitleHeading } from "../TitleHeader";

const JoinSubscribers = () => {
  return (
    <section
      className="join-subscribers lg:py-16 md:py-12 py-8"
      id="join-subscribers"
    >
      <div className="container">
        <div className="xl:w-[991px] lg:w-[768px] md:w-[550px] relative overflow-hidden rounded-4xl mx-auto">
          <div className="lg:px-16 px-4 py-12 bg-dark/20">
            <div className="text-center">
              <TitleHeading className="text-white mb-6">
                Join 10,000+ subscribers
              </TitleHeading>

              <div className="xl:w-[550px] lg:w-[420px] w-full mx-auto">
                <p className="text-white lg:text-base md:text-sm text-xs mb-6">
                  Join our mailing list to get the latest news
                </p>
                <div className="bg-white rounded-4xl p-1 mb-6">
                  <div className="relative overflow-hidden">
                    <div className="flex flex-row justify-between items-center">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 px-8 bg-transparent rounded-4xl text-black placeholder-dark !focus:outline-none focus:ring-0 focus:ring-transparent border-0 lg:text-base md:text-sm text-xs"
                      />
                      <button className="lg:text-base md:text-sm text-xs absolute top-0 bottom-0 right-0 w-1/3 h-full !bg-primary text-white !p-4 !rounded-4xl hover:bg-primary-dark transition-colors duration-200">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-white md:text-xs text-[10px] mb-6">
                  Join our mailing list to get the latest news
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSubscribers;
