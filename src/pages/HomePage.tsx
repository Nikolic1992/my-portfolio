import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-[url('/grid-pattern.png')] bg-no-repeat bg-cover bg-center px-2">
      {/* Spotlight left side */}
      <img
        src="/spotlight-left.png"
        alt="spotlight-left"
        className="absolute top-0 left-0"
      />

      {/* Spotlight right side */}
      <img
        src="/spotlight-right.png"
        alt="spotlight-right"
        className="absolute top-0 right-0"
      />
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 w-full md:max-w-[1000px]">
        <h3 className="text-secondaryGray text-center tracking-widest">
          Creating Dynamic Web Magic
        </h3>
        <h1 className=" text-mainWhite text-center">
          Transforming Concepts into Seamless{" "}
          <span className="text-lightPurple">User Experiences</span>
        </h1>
        <h3 className="text-secondaryGray text-center md:tracking-widest">
          Hi, I am Stevan, Fullstack Developer from Sydney
        </h3>
        <div className="flex items-center justify-center w-full md:w-auto rounded-lg border border-white/20 shadow-lg transition-colors duration-300 hover:bg-white/15 px-8 py-6 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)]">
          <button className="flex items-center justify-center cursor-pointer gap-4 group">
            <h4 className="text-mainGray transition-colors duration-300 group-hover:text-mainWhite">
              Checkout My Work
            </h4>
            <img
              src="./arrow.png"
              alt="arrow"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
      {/* Loader */}
      <div className="absolute bottom-10 flex justify-center w-full z-10">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default HomePage;
