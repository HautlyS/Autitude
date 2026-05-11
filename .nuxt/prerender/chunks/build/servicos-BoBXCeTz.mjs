import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, defineComponent, useTemplateRef, ref, watch, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderAttr } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
import { Stethoscope, Brain, Target, Baby, ClipboardCheck } from 'file:///home/ubuntu/Autitude/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "Squares",
  __ssrInlineRender: true,
  props: {
    direction: { default: "right" },
    speed: { default: 1 },
    borderColor: { default: "#999" },
    squareSize: { default: 40 },
    hoverFillColor: { default: "#222" }
  },
  setup(__props) {
    const props = __props;
    const canvasRef = useTemplateRef("canvasRef");
    const requestRef = ref(null);
    const numSquaresX = ref(0);
    const numSquaresY = ref(0);
    const gridOffset = ref({ x: 0, y: 0 });
    const hoveredSquareRef = ref(null);
    let ctx = null;
    const resizeCanvas = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.value = Math.ceil(canvas.width / props.squareSize) + 1;
      numSquaresY.value = Math.ceil(canvas.height / props.squareSize) + 1;
    };
    const drawGrid = () => {
      const canvas = canvasRef.value;
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
      const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;
      for (let x = startX; x < canvas.width + props.squareSize; x += props.squareSize) {
        for (let y = startY; y < canvas.height + props.squareSize; y += props.squareSize) {
          const squareX = x - gridOffset.value.x % props.squareSize;
          const squareY = y - gridOffset.value.y % props.squareSize;
          if (hoveredSquareRef.value && Math.floor((x - startX) / props.squareSize) === hoveredSquareRef.value.x && Math.floor((y - startY) / props.squareSize) === hoveredSquareRef.value.y) {
            ctx.fillStyle = props.hoverFillColor;
            ctx.fillRect(squareX, squareY, props.squareSize, props.squareSize);
          }
          ctx.strokeStyle = props.borderColor;
          ctx.strokeRect(squareX, squareY, props.squareSize, props.squareSize);
        }
      }
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "#0b0b0b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const updateAnimation = () => {
      const effectiveSpeed = Math.max(props.speed, 0.1);
      switch (props.direction) {
        case "right":
          gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "left":
          gridOffset.value.x = (gridOffset.value.x + effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "up":
          gridOffset.value.y = (gridOffset.value.y + effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "down":
          gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "diagonal":
          gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize) % props.squareSize;
          gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize) % props.squareSize;
          break;
      }
      drawGrid();
      requestRef.value = requestAnimationFrame(updateAnimation);
    };
    const handleMouseMove = (event) => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
      const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;
      const hoveredSquareX = Math.floor((mouseX + gridOffset.value.x - startX) / props.squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.value.y - startY) / props.squareSize);
      if (!hoveredSquareRef.value || hoveredSquareRef.value.x !== hoveredSquareX || hoveredSquareRef.value.y !== hoveredSquareY) {
        hoveredSquareRef.value = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };
    const handleMouseLeave = () => {
      hoveredSquareRef.value = null;
    };
    const initializeCanvas = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      ctx = canvas.getContext("2d");
      resizeCanvas();
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      (void 0).addEventListener("resize", resizeCanvas);
      requestRef.value = requestAnimationFrame(updateAnimation);
    };
    const cleanup = () => {
      const canvas = canvasRef.value;
      if (requestRef.value) {
        cancelAnimationFrame(requestRef.value);
        requestRef.value = null;
      }
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      (void 0).removeEventListener("resize", resizeCanvas);
    };
    watch(
      [
        () => props.direction,
        () => props.speed,
        () => props.borderColor,
        () => props.hoverFillColor,
        () => props.squareSize
      ],
      () => {
        cleanup();
        initializeCanvas();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvasRef",
        ref: canvasRef,
        class: "w-full h-full border-none block"
      }, _attrs))}></canvas>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Squares.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const whatsappUrl = "https://wa.me/5512991968683";
const _sfc_main = {
  __name: "servicos",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Servi\xE7os | Autitude - Terapia Ocupacional e Integra\xE7\xE3o Sensorial",
      meta: [
        { name: "description", content: "Servi\xE7os especializados: Terapia Ocupacional, Integra\xE7\xE3o Sensorial, ABA, Estimula\xE7\xE3o Precoce em Pindamonhangaba-SP." }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Servi\xE7os - Autitude",
            description: "Servi\xE7os especializados: Terapia Ocupacional, Integra\xE7\xE3o Sensorial, ABA, Estimula\xE7\xE3o Precoce em Pindamonhangaba-SP.",
            url: "https://hautlys.github.io/Autitude/servicos",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Servi\xE7os",
              provides: [
                "Terapia Ocupacional",
                "Integra\xE7\xE3o Sensorial",
                "ABA - An\xE1lise do Comportamento Aplicada",
                "Estimula\xE7\xE3o Precoce",
                "Avalia\xE7\xE3o Comportamental"
              ]
            }
          })
        }
      ]
    });
    const services = [
      {
        title: "Terapia Ocupacional",
        description: "Interven\xE7\xF5es para desenvolver habilidades motoras, cognitivas e funcionais.",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)",
        icon: Stethoscope,
        items: ["Motor fino e grosso", "Coordena\xE7\xE3o motora", "Autonomia pessoal", "Atividades de vida di\xE1ria"]
      },
      {
        title: "Integra\xE7\xE3o Sensorial",
        description: "Abordagem especializada para organizar o processamento sensorial. Desenvolvida pela Dra. Jean Ayres, trabalha as 8 sensa\xE7\xF5es do corpo.",
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)",
        icon: Brain,
        items: [
          "Diagn\xF3stico sensorial completo",
          "Terapia de Integra\xE7\xE3o Sensorial (SIT)",
          "Sala Snoezelen / Sala Sensorial",
          "Programa de interven\xE7\xE3o individualizado",
          "Orienta\xE7\xE3o para escola e fam\xEDlia",
          "Estrat\xE9gias de regula\xE7\xE3o sensorial"
        ]
      },
      {
        title: "ABA (An\xE1lise do Comportamento Aplicada)",
        description: "Metodologia cient\xEDfica baseada em princ\xEDpios do comportamento para desenvolver habilidades sociais, comunicativas e comportamentais.",
        color: "linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)",
        icon: Target,
        items: [
          "Avalia\xE7\xE3o funcional do comportamento",
          "Interven\xE7\xE3o comportamental individualizada",
          "Ensino estruturado de habilidades",
          "Redu\xE7\xE3o de comportamentos problem\xE1ticos",
          "Acompanhamento e orienta\xE7\xE3o familiar",
          "Registro e an\xE1lise de dados"
        ]
      },
      {
        title: "Estimula\xE7\xE3o Precoce",
        description: "Interven\xE7\xF5es para os primeiros anos de vida.",
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)",
        icon: Baby,
        items: ["Avalia\xE7\xE3o do desenvolvimento", "Programa de estimula\xE7\xE3o", "Suporte aos pais", "Monitoramento"]
      },
      {
        title: "Avalia\xE7\xE3o Comportamental",
        description: "Processos avaliativos para compreender o perfil funcional.",
        color: "linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)",
        icon: ClipboardCheck,
        items: ["Avalia\xE7\xE3o sensorial", "Perfil motor", "Escala de independ\xEAncia", "Relat\xF3rio completo"]
      }
    ];
    const processSteps = [
      { title: "Contato", description: "Voc\xEA entra em contato pelo WhatsApp ou formul\xE1rio." },
      { title: "Agendamento", description: "Marcamos uma avalia\xE7\xE3o inicial." },
      { title: "Avalia\xE7\xE3o", description: "Realizamos avalia\xE7\xE3o completa do desenvolvimento." },
      { title: "Plano", description: "Elaboramos um plano personalizado." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))} data-v-59b4fc67><section class="hero-section" data-v-59b4fc67><div class="hero-bg-grid" data-v-59b4fc67>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        direction: "diagonal",
        speed: 1,
        "square-size": 40,
        "border-color": "#999",
        "hover-fill-color": "#222"
      }, null, _parent));
      _push(`</div><div class="container" data-v-59b4fc67><div class="section-header" data-v-59b4fc67><span class="section-tag" data-v-59b4fc67>Nossos Servi\xE7os</span><h1 data-v-59b4fc67>Tratamentos especializados</h1><p data-v-59b4fc67>Oferecemos interven\xE7\xF5es especializadas para o desenvolvimento integral da crian\xE7a.</p></div><div class="services-showcase" data-v-59b4fc67><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div class="service-card-main" data-v-59b4fc67><div class="card-number" data-v-59b4fc67>${ssrInterpolate(index + 1)}</div><div class="card-content" data-v-59b4fc67><div class="service-icon-large" style="${ssrRenderStyle({ background: service.color })}" data-v-59b4fc67>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
          size: 28,
          class: "icon-primary icon-inner"
        }, null), _parent);
        _push(`</div><div class="service-text" data-v-59b4fc67><h3 data-v-59b4fc67>${ssrInterpolate(service.title)}</h3><p data-v-59b4fc67>${ssrInterpolate(service.description)}</p><ul class="service-list" data-v-59b4fc67><!--[-->`);
        ssrRenderList(service.items, (item) => {
          _push(`<li data-v-59b4fc67>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="process-section section" data-v-59b4fc67><div class="container" data-v-59b4fc67><div class="section-header" data-v-59b4fc67><div class="header-content" data-v-59b4fc67><span class="section-tag" data-v-59b4fc67>Como funciona</span><h2 data-v-59b4fc67>Nosso Processo</h2></div></div><div class="process-timeline" data-v-59b4fc67><!--[-->`);
      ssrRenderList(processSteps, (step, index) => {
        _push(`<div class="process-step" data-v-59b4fc67><div class="step-marker" data-v-59b4fc67>${ssrInterpolate(index + 1)}</div><div class="step-content" data-v-59b4fc67><h4 data-v-59b4fc67>${ssrInterpolate(step.title)}</h4><p data-v-59b4fc67>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section section" data-v-59b4fc67><div class="container" data-v-59b4fc67><div class="cta-card" data-v-59b4fc67>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "cta-bg-effect",
        colors: ["#CDBFF0", "#FFD4C4", "#C4EAD8", "#7B5CBF", "#F2A07B"],
        rotation: 28,
        speed: 0.16,
        scale: 1.3,
        frequency: 1.35,
        warpStrength: 1.05,
        mouseInfluence: 0.45,
        parallax: 0.35,
        noise: 0.055,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-59b4fc67><h2 data-v-59b4fc67>Agende uma avalia\xE7\xE3o</h2><p data-v-59b4fc67>Nossa equipe est\xE1 pronta para entender as necessidades do seu filho.</p><div class="cta-actions" data-v-59b4fc67>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Agora `);
          } else {
            return [
              createTextVNode(" Agendar Agora ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-59b4fc67> Falar no WhatsApp </a></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const servicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59b4fc67"]]);

export { servicos as default };
//# sourceMappingURL=servicos-BoBXCeTz.mjs.map
