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

const PrivacyPolicy = () => {
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
              Política de Privacidade
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#fbf4ea] py-12 md:py-20">
          <div className="max-w-[900px] mx-auto px-5 md:px-6 lg:px-10">
            <Section number={1} title="Quem somos">
              <p>
                A presente Política de Privacidade aplica-se ao sítio{' '}
                <span className="font-semibold">www.rzenergy.pt</span>, propriedade de{' '}
                <span className="font-semibold">RZEnergy</span>, com sede em Rua Eng. Cusódio José Vilas Boas 64; 4740-300 Esposende, doravante “RZEnergy” ou “nós”.
              </p>
              <p>
                Para qualquer questão sobre esta política ou sobre os seus dados pessoais, pode contactar-nos através de{' '}
                <a href="mailto:saibamais@rzenergy.pt" className="text-[#009640] font-semibold hover:underline">
                  saibamais@rzenergy.pt
                </a>
                .
              </p>
            </Section>

            <Section number={2} title="Que dados recolhemos">
              <p>Recolhemos os dados que nos fornece voluntariamente através dos formulários do site, nomeadamente:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Nome</li>
                <li>Telefone</li>
                <li>Email</li>
                <li>Mensagem</li>
              </ul>
              <p>
                Recolhemos também dados de navegação através de cookies e ferramentas de análise (ver a nossa Política de Cookies).
              </p>
            </Section>

            <Section number={3} title="Para que usamos os seus dados">
              <p>Usamos os dados recolhidos para:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Responder a pedidos de informação, orçamento ou contacto</li>
                <li>Preparar propostas comerciais</li>
                <li>Melhorar o funcionamento do site</li>
                <li>Enviar comunicações comerciais, caso tenha dado consentimento para tal</li>
              </ul>
            </Section>

            <Section number={4} title="Fundamento legal">
              <p>
                O tratamento dos seus dados baseia-se no seu consentimento (ao submeter um formulário) e no nosso interesse legítimo em responder a pedidos de contacto e prestar os nossos serviços.
              </p>
            </Section>

            <Section number={5} title="Por quanto tempo guardamos os dados">
              <p>
                Conservamos os dados dos formulários de contacto pelo tempo necessário para responder ao pedido e, caso se torne cliente, pelo prazo exigido pela legislação fiscal e comercial aplicável.
              </p>
            </Section>

            <Section number={6} title="Partilha de dados com terceiros">
              <p>
                Não vendemos os seus dados a terceiros. Podemos partilhar dados com prestadores de serviços que nos ajudam a operar o site (ex.: alojamento, ferramentas de email, Google Analytics/Tag Manager), sempre no estrito cumprimento do RGPD.
              </p>
            </Section>

            <Section number={7} title="Os seus direitos">
              <p>
                Tem direito a aceder, retificar, apagar, limitar o tratamento, opor-se ao tratamento e à portabilidade dos seus dados. Para exercer qualquer um destes direitos, contacte-nos através de{' '}
                <a href="mailto:geral@rzsolar.pt" className="text-[#009640] font-semibold hover:underline">
                  geral@rzsolar.pt
                </a>
                .
              </p>
              <p>
                Tem também o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).
              </p>
            </Section>

            <Section number={8} title="Segurança">
              <p>
                Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda ou destruição.
              </p>
            </Section>

            <Section number={9} title="Alterações a esta política">
              <p>
                Esta política pode ser atualizada periodicamente. A versão em vigor é sempre a publicada nesta página.
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

export default PrivacyPolicy;
