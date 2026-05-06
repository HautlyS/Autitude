<template>
  <div class="schedule">
    <section class="hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Agendamento</span>
          <h1>Agende sua consulta</h1>
          <p>Preencha o formulario e retornaremos em ate 24 horas.</p>
        </div>

        <div class="schedule-showcase">
          <form class="schedule-form" @submit.prevent="handleSubmit">
            <div class="form-section">
              <h3>Dados do Responsavel</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="parentName">Nome do Responsavel *</label>
                  <input
                    type="text"
                    id="parentName"
                    class="form-input"
                    v-model="form.parentName"
                    required
                    placeholder="Seu nome completo"
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="phone">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-input"
                    v-model="form.phone"
                    required
                    placeholder="(12) 99999-9999"
                    @input="formatPhone"
                  >
                </div>
              </div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    v-model="form.email"
                    placeholder="seu@email.com"
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="childName">Nome da Crianca</label>
                  <input
                    type="text"
                    id="childName"
                    class="form-input"
                    v-model="form.childName"
                    placeholder="Nome da crianca"
                  >
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="childAge">Idade da Crianca</label>
                <input
                  type="text"
                  id="childAge"
                  class="form-input"
                  v-model="form.childAge"
                  placeholder="Ex: 5 anos"
                >
              </div>
            </div>

            <div class="form-section">
              <h3>Informacoes Adicionais</h3>
              <div class="form-group">
                <label class="form-label" for="message">Observacoes</label>
                <textarea
                  id="message"
                  class="form-textarea"
                  v-model="form.message"
                  placeholder="Conte-nos mais sobre sua demanda..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div class="form-privacy">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.privacy" required>
                <span>Aceito a <router-link to="/privacidade">Politica de Privacidade</router-link></span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitacao' }}
            </button>
          </form>

          <div class="schedule-info">
            <div class="info-block how-it-works">
              <div class="block-header">
                <div class="block-icon"></div>
                <h3>Como funciona?</h3>
              </div>
              <ol class="steps-list">
                <li><span class="step-num">1</span> Preencha o formulario</li>
                <li><span class="step-num">2</span> Entraremos em contato em ate 24h</li>
                <li><span class="step-num">3</span> Agendamos a avaliacao</li>
                <li><span class="step-num">4</span> Iniciamos o tratamento</li>
              </ol>
            </div>

            <div class="info-block contact-quick">
              <div class="block-header">
                <div class="block-icon whatsapp"></div>
                <h3>Prefere WhatsApp?</h3>
              </div>
              <p>Fale conosco diretamente para duvidas rapidas.</p>
              <a :href="whatsappLink" class="btn btn-whatsapp" target="_blank">
                Chamar no WhatsApp
              </a>
            </div>

            <div class="info-block hours-block">
              <div class="block-header">
                <div class="block-icon time"></div>
                <h3>Horario de Atendimento</h3>
              </div>
              <div class="hours-info">
                <p class="days">Segunda a Sexta</p>
                <p class="hours">8h as 18h</p>
              </div>
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
  name: 'ScheduleView',
  setup() {
    const form = ref({
      parentName: '',
      phone: '',
      email: '',
      childName: '',
      childAge: '',
      message: '',
      privacy: false
    })
    const isSubmitting = ref(false)
    const phoneNumber = '5512991968683'

    const whatsappLink = computed(() => {
      const text = encodeURIComponent('Ola! Gostaria de agendar uma avaliacao.')
      return `https://wa.me/${phoneNumber}?text=${text}`
    })

    const formatPhone = (e) => {
      let value = e.target.value.replace(/\D/g, '')
      if (value.length > 0) {
        if (value.length <= 2) value = `(${value}`
        else if (value.length <= 6) value = `(${value.slice(0,2)}) ${value.slice(2)}`
        else value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7,11)}`
      }
      form.value.phone = value
    }

    const handleSubmit = async () => {
      if (!form.value.privacy) {
        alert('Por favor, aceite a Politica de Privacidade.')
        return
      }

      const message = `*AGENDAMENTO - AUTITUDE*\n\n` +
        `*Responsavel:* ${form.value.parentName}\n` +
        `*Telefone:* ${form.value.phone}\n` +
        `${form.value.email ? `*E-mail:* ${form.value.email}\n` : ''}` +
        `${form.value.childName ? `*Crianca:* ${form.value.childName}\n` : ''}` +
        `${form.value.childAge ? `*Idade:* ${form.value.childAge}\n` : ''}` +
        `${form.value.message ? `\n*Observacoes:* ${form.value.message}` : ''}`

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      form.value = {
        parentName: '', phone: '', email: '', childName: '',
        childAge: '', message: '', privacy: false
      }
    }

    return {
      form, isSubmitting, whatsappLink, formatPhone, handleSubmit
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

.schedule-showcase {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2rem;
  align-items: start;
}

.schedule-form {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.form-section {
  margin-bottom: 1.5rem;
}

.form-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.form-group {
  margin-bottom: 0;
}

.form-privacy {
  margin: 1.5rem 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.checkbox-label input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  margin-top: 2px;
}

.checkbox-label a {
  color: var(--primary);
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
}

.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-block {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xs);
}

.block-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.block-icon {
  width: 40px;
  height: 40px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-lg);
}

.block-icon.whatsapp {
  background: #E8F5E9;
}

.block-icon.time {
  background: var(--pastel-peach);
}

.block-header h3 {
  font-size: 1rem;
  margin: 0;
}

.steps-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.steps-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
}

.step-num {
  width: 24px;
  height: 24px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
}

.contact-quick p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.contact-quick .btn {
  width: 100%;
}

.hours-block {
  background: var(--pastel-mint);
}

.days {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.hours {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
}

@media (max-width: 900px) {
  .schedule-showcase {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .schedule-form {
    padding: 1.5rem;
  }
}
</style>