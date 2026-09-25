import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../mock';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Início');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a2a1e]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-3 md:py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://customer-assets.emergentagent.com/job_zirconite-preview/artifacts/ewwdv0oz_Design%20sem%20nome%20%287%29.webp"
            alt="RZEnergy - Colaborador Oficial Iberdrola"
            className="h-9 sm:h-11 md:h-14 w-auto object-contain drop-shadow-md"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-[15px] font-medium tracking-wide transition-colors relative ${
                active === link.label ? 'text-[#f4801f]' : 'text-white hover:text-[#f4801f]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0a2a1e] border-t border-white/10 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActive(link.label); setMobileOpen(false); }}
                className={`text-base font-medium ${
                  active === link.label ? 'text-[#f4801f]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
