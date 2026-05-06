<template>
  <div class="services">
    <section class="hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Servicos</span>
          <h1>Tratamentos especializados</h1>
          <p>Oferecemos intervencoes especializadas para o desenvolvimento integral da crianca.</p>
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
                <div class="icon-inner"></div>
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
          <div class="cta-content">
            <h2>Agende uma avaliacao</h2>
            <p>Nossa equipe esta pronta para entender as necessidades do seu filho.</p>
            <div class="cta-actions">
              <router-link to="/agendar" class="btn btn-primary btn-lg">
                Agendar Agora
              </router-link>
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
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          title: 'Terapia Ocupacional',
          description: 'Intervencoes para desenvolver habilidades motoras, cognitivas e funcionais.',
          color: 'linear-gradient(135deg, #E8E0F5 0%, #CDBFF0 100%)',
          items: ['Motor fino e grosso', 'Coordenacao motora', 'Autonomia pessoal', 'Atividades de vida diaria']
        },
        {
          title: 'Integracao Sensorial',
          description: 'Abordagem especializada para organizar o processamento sensorial. Desenvolvida pela Dra. Jean Ayres, trabalha as 8 sensacoes do corpo.',
          color: 'linear-gradient(135deg, #FFE0E8 0%, #FFD4E0 100%)',
          items: [
            'Diagnostico sensorial completo',
            'Terapia de Integracao Sensorial (SIT)',
            'Sala Snoezelen / Sala Sensorial',
            'Programa de intervencao individualizado',
            'Orientacao para escola e familia',
            'Estrategias de regulacao sensorial'
          ]
        },
        {
          title: 'Estimulacao Precoce',
          description: 'Intervencoes para os primeiros anos de vida.',
          color: 'linear-gradient(135deg, #E0F5E8 0%, #C4EAD8 100%)',
          items: ['Avaliacao do desenvolvimento', 'Programa de estimulacao', 'Suporte aos pais', 'Monitoramento']
        },
        {
          title: 'Avaliacao Comportamental',
          description: 'Processos avaliativos para compreender o perfil funcional.',
          color: 'linear-gradient(135deg, #FFF0E8 0%, #FFE8DC 100%)',
          items: ['Avaliacao sensorial', 'Perfil motor', 'Escala de independencia', 'Relatorio completo']
        }
      ],
      processSteps: [
        { title: 'Contato', description: 'Voce entra em contato pelo WhatsApp ou formulario.' },
        { title: 'Agendamento', description: 'Marcamos uma avaliacao inicial.' },
        { title: 'Avaliacao', description: 'Realizamos avaliacao completa do desenvolvimento.' },
        { title: 'Plano', description: 'Elaboramos um plano personalizado.' }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding-top: 140px;
  padding-bottom: 4rem;
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
  width: 28px;
  height: 28px;
  background: var(--primary);
  border-radius: 8px;
  opacity: 0.5;
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
  background: var(--surface);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
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