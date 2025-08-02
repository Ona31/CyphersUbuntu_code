import React, { useEffect, useRef, useState } from "react";

export default function ChallengesSection() {
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
        className="py-16 px-8 bg-gradient-to-br from-[#081028] to-[#0c1a40] text-white"
      >
        {/* Titre et intro */}
        <div className={`max-w-5xl mx-auto text-center mb-12 ${visible ? "fade-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Mini challenges pour progresser</h2>
          <p className="max-w-2xl mx-auto">
            Entraîne-toi sur des petits projets amusants avec C, Python, HTML, CSS, Dart et JavaScript.
          </p>
        </div>

        {/* Grille des challenges */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "💻 Calculer une factorielle (C)", desc: "Un exercice classique pour apprendre les boucles et fonctions.", delay: "0s" },
            { title: "🔑 Générateur de mot de passe (Python)", desc: "Crée un script qui génère un mot de passe sécurisé.", delay: "0.1s" },
            { title: "🎨 Page de profil responsive (HTML/CSS)", desc: "Défie-toi à créer une page qui s’adapte aux mobiles et desktops.", delay: "0.2s" },
            { title: "🧮 Compteur interactif (JavaScript)", desc: "Un petit projet pour manipuler le DOM et les événements.", delay: "0.3s" },
            { title: "💱 Convertisseur de devises (Dart)", desc: "Programme console qui convertit entre euros et dollars par exemple.", delay: "0.4s" }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] ${visible ? "fade-up" : ""}`}
              style={{ animationDelay: visible ? item.delay : "0s" }}
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
