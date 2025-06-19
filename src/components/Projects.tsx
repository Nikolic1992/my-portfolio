import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

type ProjectsProps = {
  scrollTo?: string;
};

function Projects({ scrollTo }: ProjectsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTo === "projects" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="relative mt-15 flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-8"
    >
      <h1 className="text-mainWhite text-center">
        Selection of <span className="text-lightPurple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="text-mainWhite flex min-h-[400px] max-w-[600px] flex-col items-center justify-center gap-4 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-4 text-center md:min-h-[600px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold md:text-4xl">{project.title}</h2>
            <h4>{project.mainDescription}</h4>
            <Link
              to={`/${project.id}`}
              className="relative flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-8 py-4 shadow-lg transition-colors duration-300 hover:bg-white/15 md:w-auto"
            >
              <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-lg">
                <img
                  src="./purple-fade-project-background.png"
                  alt="fade overlay"
                  className="h-full w-full object-cover opacity-30"
                />
              </div>
              <h4 className="text-mainGray hover:text-mainWhite relative z-20 transition-colors duration-300">
                Case Study
              </h4>
              <img src="./arrow.png" alt="arrow" className="relative z-20" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
