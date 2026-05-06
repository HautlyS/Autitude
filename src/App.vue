<template>
  <div id="app">
    <div class="ambient-bg">
      <Grainient
        color1="#5227FF"
        color2="#FF9FFC"
        color3="#B19EEF"
        :time-speed="0.15"
        :color-balance="0.0"
        :warp-strength="1.0"
        :warp-frequency="5.0"
        :warp-speed="1.5"
        :warp-amplitude="50.0"
        :blend-angle="0.0"
        :blend-softness="0.05"
        :rotation-amount="500.0"
        :noise-scale="2.0"
        :grain-amount="0.08"
        :grain-scale="2.0"
        :grain-animated="false"
        :contrast="1.5"
        :gamma="1.0"
        :saturation="1.0"
        :center-x="0.0"
        :center-y="0.0"
        :zoom="0.9"
      />
    </div>

    <SplashCursor
      :SIM_RESOLUTION="128"
      :DYE_RESOLUTION="1440"
      :CAPTURE_RESOLUTION="512"
      :DENSITY_DISSIPATION="3.5"
      :VELOCITY_DISSIPATION="2"
      :PRESSURE="0.1"
      :PRESSURE_ITERATIONS="20"
      :CURL="3"
      :SPLAT_RADIUS="0.2"
      :SPLAT_FORCE="6000"
      :SHADING="true"
      :COLOR_UPDATE_SPEED="10"
      :BACK_COLOR="{ r: 0.5, g: 0, b: 0 }"
      :TRANSPARENT="true"
    />

    <div class="menu-overlay" :class="{ 'overlay-active': menuOpen }" @click="closeMenu"></div>

    <nav class="navbar" :class="{ 'nav-scrolled': isScrolled, 'nav-open': menuOpen }">
      <div class="nav-container">
<router-link to="/" class="logo" @click="closeMenu">
            <img src="/favicon.svg" alt="Autitude" class="logo-img">
            <span class="logo-text">Autitude</span>
          </router-link>
        
        <div class="nav-links" :class="{ 'nav-active': menuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">
            Início
          </router-link>
          <router-link to="/sobre" class="nav-link" @click="closeMenu">
            Sobre
          </router-link>
          <router-link to="/servicos" class="nav-link" @click="closeMenu">
            Serviços
          </router-link>
          <router-link to="/equipe" class="nav-link" @click="closeMenu">
            Equipe
          </router-link>
          <router-link to="/contato" class="nav-link" @click="closeMenu">
            Contato
          </router-link>
          <router-link to="/agendar" class="btn btn-primary btn-sm" @click="closeMenu">
            Agendar
          </router-link>
        </div>
        
        <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': menuOpen }" aria-label="Menu" :aria-expanded="menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <router-link to="/" class="logo" @click="closeMenu">
              <img src="/favicon.svg" alt="Autitude" class="logo-img">
              <span class="logo-text">Autitude</span>
            </router-link>
            <p>Clínica especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP.</p>
          </div>
          
          <div class="footer-links">
            <h4>Navegação</h4>
            <router-link to="/">Início</router-link>
            <router-link to="/sobre">Sobre Nós</router-link>
            <router-link to="/servicos">Serviços</router-link>
            <router-link to="/equipe">Equipe</router-link>
          </div>
          
          <div class="footer-services">
            <h4>Atendimento</h4>
            <router-link to="/agendar">Agendamento</router-link>
            <router-link to="/contato">Contato</router-link>
            <a href="https://wa.me/5512991968683">WhatsApp</a>
            <a href="https://www.instagram.com/clinicaautitude" target="_blank">Instagram</a>
          </div>
          
          <div class="footer-contact">
            <h4>Localizacao</h4>
            <p>Rua Major Jose dos Santos Moreira, 328</p>
            <p>Pindamonhangaba, SP</p>
            <p>Seg a Sex: 8h as 18h</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© {{ currentYear }} Autitude. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import Grainient from './extra/Grainient/Grainient.vue'
import SplashCursor from './extra/SplashCursor/SplashCursor.vue'

export default {
  name: 'App',
  components: {
    Grainient,
    SplashCursor
  },
  setup() {
    const isScrolled = ref(false)
    const menuOpen = ref(false)
    let ticking = false
    let scrollTimeout = null
    
    const currentYear = computed(() => new Date().getFullYear())
    
    const handleScroll = () => {
      if (!ticking) {
        scrollTimeout = requestAnimationFrame(() => {
          isScrolled.value = window.scrollY > 60
          ticking = false
        })
        ticking = true
      }
    }
    
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }
    
    const closeMenu = () => {
      menuOpen.value = false
    }
    
    watch(menuOpen, (isOpen) => {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    })
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(scrollTimeout)
      document.body.style.overflow = ''
    })
    
    return {
      isScrolled,
      menuOpen,
      currentYear,
      toggleMenu,
      closeMenu
    }
  }
}
</script>

<style scoped>
.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--background);
  opacity: 0.7;
}

.ambient-bg :deep(.relative) {
  position: absolute;
  inset: 0;
}

:deep(.fixed) {
  pointer-events: none;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.4s var(--ease-smooth);
}

.navbar.nav-scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-xs);
  padding: 0.875rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.625rem);
  text-decoration: none;
  font-weight: 700;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: var(--text-dark);
}

.logo-img {
  width: clamp(1.5rem, 4vw, 1.8rem);
  height: clamp(1.5rem, 4vw, 1.8rem);
  border-radius: 50%;
}

.logo-icon {
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  display: inline-block;
}

.logo:hover .logo-icon {
  animation: spin 0.6s ease;
}

.logo-icon {
  font-size: 1.75rem;
  transition: transform 0.6s var(--ease-bounce);
}

.logo:hover .logo-icon {
  transform: rotate(360deg);
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s var(--ease-smooth);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s var(--ease-smooth);
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

main {
  min-height: 100vh;
}

.footer {
  background: var(--surface);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(155, 126, 217, 0.08);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand .logo {
  margin-bottom: 1rem;
  display: inline-flex;
}

.footer-brand .logo-img {
  width: 1.8rem;
  height: 1.8rem;
}

.footer-brand p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pastel-lavender);
  border-radius: var(--radius-md);
  font-size: 1.125rem;
  transition: all 0.2s;
}

.social-btn:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
}

.footer-links h4,
.footer-services h4,
.footer-contact h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links a,
.footer-services a,
.footer-contact p {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  margin-bottom: 0.625rem;
  transition: color 0.2s;
}

.footer-links a:hover,
.footer-services a:hover {
  color: var(--primary);
}

.footer-bottom {
  border-top: 1px solid rgba(155, 126, 217, 0.08);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.875rem;
  color: var(--text-light);
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s var(--ease-smooth);
}

.menu-overlay.overlay-active {
  opacity: 1;
  visibility: visible;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s var(--ease-smooth);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
    z-index: 1001;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 85vw;
    max-width: 320px;
    height: 100vh;
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: clamp(2rem, 8vw, 4rem);
    gap: 0.5rem;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .nav-links.nav-active {
    right: 0;
  }
  
  .nav-link {
    padding: clamp(0.75rem, 2vw, 1rem) 0;
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .nav-links .btn {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 999;
  }
  
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.5rem, 5vw, 2rem);
    text-align: left;
  }
  
  .footer-brand {
    grid-column: span 2;
    text-align: center;
  }
  
  .footer-links,
  .footer-services,
  .footer-contact {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: clamp(1.5rem, 5vw, 2rem);
  }
  
  .footer-brand {
    grid-column: auto;
  }
  
  .footer-brand p {
    text-align: center;
  }
}
</style>