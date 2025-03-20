import React from 'react';

export default function Mapa() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500"
      data-aos="fade-up"
      id="ubicacion"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.950771274618!2d-65.5999586249778!3d-27.34547797689979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf6862dadb89%3A0x18a95b92b8581777!2sEspa%C3%B1a%201875%2C%20T4146%20Concepci%C3%B3n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1710969234876!5m2!1ses-419!2sar"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
