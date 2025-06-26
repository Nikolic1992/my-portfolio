function NavBar() {
  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-6 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-8 py-4 shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-white/15 sm:top-8 md:top-10 md:px-10">
      <div className="text-mainGray flex items-center gap-4">
        <button className="nav-bar-btn" onClick={() => scrollTo("about")}>
          <h4>About</h4>
        </button>
        <button className="nav-bar-btn" onClick={() => scrollTo("projects")}>
          <h4>Projects</h4>
        </button>
        <button
          className="nav-bar-btn"
          onClick={() => scrollTo("testimonials")}
        >
          <h4>Testimonials</h4>
        </button>
        <button className="nav-bar-btn" onClick={() => scrollTo("contact")}>
          <h4>Contact</h4>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
