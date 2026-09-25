import React from 'react';
import { ArrowRight, Users, DoorOpen, Handshake, Headset } from 'lucide-react';
import { whyWorkWithUs } from '../mock';

const openPositions = [
  {
    icon: Users,
    items: [
      { text: 'Chefes de Equipa', bullet: true },
      { text: 'M/F - Porta a Porta', bullet: false },
    ],
  },
  {
    icon: DoorOpen,
    items: [
      { text: 'Comerciais', bullet: true },
      { text: 'M/F - Porta a Porta', bullet: false },
    ],
  },
  {
    icon: Handshake,
    items: [
      { text: 'Parceiros', bullet: true },
      { text: 'Sub-Agentes', bullet: true },
    ],
  },
  {
    icon: Headset,
    items: [
      { text: 'Supervisores de Call Center M/F', bullet: true },
      { text: 'Operadores de Call Center M/F', bullet: true },
    ],
  },
];

const WhyUs = () => {
  return (
    <section id="trabalhe-connosco" className="bg-[#fbf4ea] py-14 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <p className="text-[#009640] font-medium text-[13px] md:text-[15px] mb-3 md:mb-4">Trabalhe connosco</p>
            <h2 className="text-[#0a2a1e] font-serif text-[26px] sm:text-3xl md:text-4xl font-semibold leading-[1.15] mb-8 md:mb-10">
              Porquê trabalhar connosco?
            </h2>

            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt="team"
                className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-7 md:space-y-8 lg:pt-14">
            {whyWorkWithUs.map((item) => (
              <div key={item.id} className="group">
                <div className="flex items-baseline gap-3 mb-2 md:mb-3">
                  <span className="text-[#009640] font-serif font-semibold text-lg md:text-xl">{item.number}.</span>
                  <h4 className="text-[#0a2a1e] font-serif font-semibold text-[19px] md:text-[22px]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[#0a2a1e]/75 text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.85] pl-5 md:pl-6 text-left md:text-justify">
                  {item.description}
                </p>
              </div>
            ))}

            <div className="pt-4 pl-5 md:pl-6 border-l-2 border-[#009640]/30 ml-0">
              <h3 className="text-[#0a2a1e] font-serif text-[22px] md:text-[26px] font-semibold mb-3 md:mb-4">
                Junta-te à equipa
              </h3>
              <p className="text-[#0a2a1e]/75 text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.85] text-left md:text-justify">
                Estamos à procura de novos talentos para se juntarem à nossa equipa. Se procura crescer profissionalmente no setor energético, entre em contacto connosco e descubra as oportunidades que a RZEnergy tem para si.
              </p>

              <p className="text-[#0a2a1e] font-semibold text-[14px] md:text-[15px] mt-5 md:mt-6 mb-3 md:mb-4">
                Estamos à procura de:
              </p>

              <ul className="space-y-3">
                {openPositions.map((pos, i) => {
                  const Icon = pos.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-3 md:gap-4 bg-white/60 hover:bg-white transition-colors rounded-xl p-3 border border-[#009640]/20"
                    >
                      <span className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg border-2 border-[#009640] flex items-center justify-center bg-white">
                        <Icon size={20} className="text-[#0a2a1e]" strokeWidth={1.8} />
                      </span>
                      <div className="flex-1 pt-0.5 min-w-0">
                        {pos.items.map((item, j) => (
                          <p
                            key={j}
                            className="text-[#0a2a1e] text-[13.5px] md:text-[14.5px] font-semibold leading-[1.5] md:leading-[1.55] flex items-start gap-2"
                          >
                            {item.bullet ? (
                              <span className="text-[#009640] mt-0.5">•</span>
                            ) : (
                              <span className="w-3" />
                            )}
                            <span className={item.bullet ? '' : 'font-normal text-[#0a2a1e]/75'}>
                              {item.text}
                            </span>
                          </p>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 md:mt-6 text-[#0a2a1e] text-[14px] md:text-[15px] font-medium leading-relaxed break-words">
                Envie o seu CV para{' '}
                <a
                  href="mailto:recrutamento@rzenergy.pt"
                  className="text-[#009640] font-semibold hover:underline lowercase tracking-normal break-all"
                >
                  recrutamento@rzenergy.pt
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
