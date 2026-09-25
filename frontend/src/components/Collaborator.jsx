import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collaborator = () => {
  return (
    <section id="parceiros" className="bg-[#0a2a1e] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#f4801f] font-medium text-[15px] mb-3">Colaborador oficial Iberdrola</p>
            <h2 className="text-[#4ade80] font-serif text-[26px] md:text-[30px] font-semibold leading-[1.4] mb-8">
              Imagine ter uma equipa dedicada ao seu sucesso, com um gestor personalizado, sempre disponível para o orientar e apoiar em cada passo do caminho. Na RZEnergy valorizamos a proximidade e o tratamento amigável com os nossos parceiros comerciais, garantindo uma gestão ágil e eficiente de contratos e incidentes, para que possa concentrar-se no fecho de contratos e no sucesso profissional.
            </h2>

            <div className="space-y-5 text-white/80 text-[15px] leading-[1.85]">
              <p>
                Ao cooperar com a RZEnergy, terá acesso exclusivo à nossa plataforma CRM como colaborador Iberdrola, o que lhe permite acompanhar os seus contratos de forma fácil e eficiente. Além disso, a nossa equipa de marketing está sempre à disposição para lhe dar o suporte necessário, desde estratégias de vendas até materiais promocionais de alta qualidade.
              </p>
              <p>
                E quanto ao pagamento? Na RZEnergy reconhecemos e valorizamos o seu trabalho árduo. Por isso, garantimos-lhe um pagamento semanal, para que possa usufruir dos seus ganhos de forma rápida e sem complicações.
              </p>
              <p>
                E o melhor de tudo é que contamos com um Backoffice próprio, pronto para lhe dar o suporte que precisa a qualquer hora do dia. Desde responder a perguntas até fornecer assistência personalizada, estamos aqui para ajudá-lo a atingir os seus objetivos.
              </p>
              <p>
                Então, o que está à espera? Junte-se hoje à família de colaboradores oficiales Iberdrola com a RZEnergy e descubra todas as oportunidades que temos para si no emocionante mundo da energia.
              </p>
              <p className="text-white font-semibold">O seu sucesso começa aqui!</p>
            </div>

            <a
              href="#formulario"
              className="group mt-10 inline-flex items-center gap-2 bg-[#f4801f] hover:bg-[#ff9838] text-white px-7 py-3.5 rounded-full font-medium text-[15px] transition-colors shadow-lg shadow-[#f4801f]/30"
            >
              Colaborar
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-6 lg:pt-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                alt="Team"
                className="w-full h-[300px] md:h-[360px] object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509390144018-eeaf62b1bd5c?w=1200&q=80"
                alt="Energy"
                className="w-full h-[300px] md:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborator;
