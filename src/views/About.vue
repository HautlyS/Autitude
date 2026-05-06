<template>
  <div class="about">
    <section class="hero-section">
      <div class="container">
        <div class="about-header">
          <span class="section-tag">Sobre a Autitude</span>
          <h1>Cuidando do futuro do seu filho</h1>
          <p class="lead">
            Uma clinica dedicada a promocao do desenvolvimento integral de criancas, 
            com excelencia tecnica e cuidado humanizado.
          </p>
        </div>

        <div class="about-showcase">
          <div class="about-content">
            <h2>Nossa Historia</h2>
            <p>
              A <strong>Autitude</strong> nasceu do desejo de oferecer um atendimento 
              diferenciado e de alta qualidade para criancas com necessidades 
              neurodivergentes. Fundada por profissionais especializadas em Terapia 
              Ocupacional e Integracao Sensorial, nossa clinica se dedica a 
              proporcionar um ambiente acolhedor e especializado.
            </p>
            <p>
              Localizada na <strong>Rua Major Jose dos Santos Moreira, 328, Pindamonhangaba-SP</strong>, atendemos criancas 
              e familias com carinho, profissionalismo e embasamento cientifico.
            </p>
          </div>
          
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">15+</span>
              <span class="stat-text">Anos de Experiencia</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">Certificada</span>
              <span class="stat-text">NC University USA</span>
            </div>
            <div class="stat-card">
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
          <div class="header-content">
            <span class="section-tag">Nossos Valores</span>
            <h2>O que nos move</h2>
          </div>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon">
              <div class="icon-shape"></div>
            </div>
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
            <div class="mission-icon">
              <div class="icon-circle"></div>
            </div>
            <h3>Missao</h3>
            <p>Promover o desenvolvimento integral de criancas atraves de intervencoes especializadas e baseadas em evidencias cientificas.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">
              <div class="icon-circle"></div>
            </div>
            <h3>Visao</h3>
            <p>Ser referencia em terapia ocupacional e integracao sensorial na regiao.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">
              <div class="icon-circle"></div>
            </div>
            <h3>Valores</h3>
            <p>Humanizacao, etica, excelencia tecnica e compromisso com as familias.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Gostaria de nos conhecer?</h2>
            <p>Agende uma visita e descubra como podemos ajudar no desenvolvimento do seu filho.</p>
            <router-link to="/agendar" class="btn btn-primary btn-lg">
              Agendar Visita
            </router-link>
          </div>
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
          title: 'Excelencia',
          description: 'Profissionais em constante atualizacao cientifica e tecnica.'
        },
        {
          title: 'Humanizacao',
          description: 'Cada crianca e unica. Tratamos com respeito e sensibilidade.'
        },
        {
          title: 'Parceria',
          description: 'Familia e parte essencial do processo de desenvolvimento.'
        },
        {
          title: 'Crescimento',
          description: 'Acompanhamos cada passo com atencao e dedicacao.'
        }
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

.about-showcase {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.about-content p {
  margin-bottom: 1.25rem;
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

.stat-card {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.stat-number {
  display: block;
  font-size: 1.5rem;
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

.header-content {
  text-align: center;
  margin-bottom: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.value-card {
  background: var(--background);
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  width: 56px;
  height: 56px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-shape {
  width: 24px;
  height: 24px;
  background: var(--primary);
  border-radius: 6px;
  opacity: 0.5;
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
  background: var(--background);
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.mission-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.mission-icon {
  width: 56px;
  height: 56px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-circle {
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 50%;
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

.cta-content h2 {
  margin-bottom: 0.75rem;
}

.cta-content p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .about-showcase {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about-stats {
    justify-content: center;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>