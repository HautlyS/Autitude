import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap() {
  const animatedElements = new Map()
  let ctx = null

  const animateOnScroll = (
    selector,
    options = {}
  ) => {
    const {
      from = { y: 50, opacity: 0 },
      to = { y: 0, opacity: 1 },
      duration = 0.8,
      ease = 'power2.out',
      start = 'top 85%',
      stagger = 0.1,
      markers = false,
      toggleActions = 'play none none reverse'
    } = options

    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    ctx = gsap.context(() => {
      gsap.fromTo(elements, from, {
        ...to,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: elements[0],
          start,
          markers,
          toggleActions
        }
      })
    })
  }

  const animateHero = (selector) => {
    const element = document.querySelector(selector)
    if (!element) return

    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from(selector, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })
    })
  }

  const animateStagger = (
    selector,
    options = {}
  ) => {
    const {
      from = { y: 30, opacity: 0 },
      duration = 0.6,
      stagger = 0.15,
      start = 'top 80%'
    } = options

    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    ctx = gsap.context(() => {
      gsap.fromTo(elements, from, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        scrollTrigger: {
          trigger: elements[0],
          start,
          toggleActions: 'play none none reverse'
        }
      })
    })
  }

  const animateCards = (selector, options = {}) => {
    const {
      from = { scale: 0.9, opacity: 0 },
      duration = 0.5,
      stagger = 0.1,
      start = 'top 85%'
    } = options

    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    ctx = gsap.context(() => {
      gsap.fromTo(elements, from, {
        scale: 1,
        opacity: 1,
        duration,
        stagger,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: elements[0],
          start,
          toggleActions: 'play none none reverse'
        }
      })
    })
  }

  const parallax = (selector, options = {}) => {
    const { speed = 0.5, direction = 'y' } = options
    
    const element = document.querySelector(selector)
    if (!element) return

    ctx = gsap.context(() => {
      gsap.to(element, {
        [direction]: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })
  }

  const cleanup = () => {
    if (ctx) {
      ctx.revert()
      ctx = null
    }
  }

  return {
    gsap,
    ScrollTrigger,
    animateOnScroll,
    animateHero,
    animateStagger,
    animateCards,
    parallax,
    cleanup
  }
}