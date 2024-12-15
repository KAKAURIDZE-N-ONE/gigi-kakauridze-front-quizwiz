import React from "react";
import HeroIcon from "../../../components/svgs/HeroIcon";
import HeroArrowIcon from "../../../components/svgs/HeroArrowIcon";
import HeroTitle from "../../../components/svgs/HeroTitle";

const Hero: React.FC = () => {
  return (
    <div className="-mb-40 lg:-mb-[29.2rem]">
      <div className="flex justify-center lg:justify-start  -translate-x-6 lg:-translate-x-0 lg:px-24 px-0">
        <div className="mt-5">
          <HeroTitle />
          <h3
            className="text-gray1 text-lg font-semibold raleway
          lg:text-[2rem] transition-all duration-300"
          >
            Play with us, Explore with us
          </h3>
        </div>
      </div>
      <div className="mt-8 overflow-hidden lg:-translate-y-[17.6rem]">
        <div className="relative z-0 lg:z-20 ">
          <div
            className="overflow-hidden lg:flex justify-end
          "
          >
            <div className="z-20 relative">
              <HeroIcon />
            </div>
          </div>
          <h2
            className="absolute text-white2  bottom-[14rem] smaller:bottom-[13rem]  leading-[2.9rem] 
            left-1/2 lg:left-3/4 lg:hidden z-40
          text-[2.2rem] font-bold -translate-x-[8rem] smaller:-translate-x-[10rem] text-nowrap smaller:text-[2.4rem]
          "
          >
            Our mission <br className="smaller:block hidden" />
            is <br className="inline-block smaller:hidden" /> to
            <br className="smaller:inline-block hidden" /> entertain
            <br /> & educate.
          </h2>
        </div>
        <div className="relative raleway">
          <div className="-translate-y-40 lg:translate-y-[10.2rem]">
            <div
              className="h-[17.625rem] bg-carrot flex 
            items-center  justify-center lg:absolute left-0
            w-full lg:bottom-[36rem] lg:-z-10 lg:justify-start
            lg:px-24"
            >
              <div
                className="flex flex-col text-white font-black 
               -translate-y-4"
              >
                <h2 className="text-wh text-7.5xl">200+</h2>
                <div className="flex items-center gap-5">
                  <h2 className="underline lg:no-underline  text-5xl">
                    Quiz games{" "}
                  </h2>
                  <div className="lg:hidden">
                    <HeroArrowIcon />
                  </div>{" "}
                </div>
              </div>
            </div>
            <div
              className="h-[17.625rem] lg:h-[14.375rem] bg-blue flex 
              items-center justify-center
            lg:justify-start lg:px-24 lg:bottom-[21.8rem] 
            lg:absolute left-0 w-full"
            >
              <div
                className="flex flex-col text-white font-black -translate-x-[2rem]
                lg:translate-x-0
              -translate-y-6"
              >
                <h2 className="text-7.5xl font-black">25+</h2>
                <div className="flex items-center  gap-5">
                  <h2 className="underline lg:no-underline text-5xl leading-14">
                    Different <br className="larger:hidden" /> genre
                  </h2>
                  <div className="lg:hidden">
                    <HeroArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
