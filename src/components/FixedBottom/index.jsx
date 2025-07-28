import { navigationFrFixed } from "../../constants/headerConstant";
import studio6logo from "../../assets/STUDIO6LOGO.png";

const FixedBottom = ({ active, handleNavClick, navbarOpen, navbarToggler }) => {
    return (
        <section className="fixed-menu sm:hidden block">
            <div className="fixed bottom-[-2px] left-0 right-0 w-full z-[99]">
                <div className="studio-logo before:content-[''] before:absolute before:inset-0 relative h-[78px]">
                    <a
                        href="/"
                        class="w-[78px] h-[78px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-lg flex items-center justify-center overflow-hidden"
                    >
                        <img
                            src={studio6logo}
                            alt="logo"
                            width={80}
                            height={20}
                            className="w-full h-full object-contain"
                        />
                    </a>

                    <div className="h-full flex items-center justify-center gap-4">
                        {navigationFrFixed.map((nav, n) => (
                            <>
                                <div className="w-1/5">
                                    <a
                                        href=""
                                        className={`${active === nav.href ? "text-primary" : "text-white"
                                            } text-xs flex flex-col items-center`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (nav.href === "#menu") {
                                                navbarToggler();
                                            } else {
                                                handleNavClick(nav.href);
                                            }
                                        }}
                                    >
                                        <nav.Icon className="text-lg mb-2" />
                                        <span className="block text-center">{nav.name}</span>
                                    </a>
                                </div>
                                {n === 1 && <div className="w-1/5" />}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FixedBottom;
