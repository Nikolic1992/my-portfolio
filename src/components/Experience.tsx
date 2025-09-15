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
          <div className="flex flex-col items-start justify-center gap-2 text-base leading-relaxed">
            <h3 className="gradient-text text-base">Frontend Developer</h3>
            <span className="text-mainGray text-base">
              ( Trinity Consulting Business - hybrid )
            </span>
            <p className="text-mainWhite text-base leading-relaxed">
              Worked on websites for startups and small businesses, focusing on
              clean, responsive design and smooth user experience using tools
              like <span className="text-lightPurple">React</span>,{" "}
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
          <div className="flex flex-col items-start justify-center gap-2 text-base leading-relaxed">
            <h3 className="gradient-text text-base">Frontend Developer</h3>
            <span className="text-mainGray text-base">
              ( Astatinn - remote )
            </span>
            <p className="text-mainWhite text-base leading-relaxed">
              Supported frontend development for a SaaS platform, improving
              responsiveness and data handling using{" "}
              <span className="text-lightPurple">React</span>,{" "}
              <span className="text-lightPurple">Redux</span>, and{" "}
              <span className="text-lightPurple">Material-UI</span>. Implemented
              efficient state management with Redux{" "}
              <span className="text-lightPurple">Redux RTK Query</span>, and
              crafted pixel-perfect, responsive interfaces focused on
              performance and scalability.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8 md:max-w-[600px] md:flex-row">
          <img
            src="./assets/logos/za-code-logo.png"
            alt="ZaCode Logo"
            className="object-fit h-20 w-20 rounded-lg"
          />
          <div className="flex flex-col items-start justify-center gap-2 text-base leading-relaxed">
            <h3 className="gradient-text text-base">Web Developer</h3>
            <span className="text-mainGray text-base">( ZaCode - remote )</span>
            <p className="text-mainWhite text-base leading-relaxed">
              Worked on project-based, practical frontend applications under
              mentorship using <span className="text-lightPurple">React</span>{" "}
              components and managing data flow with{" "}
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
          <div className="flex flex-col items-start justify-center gap-2 text-base leading-relaxed">
            <h3 className="gradient-text text-base">Web Developer</h3>
            <span className="text-mainGray text-base">
              ( Freelance - remote )
            </span>
            <p className="text-mainWhite text-base leading-relaxed">
              Delivered freelance projects for clients, focusing on practical,
              functional solutions using{" "}
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
