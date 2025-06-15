function NavBar() {
  return (
    <nav className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-xl border border-white/20 backdrop-blur-md shadow-lg px-8 py-4 transition-colors duration-300 hover:bg-white/15  bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)]">
      <div className="flex items-center gap-4 text-mainGray">
        <button className="nav-bar-btn">
          <h4>About</h4>
        </button>
        <button className="nav-bar-btn">
          <h4>Projects</h4>
        </button>
        <button className="nav-bar-btn">
          <h4>Testimonials</h4>
        </button>
        <button className="nav-bar-btn">
          <h4>Contact</h4>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
