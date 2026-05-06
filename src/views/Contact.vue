<template>
  <div class="contact">
    <section class="section hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Contato</span>
          <h1>Fale conosco</h1>
          <p>Estamos prontos para atender você e sua família.</p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card" v-for="info in contactInfo" :key="info.title">
              <div class="info-icon" :style="{ background: info.color }">
                {{ info.icon }}
              </div>
              <div class="info-content">
                <h3>{{ info.title }}</h3>
                <p>{{ info.content }}</p>
                <p v-if="info.detail" class="info-detail">{{ info.detail }}</p>
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
            <form class="contact-form" @submit.prevent="handleSubmit">
              <h3>Envie uma mensagem</h3>
              <p class="form-subtitle">Respondemos em até 24 horas.</p>
              
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
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-submit">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section section">
      <div class="container">
        <div class="map-placeholder">
          <span class="map-icon">📍</span>
          <p>Rua Major José dos Santos Moreira, 328</p>
          <small>Pindamonhangaba, SP</small>
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
        icon: '📍',
        title: 'Localização',
        content: 'Rua Major José dos Santos Moreira, 328',
        detail: 'Pindamonhangaba, SP',
        color: 'var(--pastel-lavender)'
      },
      {
        icon: '💬',
        title: 'WhatsApp',
        content: 'Respostas rápidas para suas dúvidas',
        link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`,
        linkText: 'Chamar no WhatsApp',
        btnClass: 'btn-whatsapp',
        color: 'var(--pastel-mint)'
      },
      {
        icon: '📧',
        title: 'E-mail',
        content: 'contato@autitude.com.br',
        detail: 'Respondemos em até 24h',
        color: 'var(--pastel-pink)'
      },
      {
        icon: '🕐',
        title: 'Horário',
        content: 'Segunda a Sexta',
        detail: '8h às 18h',
        color: 'var(--pastel-peach)'
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  background: var(--surface);
  padding: 1.25rem;
  border-radius: var(--radius-xl);
  display: flex;
  gap: 1rem;
  box-shadow: var(--shadow-xs);
}

.info-icon {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.info-content h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.info-content > p {
  font-size: 0.9375rem;
}

.info-detail {
  font-size: 0.8125rem;
  color: var(--text-light) !important;
  margin-bottom: 0.75rem;
}

.info-content .btn {
  margin-top: 0.5rem;
}

.contact-form-wrapper {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.contact-form h3 {
  margin-bottom: 0.25rem;
}

.form-subtitle {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.btn-submit {
  width: 100%;
  margin-top: 0.5rem;
}

.map-section {
  background: var(--pastel-lavender);
}

.map-placeholder {
  background: var(--surface);
  padding: 3rem;
  border-radius: var(--radius-xl);
  text-align: center;
}

.map-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
}

.map-placeholder p {
  font-size: 1.0625rem;
  margin-bottom: 0.25rem;
}

.map-placeholder small {
  font-size: 0.875rem;
  color: var(--text-light);
}

/* Tablet */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: clamp(1.5rem, 5vw, 2rem);
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .info-card {
    text-align: center;
  }
  
  .info-icon {
    margin: 0 auto 0.75rem;
  }
  
  .social-card {
    grid-column: span 2;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .map-placeholder {
    padding: clamp(1.5rem, 5vw, 2rem);
  }
}

/* Mobile */
@media (max-width: 500px) {
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .social-card {
    grid-column: auto;
  }
  
  .contact-form-wrapper {
    padding: clamp(1.25rem, 4vw, 1.5rem);
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .btn-submit {
    padding: 0.875rem;
    font-size: 1rem;
  }
  
  .map-section {
    padding: clamp(1.5rem, 5vw, 2rem) 0;
  }
  
  .map-placeholder {
    padding: clamp(1.25rem, 4vw, 1.5rem);
  }
}

/* Small */
@media (max-width: 380px) {
  .section-title h2 {
    font-size: 1.5rem;
  }
  
  .info-icon {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}
</style>