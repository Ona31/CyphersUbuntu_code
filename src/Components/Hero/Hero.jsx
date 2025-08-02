import React, { useState, useEffect, useRef } from "react";
import vecteur from "../../assets/bg/vects.png";

export default function HeroSectionAnimated() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-100%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-100%); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100%); }
        }

        .slide-in-left {
          animation: slideInLeft 1s ease forwards;
        }
        .slide-out-left {
          animation: slideOutLeft 1s ease forwards;
        }
        .slide-in-right {
          animation: slideInRight 1s ease forwards;
        }
        .slide-out-right {
          animation: slideOutRight 1s ease forwards;
        }
      `}</style>

     <section
  ref={sectionRef}
  id="Hero"
  className="flex flex-col-reverse items-center justify-center
             md:flex-row md:items-center md:justify-between
             bg-[url('./assets/bg/bg.png')] bg-cover bg-center bg-blend-overlay
             h-auto md:h-screen
             pt-12 md:pt-20
             px-6 md:px-46 lg:px-32
             overflow-hidden"
>
  {/* Texte */}
  <div
    className={`w-full md:w-1/2 text-center md:text-left
                mt-8 md:mt-0
                ${visible ? "slide-in-left" : "slide-out-left"}`}
  >
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
      Apprenez à coder en C, Python, JavaScript et Dart avec{" "}
      <span className="text-[var(--accent-color)]">CypherUbuntu Code</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-md md:max-w-xl mx-auto md:mx-0 text-white">
      Des exercices interactifs et accessibles pour pratiquer, progresser
      et devenir un meilleur développeur, quel que soit votre niveau.
    </p>
  </div>

  {/* Image */}
  <div
    className={`w-3/4 max-w-sm sm:max-w-md md:w-1/2
                bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[rgba(255,255,255,0.1)]
                flex justify-center items-center mt-8 md:mt-0
                ${visible ? "slide-in-right" : "slide-out-right"}`}
  >
    <img
      src={vecteur}
      alt="Langages Illustration"
      className="w-full"
    />
  </div>
</section>

    </>
  );
}
