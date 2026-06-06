import { _ as _export_sfc, u as useHead, a as __nuxt_component_0, b as useRuntimeConfig } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, defineComponent, useTemplateRef, ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Heart, Brain, Sparkles, HandHeart, BookOpen, Mic, Activity } from 'lucide-vue-next';
import { _ as _sfc_main$3 } from './ColorBends-DzA-kp_2.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'three';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Silk",
  __ssrInlineRender: true,
  props: {
    speed: { default: 5 },
    scale: { default: 1 },
    color: { default: "#6B4FA3" },
    noiseIntensity: { default: 1.5 },
    rotation: { default: 0 },
    className: { default: "" },
    style: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const containerRef = useTemplateRef("containerRef");
    watch(
      () => [props.speed, props.scale, props.color, props.noiseIntensity, props.rotation],
      () => {
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: [__props.className, "w-full h-full"],
        style: __props.style
      }, _attrs))} data-v-2ea7995f></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Silk.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Silk = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2ea7995f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MagicRings",
  __ssrInlineRender: true,
  props: {
    color: { default: "#7cff67" },
    colorTwo: { default: "#42fcff" },
    speed: { default: 1 },
    ringCount: { default: 6 },
    attenuation: { default: 10 },
    lineThickness: { default: 2 },
    baseRadius: { default: 0.35 },
    radiusStep: { default: 0.1 },
    scaleRate: { default: 0.1 },
    opacity: { default: 1 },
    blur: { default: 0 },
    noiseAmount: { default: 0.1 },
    rotation: { default: 0 },
    ringGap: { default: 1.5 },
    fadeIn: { default: 0.7 },
    fadeOut: { default: 0.5 },
    followMouse: { type: Boolean, default: false },
    mouseInfluence: { default: 0.2 },
    hoverScale: { default: 1.2 },
    parallax: { default: 0.05 },
    clickBurst: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const mountRef = useTemplateRef("mountRef");
    ref([0, 0]);
    ref([0, 0]);
    ref(0);
    ref(false);
    ref(0);
    computed(() => ({
      color: props.color,
      colorTwo: props.colorTwo,
      speed: props.speed,
      ringCount: props.ringCount,
      attenuation: props.attenuation,
      lineThickness: props.lineThickness,
      baseRadius: props.baseRadius,
      radiusStep: props.radiusStep,
      scaleRate: props.scaleRate,
      opacity: props.opacity,
      blur: props.blur,
      noiseAmount: props.noiseAmount,
      rotation: props.rotation,
      ringGap: props.ringGap,
      fadeIn: props.fadeIn,
      fadeOut: props.fadeOut,
      followMouse: props.followMouse,
      mouseInfluence: props.mouseInfluence,
      hoverScale: props.hoverScale,
      parallax: props.parallax,
      clickBurst: props.clickBurst
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "mountRef",
        ref: mountRef,
        class: "w-full h-full",
        style: props.blur > 0 ? { filter: `blur(${props.blur}px)` } : void 0
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MagicRings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const heroLogoUrl = "/full-logo-no-bg.png";
const whatsappUrl = "https://wa.me/5512991968683";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.siteBase || "https://hautlys.github.io/Autitude";
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
            description: "Espa\xE7o especializado em crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional em Pindamonhangaba-SP.",
            url: "https://hautlys.github.io/Autitude",
            logo: "https://hautlys.github.io/Autitude/full-logo.png",
            image: "https://hautlys.github.io/Autitude/full-logo.png",
            telephone: "+5512991968683",
            email: "contato@autitude.com.br",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Major Jos\xE9 dos Santos Moreira, 328",
              addressLocality: "Pindamonhangaba",
              addressRegion: "SP",
              addressCountry: "BR",
              postalCode: "12400-010"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-22.9309",
              longitude: "-45.4607"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00"
              }
            ],
            priceRange: "$$",
            areaServed: {
              "@type": "State",
              name: "S\xE3o Paulo"
            },
            serviceType: ["Neuropsicologia", "Neuropsicopedagogia", "Fonoaudiologia", "Terapia Ocupacional"],
            medicalSpecialty: "Neurodevelopmental care",
            knowsAbout: ["Neurodiverg\xEAncia", "Neuropsicologia", "Neuropsicopedagogia", "Fonoaudiologia", "Terapia Ocupacional", "Integra\xE7\xE3o Sensorial", "Desenvolvimento Infantil"]
          })
        }
      ]
    });
    const pillars = [
      {
        title: "Acolher",
        description: "Receber cada fam\xEDlia com escuta, respeito e presen\xE7a.",
        color: "linear-gradient(135deg, #FFF1F4 0%, #FFE4EA 100%)",
        solidColor: "#FFF1F4",
        icon: Heart
      },
      {
        title: "Compreender",
        description: "Investigar o perfil \xFAnico de cada pessoa com base em evid\xEAncias.",
        color: "linear-gradient(135deg, #F0F6FE 0%, #DCEBFC 100%)",
        solidColor: "#F0F6FE",
        icon: Brain
      },
      {
        title: "Desenvolver",
        description: "Potencializar habilidades com cuidado integral e individualizado.",
        color: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
        solidColor: "#F0FDF4",
        icon: Sparkles
      },
      {
        title: "Incluir",
        description: "Construir caminhos de participa\xE7\xE3o e pertencimento em cada contexto.",
        color: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
        solidColor: "#FFFBEB",
        icon: HandHeart
      }
    ];
    const services = [
      {
        name: "Neuropsicologia",
        shortDesc: "Avalia\xE7\xE3o e desenvolvimento cognitivo",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)",
        icon: Brain
      },
      {
        name: "Neuropsicopedagogia",
        shortDesc: "Apoio \xE0 aprendizagem",
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)",
        icon: BookOpen
      },
      {
        name: "Fonoaudiologia",
        shortDesc: "Linguagem e comunica\xE7\xE3o",
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)",
        icon: Mic
      },
      {
        name: "Terapia Ocupacional",
        shortDesc: "Autonomia e Integra\xE7\xE3o Sensorial",
        color: "linear-gradient(135deg, #FFF8D6 0%, #FEF3C7 100%)",
        icon: Activity
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-7ce326a3><section class="hero" data-v-7ce326a3><div class="hero-bg" data-v-7ce326a3>`);
      _push(ssrRenderComponent(Silk, {
        class: "silk-bg",
        speed: 5,
        scale: 1,
        color: "#6B4FA3",
        "noise-intensity": 1.5,
        rotation: 0
      }, null, _parent));
      _push(`<div class="hero-rings" aria-hidden="true" data-v-7ce326a3>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        color: "#EE00FF",
        colorTwo: "#EE00FF",
        ringCount: 6,
        speed: 1,
        attenuation: 10,
        lineThickness: 2,
        baseRadius: 0.35,
        radiusStep: 0.1,
        scaleRate: 0.1,
        opacity: 1,
        blur: 0.5,
        noiseAmount: 0.1,
        rotation: 0,
        ringGap: 1.5,
        fadeIn: 0.7,
        fadeOut: 0.5,
        followMouse: true,
        mouseInfluence: 0.1,
        hoverScale: 0.5,
        parallax: 0.5,
        clickBurst: true
      }, null, _parent));
      _push(`</div><img${ssrRenderAttr("src", heroLogoUrl)} alt="" class="hero-rings-logo" data-v-7ce326a3><div class="gradient-blob blob-1" data-v-7ce326a3></div><div class="gradient-blob blob-2" data-v-7ce326a3></div><div class="gradient-blob blob-3" data-v-7ce326a3></div></div><div class="container" data-v-7ce326a3><div class="hero-wrapper" data-v-7ce326a3><div class="hero-content" data-v-7ce326a3><div class="badge-wrapper" data-v-7ce326a3><span class="hero-badge" data-v-7ce326a3><span class="badge-dot" data-v-7ce326a3></span> Cuidado humanizado e baseado em evid\xEAncias </span></div><h1 class="hero-title" data-v-7ce326a3> Desenvolvimento com <span class="title-highlight" data-v-7ce326a3>acolhimento,</span> ci\xEAncia e humanidade. </h1><p class="hero-subtitle" data-v-7ce326a3> A Autitude \xE9 um espa\xE7o especializado no atendimento de crian\xE7as, adolescentes e suas fam\xEDlias, com foco no p\xFAblico neurodivergente. Atuamos com uma abordagem humanizada, integrativa e baseada em evid\xEAncias cient\xEDficas. </p><p class="hero-tagline" data-v-7ce326a3> \u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades. </p><div class="hero-actions" data-v-7ce326a3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Consulta `);
          } else {
            return [
              createTextVNode(" Agendar Consulta ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conhecer Servi\xE7os `);
          } else {
            return [
              createTextVNode(" Conhecer Servi\xE7os ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section id="quem-somos" class="about-preview section" data-v-7ce326a3><div class="container" data-v-7ce326a3><div class="section-header" data-v-7ce326a3><div class="header-content" data-v-7ce326a3><span class="section-tag" data-v-7ce326a3>Quem somos</span><h2 data-v-7ce326a3>Cada indiv\xEDduo \xE9 \xFAnico. Nosso cuidado tamb\xE9m.</h2><p data-v-7ce326a3> A <strong data-v-7ce326a3>Autitude Desenvolvimento e A\xE7\xE3o Humana</strong> \xE9 um espa\xE7o especializado no atendimento de crian\xE7as, adolescentes e suas fam\xEDlias, com foco no p\xFAblico neurodivergente. </p><p data-v-7ce326a3> Nossa abordagem \xE9 humanizada, integrativa e baseada em evid\xEAncias cient\xEDficas. </p></div></div><div class="pillars-grid" data-v-7ce326a3><!--[-->`);
      ssrRenderList(pillars, (pillar, index2) => {
        _push(`<div class="pillar-card" style="${ssrRenderStyle({ "--delay": index2 * 0.1 + "s" })}" data-v-7ce326a3><div class="pillar-icon-wrapper" style="${ssrRenderStyle({ background: pillar.color })}" data-v-7ce326a3>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pillar.icon), {
          size: 32,
          class: "icon-primary pillar-icon-inner"
        }, null), _parent);
        _push(`</div><div class="pillar-content" data-v-7ce326a3><h3 data-v-7ce326a3>${ssrInterpolate(pillar.title)}</h3><p data-v-7ce326a3>${ssrInterpolate(pillar.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="services-preview section" data-v-7ce326a3><div class="container" data-v-7ce326a3><div class="section-header" data-v-7ce326a3><div class="header-content" data-v-7ce326a3><span class="section-tag" data-v-7ce326a3>Nossas especialidades</span><h2 data-v-7ce326a3>Um cuidado integrado e interdisciplinar</h2><p data-v-7ce326a3>Uma equipe multidisciplinar trabalhando em conjunto pelo desenvolvimento de cada pessoa.</p></div></div><div class="services-showcase" data-v-7ce326a3><div class="service-cards-grid" data-v-7ce326a3><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: service.name,
          to: "/servicos",
          class: "service-card-mini"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-mini-icon" style="${ssrRenderStyle({ background: service.color })}" data-v-7ce326a3${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(service.icon), {
                size: 24,
                class: "icon-primary mini-icon-shape"
              }, null), _parent2, _scopeId);
              _push2(`</div><div class="card-mini-content" data-v-7ce326a3${_scopeId}><h4 data-v-7ce326a3${_scopeId}>${ssrInterpolate(service.name)}</h4><p data-v-7ce326a3${_scopeId}>${ssrInterpolate(service.shortDesc)}</p></div><div class="card-arrow" data-v-7ce326a3${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "card-mini-icon",
                  style: { background: service.color }
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(service.icon), {
                    size: 24,
                    class: "icon-primary mini-icon-shape"
                  }))
                ], 4),
                createVNode("div", { class: "card-mini-content" }, [
                  createVNode("h4", null, toDisplayString(service.name), 1),
                  createVNode("p", null, toDisplayString(service.shortDesc), 1)
                ]),
                createVNode("div", { class: "card-arrow" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="section-cta" data-v-7ce326a3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-secondary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todas as Especialidades `);
          } else {
            return [
              createTextVNode(" Ver Todas as Especialidades ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="cta-section section" data-v-7ce326a3><div class="container" data-v-7ce326a3><div class="cta-wrapper" data-v-7ce326a3>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "cta-bg-effect",
        colors: ["#6B4FA3", "#8FC176", "#8FB1F0", "#F0C850", "#3D2D5E"],
        rotation: 25,
        speed: 0.15,
        scale: 1.3,
        frequency: 1.2,
        warpStrength: 1,
        mouseInfluence: 0.4,
        parallax: 0.3,
        noise: 0.05,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-7ce326a3><span class="cta-tag" data-v-7ce326a3>Autitude \u2014 Desenvolvimento e A\xE7\xE3o Humana</span><h2 data-v-7ce326a3>Pronto para nos conhecer?</h2><p data-v-7ce326a3>\u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades.</p><div class="cta-contact" data-v-7ce326a3><a href="tel:+5512991968683" class="cta-contact-item" data-v-7ce326a3> \u{1F4F1} (12) 99196-8683 </a><a href="https://www.instagram.com/clinicaautitude" target="_blank" rel="noopener" class="cta-contact-item" data-v-7ce326a3> \u{1F4F7} @clinicaautitude </a><a href="https://wa.me/5512991968683" target="_blank" rel="noopener" class="cta-contact-item" data-v-7ce326a3> \u{1F4AC} WhatsApp </a></div><div class="cta-actions" data-v-7ce326a3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Avalia\xE7\xE3o `);
          } else {
            return [
              createTextVNode(" Agendar Avalia\xE7\xE3o ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-7ce326a3> Falar no WhatsApp </a></div><p class="cta-address" data-v-7ce326a3> \u{1F4CD} Rua Major Jos\xE9 dos Santos Moreira, 328 \u2014 Vila Rica \u2014 Pindamonhangaba/SP </p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ce326a3"]]);

export { index as default };
//# sourceMappingURL=index-DlO-cs8c.mjs.map
