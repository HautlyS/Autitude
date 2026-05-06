<template>
  <div class="team">
    <section class="section hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossa Equipe</span>
          <h1>Profissionais dedicadas</h1>
          <p>Especialistas comprometidas com o desenvolvimento das crianças.</p>
        </div>

        <div class="team-grid">
          <div class="team-card" v-for="member in team" :key="member.name">
            <div class="member-photo" :style="{ background: member.color }">
              {{ member.emoji }}
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-tags">
                <span v-for="tag in member.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="culture-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossa Cultura</span>
          <h2>O que nos torna únicas</h2>
        </div>
        
        <div class="culture-grid">
          <div class="culture-card" v-for="item in culture" :key="item.title">
            <span class="culture-icon">{{ item.icon }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <h2>Venha nos visitar</h2>
          <p>Agende uma visita e conheça nosso espaço acolhedor.</p>
          <router-link to="/contato" class="btn btn-primary">
            Falar Conosco
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TeamView',
  data() {
    return {
      team: [
        {
          name: 'Dra. Juliana Mariani',
          role: 'Terapeuta Ocupacional | CREFITO 20083-TO',
          bio: 'Especialista em Integração Sensorial com certificação pela North Carolina University (USA). Mais de 15 anos de experiência em terapia ocupacional pediátrica e desenvolvimento infantil.',
          color: 'var(--pastel-lavender)',
          emoji: '👩‍⚕️',
          tags: ['CREFITO 20083-TO', 'Integração Sensorial', 'Certificação NC University', 'Terapia Pediátrica']
        },
        {
          name: 'Dra. Amanda Silva',
          role: 'Terapeuta Ocupacional',
          bio: 'Formação em Terapia Ocupacional com especialização em Integração Sensorial e abordagem pediátrica.',
          color: 'var(--pastel-pink)',
          emoji: '👩‍🎓',
          tags: ['Integração Sensorial', 'Estimulação Precoce']
        },
        {
          name: 'Profa. Marcia Santos',
          role: 'Coordenadora Clínica',
          bio: 'Mestrado em Desenvolvimento Humano. Responsável pela qualidade dos serviços e suporte às famílias.',
          color: 'var(--pastel-mint)',
          emoji: '👩‍💼',
          tags: ['Coordenação', 'Orientação Parental']
        }
      ],
      culture: [
        { icon: '💜', title: 'Cuidado Humanizado', description: 'Cada criança é única. Tratamos com respeito e sensibilidade.' },
        { icon: '🎓', title: 'Excelência Técnica', description: 'Profissionais em constante atualização.' },
        { icon: '🤝', title: 'Parceria com Famílias', description: 'Família é essencial no processo.' },
        { icon: '🌱', title: 'Crescimento Contínuo', description: 'Acompanhamos cada passo.' }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding-top: 120px;
}

.section-header {
  text-align: center;
  max-width: 560px;
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

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.team-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s var(--ease-smooth);
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.member-photo {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.member-info {
  padding: 1.5rem;
}

.member-info h3 {
  margin-bottom: 0.25rem;
}

.member-role {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
}

.member-bio {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.member-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--primary-dark);
}

.culture-section {
  background: var(--surface);
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.culture-card {
  background: var(--background);
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  text-align: center;
}

.culture-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.culture-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.culture-card p {
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
}

.cta-card h2 {
  margin-bottom: 0.75rem;
}

.cta-card p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .culture-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .culture-grid {
    grid-template-columns: 1fr;
  }
}
</style>