function NavBar() {
  return (
    <nav className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg px-8 py-6">
      <div className="flex items-center gap-8 text-mainGray">
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
