import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="empresa" className="bg-[#fbf4ea] py-14 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="mb-10 md:mb-14">
          <div className="w-full">
            <p className="text-[#009640] font-medium text-[13px] md:text-[15px] mb-3 md:mb-4">Sobre nós</p>
            <h2 className="text-[#0a2a1e] font-serif text-[26px] sm:text-3xl md:text-4xl font-semibold leading-[1.2] mb-5 md:mb-6">
              RZEnergy a sua empresa de confiança!
            </h2>
            <div className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85] md:leading-[1.9] space-y-4 md:space-y-5 text-left md:text-justify">
              <p>
                Na <span className="font-semibold text-[#0a2a1e]">RZEnergy</span>, somos uma empresa de consultoria energética e parceiros oficiais da Iberdrola, dedicados a ajudar clientes particulares e empresas a encontrar as soluções mais vantajosas para os seus consumos de energia.
              </p>
              <p>
                O nosso trabalho começa com uma análise detalhada das suas faturas de eletricidade e gás e do seu perfil de consumo. Com base nessa avaliação, identificamos oportunidades de otimização e apresentamos a proposta mais adequada às suas necessidades, permitindo reduzir custos e aumentar a eficiência energética.
              </p>
              <p>
                Além da consultoria energética, disponibilizamos também soluções de energia solar fotovoltaica, apoiando os nossos clientes na transição para uma energia mais sustentável, económica e independente. Acompanhamos todo o processo, desde a análise de viabilidade até à implementação da solução mais ajustada.
              </p>
              <p>
                Na <span className="font-semibold text-[#0a2a1e]">RZEnergy</span>, acreditamos que cada cliente é único. Por isso, oferecemos um acompanhamento próximo e personalizado, garantindo transparência, confiança e um compromisso constante com a poupança e a sustentabilidade.
              </p>
              <p className="text-[#009640] font-semibold text-[15px] md:text-[17px] pt-2 text-left">
                Analisamos. Otimizamos. Poupamos. Esse é o nosso compromisso consigo.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://customer-assets.emergentagent.com/job_zirconite-preview/artifacts/hl34pyyj_iber.jpg"
            alt="Iberdrola office"
            className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
