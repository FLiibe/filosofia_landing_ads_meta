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
  Clock,
  BookOpen,
  GraduationCap,
  Zap,
  Download,
  Shield,
  Headphones,
  Brain,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const FeatureBadge = ({ text }: { text: string }) => (
  <div className="bg-[#22c55e] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-green-600/20 whitespace-nowrap">
    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
      <Check className="w-3 h-3 text-white stroke-[4]" />
    </div>
    <span className="text-sm font-bold tracking-tight">{text}</span>
  </div>
);

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
          <ChevronDown className="w-5 h-5 text-sky-600" />
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
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-slate-50 rounded-[2rem] p-5 text-center border border-slate-100 shadow-sm flex flex-col h-full"
  >
    <div className="bg-white rounded-2xl p-4 mb-6 aspect-square flex items-center justify-center overflow-hidden shadow-sm">
      <img src={imageUrl} alt={title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
    </div>
    <h3 className="text-lg font-black text-slate-900 mb-6 leading-tight flex-grow px-1">{title}</h3>
    <div className="mt-auto pb-2">
      <div className="text-[11px] text-slate-400 font-bold uppercase line-through mb-1">
        VALOR: {value}
      </div>
      <div className="text-3xl font-black text-sky-600 uppercase tracking-tighter">
        GRÁTIS
      </div>
    </div>
  </motion.div>
);

const PlanCard = ({ 
  type, 
  title, 
  subtitle,
  description,
  oldPrice, 
  price, 
  features, 
  isFeatured = false,
  modules = [],
  onClick,
  href,
  topBadge,
  customBadge,
  highlightBanner
}: { 
  type: string; 
  title: string; 
  subtitle?: string;
  description?: string;
  oldPrice: string; 
  price: string; 
  features: { text: string; icon: any }[]; 
  isFeatured?: boolean;
  modules?: string[];
  onClick?: () => void;
  href?: string;
  topBadge?: string;
  customBadge?: string;
  highlightBanner?: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white rounded-3xl p-8 relative flex flex-col h-full border-2 transition-all ${
      isFeatured ? 'border-sky-600 shadow-2xl shadow-sky-600/10' : 'border-gray-100 shadow-xl shadow-gray-200/20'
    }`}
  >
    {topBadge && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f0c040] text-black text-[10px] sm:text-[11px] font-black px-6 py-2 rounded-full tracking-widest whitespace-nowrap shadow-lg flex items-center gap-1.5 uppercase">
        <Star className="w-3 h-3 fill-current" />
        {topBadge}
      </div>
    )}
    
    <div className="text-center mt-4">
      <h3 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 font-medium mb-6">{subtitle}</p>}
      
      {customBadge && (
        <div className="inline-flex items-center gap-1.5 bg-sky-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-6 shadow-sm">
          <span className="text-sm">🔥</span>
          {customBadge}
        </div>
      )}

      <div className="mb-8">
        <div className="text-sm text-gray-400 line-through font-medium mb-1">De {oldPrice}</div>
        {!isFeatured && <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Por apenas</div>}
        <div className="flex items-center justify-center">
          <span className="text-3xl font-black mr-1 text-sky-600">R$</span>
          <span className="text-6xl font-black text-sky-600 leading-none">{price.split(',')[0]}</span>
          <span className="text-2xl font-black text-sky-600 self-start mt-1">,{price.split(',')[1]}</span>
        </div>
        <div className="text-[11px] font-black text-gray-400 mt-2 uppercase tracking-widest">PAGAMENTO ÚNICO</div>
      </div>
    </div>

    {highlightBanner && (
      <div className="bg-sky-600 text-white py-3 px-4 rounded-xl font-black text-xs uppercase tracking-widest mb-8 text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20">
        <Zap className="w-4 h-4 fill-white" />
        {highlightBanner}
      </div>
    )}

    {modules.length > 0 && (
      <div className="bg-gray-50 rounded-2xl p-5 mb-8 text-[13px] border border-gray-100">
        <strong className="block mb-3 text-slate-900 uppercase tracking-widest text-[10px] font-black opacity-40">Estrutura do Curso:</strong>
        <ul className="space-y-2">
          {modules.map((mod, i) => (
            <li key={i} className="flex items-center gap-2.5 text-gray-600 font-medium">
              <div className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" />
              {mod}
            </li>
          ))}
        </ul>
      </div>
    )}

    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-4 text-[13.5px] font-bold text-slate-700">
          <div className="p-1.5 bg-sky-50 rounded-lg shrink-0">
            <feature.icon className="w-4 h-4 text-sky-600" />
          </div>
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto pt-6">
      {href ? (
        <a 
          href={href}
          className="block w-full py-5 rounded-2xl font-black text-base uppercase tracking-widest text-center transition-all active:scale-95 shadow-xl bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-green-500/20">
          Quero o {title.split(' ')[1]}
        </a>
      ) : (
        <button 
          onClick={onClick}
          className="w-full py-5 rounded-2xl font-black text-base uppercase tracking-widest transition-all active:scale-95 shadow-xl bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-green-500/20">
          Quero o {title.split(' ')[1]}
        </button>
      )}
      
      <div className="flex items-center justify-center gap-2 mt-5 text-[10px] text-gray-400 font-bold uppercase tracking-widest opacity-60">
        <Lock className="w-3.5 h-3.5" />
        Ambiente 100% Seguro
      </div>
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
              <h2 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Espere! Antes de finalizar...</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Você escolheu o plano básico de <span className="font-bold text-slate-900">R$ 17,90</span>, mas apenas agora você pode garantir o <span className="font-bold text-sky-600">Pacote Completo</span> (com +400 dinâmicas e todos os bônus inclusos) por apenas <span className="font-bold text-slate-900">R$ 27,90</span>.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-5 mb-6 text-left space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-[#22c55e]" />
                  +400 DINÂMICAS DE FILOSOFIA E SOCIOLOGIA
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-[#22c55e]" />
                  TODOS OS BÔNUS EXCLUSIVOS (VALOR R$ 278)
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-[#22c55e]" />
                  ACESSO VITALÍCIO + ATUALIZAÇÕES
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 leading-tight">DE R$ 37,90 POR APENAS:</div>
                <div className="text-4xl font-black text-slate-900">R$ 27,90</div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={'https://pay.hotmart.com/E105388531E?checkoutMode=10' + (typeof window !== 'undefined' ? window.location.search.replace('?', '&') : '')}
                  className="block w-full text-center bg-[#22c55e] hover:bg-[#16a34a] text-white font-black py-5 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-green-500/20 transition-all active:scale-95 leading-tight"
                >
                  SIM! QUERO O PACOTE COMPLETO POR R$ 27,90
                </a>
                <a 
                  href={'https://pay.hotmart.com/A105388396S?checkoutMode=10&bid=1778765015412' + (typeof window !== 'undefined' ? window.location.search.replace('?', '&') : '')}
                  className="block w-full text-center text-gray-400 hover:text-gray-600 font-bold py-2 text-[10px] uppercase tracking-widest transition-colors"
                >
                  NÃO, QUERO APENAS O PLANO BÁSICO POR R$ 17,90.
                </a>
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
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0284c7_0%,transparent_50%)] blur-3xl transform -translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-8"
          >
            +400 <span className="text-[#f0c040]">Dinâmicas</span> que Tornam <span className="text-[#f0c040]">Filosofia e Sociologia</span> <span className="text-sky-600">3x Mais Envolvente</span> Para Qualquer Jovem
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
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <FeatureBadge text="Desenvolve Pensamento Crítico" />
            <FeatureBadge text="Conecta Teoria com a Vida Real" />
            <FeatureBadge text="Para Fundamental II e Ensino Médio" />
            <FeatureBadge text="Alinhadas à BNCC e Enem" />
          </div>
          
          <p className="text-center text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Transforme suas aulas de Filosofia e Sociologia em experiências que os alunos refletem e debatem sem passar horas planejando do zero.
          </p>
          
          <motion.a 
            href="#planos"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-black px-10 py-5 rounded-2xl text-lg uppercase tracking-widest shadow-2xl shadow-green-500/20 text-center transition-all cursor-pointer"
          >
            Quero minhas dinâmicas prontas
          </motion.a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
            O Problema <span className="text-sky-600 text-shadow-sm">Não É Você…</span>
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
                <X className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="bg-green-50 border-l-8 border-green-500 rounded-r-xl p-8 text-green-900 shadow-sm">
            <p className="text-xl font-black mb-2">Respira.</p>
            <p className="text-lg leading-relaxed">
              Com as <strong className="text-green-700">DINÂMICAS PRONTAS DE FILOSOFIA E SOCIOLOGIA</strong>, você vai conseguir que qualquer jovem pense, argumente e se interesse pela aula de Filosofia e Sociologia com profundidade e leveza.
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
            <BonusCard index={0} imageUrl="https://i.ibb.co/5gbhr3fN/genera-un-immagine-di-copertina-202605131122.jpg" title="+100 Dilemas Éticos e Experimentos de Pensamento" value="R$ 97" />
            <BonusCard index={1} imageUrl="https://i.ibb.co/yn64DVHV/genera-un-immagine-di-copertina-202605131125.jpg" title="+60 Roteiros de Debate e Perguntas Provocadoras" value="R$ 47" />
            <BonusCard index={2} imageUrl="https://i.ibb.co/hQJ6SPB/Copertina-cartoon-Dina-micas-Filo-202605131128.jpg" title="+50 Dinâmicas de Filosofia e Sociologia com Filmes e Séries" value="R$ 67" />
            <BonusCard index={3} imageUrl="https://i.ibb.co/3YTtc3TQ/Cartoon-cover-image-for-games-202605131131.jpg" title="+40 Jogos de Filosofia e Sociologia para a Sala de Aula" value="R$ 67" />
          </div>
          
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Todos esses bônus custariam mais de <strong className="text-sky-600">R$ 278</strong>, mas <span className="text-slate-900 font-bold underline decoration-sky-600 decoration-4 underline-offset-4">somente hoje</span> você os leva <strong className="text-green-600">GRATUITAMENTE!</strong>
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-6 leading-tight">
              Escolha Seu <span className="text-sky-600">Plano</span>
            </h2>
            <div className="bg-red-50 border border-red-100 rounded-2xl px-8 py-3.5 flex items-center gap-2 shadow-sm">
              <span className="text-xl">⚠️</span>
              <span className="text-red-900 font-black text-sm tracking-tight uppercase">Últimas unidades por esse valor promocional</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            <PlanCard 
              type="Pacote Básico"
              title="PACOTE BÁSICO"
              subtitle="Para quem quer testar o método"
              oldPrice="R$ 97,00"
              price="17,90"
              onClick={() => setIsUpsellOpen(true)}
              features={[
                { text: "+200 Dinâmicas de Filosofia e Sociologia", icon: BookOpen },
                { text: "Garantia de 7 dias", icon: ShieldCheck }
              ]}
            />
            <PlanCard 
              isFeatured
              topBadge="MELHOR CUSTO BENEFÍCIO"
              customBadge="MAIS VENDIDO"
              highlightBanner="ACESSO VITALÍCIO"
              type="Pacote Completo"
              title="PACOTE COMPLETO"
              subtitle="Para transformar suas aulas o ano todo"
              oldPrice="R$ 397,00"
              price="37,90"
              href={'https://pay.hotmart.com/F105388251G?checkoutMode=10&bid=1778765474761' + (typeof window !== 'undefined' ? window.location.search.replace('?', '&') : '')}
              modules={[
                "Filosofia (Ética, Política, Lógica, Estética...)",
                "Cultura e Identidade Social",
                "Estratificação e Desigualdade Social",
                "Instituições Sociais",
                "Movimentos Sociais e Cidadania",
                "Trabalho, Economia e Globalização",
                "Sociologia Contemporânea"
              ]}
              features={[
                { text: "+400 Dinâmicas de Filosofia e Sociologia", icon: BookOpen },
                { text: "+100 Dilemas Éticos e Experimentos de Pensamento (GRÁTIS)", icon: Brain },
                { text: "+60 Roteiros de Debate e Perguntas Provocadoras (GRÁTIS)", icon: MessageSquare },
                { text: "+50 Dinâmicas de Filosofia e Sociologia com Filmes e Séries (GRÁTIS)", icon: Film },
                { text: "+40 Jogos de Filosofia e Sociologia para a Sala de Aula (GRÁTIS)", icon: Gamepad2 },
                { text: "Para Fundamental II e Ensino Médio", icon: GraduationCap },
                { text: "Acesso digital imediato", icon: Zap },
                { text: "Materiais 100% Baixáveis", icon: Download },
                { text: "Metodologia Comprovada", icon: Star },
                { text: "Garantia de 7 dias", icon: ShieldCheck }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 leading-tight">
            Veja o Que os Professores <span className="text-sky-600">Estão Dizendo</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://i.ibb.co/kVWkhx1j/Chat-GPT-Image-26-giu-2026-09-37-57.png",
              "https://i.ibb.co/pj74Ff3d/Chat-GPT-Image-26-giu-2026-09-37-51.png",
              "https://i.ibb.co/nNvfnd6f/Chat-GPT-Image-26-giu-2026-09-37-42.png"
            ].map((imgUrl, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <img 
                  src={imgUrl} 
                  alt={`Depoimento ${i + 1}`} 
                  className="w-full h-auto object-contain block" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 px-6 bg-white border-y border-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 leading-tight">
            Conheça a <span className="text-sky-600">Paula Ribeiro Pinto</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 shadow-2xl shadow-slate-900/10">
              <img src="https://i.ibb.co/V0hHhpYd/Chat-GPT-Image-14-de-mai-de-2026-10-57-22.png" alt="Paula Ribeiro Pinto" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Paula Ribeiro Pinto</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Filósofa e Socióloga, especialista em ensino de Humanidades. Com mais de 15 anos em sala de aula, desenvolveu o método de Dinâmicas Ativas para ajudar professores a formar pensadores críticos, fugindo da teoria árida no quadro-negro.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { num: "15+", label: "Anos de experiência" },
                  { num: "5.000+", label: "Professores impactados" },
                  { num: "1.350+", label: "Avaliações positivas" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                    <div className="text-2xl font-black text-sky-600 mb-1">{stat.num}</div>
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
            Perguntas <span className="text-sky-600">Frequentes</span>
          </h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="Para quais níveis serve?" 
              answer="O material foi desenvolvido para o Ensino Médio e cursos Pré-Vestibular, podendo ser adaptado para o 9º ano do Ensino Fundamental e cursos livres de Humanidades." 
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
              answer="Sim! As dinâmicas estimulam o pensamento crítico, a argumentação e a leitura de Humanidades habilidades exigidas nas questões de Ciências Humanas do ENEM." 
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
            Quero Minhas <span className="text-sky-600">Dinâmicas de Filosofia e Sociologia</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Clique abaixo e tenha acesso imediato às dinâmicas que estão transformando as aulas de Filosofia e Sociologia no Brasil.
          </p>
          <motion.a 
            href="#planos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-black px-12 py-5 rounded-2xl text-lg uppercase tracking-widest shadow-2xl shadow-green-500/20 text-center transition-all cursor-pointer"
          >
            Garantir Meu Acesso Agora
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-400 py-12 px-6 text-center border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium">© 2026 – Todos os direitos reservados. Este projeto é protegido por direitos autorais.</p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-sky-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
