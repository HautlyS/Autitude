<template>
  <div class="schedule">
    <section class="section hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Agendamento</span>
          <h1>Agende sua consulta</h1>
          <p>Preencha o formulário e retornaremos em até 24 horas.</p>
        </div>

        <div class="schedule-grid">
          <form class="schedule-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="parentName">Nome do Responsável *</label>
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

            <div class="form-row">
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
                <label class="form-label" for="childName">Nome da Criança</label>
                <input
                  type="text"
                  id="childName"
                  class="form-input"
                  v-model="form.childName"
                  placeholder="Nome da criança"
                >
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="childAge">Idade da Criança</label>
              <input
                type="text"
                id="childAge"
                class="form-input"
                v-model="form.childAge"
                placeholder="Ex: 5 anos"
              >
            </div>

            <div class="form-group">
              <label class="form-label" for="service">Serviço de Interesse *</label>
              <select
                id="service"
                class="form-select"
                v-model="form.service"
                required
              >
                <option value="" disabled>Selecione um serviço</option>
                <option value="avaliacao">Avaliação Inicial</option>
                <option value="terapia-occupacional">Terapia Ocupacional</option>
                <option value="integracao-sensorial">Integração Sensorial</option>
                <option value="estimulacao-precoce">Estimulação Precoce</option>
                <option value="retorno">Retorno</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">Observações</label>
              <textarea
                id="message"
                class="form-textarea"
                v-model="form.message"
                placeholder="Conte-nos mais sobre sua demanda..."
                rows="4"
              ></textarea>
            </div>

            <div class="form-privacy">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.privacy" required>
                <span>Aceito a <router-link to="/privacidade">Política de Privacidade</router-link></span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitação' }}
            </button>
          </form>

          <div class="schedule-info">
            <div class="info-card">
              <h3>Como funciona?</h3>
              <ol class="steps">
                <li><strong>1.</strong> Preencha o formulário</li>
                <li><strong>2.</strong> Entraremos em contato em até 24h</li>
                <li><strong>3.</strong> Agendamos a avaliação</li>
                <li><strong>4.</strong> Iniciamos o tratamento</li>
              </ol>
            </div>

            <div class="info-card">
              <h3>Prefere WhatsApp?</h3>
              <p>Fale conosco diretamente para dúvidas rápidas.</p>
              <a :href="whatsappLink" class="btn btn-whatsapp" target="_blank">
                Chamar no WhatsApp
              </a>
            </div>

            <div class="info-card info-hours">
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta</p>
              <p class="hours">8h às 18h</p>
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
      service: '',
      message: '',
      privacy: false
    })
    const isSubmitting = ref(false)
    const phoneNumber = '5512991968683'

    const whatsappLink = computed(() => {
      const text = encodeURIComponent('Olá! Gostaria de agendar uma avaliação.')
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
        alert('Por favor, aceite a Política de Privacidade.')
        return
      }

      const serviceLabels = {
        'avaliacao': 'Avaliação Inicial',
        'terapia-occupacional': 'Terapia Ocupacional',
        'integracao-sensorial': 'Integração Sensorial',
        'estimulacao-precoce': 'Estimulação Precoce',
        'retorno': 'Retorno'
      }

      const message = `*AGENDAMENTO - AUTITUDE*\n\n` +
        `*Responsável:* ${form.value.parentName}\n` +
        `*Telefone:* ${form.value.phone}\n` +
        `${form.value.email ? `*E-mail:* ${form.value.email}\n` : ''}` +
        `${form.value.childName ? `*Criança:* ${form.value.childName}\n` : ''}` +
        `${form.value.childAge ? `*Idade:* ${form.value.childAge}\n` : ''}` +
        `*Serviço:* ${serviceLabels[form.value.service] || form.value.service}\n` +
        `${form.value.message ? `\n*Observações:* ${form.value.message}` : ''}`

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      form.value = {
        parentName: '', phone: '', email: '', childName: '',
        childAge: '', service: '', message: '', privacy: false
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

.schedule-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;
  align-items: start;
}

.schedule-form {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
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

.form-group {
  margin-bottom: 1rem;
}

.form-privacy {
  margin: 1.25rem 0;
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

.info-card {
  background: var(--surface);
  padding: 1.25rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xs);
}

.info-card h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.steps {
  list-style: decimal;
  padding-left: 1.25rem;
  font-size: 0.875rem;
}

.steps li {
  margin-bottom: 0.5rem;
}

.info-card p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.info-card .btn {
  width: 100%;
}

.info-hours {
  background: var(--pastel-mint);
}

.hours {
  font-size: 1.125rem !important;
  font-weight: 700;
  color: var(--text) !important;
}

@media (max-width: 900px) {
  .schedule-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>