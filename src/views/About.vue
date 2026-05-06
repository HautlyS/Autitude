<template>
  <div class="about">
    <section class="section hero-section">
      <div class="container">
        <div class="about-header">
          <span class="section-tag">Sobre a Autitude</span>
          <h1>Cuidando do futuro do seu filho</h1>
          <p class="lead">
            Uma clínica dedicadas à promoção do desenvolvimento integral de crianças, 
            com excelência técnica e cuidado humanizado.
          </p>
        </div>

        <div class="about-grid">
          <div class="about-content">
            <h2>Nossa História</h2>
            <p>
              A <strong>Autitude</strong> nasceu do desejo de oferecer um atendimento 
              diferenciado e de alta qualidade para crianças com necessidades 
              neurodivergentes. Fundada por profissionais especializadas em Terapia 
              Ocupacional e Integração Sensorial, nossa clínica se dedica a 
              proporcionar um ambiente acolhedor e especializado.
            </p>
            <p>
              Localizada na <strong>Rua Major José dos Santos Moreira, 328, Pindamonhangaba-SP</strong>, atendemos crianças 
              e famílias com carinho, profissionalismo e embasamento científico.
            </p>
          </div>
          
          <div class="about-stats">
            <div class="stat-box">
              <span class="stat-number">15+</span>
              <span class="stat-text">Anos de Experiência</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">Certificada</span>
              <span class="stat-text">NC University USA</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">Local</span>
              <span class="stat-text">Pindamonhangaba</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Valores</span>
          <h2>O que nosmove</h2>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <span class="value-icon">{{ value.icon }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-section section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card">
            <span class="mission-icon">🎯</span>
            <h3>Missão</h3>
            <p>Promover o desenvolvimento integral de crianças através de intervenções especializadas e baseadas em evidências científicas.</p>
          </div>
          <div class="mission-card">
            <span class="mission-icon">👁️</span>
            <h3>Visão</h3>
            <p>Ser referência em terapia ocupacional e integração sensorial na região.</p>
          </div>
          <div class="mission-card">
            <span class="mission-icon">💜</span>
            <h3>Valores</h3>
            <p>Humanização, ética, excelência técnica e compromisso com as famílias.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <h2>Gostaria de nos conhecer?</h2>
          <p>Agende uma visita e descubra como podemos ajudar no desenvolvimento do seu filho.</p>
          <router-link to="/agendar" class="btn btn-primary">
            Agendar Visita
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      values: [
        {
          icon: '🎓',
          title: 'Excelência',
          description: 'Profissionais em constante atualização científica e técnica.'
        },
        {
          icon: '💜',
          title: 'Humanização',
          description: 'Cada criança é única. Tratamos com respeito e sensibilidade.'
        },
        {
          icon: '🤝',
          title: 'Parceria',
          description: 'Família é parte essencial do processo de desenvolvimento.'
        },
        {
          icon: '🌱',
          title: 'Crescimento',
          description: 'Acompanhamos cada passo com atenção e dedicação.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding-top: 120px;
}

.about-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
}

.about-header h1 {
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.125rem;
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

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-content h2 {
  margin-bottom: 1.25rem;
}

.about-content p {
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-content strong {
  color: var(--primary);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-box {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.stat-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.stat-text {
  font-size: 0.8125rem;
  color: var(--text-secondary);
}

.values-section {
  background: var(--surface);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  margin-bottom: 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.value-card {
  background: var(--background);
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  text-align: center;
}

.value-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.value-card p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.mission-section {
  background: var(--gradient-hero);
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.mission-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.mission-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.mission-card h3 {
  margin-bottom: 0.75rem;
}

.mission-card p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-section {
  background: var(--surface);
}

.cta-card {
  background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  text-align: center;
}

.cta-card h2 {
  margin-bottom: 0.75rem;
}

.cta-card p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid,
  .mission-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .about-stats,
  .values-grid,
  .mission-grid {
    grid-template-columns: 1fr;
  }
}
</style>