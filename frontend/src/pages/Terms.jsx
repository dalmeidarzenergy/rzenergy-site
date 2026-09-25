import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Section = ({ number, title, children }) => (
  <section className="mb-8 md:mb-10">
    <h2 className="text-[#0a2a1e] font-serif text-[20px] md:text-[24px] font-bold leading-[1.3] mb-3 md:mb-4">
      {number}. {title}
    </h2>
    <div className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85] space-y-3">
      {children}
    </div>
  </section>
);

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App bg-[#fbf4ea] min-h-screen">
      <Header />

      <main>
        {/* Hero band */}
        <section className="bg-[#0a2a1e] pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="max-w-[900px] mx-auto px-5 md:px-6 lg:px-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#f4801f] text-[13px] md:text-[14px] font-medium mb-5 md:mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
            <p className="text-[#f4801f] font-medium text-[13px] md:text-[15px] mb-3">Informações legais</p>
            <h1 className="text-white font-serif text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-tight">
              Termos e Condições
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#fbf4ea] py-12 md:py-20">
          <div className="max-w-[900px] mx-auto px-5 md:px-6 lg:px-10">
            <Section number={1} title="Identificação">
              <p>
                <span className="font-semibold">www.rzenergy.pt</span>, propriedade de{' '}
                <span className="font-semibold">RZEnergy</span>, com sede em Rua Eng. Cusódio José Vilas Boas 64; 4740-300 Esposende, doravante “RZEnergy” ou “nós”.
              </p>
            </Section>

            <Section number={2} title="Objeto">
              <p>
                Estes Termos e Condições regulam o acesso e utilização do site{' '}
                <span className="font-semibold">www.rzenergy.pt</span>, incluindo os pedidos de informação, simulação e contratação de serviços (consultoria de luz, gás e fotovoltaico).
              </p>
            </Section>

            <Section number={3} title="Utilização do site">
              <p>
                Ao utilizar este site, compromete-se a fazê-lo de forma lícita, não violando direitos de terceiros nem comprometendo a segurança ou funcionamento do site.
              </p>
            </Section>

            <Section number={4} title="Alteração contratual">
              <p>
                A alteração contratual de luz e gás para a IBERDROLA CLIENTES PORTUGAL tal como contratação de Energia Solar (Painéis Solares) só serão efetuadas mediante aceitação prévia do cliente, com condições específicas acordadas em contrato ou proposta comercial própria — estes Termos e Condições gerais do site não substituem esse contrato.
              </p>
            </Section>

            <Section number={5} title="Propriedade intelectual">
              <p>
                Todo o conteúdo do site (textos, imagens, logótipos, marca RZEnergy) é propriedade da RZEnergy ou usado com autorização, sendo proibida a reprodução sem consentimento prévio.
              </p>
            </Section>

            <Section number={6} title="Limitação de responsabilidade">
              <p>
                A RZEnergy não se responsabiliza por indisponibilidades temporárias do site, nem por danos indiretos decorrentes da sua utilização, sem prejuízo dos direitos irrenunciáveis do consumidor previstos na lei.
              </p>
            </Section>

            <Section number={7} title="Resolução alternativa de litígios">
              <p>
                Em caso de litígio de consumo relacionado com os serviços contratados, o consumidor pode recorrer a uma entidade de Resolução Alternativa de Litígios (RAL). Mais informação em{' '}
                <a
                  href="https://www.consumidor.gov.pt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#009640] font-semibold hover:underline"
                >
                  www.consumidor.gov.pt
                </a>
                .
              </p>
            </Section>

            <Section number={8} title="Lei aplicável e foro">
              <p>
                Estes Termos regem-se pela lei portuguesa. Para dirimir qualquer litígio é competente o foro da comarca de Braga, sem prejuízo das regras de proteção do consumidor aplicáveis.
              </p>
            </Section>

            <Section number={9} title="Alterações">
              <p>
                A RZEnergy pode alterar estes Termos e Condições a qualquer momento, aplicando-se a versão em vigor à data de utilização do site.
              </p>
            </Section>

            <div className="mt-12 pt-6 border-t border-[#0a2a1e]/10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#009640] hover:text-[#0a2a1e] text-[14px] md:text-[15px] font-semibold transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar ao início
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
