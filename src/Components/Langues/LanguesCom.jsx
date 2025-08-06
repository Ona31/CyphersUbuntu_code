import React, { useEffect, useRef, useState } from "react";

export default function LangagesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
        className="py-16 px-8 bg-[var(--bg-color)] text-[var(--text-color)] relative"
      >
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${visible ? "fade-up" : ""}`}>
          Langages et technologies que vous allez apprendre
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 128 128"
                >
                  <circle fill="#A8B9CC" cx="64" cy="64" r="64" />
                  <path
                    fill="#000000"
                    d="M85 65c-1 14-12 25-28 25-9 0-17-4-22-10l10-11c3 4 7 6 12 6 6 0 10-5 10-12 0-6-4-12-10-12-5 0-9 3-12 6l-10-11c5-6 13-10 22-10 16 0 27 12 28 25z"
                  />
                </svg>
              ),
              title: "C",
              desc: `Langage bas niveau proche du matériel.
Idéal pour systèmes d’exploitation, drivers, firmware et embarqué.
Permet de comprendre la mémoire, la compilation et les fondements.
Base solide pour tout développeur souhaitant « voir sous le capot ».`,
              delay: "0s"
            },
            {
              icon: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/120px-Python-logo-notext.svg.png"
                  alt="Python Logo"
                  width="80"
                />
              ),
              title: "Python",
              desc: `Langage haut niveau, clair et lisible.
Très utilisé en data science, IA, scripts et développement web.
Permet de créer rapidement des projets puissants tout en restant accessible.`,
              delay: "0.2s"
            },
            {
              icon: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                  alt="JavaScript Logo"
                  width="80"
                />
              ),
              title: "JavaScript",
              desc: `Le langage incontournable du web.
Rend les sites dynamiques et interactifs.
Permet aussi de créer des applis mobiles, desktop et backend avec Node.js.`,
              delay: "0.4s"
            },
            {
              icon: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
                  alt="Dart Logo"
                  width="80"
                />
              ),
              title: "Dart",
              desc: `Langage moderne créé par Google.
Principalement utilisé avec Flutter pour créer des apps mobiles, web et desktop à partir d’un seul code.
Rapide, productif et parfait pour de belles interfaces.`,
              delay: "0.6s"
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="90"
                  height="90"
                >
                  <path
                    fill="#00979D"
                    d="M250,30C132.3,30,37.5,124.8,37.5,242.5S132.3,455,250,455s212.5-94.8,212.5-212.5S367.7,30,250,30z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M345.3,236c-4.7-22.1-22.9-38.4-44.5-38.4c-24.7,0-44.8,22.1-44.8,49.4s20.1,49.4,44.8,49.4
                    c19.1,0,35.2-13.7,41.9-32.6h20c-7.4,28.2-31.4,48.6-61.9,48.6c-35.5,0-64.3-32.7-64.3-73s28.8-73,64.3-73
                    c29.4,0,54.2,21.3,61.1,51.6H345.3z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M155,197.6c-24.7,0-44.8,22.1-44.8,49.4s20.1,49.4,44.8,49.4c19.1,0,35.2-13.7,41.9-32.6h20
                    c-7.4,28.2-31.4,48.6-61.9,48.6c-35.5,0-64.3-32.7-64.3-73s28.8-73,64.3-73c29.4,0,54.2,21.3,61.1,51.6h-20
                    C190.8,214,172.7,197.6,155,197.6z"
                  />
                  <rect x="231" y="237" fill="#FFFFFF" width="38" height="18" />
                </svg>
              ),
              title: "Arduino",
              desc: `Plateforme open-source basée sur des microcontrôleurs.
Parfaite pour créer des projets électroniques, domotique, robots et objets connectés.
Idéale pour apprendre à relier le code au monde physique.`,
              delay: "0.8s"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center
                p-6 rounded-xl shadow-md
                bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40
                backdrop-blur-md border border-[rgba(255,255,255,0.1)]
                ${visible ? "fade-up" : ""}
              `}
              style={{ animationDelay: visible ? item.delay : "0s" }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm whitespace-pre-line leading-relaxed text-[var(--text-color)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
