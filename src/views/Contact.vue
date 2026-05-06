<template>
  <div class="contact">
    <section class="hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Contato</span>
          <h1>Fale conosco</h1>
          <p>Estamos prontos para atender voce e sua familia.</p>
        </div>

        <div class="contact-showcase">
          <div class="contact-info-cards">
            <div class="info-card" v-for="info in contactInfo" :key="info.title">
              <div class="card-icon-wrapper" :style="{ background: info.color }">
                <div class="card-icon-inner"></div>
              </div>
              <div class="card-text">
                <h3>{{ info.title }}</h3>
                <p class="primary-text">{{ info.content }}</p>
                <p v-if="info.detail" class="secondary-text">{{ info.detail }}</p>
                <a 
                  v-if="info.link" 
                  :href="info.link" 
                  class="btn btn-sm"
                  :class="info.btnClass"
                  target="_blank"
                >
                  {{ info.linkText }}
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <div class="form-header">
              <h3>Envie uma mensagem</h3>
              <p>Respondemos em ate 24 horas.</p>
            </div>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label" for="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  class="form-input"
                  v-model="form.name"
                  required
                  placeholder="Seu nome completo"
                >
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    v-model="form.email"
                    required
                    placeholder="seu@email.com"
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="tel">Telefone</label>
                  <input
                    type="tel"
                    id="tel"
                    class="form-input"
                    v-model="form.phone"
                    placeholder="(12) 99999-9999"
                  >
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="msg">Mensagem *</label>
                <textarea
                  id="msg"
                  class="form-textarea"
                  v-model="form.message"
                  required
                  placeholder="Como podemos ajudar?"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-submit">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="location-section section">
      <div class="container">
        <div class="location-card">
          <div class="location-content">
            <div class="location-icon">
              <div class="icon-shape"></div>
            </div>
            <div class="location-details">
              <h3>Nosso Endereco</h3>
              <p class="address">Rua Major Jose dos Santos Moreira, 328</p>
              <p class="city">Pindamonhangaba, SP</p>
              <div class="location-meta">
                <span>Seg a Sex: 8h as 18h</span>
              </div>
            </div>
          </div>
          <div class="location-map">
            <div class="map-placeholder">
              <div class="map-pattern"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactView',
  setup() {
    const phoneNumber = '5512991968683'

    const contactInfo = [
      {
        title: 'Localizacao',
        content: 'Rua Major Jose dos Santos Moreira, 328',
        detail: 'Pindamonhangaba, SP',
        color: 'linear-gradient(135deg, #E8E0F5 0%, #CDBFF0 100%)'
      },
      {
        title: 'WhatsApp',
        content: 'Respostas rapidas para suas duvidas',
        link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Ola! Gostaria de mais informacoes.')}`,
        linkText: 'Chamar no WhatsApp',
        btnClass: 'btn-whatsapp',
        color: 'linear-gradient(135deg, #E0F5E8 0%, #C4EAD8 100%)'
      },
      {
        title: 'E-mail',
        content: 'contato@autitude.com.br',
        detail: 'Respondemos em ate 24h',
        color: 'linear-gradient(135deg, #FFE0E8 0%, #FFD4E0 100%)'
      },
      {
        title: 'Horario',
        content: 'Segunda a Sexta',
        detail: '8h as 18h',
        color: 'linear-gradient(135deg, #FFF0E8 0%, #FFE8DC 100%)'
      }
    ]

    const form = ref({
      name: '',
      email: '',
      phone: '',
      message: ''
    })

    const handleSubmit = () => {
      const message = `*CONTATO - AUTITUDE*\n\n` +
        `*Nome:* ${form.value.name}\n` +
        `*E-mail:* ${form.value.email}\n` +
        `${form.value.phone ? `*Telefone:* ${form.value.phone}\n` : ''}` +
        `\n*Mensagem:*\n${form.value.message}`

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      form.value = { name: '', email: '', phone: '', message: '' }
    }

    return {
      contactInfo,
      form,
      handleSubmit
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

.contact-showcase {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: start;
}

.contact-info-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card-icon-wrapper {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon-inner {
  width: 24px;
  height: 24px;
  background: var(--primary);
  border-radius: 6px;
  opacity: 0.5;
}

.card-text h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.primary-text {
  font-size: 0.9375rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.secondary-text {
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}

.info-card .btn {
  margin-top: 0.5rem;
}

.contact-form-wrapper {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.form-header {
  margin-bottom: 1.5rem;
}

.form-header h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.form-header p {
  font-size: 0.875rem;
  color: var(--text-light);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.btn-submit {
  width: 100%;
  margin-top: 0.5rem;
}

.location-section {
  background: var(--surface);
}

.location-card {
  background: var(--background);
  border-radius: var(--radius-2xl);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.location-content {
  display: flex;
  gap: 1.5rem;
}

.location-icon {
  width: 72px;
  height: 72px;
  min-width: 72px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-shape {
  width: 32px;
  height: 32px;
  background: var(--gradient-primary);
  border-radius: 10px;
}

.location-details h3 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}

.address {
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.city {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.location-meta {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.location-map {
  height: 160px;
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-pattern {
  width: 60px;
  height: 60px;
  border: 3px solid var(--primary);
  border-radius: 50%;
  opacity: 0.3;
}

@media (max-width: 900px) {
  .contact-showcase {
    grid-template-columns: 1fr;
  }
  
  .contact-info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .location-card {
    grid-template-columns: 1fr;
  }
  
  .location-map {
    order: -1;
  }
}

@media (max-width: 640px) {
  .contact-info-cards {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .location-content {
    flex-direction: column;
    text-align: center;
  }
  
  .location-icon {
    margin: 0 auto;
  }
}
</style>