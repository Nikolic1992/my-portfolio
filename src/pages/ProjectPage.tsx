import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

function ProjectsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === parseInt(id ?? ""));

  const handleBack = () => {
    navigate("/", {
      state: { scrollTo: "projects" },
      replace: true,
    });

    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="relative flex min-h-screen items-center justify-center text-xl text-white">
        <button
          onClick={handleBack}
          className="text-mainGray hover:text-mainWhite absolute top-2 left-2 flex cursor-pointer items-center gap-4 rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-6 py-2 shadow-lg transition-colors duration-300 hover:bg-white/15"
        >
          GO BACK
        </button>
        Project not found.
      </div>
    );
  }

  return (
    <div className="relative flex h-screen items-center justify-center bg-[url('/grid-pattern.png')] bg-cover bg-center bg-no-repeat px-4">
      <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-10 rounded-lg border border-white/20 bg-white/10 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-10 pt-16 text-center md:min-h-[600px]">
        <button
          onClick={handleBack}
          className="text-mainGray hover:text-mainWhite absolute top-4 left-4 flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
        >
          <IoIosArrowBack
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="hidden px-2 sm:inline">GO BACK</span>
        </button>

        <h1 className="text-mainWhite text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.title}
          className="hidden max-h-[600px] rounded-xl object-contain shadow-[0_0_30px_rgba(0,0,0,0.5)] md:block"
        />

        <h3 className="text-mainWhite text-center text-sm md:text-xl">
          {project.description}
        </h3>

        <div className="flex items-center justify-center gap-8">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mainGray hover:text-mainWhite flex items-center gap-4 rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-6 py-2 shadow-lg transition-colors duration-300 hover:bg-white/15"
            >
              Live Preview
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mainWhite cursor-pointer transition-transform duration-500 hover:scale-130 hover:rotate-[360deg] hover:text-gray-400"
              title="View on GitHub"
            >
              <FaGithub size={46} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
