import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header Simples com Logo */}
      <header className="w-full py-6 px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/tetel-logo.png"
              alt="Tetel Logo"
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
              Tetel
            </span>
          </div>
        </div>
      </header>

      {/* CÍRCULOS FLUTUANTES */}
      <div className="absolute top-1/4 right-8 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/3 left-12 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />

      {/* HERO - ATRAIR ATENÇÃO */}
      <section className="w-full py-20 text-center text-white bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-400/50 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            <span className="text-red-400 font-semibold text-sm">
              PARE! Você está perdendo oportunidades no digital
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-red-400">Chega de promessas vazias.</span> <br />
            <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Comece hoje sua transformação no digital
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            A Tetel é para quem busca <span className="text-yellow-400 font-semibold">resultados reais</span>, com
            estratégias testadas, investimentos acessíveis e apoio verdadeiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#acao"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              ⚡ Quero começar agora
            </a>
            <p className="text-sm text-gray-400">👆 Acesso direto. Sem enrolação.</p>
          </div>
        </div>
      </section>

      {/* INTERESSE - DESPERTAR INTERESSE COM PROBLEMA/SOLUÇÃO */}
      <section id="interesse" className="w-full py-20 bg-zinc-900 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-red-400">Reconhece essa situação?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">❌ Você já tentou:</h3>
                <ul className="text-gray-300 space-y-3 text-left">
                  <li>• Cursos caros que prometem "ficar rico rápido"</li>
                  <li>• Fórmulas mágicas que só funcionam para outros</li>
                  <li>• Investir alto sem ter certeza do retorno</li>
                  <li>• Seguir estratégias complexas e confusas</li>
                  <li>• Comprar mais um curso achando que "esse vai ser diferente"</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">✅ O que realmente funciona:</h3>
                <ul className="text-gray-300 space-y-3 text-left">
                  <li>• Começar pequeno e crescer com segurança</li>
                  <li>• Produtos testados por quem já passou por isso</li>
                  <li>• Investimento baixo e acessível</li>
                  <li>• Orientação clara, sem jargões complicados</li>
                  <li>• Apoio real de quem entende sua situação</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">A Tetel nasceu dessa dor real</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Criada por quem já <span className="text-red-400 font-semibold">perdeu tudo</span> e precisou recomeçar do
              zero, sem dinheiro, sem contatos, só com vontade de mudar. Aqui você encontra soluções{" "}
              <span className="text-yellow-400 font-semibold">sem fórmulas mágicas, sem enganação</span> e sem precisar
              começar grande. É sobre{" "}
              <span className="text-cyan-400 font-semibold">verdade, simplicidade e movimento</span>.
            </p>
          </div>
        </div>
      </section>

      {/* DESEJO - MOSTRAR SOLUÇÕES E BENEFÍCIOS */}
      <section className="w-full py-20 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                Nossos Braços: Cada um pensado para você
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Não importa onde você está agora. Temos o caminho certo para seu momento:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* TetelPraVocê - Iniciantes */}
            <Link
              href="https://tetel.online/pravoce"
              target="_blank"
              className="group bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 p-8 rounded-xl hover:border-green-400 transition-all duration-300 text-left block hover:scale-105 transform"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">@tetelpravocê</h3>
                  <p className="text-sm text-green-300 font-semibold">PERFEITO PARA COMEÇAR</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <span className="text-green-400 font-semibold">Comece pequeno e faça caixa AGORA.</span> Produtos
                acessíveis com retorno rápido. Ideal para quem quer sair do zero sem grandes investimentos.
              </p>
              <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                <p className="text-green-300 text-sm">
                  💰 <strong>A partir de R$ 27</strong> • ⚡ Resultados rápidos
                </p>
              </div>
              <div className="text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                👉 Começar agora mesmo
              </div>
            </Link>

            {/* TetelDigital - Crescimento */}
            <Link
              href="https://tetel.online/digital"
              target="_blank"
              className="group bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 p-8 rounded-xl hover:border-blue-400 transition-all duration-300 text-left block hover:scale-105 transform"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💻</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">@teteldigital</h3>
                  <p className="text-sm text-blue-300 font-semibold">PARA ESCALAR</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Consultoria, análise de autoridade e{" "}
                <span className="text-blue-400 font-semibold">posicionamento estratégico</span>. Para quem já começou e
                quer crescer com clareza e direção.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-3 mb-4">
                <p className="text-blue-300 text-sm">
                  🚀 <strong>Consultoria personalizada</strong> • 📈 Crescimento sustentável
                </p>
              </div>
              <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                👉 Escalar meu negócio
              </div>
            </Link>

            {/* TetelPontocom - Produtos */}
            <Link
              href="https://tetel.online/pontocom"
              target="_blank"
              className="group bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 p-8 rounded-xl hover:border-purple-400 transition-all duration-300 text-left block hover:scale-105 transform"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💼</span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">@tetelpontocom</h3>
                  <p className="text-sm text-purple-300 font-semibold">PRODUTOS CURADOS</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Produtos físicos, digitais e serviços de parceiros confiáveis com nossa curadoria.{" "}
                <span className="text-purple-400 font-semibold">O que funciona, a gente entrega.</span>
              </p>
              <div className="bg-purple-500/20 rounded-lg p-3 mb-4">
                <p className="text-purple-300 text-sm">
                  ✅ <strong>Curadoria especializada</strong> • 🎯 Só o que vale a pena
                </p>
              </div>
              <div className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                👉 Ver produtos selecionados
              </div>
            </Link>

            {/* Marketplaces */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-800/30 border border-yellow-500/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🛍️</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">Marketplaces</h3>
                  <p className="text-sm text-yellow-300 font-semibold">OPORTUNIDADES SELECIONADAS</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <span className="text-yellow-400 font-semibold">Amazon, Shopee e Mercado Livre</span> - Produtos
                certeiros com oportunidades reais de ganho. Sem pegadinhas.
              </p>
              <div className="bg-yellow-500/20 rounded-lg p-3 mb-4">
                <p className="text-yellow-300 text-sm">
                  🎯 <strong>Seleção criteriosa</strong> • 💡 Oportunidades reais
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://tetel.online/amazon"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
                >
                  📦 Amazon
                </Link>
                <Link
                  href="https://tetel.online/shopee"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                >
                  🛍️ Shopee
                </Link>
                <Link
                  href="https://tetel.online/ml-bio"
                  target="_blank"
                  className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                >
                  🏪 Mercado Livre
                </Link>
              </div>
            </div>
          </div>

          {/* Por que somos diferentes */}
          <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Por que a Tetel é diferente de tudo que você já viu?
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <div className="text-3xl mb-3">💬</div>
                <p className="font-semibold text-gray-200">Linguagem simples</p>
                <p className="text-sm text-gray-400 mt-2">Sem jargões ou enrolação</p>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <div className="text-3xl mb-3">💰</div>
                <p className="font-semibold text-gray-200">Preços acessíveis</p>
                <p className="text-sm text-gray-400 mt-2">Você não precisa se endividar</p>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <div className="text-3xl mb-3">✅</div>
                <p className="font-semibold text-gray-200">Testado na prática</p>
                <p className="text-sm text-gray-400 mt-2">Por quem já passou por isso</p>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                <div className="text-3xl mb-3">❤️</div>
                <p className="font-semibold text-gray-200">História real</p>
                <p className="text-sm text-gray-400 mt-2">Compromisso verdadeiro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AÇÃO - CALL TO ACTION PRINCIPAL */}
      <section
        id="acao"
        className="w-full bg-gradient-to-r from-zinc-800 to-zinc-900 py-20 text-white text-center relative z-10"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-400/50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-yellow-400">Sua transformação começa com uma conversa</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Temos um canal direto no WhatsApp para entender seu momento e indicar o{" "}
              <span className="text-cyan-400 font-semibold">melhor caminho para você</span>.
              <br />
              <span className="italic text-yellow-400">
                Sem pressão. Só clareza, acolhimento e direcionamento real.
              </span>
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/5582999176900?text=Olá! Vim do site da Tetel e estou pronto para começar minha transformação no digital. Por onde devo começar?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              >
                💬 FALAR AGORA COM A TETEL
              </a>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Resposta rápida
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Sem compromisso
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Orientação gratuita
                </span>
              </div>
            </div>
          </div>

          {/* Urgência final */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <p className="text-red-400 font-bold mb-2">⏰ LEMBRE-SE:</p>
            <p className="text-gray-300 leading-relaxed">
              Cada dia que você adia é uma oportunidade perdida. Enquanto você pensa, outros estão agindo e conquistando
              seus resultados.{" "}
              <span className="text-yellow-400 font-semibold">Não seja mais um que fica só pensando.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER COM CTA EXTRA */}
      <footer className="py-8 text-center border-t border-gray-800 bg-black">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Image src="/images/tetel-logo.png" alt="Tetel Logo" width={24} height={24} />
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
            Tetel
          </span>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tetel Ecossistema. Soluções reais para quem quer transformar sua história no
          digital.
        </p>
      </footer>
    </div>
  )
}
