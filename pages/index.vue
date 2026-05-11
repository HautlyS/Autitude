<script setup>
import { 
  Brain, Heart, Home, Sparkles, Stethoscope, 
  Baby, ClipboardCheck, GraduationCap, Target, HandHeart 
} from 'lucide-vue-next'
import ColorBends from '~/components/ColorBends.vue'
import Silk from '~/components/Silk.vue'

const whatsappUrl = 'https://wa.me/5512991968683'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Autitude - Clínica de Terapia Ocupacional',
        description: 'Clínica especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP.',
        url: 'https://hautlys.github.io/Autitude',
        logo: 'https://hautlys.github.io/Autitude/full-logo.png',
        image: 'https://hautlys.github.io/Autitude/full-logo.png',
        telephone: '+5512991968683',
        email: 'contato@autitude.com.br',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Major José dos Santos Moreira, 328',
          addressLocality: 'Pindamonhangaba',
          addressRegion: 'SP',
          addressCountry: 'BR',
          postalCode: '12400-010'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '-22.9309',
          longitude: '-45.4607'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          }
        ],
        priceRange: '$$',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '50'
        },
        areaServed: {
          '@type': 'State',
          name: 'São Paulo'
        },
        serviceType: ['Terapia Ocupacional', 'Integração Sensorial', 'Estimulação Precoce', 'ABA'],
        medicalSpecialty: 'Pediatric Occupational Therapy',
        knowsAbout: ['Terapia Ocupacional', 'Integração Sensorial', 'Estimulação Precoce', 'Desenvolvimento Infantil']
      })
    }
  ]
})

const features = [
  {
    title: 'Especialização',
    description: 'Equipe com certificação internacional em Integração Sensorial e abordagens baseadas em evidências.',
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)',
    icon: GraduationCap
  },
  {
    title: 'Cuidado Humanizado',
    description: 'Atendimento individualizado respeitando o ritmo e as necessidades de cada criança e família.',
    color: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)',
    icon: HandHeart
  },
  {
    title: 'Ambiente Acolhedor',
    description: 'Espaço pensado para proporcionar segurança, conforto e estimulação adequada ao desenvolvimento.',
    color: 'linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)',
    icon: Home
  }
]

const services = [
  { name: 'Integração Sensorial', shortDesc: 'Processamento sensorial', color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)', icon: Brain },
  { name: 'Estimulação Precoce', shortDesc: 'Primeiros anos de vida', color: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)', icon: Baby },
  { name: 'Avaliação Completa', shortDesc: 'Diagnóstico completo', color: 'linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)', icon: ClipboardCheck }
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <Silk
          class="silk-bg"
          :speed="5"
          :scale="1"
          color="#7B7481"
          :noise-intensity="1.5"
          :rotation="0"
        />
        <div class="gradient-blob blob-1"></div>
        <div class="gradient-blob blob-2"></div>
        <div class="gradient-blob blob-3"></div>
      </div>
      
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-content">
            <div class="badge-wrapper">
              <span class="hero-badge">
                <span class="badge-dot"></span>
                Clínica Especializada
              </span>
            </div>
            
            <h1 class="hero-title">
              Cuidado que
              <span class="title-highlight">transforma</span>
              vidas
            </h1>
            
            <p class="hero-subtitle">
              Especialistas em Terapia Ocupacional e Integração Sensorial. 
              O cuidado que seu filho merece, com carinho e excelência.
            </p>
            
            <div class="hero-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Consulta
              </NuxtLink>
              <NuxtLink to="/servicos" class="btn btn-secondary btn-lg">
                Conhecer Serviços
              </NuxtLink>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="visual-card card-1">
              <div class="card-accent">
                <Sparkles :size="20" class="icon-primary" />
              </div>
              <div class="card-text">Desenvolvimento Integral</div>
            </div>
            <div class="visual-card card-2">
              <div class="card-accent">
                <Heart :size="20" class="icon-primary" />
              </div>
              <div class="card-text">Cuidado Humanizado</div>
            </div>
            <div class="visual-card card-3">
              <div class="card-accent">
                <Target :size="20" class="icon-primary" />
              </div>
              <div class="card-text">Tratamento Personalizado</div>
            </div>
          </div>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">15+</span>
            <span class="stat-label">Anos de Experiência</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">Certificada</span>
            <span class="stat-label">NC University USA</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">Pindamonhangaba</span>
            <span class="stat-label">Localização</span>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Por que escolher a Autitude</span>
            <h2>Um atendimento único</h2>
            <p>Combinamos excelência técnica com humanização para oferecer o melhor cuidado ao seu filho.</p>
          </div>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="feature.title" :style="{ '--delay': index * 0.1 + 's' }">
            <div class="feature-icon-wrapper" :style="{ background: feature.color }">
              <component :is="feature.icon" :size="32" class="icon-primary feature-icon-inner" />
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
            <div class="feature-hover-overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Nossos Serviços</span>
            <h2>Especialidades</h2>
          </div>
        </div>
        
        <div class="services-showcase">
          <div class="service-main">
            <div class="service-main-content">
              <div class="service-icon-large">
                <Stethoscope :size="32" class="icon-primary" />
              </div>
              <h3>Terapia Ocupacional</h3>
              <p>Desenvolvemos habilidades motoras, cognitivas e funcionais para que sua criança atinja seu máximo potencial.</p>
              <ul class="service-list">
                <li>Motor fino e grosso</li>
                <li>Coordenação motora</li>
                <li>Autonomia pessoal</li>
                <li>Atividades de vida diária</li>
              </ul>
              <NuxtLink to="/servicos" class="btn btn-primary">Ver Mais</NuxtLink>
            </div>
          </div>
          
          <div class="service-cards-grid">
            <NuxtLink 
              v-for="service in services" 
              :key="service.name"
              to="/servicos" 
              class="service-card-mini"
            >
              <div class="card-mini-icon" :style="{ background: service.color }">
                <component :is="service.icon" :size="24" class="icon-primary mini-icon-shape" />
              </div>
              <div class="card-mini-content">
                <h4>{{ service.name }}</h4>
                <p>{{ service.shortDesc }}</p>
              </div>
              <div class="card-arrow"></div>
            </NuxtLink>
          </div>
        </div>
        
        <div class="section-cta">
          <NuxtLink to="/servicos" class="btn btn-secondary btn-lg">
            Ver Todos os Serviços
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-wrapper">
          <ColorBends
            class="cta-bg-effect"
            :colors="['#E8E0F5', '#E0F5E8', '#FFE0E8', '#CDBFF0', '#8FD9B6']"
            :rotation="25"
            :speed="0.15"
            :scale="1.3"
            :frequency="1.2"
            :warpStrength="1.0"
            :mouseInfluence="0.4"
            :parallax="0.3"
            :noise="0.05"
            transparent
          />
          <div class="cta-content">
            <span class="cta-tag">Entre em contato</span>
            <h2>Pronto para começar?</h2>
            <p>Agende uma avaliação e descubra como podemos ajudar no desenvolvimento do seu filho.</p>
            <div class="cta-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Avaliação
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

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6.25rem;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.silk-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.4;
}

.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 1;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: var(--primary-light);
  top: -200px;
  right: -100px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--secondary-light);
  bottom: -100px;
  left: -50px;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: var(--accent-light);
  top: 40%;
  left: 30%;
}

.hero .container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  max-width: 560px;
}

.badge-wrapper {
  margin-bottom: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--surface);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

.title-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-top: 0.25rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--primary-light);
}

.hero-visual {
  position: relative;
  height: 420px;
}

.visual-card {
  position: absolute;
  background: var(--surface);
  padding: 1.25rem 1.75rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: float 6s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.visual-card:hover {
  transform: scale(1.02);
}

.card-1 {
  top: 5%;
  right: 15%;
  animation-delay: 0s;
}

.card-2 {
  top: 38%;
  right: 5%;
  animation-delay: -2s;
}

.card-3 {
  top: 70%;
  right: 20%;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card-accent {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-text {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--text);
  white-space: nowrap;
}

.features {
  background: var(--surface);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
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

.section-header h2 {
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: 1.0625rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  background: var(--background);
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon-inner {
  opacity: 1;
}

.feature-content h3 {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.feature-content p {
  font-size: 0.9375rem;
  line-height: 1.6;
}

.services-preview {
  background: var(--background);
}

.services-showcase {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.service-main {
  background: var(--surface);
  border-radius: var(--radius-2xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.service-main-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.service-icon-large {
  width: 72px;
  height: 72px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-main-content h3 {
  font-size: 1.5rem;
}

.service-main-content > p {
  font-size: 1rem;
  line-height: 1.7;
}

.service-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
}

.service-list li::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.service-cards-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-card-mini {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-card-mini:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.card-mini-icon {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-icon-shape {
  opacity: 1;
}

.card-mini-content {
  flex: 1;
}

.card-mini-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--text);
}

.card-mini-content p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

.card-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--text-light);
  border-bottom: 2px solid var(--text-light);
  transform: rotate(-45deg);
  opacity: 0.3;
}

.section-cta {
  text-align: center;
}

.cta-section {
  background: var(--surface);
  position: relative;
  overflow: hidden;
}

.cta-wrapper {
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
  padding: 4rem;
  text-align: center;
}

.cta-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: rgba(255,255,255,0.6);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.cta-content h2 {
  margin-bottom: 0.75rem;
}

.cta-content p {
  font-size: 1.0625rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    display: none;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .services-showcase {
    grid-template-columns: 1fr;
  }
  
  .service-main {
    text-align: center;
  }
  
  .service-list {
    align-items: center;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: clamp(4rem, 12vw, 6rem);
    padding-bottom: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .stat-divider {
    width: 60px;
    height: 1px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card-mini {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .card-arrow {
    display: none;
  }
  
  .cta-wrapper {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .cta-actions .btn {
    width: 100%;
  }
}
</style>