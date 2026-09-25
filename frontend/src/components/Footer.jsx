import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { footerLinks } from '../mock';

const iconMap = { Facebook, Instagram, Linkedin };

const Footer = () => {
  return (
    <footer className="bg-[#062218] pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="md:col-span-1">
            <div className="inline-flex items-center mb-4 md:mb-6 -ml-2">
              <img
                src="https://customer-assets.emergentagent.com/job_zirconite-preview/artifacts/mrp5pdmh_Design%20sem%20nome%20%289%29.png"
                alt="RZEnergy - Soluções de Energia"
                className="h-24 sm:h-28 md:h-44 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[14px] md:text-[15px] mb-4 md:mb-5 uppercase tracking-wider">Informações legais</h4>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.legal.map((l) => {
                const isInternal = l.href.startsWith('/');
                const cls = "text-white/90 hover:text-[#f4801f] text-[14px] md:text-[15px] font-medium transition-colors";
                return (
                  <li key={l.label}>
                    {isInternal ? (
                      <Link to={l.href} className={cls}>{l.label}</Link>
                    ) : (
                      <a href={l.href} className={cls}>{l.label}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[14px] md:text-[15px] mb-4 md:mb-5 uppercase tracking-wider">Siga-nos</h4>
            <div className="flex items-center gap-3">
              {['Facebook', 'Instagram', 'Linkedin'].map((name) => {
                const Icon = iconMap[name];
                return (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/15 hover:bg-[#f4801f] hover:text-white text-white flex items-center justify-center transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-5 md:pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center">
          <p className="text-white/80 text-[13px] md:text-[14px] font-medium">2026 © RZEnergy. Todos os direitos reservados.</p>
          <p className="text-white/70 text-[12px] md:text-[13px] font-medium">Colaborador oficial Iberdrola</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
