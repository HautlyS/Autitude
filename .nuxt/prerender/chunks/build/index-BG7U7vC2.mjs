import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, defineComponent, useTemplateRef, watch, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
import { Sparkles, Heart, Target, GraduationCap, HandHeart, Home, Stethoscope, Brain, Baby, ClipboardCheck } from 'file:///home/ubuntu/Autitude/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _sfc_main$2 } from './ColorBends-DzA-kp_2.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/destr/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/hookable/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ohash/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/klona/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/scule/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unctx/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/ubuntu/Autitude/node_modules/pathe/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/server.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/devalue/index.js';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/utils.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/three/build/three.module.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Silk",
  __ssrInlineRender: true,
  props: {
    speed: { default: 5 },
    scale: { default: 1 },
    color: { default: "#7B7481" },
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
      }, _attrs))} data-v-c5f54b14></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Silk.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Silk = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c5f54b14"]]);
const whatsappUrl = "https://wa.me/5512991968683";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Autitude - Cl\xEDnica de Terapia Ocupacional",
            description: "Cl\xEDnica especializada em Terapia Ocupacional e Integra\xE7\xE3o Sensorial em Pindamonhangaba-SP.",
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "50"
            },
            areaServed: {
              "@type": "State",
              name: "S\xE3o Paulo"
            },
            serviceType: ["Terapia Ocupacional", "Integra\xE7\xE3o Sensorial", "Estimula\xE7\xE3o Precoce", "ABA"],
            medicalSpecialty: "Pediatric Occupational Therapy",
            knowsAbout: ["Terapia Ocupacional", "Integra\xE7\xE3o Sensorial", "Estimula\xE7\xE3o Precoce", "Desenvolvimento Infantil"]
          })
        }
      ]
    });
    const features = [
      {
        title: "Especializa\xE7\xE3o",
        description: "Equipe com certifica\xE7\xE3o internacional em Integra\xE7\xE3o Sensorial e abordagens baseadas em evid\xEAncias.",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)",
        icon: GraduationCap
      },
      {
        title: "Cuidado Humanizado",
        description: "Atendimento individualizado respeitando o ritmo e as necessidades de cada crian\xE7a e fam\xEDlia.",
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)",
        icon: HandHeart
      },
      {
        title: "Ambiente Acolhedor",
        description: "Espa\xE7o pensado para proporcionar seguran\xE7a, conforto e estimula\xE7\xE3o adequada ao desenvolvimento.",
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)",
        icon: Home
      }
    ];
    const services = [
      { name: "Integra\xE7\xE3o Sensorial", shortDesc: "Processamento sensorial", color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)", icon: Brain },
      { name: "Estimula\xE7\xE3o Precoce", shortDesc: "Primeiros anos de vida", color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)", icon: Baby },
      { name: "Avalia\xE7\xE3o Completa", shortDesc: "Diagn\xF3stico completo", color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)", icon: ClipboardCheck }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-aac8feee><section class="hero" data-v-aac8feee><div class="hero-bg" data-v-aac8feee>`);
      _push(ssrRenderComponent(Silk, {
        class: "silk-bg",
        speed: 5,
        scale: 1,
        color: "#7B7481",
        "noise-intensity": 1.5,
        rotation: 0
      }, null, _parent));
      _push(`<div class="gradient-blob blob-1" data-v-aac8feee></div><div class="gradient-blob blob-2" data-v-aac8feee></div><div class="gradient-blob blob-3" data-v-aac8feee></div></div><div class="container" data-v-aac8feee><div class="hero-wrapper" data-v-aac8feee><div class="hero-content" data-v-aac8feee><div class="badge-wrapper" data-v-aac8feee><span class="hero-badge" data-v-aac8feee><span class="badge-dot" data-v-aac8feee></span> Cl\xEDnica Especializada </span></div><h1 class="hero-title" data-v-aac8feee> Cuidado que <span class="title-highlight" data-v-aac8feee>transforma</span> vidas </h1><p class="hero-subtitle" data-v-aac8feee> Especialistas em Terapia Ocupacional e Integra\xE7\xE3o Sensorial. O cuidado que seu filho merece, com carinho e excel\xEAncia. </p><div class="hero-actions" data-v-aac8feee>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
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
        class: "btn btn-secondary btn-lg"
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
      _push(`</div></div><div class="hero-visual" data-v-aac8feee><div class="visual-card card-1" data-v-aac8feee><div class="card-accent" data-v-aac8feee>`);
      _push(ssrRenderComponent(unref(Sparkles), {
        size: 20,
        class: "icon-primary"
      }, null, _parent));
      _push(`</div><div class="card-text" data-v-aac8feee>Desenvolvimento Integral</div></div><div class="visual-card card-2" data-v-aac8feee><div class="card-accent" data-v-aac8feee>`);
      _push(ssrRenderComponent(unref(Heart), {
        size: 20,
        class: "icon-primary"
      }, null, _parent));
      _push(`</div><div class="card-text" data-v-aac8feee>Cuidado Humanizado</div></div><div class="visual-card card-3" data-v-aac8feee><div class="card-accent" data-v-aac8feee>`);
      _push(ssrRenderComponent(unref(Target), {
        size: 20,
        class: "icon-primary"
      }, null, _parent));
      _push(`</div><div class="card-text" data-v-aac8feee>Tratamento Personalizado</div></div></div></div><div class="hero-stats" data-v-aac8feee><div class="stat-item" data-v-aac8feee><span class="stat-value" data-v-aac8feee>15+</span><span class="stat-label" data-v-aac8feee>Anos de Experi\xEAncia</span></div><div class="stat-divider" data-v-aac8feee></div><div class="stat-item" data-v-aac8feee><span class="stat-value" data-v-aac8feee>Certificada</span><span class="stat-label" data-v-aac8feee>NC University USA</span></div><div class="stat-divider" data-v-aac8feee></div><div class="stat-item" data-v-aac8feee><span class="stat-value" data-v-aac8feee>Pindamonhangaba</span><span class="stat-label" data-v-aac8feee>Localiza\xE7\xE3o</span></div></div></div></section><section id="features" class="features section" data-v-aac8feee><div class="container" data-v-aac8feee><div class="section-header" data-v-aac8feee><div class="header-content" data-v-aac8feee><span class="section-tag" data-v-aac8feee>Por que escolher a Autitude</span><h2 data-v-aac8feee>Um atendimento \xFAnico</h2><p data-v-aac8feee>Combinamos excel\xEAncia t\xE9cnica com humaniza\xE7\xE3o para oferecer o melhor cuidado ao seu filho.</p></div></div><div class="features-grid" data-v-aac8feee><!--[-->`);
      ssrRenderList(features, (feature, index2) => {
        _push(`<div class="feature-card" style="${ssrRenderStyle({ "--delay": index2 * 0.1 + "s" })}" data-v-aac8feee><div class="feature-icon-wrapper" style="${ssrRenderStyle({ background: feature.color })}" data-v-aac8feee>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          size: 32,
          class: "icon-primary feature-icon-inner"
        }, null), _parent);
        _push(`</div><div class="feature-content" data-v-aac8feee><h3 data-v-aac8feee>${ssrInterpolate(feature.title)}</h3><p data-v-aac8feee>${ssrInterpolate(feature.description)}</p></div><div class="feature-hover-overlay" data-v-aac8feee></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="services-preview section" data-v-aac8feee><div class="container" data-v-aac8feee><div class="section-header" data-v-aac8feee><div class="header-content" data-v-aac8feee><span class="section-tag" data-v-aac8feee>Nossos Servi\xE7os</span><h2 data-v-aac8feee>Especialidades</h2></div></div><div class="services-showcase" data-v-aac8feee><div class="service-main" data-v-aac8feee><div class="service-main-content" data-v-aac8feee><div class="service-icon-large" data-v-aac8feee>`);
      _push(ssrRenderComponent(unref(Stethoscope), {
        size: 32,
        class: "icon-primary"
      }, null, _parent));
      _push(`</div><h3 data-v-aac8feee>Terapia Ocupacional</h3><p data-v-aac8feee>Desenvolvemos habilidades motoras, cognitivas e funcionais para que sua crian\xE7a atinja seu m\xE1ximo potencial.</p><ul class="service-list" data-v-aac8feee><li data-v-aac8feee>Motor fino e grosso</li><li data-v-aac8feee>Coordena\xE7\xE3o motora</li><li data-v-aac8feee>Autonomia pessoal</li><li data-v-aac8feee>Atividades de vida di\xE1ria</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver Mais`);
          } else {
            return [
              createTextVNode("Ver Mais")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="service-cards-grid" data-v-aac8feee><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: service.name,
          to: "/servicos",
          class: "service-card-mini"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-mini-icon" style="${ssrRenderStyle({ background: service.color })}" data-v-aac8feee${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(service.icon), {
                size: 24,
                class: "icon-primary mini-icon-shape"
              }, null), _parent2, _scopeId);
              _push2(`</div><div class="card-mini-content" data-v-aac8feee${_scopeId}><h4 data-v-aac8feee${_scopeId}>${ssrInterpolate(service.name)}</h4><p data-v-aac8feee${_scopeId}>${ssrInterpolate(service.shortDesc)}</p></div><div class="card-arrow" data-v-aac8feee${_scopeId}></div>`);
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
      _push(`<!--]--></div></div><div class="section-cta" data-v-aac8feee>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-secondary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todos os Servi\xE7os `);
          } else {
            return [
              createTextVNode(" Ver Todos os Servi\xE7os ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="cta-section section" data-v-aac8feee><div class="container" data-v-aac8feee><div class="cta-wrapper" data-v-aac8feee>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "cta-bg-effect",
        colors: ["#E8E0F5", "#E0F5E8", "#FFE0E8", "#CDBFF0", "#8FD9B6"],
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
      _push(`<div class="cta-content" data-v-aac8feee><span class="cta-tag" data-v-aac8feee>Entre em contato</span><h2 data-v-aac8feee>Pronto para come\xE7ar?</h2><p data-v-aac8feee>Agende uma avalia\xE7\xE3o e descubra como podemos ajudar no desenvolvimento do seu filho.</p><div class="cta-actions" data-v-aac8feee>`);
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
      _push(`<a${ssrRenderAttr("href", whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-aac8feee> Falar no WhatsApp </a></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aac8feee"]]);

export { index as default };
//# sourceMappingURL=index-BG7U7vC2.mjs.map
