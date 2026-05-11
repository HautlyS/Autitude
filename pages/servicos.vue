<script setup>
import { Stethoscope, Brain, Target, Baby, ClipboardCheck } from 'lucide-vue-next'
import ColorBends from '~/components/ColorBends.vue'
import Squares from '~/components/Squares.vue'

useHead({
  title: 'Serviços | Autitude - Terapia Ocupacional e Integração Sensorial',
  meta: [
    { name: 'description', content: 'Serviços especializados: Terapia Ocupacional, Integração Sensorial, ABA, Estimulação Precoce em Pindamonhangaba-SP.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Serviços - Autitude',
        description: 'Serviços especializados: Terapia Ocupacional, Integração Sensorial, ABA, Estimulação Precoce em Pindamonhangaba-SP.',
        url: 'https://hautlys.github.io/Autitude/servicos',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Serviços',
          provides: [
            'Terapia Ocupacional',
            'Integração Sensorial',
            'ABA - Análise do Comportamento Aplicada',
            'Estimulação Precoce',
            'Avaliação Comportamental'
          ]
        }
      })
    }
  ]
})

const whatsappUrl = 'https://wa.me/5512991968683'

const services = [
  {
    title: 'Terapia Ocupacional',
    description: 'Intervenções para desenvolver habilidades motoras, cognitivas e funcionais.',
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)',
    icon: Stethoscope,
    items: ['Motor fino e grosso', 'Coordenação motora', 'Autonomia pessoal', 'Atividades de vida diária']
  },
  {
    title: 'Integração Sensorial',
    description: 'Abordagem especializada para organizar o processamento sensorial. Desenvolvida pela Dra. Jean Ayres, trabalha as 8 sensações do corpo.',
    color: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)',
    icon: Brain,
    items: [
      'Diagnóstico sensorial completo',
      'Terapia de Integração Sensorial (SIT)',
      'Sala Snoezelen / Sala Sensorial',
      'Programa de intervenção individualizado',
      'Orientação para escola e família',
      'Estratégias de regulação sensorial'
    ]
  },
  {
    title: 'ABA (Análise do Comportamento Aplicada)',
    description: 'Metodologia científica baseada em princípios do comportamento para desenvolver habilidades sociais, comunicativas e comportamentais.',
    color: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)',
    icon: Target,
    items: [
      'Avaliação funcional do comportamento',
      'Intervenção comportamental individualizada',
      'Ensino estruturado de habilidades',
      'Redução de comportamentos problemáticos',
      'Acompanhamento e orientação familiar',
      'Registro e análise de dados'
    ]
  },
  {
    title: 'Estimulação Precoce',
    description: 'Intervenções para os primeiros anos de vida.',
    color: 'linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)',
    icon: Baby,
    items: ['Avaliação do desenvolvimento', 'Programa de estimulação', 'Suporte aos pais', 'Monitoramento']
  },
  {
    title: 'Avaliação Comportamental',
    description: 'Processos avaliativos para compreender o perfil funcional.',
    color: 'linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)',
    icon: ClipboardCheck,
    items: ['Avaliação sensorial', 'Perfil motor', 'Escala de independência', 'Relatório completo']
  }
]

const processSteps = [
  { title: 'Contato', description: 'Você entra em contato pelo WhatsApp ou formulário.' },
  { title: 'Agendamento', description: 'Marcamos uma avaliação inicial.' },
  { title: 'Avaliação', description: 'Realizamos avaliação completa do desenvolvimento.' },
  { title: 'Plano', description: 'Elaboramos um plano personalizado.' }
]
</script>

<template>
  <div class="services">
    <section class="hero-section">
      <div class="hero-bg-grid">
        <Squares
          direction="diagonal"
          :speed="1"
          :square-size="40"
          border-color="#999"
          hover-fill-color="#222"
        />
      </div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Serviços</span>
          <h1>Tratamentos especializados</h1>
          <p>Oferecemos intervenções especializadas para o desenvolvimento integral da criança.</p>
        </div>

        <div class="services-showcase">
          <div 
            class="service-card-main" 
            v-for="(service, index) in services" 
            :key="service.title"
          >
            <div class="card-number">{{ index + 1 }}</div>
            <div class="card-content">
              <div class="service-icon-large" :style="{ background: service.color }">
                <component :is="service.icon" :size="28" class="icon-primary icon-inner" />
              </div>
              <div class="service-text">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <ul class="service-list">
                  <li v-for="item in service.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Como funciona</span>
            <h2>Nosso Processo</h2>
          </div>
        </div>
        
        <div class="process-timeline">
          <div 
            class="process-step" 
            v-for="(step, index) in processSteps" 
            :key="index"
          >
            <div class="step-marker">{{ index + 1 }}</div>
            <div class="step-content">
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
          <ColorBends
            class="cta-bg-effect"
            :colors="['#CDBFF0', '#FFD4C4', '#C4EAD8', '#7B5CBF', '#F2A07B']"
            :rotation="28"
            :speed="0.16"
            :scale="1.3"
            :frequency="1.35"
            :warpStrength="1.05"
            :mouseInfluence="0.45"
            :parallax="0.35"
            :noise="0.055"
            transparent
          />
          <div class="cta-content">
            <h2>Agende uma avaliação</h2>
            <p>Nossa equipe está pronta para entender as necessidades do seu filho.</p>
            <div class="cta-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Agora
              </NuxtLink>
              <a :href="whatsappUrl" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-primary {
  color: var(--primary);
}

.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: 4rem;
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-section .container {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.section-header h1 {
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: 1.0625rem;
  color: var(--text-secondary);
}

.section-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.services-showcase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card-main {
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s ease;
  position: relative;
}

.service-card-main:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary);
  font-size: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
}

.service-icon-large {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  opacity: 1;
}

.service-text h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.service-text > p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.service-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-list li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding-left: 1rem;
  position: relative;
}

.service-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
}

.process-section {
  background: var(--surface);
}

.header-content {
  text-align: center;
  margin-bottom: 3rem;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.step-marker {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
}

.step-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.step-content p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.cta-section {
  background: var(--background);
}

.cta-card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.cta-bg-effect {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
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

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 900px) {
  .services-showcase {
    grid-template-columns: 1fr;
  }
  
  .process-timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .process-timeline {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .cta-actions .btn {
    width: 100%;
  }
}
</style>