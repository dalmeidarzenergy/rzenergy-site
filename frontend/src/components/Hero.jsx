import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-[#0a2a1e] pt-28 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
      {/* subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#009640]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#f4801f]/5 blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <p className="text-[#f4801f] text-[13px] md:text-[15px] font-medium tracking-wide mb-3 md:mb-4">Colaborador oficial iberdrola</p>
            <h1 className="text-white font-serif text-[36px] leading-[1.1] sm:text-[46px] md:text-[62px] md:leading-[1.05] font-normal tracking-tight mb-8 md:mb-10 max-w-[600px]">
              Benefícios e serviços energéticos
            </h1>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 border border-white/60 hover:bg-white hover:text-[#0a2a1e] text-white px-6 md:px-7 py-3 md:py-3.5 rounded-full font-medium text-[14px] md:text-[15px] transition-colors"
              >
                Contactar
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:pt-16">
            <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.85] md:leading-[1.9] text-left md:text-justify">
              Como colaborador oficial da Iberdrola, a{' '}
              <span className="font-semibold text-white">RZEnergy</span>, promove os benefícios energéticos e os serviços oferecidos a todos os seus clientes. Assumimos um compromisso com a satisfação do cliente através da transparência, seriedade e do atendimento personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
