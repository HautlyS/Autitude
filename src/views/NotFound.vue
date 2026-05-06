<template>
  <div class="not-found">
    <section class="section">
      <div class="container">
        <div class="not-found-content">
          <span class="error-code">404</span>
          <h1>Página não encontrada</h1>
          <p>Ops! A página que você está procurando não existe.</p>
          <div class="not-found-actions">
            <router-link to="/" class="btn btn-primary">
              Voltar ao Início
            </router-link>
            <router-link to="/agendar" class="btn btn-secondary">
              Agendar Consulta
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.not-found-content {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.error-code {
  display: block;
  font-size: 8rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.not-found-content h1 {
  margin-bottom: 0.75rem;
}

.not-found-content p {
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.not-found-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>