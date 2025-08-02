import React, { useEffect, useRef, useState } from "react";
import vecteurs from "../../assets/bg/ilust.png";


export default function AboutCom() {
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
        className="py-16 px-8 bg-[var(--bg-color)] text-[var(--text-color)] "
      >
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${visible ? "fade-up" : ""}`}>
          Pourquoi apprendre à coder ?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[ // tableau pour ajouter un délai différent sur chaque carte
            {
              title: "🌱 Développer la logique et la créativité",
              desc: "Coder t’aide à réfléchir, résoudre des problèmes et inventer des solutions originales.",
              delay: "0s"
            },
            {
              title: "🛠 Créer des projets concrets",
              desc: "Sites web, applis mobiles, automations... donne vie à tes idées et partage-les.",
              delay: "0.2s"
            },
            {
              title: "📈 Compétence recherchée",
              desc: "Le code est utile et demandé dans presque tous les métiers du numérique et au-delà.",
              delay: "0.4s"
            },
            {
              title: "🚀 Opportunités infinies",
              desc: "Travail salarié, freelance, start-up, projets persos... coder ouvre des portes.",
              delay: "0.6s"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`
                p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl shadow-md border border-[rgba(255,255,255,0.1)]
                ${visible ? "fade-up" : ""}
              `}
              style={{ animationDelay: visible ? item.delay : "0s" }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex absolute mr-10 h-screen">
            <img src={vecteurs} alt="Placeholder" className="object-cover" />
        </div>
      </section>
    </>
  );
}
