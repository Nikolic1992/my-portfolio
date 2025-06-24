import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-mainWhite mx-0 mt-15 mb-10 flex h-[80px] flex-col items-center justify-between gap-2 bg-transparent md:mx-20 md:h-[100px] md:flex-row md:px-0">
      <p className="w-[300px] text-center text-sm md:text-base">
        &copy; {new Date().getFullYear()}{" "}
        <span className="gradient-text">Stevan Nikolic</span>. All rights
        reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/nikolics_92/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mainWhite hover:text-lightPurple rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/15"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://github.com/Nikolic1992"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mainWhite hover:text-lightPurple rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/15"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikolic1992/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mainWhite hover:text-lightPurple rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/15"
        >
          <FaLinkedinIn size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
