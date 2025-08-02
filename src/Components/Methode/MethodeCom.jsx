import React, { useEffect, useRef, useState } from "react";
import vecteures from "../../assets/bg/ilustcopie.png";

export default function GithubExercisesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="py-16 px-8 bg-[var(--bg-color)] text-[var(--text-color)] relative overflow-hidden"
      >
        {/* Illustration en fond */}
        <div className="flex absolute mr-10 top-[-100px] md:left-29  z-0 pointer-events-none top-0 h-screen">
          <img src={vecteures} alt="Placeholder" className="object-cover" />
        </div>

        {/* Contenu principal */}
        <div className={`max-w-4xl mx-auto text-center relative z-10 ${visible ? "fade-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📂 Exercices pratiques sur GitHub
          </h2>
          <p className="mb-6">
            Pour progresser, rien de mieux que la pratique !  
            Retrouvez nos exercices en C, Python, JavaScript et Dart sur notre dépôt GitHub.  
            Clonez-les, testez-les, améliorez-les et proposez vos solutions.
          </p>
<a
  href="https://github.com/ton-utilisateur/ton-repo"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-5 py-3 mb-8 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
>
  <svg
    className="w-6 h-6 mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.393 7.86 10.915.574.106.785-.248.785-.553 0-.273-.01-1-.015-1.96-3.2.694-3.878-1.543-3.878-1.543-.522-1.328-1.274-1.68-1.274-1.68-1.04-.712.078-.698.078-.698 1.15.08 1.754 1.18 1.754 1.18 1.022 1.75 2.68 1.246 3.332.953.104-.74.4-1.246.727-1.533-2.553-.292-5.236-1.276-5.236-5.68 0-1.254.448-2.276 1.18-3.078-.12-.29-.512-1.46.112-3.04 0 0 .96-.31 3.14 1.18a10.93 10.93 0 0 1 2.86-.385c.97.004 1.946.13 2.86.384 2.18-1.49 3.14-1.18 3.14-1.18.624 1.58.232 2.75.113 3.04.736.8 1.18 1.824 1.18 3.078 0 4.414-2.688 5.384-5.25 5.672.416.36.784 1.077.784 2.172 0 1.568-.014 2.832-.014 3.22 0 .308.208.664.792.552C20.712 21.39 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z"
      clipRule="evenodd"
    />
  </svg>
  Voir les exercices sur GitHub
</a>


          <h3 className="text-xl font-semibold mb-6">⚙️ Prérequis</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* VSCode */}
            <div className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white rounded-xl shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                alt="VSCode Logo"
                className="w-14 h-14 mb-3"
              />
              <h4 className="font-semibold mb-1">Visual Studio Code</h4>
              <p className="text-sm mb-3">
                L’éditeur moderne, rapide et gratuit pour coder, tester et déboguer facilement vos projets.
              </p>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white text-sm rounded-xl shadow-md hover:scale-105 transition"
              >
                Télécharger VSCode
              </a>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white rounded-xl shadow-md">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
                alt="Git Logo"
                className="w-14 h-14 mb-3"
              />
              <h4 className="font-semibold mb-1">Git</h4>
              <p className="text-sm mb-3">
                Indispensable pour gérer vos versions de code, collaborer et expérimenter sans crainte.
              </p>
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white text-sm rounded-xl shadow-md hover:scale-105 transition"
              >
                Télécharger Git
              </a>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white rounded-xl shadow-md">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                className="w-14 h-14 mb-3"
              />
              <h4 className="font-semibold mb-1">Compte GitHub</h4>
              <p className="text-sm mb-3">
                Pour héberger, partager vos exercices et recevoir des feedbacks de la communauté.
              </p>
              <a
                href="https://github.com/join"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white text-sm rounded-xl shadow-md hover:scale-105 transition"
              >
                Créer un compte GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
