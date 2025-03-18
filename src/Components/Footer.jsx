import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#795059] to-[#c48d8a] text-white py-8 mt-auto">
      {/* Enlace al pie del sitio */}
      <div className="mt-8 text-center">
        <p className="text-sm">
          Sitio web realizado por{' '}
          <a
            href="https://softfusion.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 hover:text-pink-500"
          >
            Soft Fusion
          </a>
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sección de enlaces */}

          <div>
            <h3 className="font-semibold text-lg">Enlaces</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/inicio"
                  className="hover:text-pink-300 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/vestidos-largos"
                  className="hover:text-pink-300 transition-colors"
                >
                  Vestidos Largos
                </Link>
              </li>
              <li>
                <Link
                  to="/vestidos-cortos"
                  className="hover:text-pink-300 transition-colors"
                >
                  Vestidos Cortos
                </Link>
              </li>
              <li>
                <Link
                  to="/novias"
                  className="hover:text-pink-300 transition-colors"
                >
                  Novias
                </Link>
              </li>
              <li>
                <Link
                  to="/vestidosnena"
                  className="hover:text-pink-300 transition-colors"
                >
                  Vestido Nenas
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div>
            <h3 className="font-semibold text-lg">Síguenos</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Sección de información de contacto */}
          <div>
            <h3 className="font-semibold text-lg">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li>📍 Calle Ficticia 123, Ciudad</li>
              <li>📞 +54 9 1234 5678</li>
              <li>✉️ contacto@mitienda.com</li>
            </ul>
          </div>

          {/* Sección de derechos */}
          <div>
            <h3 className="font-semibold text-lg">Derechos</h3>
            <p className="mt-4 text-sm">
              &copy; 2025 Muñequitas Alquiler. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
