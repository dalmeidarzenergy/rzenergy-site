import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Block = ({ title, children }) => (
  <section className="mb-8 md:mb-10">
    <h2 className="text-[#0a2a1e] font-serif text-[20px] md:text-[24px] font-bold leading-[1.3] mb-3 md:mb-4">
      {title}
    </h2>
    <div className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85] space-y-3">
      {children}
    </div>
  </section>
);

const SubBlock = ({ title, children }) => (
  <div className="mt-5 pl-4 border-l-2 border-[#009640]/30">
    <h3 className="text-[#0a2a1e] font-serif text-[17px] md:text-[19px] font-semibold mb-2 md:mb-3">
      {title}
    </h3>
    <div className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85] space-y-3">
      {children}
    </div>
  </div>
);

const RGPD = () => {
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
              Política RGPD
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#fbf4ea] py-12 md:py-20">
          <div className="max-w-[900px] mx-auto px-5 md:px-6 lg:px-10">

            <Block title="Responsável pelo tratamento">
              <p>
                Somos responsáveis pelo tratamento dos dados à medida que tratamos os dados pessoais dos nossos clientes e parceiros. Encontrará os nossos dados de contacto abaixo.
              </p>
              <div className="bg-white/60 border border-[#0a2a1e]/10 rounded-xl p-4 md:p-5 mt-2">
                <p className="font-semibold text-[#0a2a1e]">RZSolar</p>
                <p>Rua Dr. Justino Cruz, nº 110, 2º piso, Sala 1 e 2, 4700-314 Braga, Portugal</p>
                <p>Número de identificação da empresa: <span className="font-semibold">516554484</span></p>
              </div>
              <p>
                Se tiver dúvidas sobre o tratamento dos seus dados, pode contactar-nos através de{' '}
                <a href="mailto:saibamais@rzenergy.pt" className="text-[#009640] font-semibold hover:underline">
                  saibamais@rzenergy.pt
                </a>
                .
              </p>
            </Block>

            <Block title="Atividades de tratamento">
              <SubBlock title="Visitantes do site">
                <p>
                  Quando visita o nosso site, utilizamos cookies para que o site funcione, sobre os quais pode ler mais sobre a nossa{' '}
                  <Link to="/politica-de-cookies" className="text-[#009640] font-semibold hover:underline">
                    política de cookies
                  </Link>
                  .
                </p>
              </SubBlock>

              <SubBlock title="Comunicação com potenciais clientes">
                <p>
                  Quando tiver dúvidas sobre o nosso site ou quiser saber mais sobre os nossos serviços, pode contactar-nos através de:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Formulário de contacto</li>
                  <li>Email</li>
                  <li>Telefone</li>
                </ul>
                <p>
                  Com estes meios, tratamos as suas informações pessoais para dialogar consigo, por exemplo, responder a questões sobre os nossos serviços. Só tratamos a informação que nos dá em relação à nossa comunicação.
                </p>
                <p>
                  Normalmente, trataremos as seguintes informações gerais: nome, e-mail e número de telefone.
                </p>
                <p>
                  A nossa base legal para o tratamento destes dados pessoais é <span className="font-semibold">Artigo 6(1)(f) do RGPD</span>.
                </p>
                <p>
                  Iremos apagar a nossa comunicação consigo quando estiver claro se deseja ou não utilizar os nossos serviços.
                </p>
                <p>
                  Se, num caso específico, existir necessidade de armazenar as suas informações pessoais por um período mais prolongado, poderá ser esse o caso.
                </p>
              </SubBlock>

              <SubBlock title="Clientes">
                <p>
                  Comunicamos com os nossos clientes para garantir que os nossos serviços são prestados corretamente. Podemos tratar informações sobre nome, endereço, serviços, acordos especiais, informações de pagamento, etc.
                </p>
                <p>
                  A base legal para o tratamento destes dados pessoais é <span className="font-semibold">Artigo 6(1)(b) do Regulamento Geral sobre a Proteção de Dados</span>.
                </p>
                <p>
                  Quando o serviço estiver concluído, iremos imediatamente apagar os dados pessoais.
                </p>
              </SubBlock>

              <SubBlock title="Contratação / Simulação">
                <p>
                  Armazenamos faturas e documentos semelhantes para fins de contratação/simulação, incluindo informações pessoais gerais, como nome, endereço, CPE e IBAN.
                </p>
                <p>
                  A base legal para o tratamento de dados pessoais para fins de contratação ou simulação assenta na diligência pré-contratual a pedido do titular (<span className="font-semibold">Artigo 6.º, n.º 1, alínea b) do RGPD</span>) e no interesse legítimo da empresa em avaliar a viabilidade e prevenir fraudes.
                </p>
              </SubBlock>

              <SubBlock title="Pedidos de emprego">
                <p>
                  Congratulamo-nos com os pedidos de emprego para avaliar se os candidatos correspondem a uma necessidade de contratação na nossa empresa.
                </p>
                <p>
                  Suponha que nos envie o seu pedido de emprego. Nesse caso, a nossa base legal para o tratamento dos seus dados é <span className="font-semibold">Artigo 6.º, n.º 1, alínea f) do Regulamento Geral sobre a Proteção de Dados</span>.
                </p>
                <p>
                  Avaliaremos imediatamente os pedidos não solicitados para ver se se adequam às atuais necessidades de emprego. Iremos apagar novamente as suas informações se não houver correspondência.
                </p>
                <p>
                  Se se candidatasse a uma vaga de emprego, descartaríamos a sua candidatura se não fosse contratado e imediatamente após a consulta do candidato certo para o cargo.
                </p>
                <p>
                  Suponha que faça parte de um processo de recrutamento e seja contratado para o trabalho. Nesse caso, forneceremos informações separadas sobre como tratamos os seus dados nesta relação.
                </p>
                <p>
                  É nossa responsabilidade garantir que as suas informações pessoais são tratadas corretamente.
                </p>
              </SubBlock>
            </Block>

            <Block title="Divulgação de Informações Pessoais">
              <p>Não divulgamos as suas informações pessoais a terceiros.</p>
            </Block>

            <Block title="Definição de perfis">
              <p>Não fazemos perfil ou fazemos tratamentos automatizados.</p>
            </Block>

            <Block title="Transferências de países terceiros">
              <p>
                Utilizamos principalmente processadores na UE/EEE ou processadores que armazenam dados na UE/EEE.
              </p>
              <p>
                Isto não é possível em alguns casos, e os processadores de dados fora da UE/EEE são utilizados, mas apenas se estes puderem fornecer os seus dados com proteção adequada.
              </p>
            </Block>

            <Block title="Medidas de Segurança">
              <p>
                Mantemos o tratamento de dados pessoais seguro, garantindo as medidas técnicas e organizativas adequadas.
              </p>
              <p>
                Fizemos avaliações de risco do nosso tratamento de dados pessoais. Posteriormente, introduzimos medidas técnicas e organizativas adequadas para aumentar a segurança no tratamento.
              </p>
              <p>
                Uma das nossas medidas mais importantes é manter os nossos funcionários atualizados sobre o RGPD e a segurança de TI através de uma formação contínua de sensibilização para o RGPD e da revisão dos nossos procedimentos RGPD com os funcionários.
              </p>
            </Block>

            <Block title="Direitos dos titulares de dados">
              <p>
                De acordo com o Regulamento Geral de Proteção de Dados, tem vários direitos relativos ao tratamento dos seus dados. Pode ler mais sobre estes direitos em{' '}
                <a href="https://www.rgpd.com" target="_blank" rel="noreferrer" className="text-[#009640] font-semibold hover:underline">
                  RGPD.COM
                </a>
                .
              </p>
              <p>
                Se quiser fazer uso dos seus direitos, não hesite em contactar-nos para que o possamos ajudar.
              </p>

              <SubBlock title="Direito de Acesso">
                <p>Tem o direito de aceder à informação que tratamos sobre si.</p>
              </SubBlock>

              <SubBlock title="Direito de retificação">
                <p>Tem o direito de ter informações incorretas sobre si mesmo corrigidas.</p>
              </SubBlock>

              <SubBlock title="Direito ao apagamento dos dados (direito a ser esquecido)">
                <p>Em certas circunstâncias, tem o direito de ter informações sobre si apagadas antes da hora da nossa eliminação geral.</p>
              </SubBlock>

              <SubBlock title="Direito à limitação do tratamento">
                <p>
                  Nalguns casos, o utilizador tem o direito de solicitar a limitação do tratamento dos seus dados.
                </p>
                <p>
                  Só poderemos continuar a tratar as suas informações com o seu consentimento ou se tivermos um interesse legítimo quando isso ocorrer. Ainda podemos armazenar os seus dados.
                </p>
              </SubBlock>

              <SubBlock title="Direito de oposição">
                <p>
                  Em alguns casos, tem o direito de se opor ao nosso tratamento legal dos seus dados. Também pode opor-se ao tratamento das suas informações para marketing direto.
                </p>
              </SubBlock>

              <SubBlock title="Direito de portabilidade dos dados">
                <p>
                  Tem o direito de receber uma cópia das suas informações pessoais num formato estruturado, comumente utilizado e legível por máquina e de transferir estas informações pessoais de um responsável pelo tratamento para outro sem entraves.
                </p>
              </SubBlock>

              <SubBlock title="Retirada do consentimento">
                <p>
                  Quando o nosso tratamento dos seus dados é baseado no seu consentimento, tem o direito de retirar o seu consentimento.
                </p>
              </SubBlock>

              <SubBlock title="Reclamação à Agência de Proteção de Dados">
                <p>
                  Tem o direito de apresentar uma reclamação à Agência de Proteção de Dados se estiver insatisfeito com a forma como tratamos os seus dados.
                </p>
              </SubBlock>

              <p className="mt-5">
                De um modo geral, aconselhamo-lo a ler mais sobre o RGPD para se manter atualizado sobre as regras.
              </p>
            </Block>

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

export default RGPD;
