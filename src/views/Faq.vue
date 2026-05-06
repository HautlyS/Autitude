<template>
  <div class="faq">
    <section class="hero-section">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">Perguntas Frequentes</span>
          <h2>O que Voce Precisa Saber</h2>
          <p>Tire suas duvidas sobre Terapia Ocupacional e Integracao Sensorial.</p>
        </div>

        <div class="faq-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <div class="faq-list">
          <div 
            v-for="(faq, index) in filteredFaqs" 
            :key="index"
            class="faq-item"
            :class="{ open: openFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <span class="faq-number">{{ index + 1 }}</span>
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle">
                <span></span>
              </div>
            </div>
            <div class="faq-answer" v-show="openFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sensory-section section">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">Especialidade</span>
          <h2>O que e Integracao Sensorial?</h2>
        </div>
        
        <div class="sensory-showcase">
          <div class="sensory-text">
            <p>
              A <strong>Integracao Sensorial</strong> e uma abordagem terapeutica desenvolvida pela Dra. Jean Ayres, 
              fundamentada na ideia de que o processamento das informacoes sensoriais e essencial para o desenvolvimento 
              e comportamento humano.
            </p>
            <p>
              Quando o cerebro processa as informacoes sensoriais de forma desorganizada, a crianca pode apresentar 
              dificuldades em atividades cotidianas, comportamento desregulado e desafios no aprendizado.
            </p>
            
            <h3>Sistema Sensorial</h3>
            <p>
              O sistema sensorial inclui 7 sentidos que trabalham juntos: toque, olfato, paladar, visao, audiicao, 
              propriocepcao (consciencia do corpo) e vestibular (equilibrio e movimento).
            </p>
          </div>
          
          <div class="sensory-signs">
            <h3>Sinais de Regulacao Sensorial</h3>
            <ul>
              <li><strong>Hiporreativo:</strong> Busca estimulos intensos, nao percebe dor/temperatura, bate objetos</li>
              <li><strong>Hipersensivel:</strong> Reage excessivamente a ruidos, texturas, luzes</li>
              <li><strong>Desorganizado:</strong> Dificuldade em se concentrar, transicoes</li>
              <li><strong>Motor:</strong> Coordinacao ruim, quedas frequentes</li>
              <li><strong>Alimentar:</strong> Seletividade alimentar extrema</li>
              <li><strong>Sonoro:</strong> Tapando ouvidos ou procurando barulho</li>
            </ul>
          </div>
        </div>

        <div class="sensory-approach">
          <h3>Abordagem Terapeutica</h3>
          <div class="approach-grid">
            <div class="approach-step" v-for="step in sensoryApproach" :key="step.title">
              <div class="step-icon">
                <div class="step-icon-inner"></div>
              </div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Ainda tem duvidas?</h2>
            <p>Entre em contato conosco para saber como podemos ajudar seu filho.</p>
            <div class="cta-buttons">
              <router-link to="/agendar" class="btn btn-primary btn-lg">Agendar Avaliacao</router-link>
              <a href="https://wa.me/5512991968683" class="btn btn-whatsapp btn-lg" target="_blank">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'FaqView',
  setup() {
    const activeCategory = ref('all')
    const openFaq = ref(null)

    const categories = [
      { id: 'all', name: 'Todas' },
      { id: 'general', name: 'Geral' },
      { id: 'sensory', name: 'Sensorial' },
      { id: 'therapy', name: 'Terapia' },
      { id: 'schedule', name: 'Agendamento' }
    ]

    const faqs = [
      {
        category: 'general',
        question: 'O que e Terapia Ocupacional pediatrica?',
        answer: 'A Terapia Ocupacional pediatrica e uma especialidade que ajuda criancas a desenvolver habilidades necessarias para realizar as atividades cotidianas, brincas e escolares. O terapeuta ocupacional utiliza atividades significativas para promover independencia, coordinacao motora, integracao sensorial e participacao nas rotinas diarias.'
      },
      {
        category: 'general',
        question: 'A partir de qual idade atende?',
        answer: 'Atendemos criancas a partir de 0 anos, com foco especial na estimulacao precoce nos primeiros anos de vida. Quanto mais cedo for identificada a necessidade de intervencao, melhor para o desenvolvimento da crianca.'
      },
      {
        category: 'general',
        question: 'Quanto tempo dura cada sessao?',
        answer: 'As sessoes tem duracao de 45 a 60 minutos, dependendo da necessidade da crianca e do tipo de intervencao. Avaliacoes iniciais geralmente duram mais tempo para serem completas.'
      },
      {
        category: 'general',
        question: 'Preciso estar presente durante a sessao?',
        answer: 'Sim, a presenca do responsavel e fundamental durante as sessoes, especialmente em criancas menores. Alem disso, a orientacao familiar e parte essencial do tratamento para garantir a generalizacao das habilidades aprendidas em casa.'
      },
      {
        category: 'sensory',
        question: 'O que e Integracao Sensorial?',
        answer: 'Integracao Sensorial e uma abordagem terapeutica que trabalha o processamento das informacoes sensoriais pelo cerebro. Desenvolvida pela Dra. Jean Ayres, ajuda criancas que tem dificuldade em processar estimulos sensoriais do ambiente de forma organizada.'
      },
      {
        category: 'sensory',
        question: 'Quais sao os sinais de desregulacao sensorial?',
        answer: 'Os sinais incluem: rejeicao a certas texturas de roupas ou alimentos, tapar os ouvidos com barulhos comuns, dificuldade em transicoes entre atividades, quedas frequentes, busca excessiva de movimento ou, ao contrario, medo de se mexer, dificuldade em se concentrar, reagicoes intensas a estimulos sensoriais.'
      },
      {
        category: 'sensory',
        question: 'Como saber se meu filho precisa de terapia sensorial?',
        answer: 'Se seu filho apresenta comportamentos que parecem incomuns para a idade, como dificuldade em se acalmar, seletividade alimentar extrema, rejeicao a texturas, quedas frequentes, dificuldade com transicoes ou escolar atrasadas, uma avaliacao com terapeuta ocupacional pode ajudar a identificar necessidades sensoriais.'
      },
      {
        category: 'sensory',
        question: 'O que e a "Sala Sensorial" (Snoezelen)?',
        answer: 'A Sala Sensorial e um ambiente controlado com estimulos visuais, tateis, sonoros e proprioceptivos, desenhado para ajudar a crianca a processar informacoes sensoriais de forma mais organizada. E um espaco seguro para exploracao e regulacao.'
      },
      {
        category: 'therapy',
        question: 'Qual a diferenca entre Terapia Ocupacional e Fisioterapia?',
        answer: 'A Terapia Ocupacional foca em habilidades funcionais para realizar atividades diarias, enquanto a Fisioterapia se concentra na reabilitacao fisica e motora. A TO trabalha habilidades especificas para independencia em brincas, alimentacao, vestuario, escolar, enquanto a FM trabalha forca, movimento e postura.'
      },
      {
        category: 'therapy',
        question: 'O que e Estimulacao Precoce?',
        answer: 'Estimulacao Precoce e um programa de intervencao destinado a criancas de 0 a 6 anos que visa otimizar o potencial de desenvolvimento atraves de atividades adequadas ao nivel da crianca. E especialmente importante quando ha atrasos no desenvolvimento ou risco neurologico.'
      },
      {
        category: 'therapy',
        question: 'Os pais participam do tratamento?',
        answer: 'Sim! A familia e parte essencial do tratamento. Os pais recebem orientacoes para aplicar estrategias em casa, garantindo que os progressos na terapia sejam generalizados para o cotidiano da crianca. O sucesso do tratamento depende muito do envolvimento familiar.'
      },
      {
        category: 'schedule',
        question: 'Como funciona o agendamento?',
        answer: 'Voce pode entrar em contato pelo WhatsApp ou preencher o formulario de agendamento. Retornaremos em ate 24 horas para entender suas necessidades e agendar a avaliacao inicial.'
      },
      {
        category: 'schedule',
        question: 'Quanto custa a avaliacao?',
        answer: 'A avaliacao inicial tem custo especifico que varia conforme a extensao. Apos a avaliacao, apresentamos um plano de intervencao com as sessoes recomendadas e investimento. Aceitamos diversas formas de pagamento.'
      },
      {
        category: 'schedule',
        question: 'Voces atendem por plano de saude?',
        answer: 'Trabalhamos com alguns planos de saude. Entre em contato para verificar se aceitamos o seu plano. Tambem oferecemos opcoes de pagamento particular com pacotes.'
      },
      {
        category: 'schedule',
        question: 'Onde ficam localizados?',
        answer: 'Estamos na Rua Major Jose dos Santos Moreira, 328, Pindamonhangaba-SP, com atendimento presencial mediante agendamento previo. Tambem oferecemos orientacoes online para familias de outras regioes.'
      }
    ]

    const filteredFaqs = computed(() => {
      if (activeCategory.value === 'all') return faqs
      return faqs.filter(faq => faq.category === activeCategory.value)
    })

    const sensoryApproach = [
      {
        title: 'Avaliacao',
        description: 'Avaliacao completa do perfil sensorial e funcional da crianca'
      },
      {
        title: 'Plano',
        description: 'Elaboracao de plano personalizado com metas especificas'
      },
      {
        title: 'Intervencao',
        description: 'Sessoes terapeuticas com atividades estruturadas'
      },
      {
        title: 'Orientacao',
        description: 'Orientacao familiar para generalizacao em casa'
      }
    ]

    const toggleFaq = (index) => {
      openFaq.value = openFaq.value === index ? null : index
    }

    return {
      activeCategory,
      openFaq,
      categories,
      filteredFaqs,
      sensoryApproach,
      toggleFaq
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding-top: 140px;
  padding-bottom: 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title h2 {
  margin-bottom: 0.5rem;
}

.section-title p {
  opacity: 0.8;
}

.section-tag {
  display: inline-block;
  background: var(--pastel-lavender);
  color: var(--primary-dark);
  padding: 0.3rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.faq-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.category-btn {
  padding: 0.625rem 1.25rem;
  background: var(--surface);
  border: 2px solid var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  border-color: var(--primary-light);
}

.category-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--surface);
  border-radius: var(--radius-lg);
  margin-bottom: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: var(--shadow-sm);
}

.faq-item.open {
  box-shadow: var(--shadow-md);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
}

.faq-number {
  width: 32px;
  height: 32px;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  flex-shrink: 0;
}

.faq-question h3 {
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
}

.faq-toggle {
  width: 24px;
  height: 24px;
  position: relative;
  flex-shrink: 0;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background: var(--text-light);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.faq-toggle::before {
  width: 12px;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.faq-toggle::after {
  width: 2px;
  height: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.faq-item.open .faq-toggle::after {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
  padding-left: calc(1.5rem + 32px + 1rem);
}

.faq-answer p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.sensory-section {
  background: var(--surface);
}

.sensory-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.sensory-text p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.sensory-text h3 {
  margin: 1.5rem 0 1rem;
}

.sensory-signs {
  background: var(--background);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
}

.sensory-signs h3 {
  margin-bottom: 1rem;
}

.sensory-signs ul {
  list-style: none;
}

.sensory-signs li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(155, 126, 217, 0.08);
  font-size: 0.875rem;
  line-height: 1.5;
}

.sensory-signs li:last-child {
  border-bottom: none;
}

.sensory-signs li strong {
  color: var(--primary);
}

.sensory-approach {
  text-align: center;
}

.sensory-approach h3 {
  margin-bottom: 2rem;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.approach-step {
  background: var(--background);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
  transition: all 0.3s ease;
}

.approach-step:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.step-icon {
  width: 48px;
  height: 48px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.step-icon-inner {
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 6px;
  opacity: 0.5;
}

.approach-step h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.approach-step p {
  font-size: 0.8125rem;
  color: var(--text-secondary);
}

.cta-section {
  background: var(--background);
}

.cta-card {
  background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  text-align: center;
}

.cta-content h2 {
  margin-bottom: 0.75rem;
}

.cta-content p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .sensory-showcase {
    grid-template-columns: 1fr;
  }
  
  .approach-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .faq-categories {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
  }
  
  .category-btn {
    flex-shrink: 0;
  }
  
  .approach-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-buttons .btn {
    width: 100%;
  }
}
</style>