import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Hero() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="relative flex h-screen items-center justify-center px-4">
      <NavBar />
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-8 md:gap-10">
        <h3 className="text-secondaryGray text-center tracking-widest">
          Creating Dynamic Web Magic
        </h3>

        <h1 className="text-mainWhite text-center text-4xl lg:text-7xl">
          Transforming Concepts into Seamless{" "}
          <span className="text-lightPurple">User Experiences</span>
        </h1>

        <h3 className="text-secondaryGray text-center md:tracking-widest">
          Hi, I am Stevan, Fullstack Developer from Sydney
        </h3>

        <button className="flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-8 py-6 shadow-lg transition-colors duration-300 hover:bg-white/15 md:w-auto">
          <h3 className="text-mainGray hover:text-mainWhite transition-colors duration-300">
            Checkout My Work
          </h3>
          <img src="./arrow.png" alt="arrow" />
        </button>
      </div>

      <div className="absolute bottom-10 z-10 flex w-full justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Hero;
