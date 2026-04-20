/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  Lock, 
  Puzzle, 
  Mic, 
  Film, 
  Gamepad2, 
  RefreshCw,
  Clock
} from 'lucide-react';

// --- Components ---

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(7 * 60 + 22); // 7:22 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-1 font-bold text-white text-xl tracking-wider">
      <span>{String(minutes).padStart(2, '0')}</span>
      <span className="opacity-60">:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden bg-white mb-2 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-gray-50 transition-colors"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-sky-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BonusCard = ({ imageUrl, title, value, index }: { imageUrl: string, title: string, value: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl p-6 text-center relative border border-gray-200 hover:border-sky-200 transition-all group shadow-sm"
  >
    <div className="bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-4 tracking-wider">
      GRÁTIS
    </div>
    <div className="flex justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
      <img src={imageUrl} alt={title} className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
    </div>
    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
    <div className="text-xs text-gray-400 line-through mb-1">Valor: {value}</div>
    <div className="text-sm text-green-500 font-bold">GRÁTIS</div>
  </motion.div>
);

const PlanCard = ({ 
  type, 
  title, 
  description,
  oldPrice, 
  price, 
  features, 
  isFeatured = false,
  modules = [],
  onClick
}: { 
  type: string; 
  title: string; 
  description?: string;
  oldPrice: string; 
  price: string; 
  features: string[]; 
  isFeatured?: boolean;
  modules?: string[];
  onClick?: () => void;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white rounded-2xl p-8 relative flex flex-col h-full border-2 ${
      isFeatured ? 'border-sky-500 shadow-xl shadow-sky-500/10' : 'border-gray-200'
    }`}
  >
    {isFeatured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest whitespace-nowrap">
        ✦ MAIS ESCOLHIDO
      </div>
    )}
    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">{type}</div>
    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{title}</h3>
    {description && <p className="text-xs text-gray-500 mb-4 leading-relaxed">{description}</p>}
    
    <div className="mb-6">
      <div className="text-sm text-gray-400 line-through">De {oldPrice}</div>
      <div className="flex items-start">
        <span className="text-2xl font-bold mt-2 mr-1 text-slate-900">R$</span>
        <span className="text-5xl font-black text-slate-900 leading-none">{price.split(',')[0]}</span>
        <span className="text-xl font-bold mt-2 text-slate-900">,{price.split(',')[1]}</span>
      </div>
      <div className="text-xs font-bold text-gray-500 mt-1 uppercase">PAGAMENTO ÚNICO</div>
      {isFeatured && <div className="text-[11px] text-sky-500 font-bold mt-2">Desconto por transferência • Acesso vitalício</div>}
    </div>

    {modules.length > 0 && (
      <div className="bg-gray-50 rounded-xl p-4 mb-6 text-xs">
        <strong className="block mb-2 text-slate-900 uppercase tracking-wider">Conteúdo:</strong>
        <ul className="space-y-1.5">
          {modules.map((mod, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <span className="w-1 h-1 bg-sky-500 rounded-full" />
              {mod}
            </li>
          ))}
        </ul>
      </div>
    )}

    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <button 
      onClick={onClick}
      className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all active:scale-95 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20">
      Comprar Agora
    </button>
    
    <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-400 font-medium">
      <Lock className="w-3 h-3" />
      Ambiente seguro para pagamentos
    </div>
  </motion.div>
);

const UpsellModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100"
          >
            <div className="bg-sky-600 text-white py-3 px-6 text-center font-black text-[10px] uppercase tracking-widest">
              OFERTA VÁLIDA APENAS NESTE MOMENTO 👈
            </div>
            
            <div className="p-6 text-center">
              <h2 className="text-xl font-black text-slate-900 mb-3">Espere! Antes de finalizar...</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Você escolheu o plano básico de <span className="font-bold text-slate-900">R$ 9,90</span>, mas por apenas <span className="font-bold text-sky-600">R$ 5 a mais</span> você pode liberar o <span className="font-bold text-slate-900">Pacote Premium</span>, com acesso total às 100 Dinâmicas de Filosofia e R$ 47 em bônus inclusos.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-5 mb-6 text-left space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-green-500" />
                  100 DINÂMICAS DE FILOSOFIA
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-green-500" />
                  ACESSO VITALÍCIO + ATUALIZAÇÕES
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-green-500" />
                  +R$ 47 EM BÔNUS INCLUSOS
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">POR APENAS:</div>
                <div className="text-3xl font-black text-slate-900">R$ 14,90</div>
              </div>
              
              <div className="space-y-2">
                <button 
                  onClick={() => window.location.href = 'https://pay.hotmart.com/E105388531E?off=qk71rb1f&checkoutMode=10' + window.location.search.replace('?', '&')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-green-600/20 transition-all active:scale-95 leading-tight"
                >
                  SIM, QUERO COMPRAR AGORA O PACOTE PREMIUM POR R$ 14,90
                </button>
                <button 
                  onClick={() => window.location.href = 'https://pay.hotmart.com/A105388396S?off=wg24utz1&checkoutMode=10' + window.location.search.replace('?', '&')}
                  className="w-full text-gray-400 hover:text-gray-600 font-bold py-2 text-[10px] uppercase tracking-widest transition-colors"
                >
                  QUERO COMPRAR APENAS O PLANO BÁSICO POR R$ 9,90.
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(0);

  const purchases = [
    { name: 'Ana Silva', location: 'São Paulo, SP' },
    { name: 'Ricardo Mendes', location: 'Belo Horizonte, MG' },
    { name: 'Juliana Costa', location: 'Curitiba, PR' },
    { name: 'Fernando Oliveira', location: 'Salvador, BA' },
    { name: 'Patrícia Lima', location: 'Fortaleza, CE' },
    { name: 'Marcelo Santos', location: 'Porto Alegre, RS' },
    { name: 'Luciana Ferreira', location: 'Rio de Janeiro, RJ' },
    { name: 'Roberto Alencar', location: 'Brasília, DF' },
    { name: 'Camila Rocha', location: 'Goiânia, GO' },
    { name: 'Tiago Souza', location: 'Manaus, AM' }
  ];

  useEffect(() => {
    // Show first notification after 2 seconds
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        // Prepare next one
        setTimeout(() => {
          setCurrentPurchase((prev) => (prev + 1) % purchases.length);
          setIsVisible(true);
        }, 15000); // Wait 15 seconds before showing next one
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible, purchases.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[100] flex items-center gap-3 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[280px]"
        >
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] leading-tight text-slate-800">
              <span className="font-bold">{purchases[currentPurchase].name}</span> de {purchases[currentPurchase].location}
            </p>
            <p className="text-[10px] text-gray-500 font-medium mt-0.5">
              Acabou de comprar há poucos minutos
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-1 -right-1 bg-white border border-gray-200 text-gray-400 hover:text-gray-600 rounded-full p-0.5 shadow-sm transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      
      <PurchaseNotification />
      <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />
      <div className="bg-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-center">
          A oferta expira em:
        </span>
        <Countdown />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white text-slate-900 pt-20 pb-24 px-6 border-b border-gray-50">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0ea5e9_0%,transparent_50%)] blur-3xl transform -translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-8"
          >
            +200 <span className="text-[#f0c040]">Dinâmicas</span> de <span className="text-[#f0c040]">Filosofia</span> que Vão Tornar Suas Aulas <span className="text-sky-600">Muito Mais Envolventes</span>
          </motion.h1>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-[300px] mx-auto mb-10 aspect-[9/16] bg-gray-100 rounded-3xl border-4 border-gray-200 overflow-hidden shadow-2xl relative group"
          >
            <video 
              controls 
              playsInline
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              disablePictureInPicture
              className="w-full h-full object-cover"
              poster="https://i.ibb.co/v4gdPcvq/Captura-de-Tela-2026-04-15-a-s-17-48-58.png"
            >
              <source src="https://res.cloudinary.com/dgncwrnvw/video/upload/q_auto/f_auto/v1776273299/vsl_finale_kxyppj.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transforme suas aulas de Filosofia em experiências onde os alunos refletem e debatem, sem gastar horas planejando do zero.
          </motion.p>
          
          <motion.button 
            onClick={() => window.location.href = '#planos'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-black px-10 py-5 rounded-xl text-lg uppercase tracking-wider shadow-2xl shadow-green-600/40 transition-all cursor-pointer"
          >
            Quero minhas dinâmicas prontas
          </motion.button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
            O Problema <span className="text-sky-500 text-shadow-sm">Não É Você…</span>
          </h2>
          <p className="text-gray-500 font-bold mb-8 uppercase tracking-widest text-xs">Se você:</p>
          
          <ul className="space-y-5 mb-10">
            {[
              "Explica Kant ou Platão e vê rostos perdidos na sala",
              "Sente que os debates viram \"troca de opiniões\" sem embasamento",
              "Os alunos acham que Filosofia é \"coisa de louco\" ou \"conversa fiada\"",
              "Tem dificuldade em conectar os clássicos com a realidade deles",
              "Sai da aula sentindo que a essência não foi absorvida"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 text-lg text-slate-800"
              >
                <X className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="bg-green-50 border-l-8 border-green-500 rounded-r-xl p-8 text-green-900 shadow-sm">
            <p className="text-xl font-black mb-2">Respira.</p>
            <p className="text-lg leading-relaxed">
              Com as <strong className="text-green-700">DINÂMICAS PRONTAS</strong>, você vai conseguir que qualquer jovem pense, argumente e se interesse pela aula de Filosofia com profundidade e leveza.
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 px-6 bg-white text-slate-900 overflow-hidden relative border-y border-gray-100">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 leading-tight">
            Somente Hoje no Pacote Completo <span className="text-sky-600">Bônus Exclusivos</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <BonusCard index={0} imageUrl="https://i.ibb.co/7xBmSs9s/50-dilemas-e-ticos-e-pensamentos.png" title="+50 Dilemas Éticos e Experimentos de Pensamento" value="R$ 97" />
            <BonusCard index={1} imageUrl="https://i.ibb.co/rfN8rHBD/30-roteiros-de-debate-e-perguntas.png" title="+30 Roteiros de Debate e Perguntas Provocadoras" value="R$ 47" />
            <BonusCard index={2} imageUrl="https://i.ibb.co/rKJGhF2F/Dina-micas-filoso-ficas-no-cinema.png" title="Dinâmicas de Filosofia com Filmes e Séries" value="R$ 67" />
            <BonusCard index={3} imageUrl="https://i.ibb.co/xK9mq9dJ/Jogos-filoso-ficos-na-sala-de-aula.png" title="+20 Jogos de Filosofia para a Sala de Aula" value="R$ 67" />
          </div>
          
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Todos esses bônus custariam mais de <strong className="text-sky-600">R$ 278</strong>, mas <span className="text-slate-900 font-bold underline decoration-sky-500 decoration-4 underline-offset-4">somente hoje</span> você os leva <strong className="text-green-600">GRATUITAMENTE!</strong>
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4 leading-tight">
            Escolha Seu Plano <span className="text-sky-500">Últimas Vagas Neste Valor Promocional</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 font-medium">Mais de 1.350 professores de Humanidades aprovam este material.</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PlanCard 
              type="Plano Básico"
              title="100 Dinâmicas de Filosofia (Pacote Essencial)"
              description="Material prático e pronto para aplicar em sala de aula, focado em Ensino Médio e Fundamental II. Totalmente alinhado à BNCC."
              oldPrice="R$ 127"
              price="9,90"
              onClick={() => setIsUpsellOpen(true)}
              features={[
                "100 Dinâmicas de Filosofia",
                "Para Ensino Médio e Fundamental II",
                "Acesso digital imediato",
                "Entrega instantânea",
                "Materiais 100% baixáveis",
                "Suporte 24h",
                "Garantia de 7 dias"
              ]}
            />
            <PlanCard 
              isFeatured
              type="Pacote Completo (Upgrade)"
              title="+200 Dinâmicas de Filosofia + Bônus Exclusivos"
              oldPrice="R$ 247"
              price="27,90"
              onClick={() => window.location.href = 'https://pay.hotmart.com/F105388251G?checkoutMode=10' + window.location.search.replace('?', '&')}
              modules={[
                "Módulo 1: Ética e Moral",
                "Módulo 2: Teoria do Conhecimento",
                "Módulo 3: Filosofia Política",
                "Módulo 4: Lógica e Argumentação",
                "Módulo 5: Metafísica e Existência",
                "Módulo 6: Estética e Arte",
                "Módulo 7: Filosofia no Cotidiano"
              ]}
              features={[
                "BÔNUS 1: +50 Dilemas Éticos (GRÁTIS)",
                "BÔNUS 2: +30 Roteiros de Debate (GRÁTIS)",
                "Guia Completo de Dinâmicas Filosóficas",
                "Filosofia com Filmes e Séries – Pacote Completo",
                "Biblioteca Filosófica Digital – +100 Textos",
                "Para Ensino Médio e Pré-Vestibular",
                "Alinhado às diretrizes educacionais (BNCC)",
                "Entrega instantânea • Suporte 24h",
                "Garantia de 7 dias"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 leading-tight">
            Veja o Que os Professores <span className="text-sky-500">Estão Dizendo</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Este material transformou minhas aulas. Meus alunos, que antes se entediavam com a teoria, agora participam ativamente de cada debate. É incrível vê-los pensar por conta própria!",
                author: "Prof. Ricardo Santos",
                role: "Filosofia Ensino Médio"
              },
              {
                text: "As dinâmicas são práticas e já chegam prontas para aplicar. Economizo horas de planejamento e ainda consigo resultados muito melhores. Recomendo demais!",
                author: "Profa. Juliana Oliveira",
                role: "Coordenadora Pedagógica"
              },
              {
                text: "Finalmente um material que conecta os filósofos clássicos com o mundo dos alunos de hoje. A turma passou a fazer perguntas que eu nunca esperava ouvir!",
                author: "Prof. Fernando Silva",
                role: "Filosofia Cursinho Pré-Vestibular"
              }
            ].map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border-l-4 border-sky-500 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testi.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{testi.author}</div>
                  <div className="text-xs text-gray-500 font-medium">{testi.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 px-6 bg-white border-y border-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 leading-tight">
            Conheça a <span className="text-sky-600">Ana Valentina Lima</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 shadow-2xl shadow-slate-900/10">
              <img src="https://i.ibb.co/MxFTJ4JV/Retrato-de-mulher-com-sorriso-radiante.png" alt="Ana Valentina Lima" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Ana Valentina Lima</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Filósofa, especialista em ensino de Humanidades. Com mais de 15 anos em sala de aula, desenvolveu o método de Dinâmicas de Filosofia Ativa para ajudar professores a formar pensadores críticos, fugindo da teoria árida no quadro-negro.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { num: "15+", label: "Anos de experiência" },
                  { num: "5.000+", label: "Professores impactados" },
                  { num: "1.350+", label: "Avaliações positivas" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                    <div className="text-2xl font-black text-sky-500 mb-1">{stat.num}</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 leading-tight">
            <span className="text-green-600">Risco Zero</span> por 7 Dias
          </h2>
          
          <div className="bg-green-50 rounded-3xl p-10 border-2 border-green-500 flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-green-500/5">
            <div className="bg-green-500 p-6 rounded-full text-white shrink-0 shadow-lg shadow-green-500/30">
              <ShieldCheck className="w-16 h-16" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-green-900 mb-3">Garantia Total de Satisfação</h3>
              <p className="text-lg text-green-800 leading-relaxed">
                Teste o material por 7 dias. Se não gostar ou não funcionar para sua turma, devolvemos 100% do seu dinheiro.
              </p>
              <p className="mt-4 font-black text-green-900 uppercase tracking-widest text-sm">Sem perguntas. Sem burocracia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 leading-tight">
            Perguntas <span className="text-sky-500">Frequentes</span>
          </h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="Para quais níveis serve?" 
              answer="O material foi desenvolvido para o Ensino Médio e cursos Pré-Vestibular, podendo ser adaptado para o 9º ano do Ensino Fundamental e cursos livres de Filosofia." 
            />
            <FAQItem 
              question="Serve para temas complexos?" 
              answer="Sim! As dinâmicas foram criadas justamente para tornar temas densos (Kant, Hegel, Sartre, Platão etc.) acessíveis e envolventes para jovens estudantes." 
            />
            <FAQItem 
              question="É digital ou físico?" 
              answer="O material é 100% digital e baixável. Após a confirmação do pagamento, você recebe acesso imediato por e-mail." 
            />
            <FAQItem 
              question="Ajuda na preparação para o ENEM?" 
              answer="Sim! As dinâmicas estimulam o pensamento crítico, a argumentação e a leitura filosófica habilidades exigidas nas questões de Ciências Humanas do ENEM." 
            />
            <FAQItem 
              question="As dinâmicas estão alinhadas à BNCC?" 
              answer="Sim. Todo o conteúdo foi estruturado em conformidade com as competências e habilidades da Base Nacional Comum Curricular (BNCC)." 
            />
            <FAQItem 
              question="Preciso de materiais especiais para aplicar?" 
              answer="Não! A grande maioria das dinâmicas utiliza apenas papel, caneta e a criatividade dos alunos. Algumas sugerem acesso a vídeo, mas há sempre alternativas sem tecnologia." 
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-white text-slate-900 text-center border-y border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
            Quero Minhas <span className="text-sky-600">Dinâmicas Prontas</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Clique abaixo e tenha acesso imediato às dinâmicas que estão transformando as aulas de Filosofia no Brasil.
          </p>
          <motion.button 
            onClick={() => window.location.href = '#planos'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-black px-12 py-5 rounded-xl text-lg uppercase tracking-wider shadow-2xl shadow-green-600/20 transition-all cursor-pointer"
          >
            Garantir Meu Acesso Agora
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-400 py-12 px-6 text-center border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium">© 2026 – Todos os direitos reservados. Este projeto é protegido por direitos autorais.</p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-sky-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Contato</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
