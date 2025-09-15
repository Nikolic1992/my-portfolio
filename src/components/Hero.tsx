import { Link, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Hero() {
  const location = useLocation();
  const [displayText, setDisplayText] = useState("Creating Dynamic Web Magic");
  const [showCursor, setShowCursor] = useState(false);

  const fullText = "Creating Dynamic Web Magic";

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    setShowCursor(true);

    const typeWriterCycle = () => {
      setDisplayText("");

      // Faza pisanja
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);

          // Pauza nakon pisanja (2 sekunde)
          setTimeout(() => {
            // Faza brisanja
            let deleteIndex = fullText.length;
            const deletingInterval = setInterval(() => {
              if (deleteIndex > 0) {
                deleteIndex--;
                setDisplayText(fullText.slice(0, deleteIndex));
              } else {
                clearInterval(deletingInterval);
              }
            }, 50); // Brzina brisanja
          }, 2000); // Pauza pre brisanja
        }
      }, 100); // Brzina pisanja
    };

    // Pokreni prvi ciklus nakon 3 sekunde
    const startAnimation = setTimeout(() => {
      typeWriterCycle();

      // Ponavljaj ciklus svakih 8 sekundi
      const repeatInterval = setInterval(typeWriterCycle, 8000);

      return () => clearInterval(repeatInterval);
    }, 3000);

    return () => {
      clearTimeout(startAnimation);
    };
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      const cursor = document.querySelector(".typing-cursor");
      if (cursor && cursor instanceof HTMLElement) {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
      }
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <div className="relative flex h-screen items-center justify-center px-4">
      <NavBar />
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-8 md:gap-10">
        <h3 className="text-secondaryGray min-h-[1.5rem] text-center tracking-widest">
          {displayText}
          {showCursor && (
            <span className="typing-cursor" style={{ opacity: 1 }}>
              |
            </span>
          )}
        </h3>

        <h1 className="text-mainWhite text-center text-4xl lg:text-7xl">
          Transforming Concepts into Seamless{" "}
          <span className="gradient-text">User Experiences</span>
        </h1>

        <h3 className="text-secondaryGray text-center md:tracking-widest">
          Hi, I am <span className="gradient-text font-bold">Stevan</span>,
          Frontend Developer from Sydney
        </h3>

        <Link to="#projects">
          <button className="flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-8 py-6 shadow-lg transition-colors duration-300 hover:bg-white/15 md:w-auto">
            <h3 className="text-mainGray hover:text-mainWhite transition-colors duration-300">
              Checkout My Work
            </h3>
            <img src="./arrow.png" alt="arrow" />
          </button>
        </Link>
      </div>

      <div className="absolute bottom-10 z-10 flex w-full justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Hero;
