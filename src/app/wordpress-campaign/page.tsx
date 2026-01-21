// import { Header } from "@components/layout/composed/Header";
import { Footer } from "@components/layout/composed/Footer";
import { Section } from "@components/layout/base/Section";
import { 
  FaRocket, 
  FaSearch, 
  FaShieldAlt, 
  FaBolt, 
  FaChartLine, 
  FaWordpress, 
  FaWhatsapp, 
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { WHATSAPP_URL } from "@lib/constants";
import { Button } from "@components/ui/base/Button";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otimização de Performance WordPress | Enrique René",
  description: "Seu site WordPress mais rápido do que nunca. Otimização de Core Web Vitals, performance e SEO para converter mais visitantes em clientes.",
};

export default function WordPressCampaign() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/*<Header />*/}
      
      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/50 text-blue-300 text-sm font-medium mb-8">
            <FaWordpress className="text-lg" />
            <span>Especialista em Performance WordPress</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Transforme seu WordPress em uma Máquina de Vendas
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Pare de perder clientes por causa de um site lento. Eu otimizo a velocidade do seu WordPress para atingir notas máximas no Google PageSpeed e melhorar seu posicionamento no SEO.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={WHATSAPP_URL} className="bg-green-600 hover:bg-green-500 border-none">
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Otimizar meu site agora
            </Button>
            <Button href="#problemas" variant="secondary">
              Por que a velocidade importa?
            </Button>
          </div>
        </div>
      </Section>

      {/* Problemas Section */}
      <Section id="problemas" className="bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Um site lento está destruindo seu negócio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                <FaChartLine className="text-red-400 rotate-180" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Perda de Conversão</h3>
              <p className="text-gray-400">
                Cada segundo de atraso reduz as conversões. Se o seu site demora 3 segundos ou mais, você está deixando dinheiro na mesa.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                <FaSearch className="text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Punição do Google</h3>
              <p className="text-gray-400">
                O Google prioriza sites rápidos. Se o seu Core Web Vitals estiver no &quot;vermelho&quot;, seus concorrentes passarão na sua frente.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                <FaArrowRight className="text-red-400 rotate-45" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Experiência Ruim</h3>
              <p className="text-gray-400">
                Visitantes frustrados com a lentidão raramente voltam. A primeira impressão é a que fica, e ela deve ser instantânea.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Metodologia Section */}
      <Section id="servicos" className="bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">O que eu faço pelo seu site</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Minha abordagem é técnica e focada em resultados. Não instalo apenas &quot;plugins de cache&quot;, eu otimizo o código e o servidor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4 p-6 bg-gray-800/40 rounded-xl border border-gray-700/50">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <FaBolt className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aceleração de Carregamento</h3>
                  <p className="text-gray-400">Otimização de LCP (Largest Contentful Paint) para que o conteúdo principal apareça instantaneamente.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-800/40 rounded-xl border border-gray-700/50">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Estabilidade Visual (CLS)</h3>
                  <p className="text-gray-400">Eliminação de &quot;layout shifting&quot; durante o carregamento, melhorando a nota no Core Web Vitals.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-800/40 rounded-xl border border-gray-700/50">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Otimização de Servidor e DB</h3>
                  <p className="text-gray-400">Configuração fina de Nginx/Apache, Redis, PHP e limpeza profunda de banco de dados.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">O Checklist da Vitória:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Imagens convertidas para WebP/AVIF com lazy-load</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Minificação e combinação inteligente de JS e CSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Configuração de CDN Cloudflare com regras de cache</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Remoção de plugins pesados e scripts inúteis</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Relatório detalhado de antes e depois</span>
                </li>
              </ul>
              <div className="mt-8">
                 <Button href={WHATSAPP_URL} className="w-full bg-green-600 hover:bg-green-500 border-none">
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Solicitar Auditoria Grátis
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section id="cta" className="bg-gradient-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Não deixe seu cliente esperando. <br className="hidden md:block" /> Torne seu site ultrarrápido hoje.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Estou disponível para analisar seu projeto e propor a melhor estratégia de otimização.
          </p>
          <div className="flex justify-center">
            <Button href={WHATSAPP_URL} className="bg-white text-blue-600 hover:bg-gray-100 border-none py-6 px-12 text-xl shadow-2xl">
              <FaWhatsapp className="mr-3 h-6 w-6 text-green-500" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
