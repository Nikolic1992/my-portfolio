import Slider from "./Slider";

function AboutMe() {
  return (
    <div className="mt-15 flex min-h-screen items-center justify-center p-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative min-h-[350px] flex-1 overflow-hidden rounded-3xl bg-[url('/mobile-laptop.png')] bg-cover bg-center bg-no-repeat md:min-h-[500px] md:bg-[url('/desktop-laptop.png')]">
            <div className="absolute inset-0 z-10">
              <img
                src="/fade.png"
                alt="fade overlay"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>

            <img
              className="absolute top-10 left-10 z-20 w-20 md:w-40"
              src="/purple-arrow.png"
              alt="purple arrow"
            />
            <img
              className="absolute right-10 bottom-30 z-20 w-20 md:bottom-20 md:w-40"
              src="/yellow-arrow.png"
              alt="yellow arrow"
            />

            <h3 className="text-mainWhite absolute bottom-6 left-6 z-30 w-[300px] leading-snug font-bold md:bottom-10 md:left-10">
              I focus on client collaboration, ensuring open and transparent
              communication.
            </h3>
          </div>

          <div className="flex flex-[0.7] flex-col gap-8">
            <div className="relative flex min-h-[240px] items-center justify-center rounded-3xl bg-[url('/world-map.png')] bg-cover bg-center bg-no-repeat p-6">
              <div className="absolute inset-0 rounded-3xl bg-[url('/world-map-background.png')] bg-cover bg-center bg-no-repeat opacity-30" />

              <h4 className="text-mainWhite absolute bottom-5 left-5 z-10 text-center font-bold">
                I'm very Flexible with time zones
              </h4>
            </div>

            <div className="relative flex min-h-[240px] flex-col items-center justify-center rounded-3xl bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)]">
              <img
                src="./matrix-background.png"
                alt="fade image"
                className="absolute z-10 h-full w-full rounded-3xl object-cover opacity-40"
              />
              <h3 className="text-mainWhite absolute z-20 mb-16 text-center font-bold">
                TECH STACK
              </h3>
              <Slider />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Tech enthusiast */}
          <div className="flex w-full flex-col gap-8 md:w-[30%]">
            <div className="relative flex min-h-[200px] flex-1 items-center justify-center rounded-3xl bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-6">
              <img
                className="absolute right-0 bottom-0"
                src="./section-input.png"
                alt="section input background"
              />
              <h3 className="text-mainWhite text-center font-semibold">
                Tech enthusiast with a passion for development.
              </h3>
            </div>

            <div className="relative flex min-h-[200px] flex-1 items-center justify-center rounded-3xl bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-6">
              <img
                src="./purple-fade-project-background.png"
                alt="fade image"
                className="absolute z-10 h-full w-full rounded-3xl object-cover"
              />
              <h3 className="text-mainWhite absolute z-20 text-center font-semibold">
                Do you want to start a project together?
              </h3>
              <button className="absolute bottom-3 z-30 flex cursor-pointer items-center gap-4 rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-6 py-2 shadow-lg transition-colors duration-300 hover:bg-white/15">
                <h3 className="text-mainGray hover:text-mainWhite transition-colors duration-300">
                  Contact Me
                </h3>
                <img src="./arrow.png" alt="arrow" />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[200px] flex-[3] flex-col items-center justify-center gap-2 rounded-3xl bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-6">
            <img
              src="./purple-fade-project-background.png"
              alt="fade image"
              className="absolute z-10 h-full w-full rotate-180 rounded-3xl object-cover opacity-40"
            />
            <h2 className="text-mainWhite font-bold">About me</h2>
            <h3 className="text-mainWhite text-center font-serif">
              My name is{" "}
              <span className="text-lightPurple font-bold">Stevan</span>, a
              dedicated{" "}
              <span className="text-lightPurple font-bold">
                FullStack Developer
              </span>{" "}
              based in Sydney, Australia. My approach to programming is driven
              by curiosity, but sustained by a strong commitment to quality and
              precision. What began as simple experimentation quickly grew into
              a disciplined practice where every line of code matters. I take
              pride in crafting clean, efficient, and well-structured solutions,
              paying close attention to detail to ensure that each project is
              not only functional but also reliable and visually polished. For
              me, there is great satisfaction in transforming a blank screen
              into a seamless and impactful user experience.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
