import { robot } from "../../assets/assets";
import { HiCode } from "react-icons/hi";
import Button from "../../components/Button";

const HeroProjects = () => {
  return (
    <section
      id="projects"
      className="relative flex md:flex-row flex-col sm:py-16 py-6 pt-14"
    >
      {/* LEFT SIDE TEXT */}
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 mt-4">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Animated logo container */}
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue via-purple to-yellow rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-deep-blue rounded-lg p-1 sm:p-1.5 md:p-2 border border-white/10">
                <div className="md:size-10 bg-gradient-to-br from-blue to-purple rounded flex items-center justify-center">
                  <HiCode className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Company name below the logo */}
            <div className="flex-col hidden lg:flex">
              <h1 className="font-inter text-sm sm:text-lg md:text-xl font-bold text-white tracking-tight">
                <span className="hidden sm:inline">Digital</span>
              </h1>
              <span className="font-opensans text-xs text-blue font-medium tracking-widest uppercase">
                <span className="hidden sm:inline">Solutions</span>
              </span>
            </div>
          </div>
          <h1 className="mb-4 text-[50px] font-black leading-tight tracking-[-0.03em] text-p4 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            <span>
              Showcasing Our <br className="sm:block hidden" />
            </span>
            <span className="text-gradient">Client Success </span>
            <span>Real Projects, Real Impact.</span>
          </h1>

          <p className="max-w-440 mb-4 text-[22px] leading-[36px] max-md:mb-0">
            From mobile apps to enterprise platforms, we’ve built solutions for
            startups, businesses, and global brands. Explore our best work
            across industries including fintech, healthcare, education, and
            more.
          </p>
          <div className="flex items-center">
            <Button icon={"/images/zap.svg"}>Contact Us</Button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE + GRADIENTS */}
      <div className="flex-1 flex justify-center items-center my-0 relative ">
        <img
          src={robot}
          alt="project showcase"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Gradient Overlays */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default HeroProjects;
