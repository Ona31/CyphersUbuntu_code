import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-[#081028] to-[#0c1a40] text-white py-10 px-6 z-100">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Rejoignez-nous sur <span className="text-[var(--accent-color)]">CyphersUbuntu_code</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Suivez notre communauté et restez informé de toutes nos dernières actualités, projets et exercices partagés.
            Ensemble, apprenons et partageons notre passion pour le code !
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <a href="https://wa.me/243849676676" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fab fa-whatsapp text-2xl"></i>
              <span className="block text-sm mt-1">WhatsApp</span>
            </a>
            <a href="https://x.com/EliseeOnyembo?t=y_cIc_AMayWgC_oqgN_K9A&s=09" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fab fa-x-twitter text-2xl"></i>
              <span className="block text-sm mt-1">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/elis%C3%A9e-onyembo-374891317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <i className="fab fa-linkedin text-2xl"></i>
              <span className="block text-sm mt-1">LinkedIn</span>
            </a>
            <a href="https://pin.it/VA4QDJGrg" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fab fa-pinterest text-2xl"></i>
              <span className="block text-sm mt-1">Pinterest</span>
            </a>
            <a href="https://github.com/Ona31" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fab fa-github text-2xl"></i>
              <span className="block text-sm mt-1">GitHub</span>
            </a>
            <a href="https://www.instagram.com/dev31_wm?utm_source=qr&igsh=MTJ3ajY0a3RrZ2g5Yw==" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fab fa-instagram text-2xl"></i>
              <span className="block text-sm mt-1">Instagram</span>
            </a>
            <a href="mailto:elisee.dev@exemple.com" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fas fa-envelope text-2xl"></i>
              <span className="block text-sm mt-1">Email</span>
            </a>
            <a href="https://elisee-dev-portfolios.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fas fa-globe text-2xl"></i>
              <span className="block text-sm mt-1">Portfolio</span>
            </a>
            <a href="https://www.awwwards.com/elisee-onyembo/" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition">
              <i className="fas fa-award text-2xl"></i>
              <span className="block text-sm mt-1">Awwwards</span>
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            © 2025 CyphersUbuntu_code – Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}
