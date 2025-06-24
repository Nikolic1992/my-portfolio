function Experience() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center px-4 md:px-0">
      <h1 className="text-mainWhite mb-10 text-center">
        Previous <span className="gradient-text">work experience</span>
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8 md:max-w-[600px] md:flex-row">
          <img
            src="./assets/logos/trinity-logo.png"
            alt="Trinity Consulting Business Logo"
            className="h-20 w-20 rounded-lg"
          />
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="gradient-text">Software Developer</h3>
            <span className="text-mainGray text-sm">
              ( Trinity Consulting Business - hybrid )
            </span>

            <p className="text-mainWhite">
              Helping small businesses and early-stage startups build fast,
              clean, and responsive websites using modern tools like{" "}
              <span className="text-lightPurple">React</span>,{" "}
              <span className="text-lightPurple">Tailwind CSS</span>, and{" "}
              <span className="text-lightPurple">Firebase</span>. Focused on
              scalability, maintainability, and pixel-perfect UI, I transform
              ideas and designs into smooth applications.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8 md:max-w-[600px] md:flex-row">
          <img
            src="./assets/logos/astatinn-logo.png"
            alt="Astatinn Logo"
            className="h-20 w-20 rounded-lg"
          />
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="gradient-text">Software Developer</h3>
            <span className="text-mainGray text-sm">( Astatinn - remote )</span>

            <p className="text-mainWhite">
              Built interactive web applications using{" "}
              <span className="text-lightPurple">React</span>,{" "}
              <span className="text-lightPurple">Redux</span>, and{" "}
              <span className="text-lightPurple">Material-UI</span>. Took full
              ownership of tasks, implemented efficient state management with
              Redux RTK Query, and crafted pixel-perfect, responsive interfaces
              focused on performance and scalability.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8 md:max-w-[600px] md:flex-row">
          <img
            src="./assets/logos/za-code-logo.png"
            alt="ZaCode Logo"
            className="object-fit h-20 w-20 rounded-lg"
          />
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="gradient-text">Software Developer</h3>
            <span className="text-mainGray text-sm">( ZaCode - remote )</span>

            <p className="text-mainWhite">
              Collaborated with a team of five, developing reusable{" "}
              <span className="text-lightPurple">React</span> components and
              managing data flow using{" "}
              <span className="text-lightPurple">Redux</span>. Connected APIs
              and integrated real-time data with{" "}
              <span className="text-lightPurple">Firebase</span>, while
              optimizing UI performance with lazy loading and ensuring
              accessible, responsive design.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8 md:max-w-[600px] md:flex-row">
          <img
            src="./work-icon-laptop.png"
            alt="Freelance Logo, hacker on laptop"
            className="h-20 w-20"
          />
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="gradient-text">Software Developer</h3>
            <span className="text-mainGray text-sm">
              ( Freelance - remote )
            </span>

            <p className="text-mainWhite">
              Developed personal projects to enhance frontend skills using{" "}
              <span className="text-lightPurple">React</span>,{" "}
              <span className="text-lightPurple">TypeScript</span>, and{" "}
              <span className="text-lightPurple">Redux Toolkit</span>. Styled
              apps with <span className="text-lightPurple">Tailwind CSS</span>{" "}
              and <span className="text-lightPurple">Material UI</span>,
              integrated APIs with Axios, managed authentication and real-time
              data via <span className="text-lightPurple">Firebase</span> and{" "}
              <span className="text-lightPurple">Clerk</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
