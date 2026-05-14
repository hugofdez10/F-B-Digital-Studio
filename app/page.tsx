"use client";

import Image from "next/image";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  CircleDot,
  Code2,
  ExternalLink,
  Globe2,
  Instagram,
  Layers3,
  MapPinned,
  PenLine,
  QrCode,
  SearchCheck,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";

type SectionLabelProps = {
  number: string;
  title: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const revealViewport = { once: true, margin: "0px 0px -12% 0px", amount: 0.2 };
const smoothEase = [0.22, 1, 0.36, 1] as const;

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Packs", href: "#packs" },
  { label: "Contacto", href: "#contacto" },
];

const problems = [
  {
    icon: Globe2,
    title: "Web antigua, lenta o inexistente",
    text: "La experiencia móvil no acompaña a la calidad real del negocio.",
  },
  {
    icon: MapPinned,
    title: "Google Business descuidado",
    text: "Horarios, fotos, reseñas y enlaces no transmiten confianza.",
  },
  {
    icon: Instagram,
    title: "Redes sin coherencia visual",
    text: "Cada punto de contacto parece de una marca distinta.",
  },
  {
    icon: Workflow,
    title: "Contactos sin automatizar",
    text: "Reservas, reseñas y mensajes se gestionan de forma manual.",
  },
];

const services = [
  {
    icon: Layers3,
    title: "Diseño web premium",
    text: "Creamos webs rápidas, modernas y adaptadas a móvil para que tu negocio transmita confianza desde el primer clic.",
  },
  {
    icon: SearchCheck,
    title: "Google Business Profile",
    text: "Optimizamos tu ficha para mejorar horarios, fotos, reseñas, enlaces y visibilidad local.",
  },
  {
    icon: Zap,
    title: "Automatizaciones simples",
    text: "Conectamos formularios, emails, reservas, WhatsApp o flujos internos para reducir tareas repetitivas.",
  },
  {
    icon: QrCode,
    title: "QR, NFC y reseñas",
    text: "Creamos sistemas para facilitar reseñas, cartas digitales, enlaces rápidos y campañas locales.",
  },
  {
    icon: PenLine,
    title: "Identidad visual digital",
    text: "Unificamos la imagen de tu negocio en web, redes y puntos de contacto digitales.",
  },
  {
    icon: BarChart3,
    title: "Mejora continua",
    text: "Te acompañamos con ajustes, optimización y nuevas ideas para seguir creciendo.",
  },
];

const process = [
  {
    title: "Diagnóstico",
    text: "Revisamos tu presencia digital actual y detectamos oportunidades rápidas de mejora.",
  },
  {
    title: "Propuesta",
    text: "Definimos una solución clara: web, Google, automatización, QR/NFC o una combinación.",
  },
  {
    title: "Diseño y construcción",
    text: "Creamos la solución con una estética profesional, responsive y adaptada a tu negocio.",
  },
  {
    title: "Lanzamiento",
    text: "Publicamos, conectamos herramientas y dejamos todo listo para funcionar.",
  },
  {
    title: "Optimización",
    text: "Medimos, ajustamos y mejoramos lo necesario para que la presencia digital siga creciendo.",
  },
];

const packs = [
  {
    name: "Pack Presencia",
    price: "desde 99€",
    description: "Para negocios que necesitan ordenar y mejorar su imagen digital básica.",
    cta: "Empezar con Presencia",
    features: [
      "Revisión de presencia online",
      "Optimización básica de Google Business",
      "Enlaces de contacto",
      "Recomendaciones visuales",
      "Mini guía de mejora",
    ],
  },
  {
    name: "Pack Web",
    price: "desde 299€",
    description:
      "Para negocios que quieren una web moderna, clara y preparada para convertir visitas en contactos.",
    cta: "Quiero una web",
    featured: true,
    features: [
      "Landing page profesional",
      "Diseño responsive",
      "Copy básico incluido",
      "Botones de contacto",
      "SEO básico",
      "Integración con WhatsApp o email",
    ],
  },
  {
    name: "Pack Completo",
    price: "desde 549€",
    description: "Para negocios que quieren una presencia digital más premium y conectada.",
    cta: "Solicitar pack completo",
    features: [
      "Web completa",
      "Google Business optimizado",
      "Automatización básica",
      "Sistema QR/NFC",
      "Diseño visual coherente",
      "Soporte inicial",
    ],
  },
];

const why = [
  {
    title: "No usamos plantillas sin alma",
    text: "Cada negocio tiene una forma distinta de vender, atender y comunicar. La solución debe adaptarse a eso.",
  },
  {
    title: "Implementamos, no solo recomendamos",
    text: "No nos quedamos en ideas. Diseñamos, montamos, conectamos y dejamos funcionando.",
  },
  {
    title: "Pensado para negocios locales",
    text: "Creamos soluciones prácticas para negocios que necesitan resultados claros, no complicaciones técnicas.",
  },
  {
    title: "Diseño premium, tecnología simple",
    text: "El objetivo es que tu negocio se vea mejor y trabaje mejor, sin depender de sistemas difíciles.",
  },
];

const team = [
  {
    name: "Hugo Fernández",
    role: "Ingeniería informática · Desarrollo web",
    image: "/team/hugo-fernandez-web.jpg",
    origin: "Santanderino",
    description:
      "Se encarga de la parte técnica: código, desarrollo web y creación de soluciones digitales modernas, rápidas y bien construidas.",
    icon: Code2,
  },
  {
    name: "Mateo Blanco",
    role: "ADE · Estrategia comercial",
    image: "/team/mateo-web.jpg",
    origin: "Valenciano",
    description:
      "Lidera la parte comercial: contacto con clientes, detección de necesidades y puesta en común de ideas para convertirlas en soluciones claras.",
    icon: Bot,
  },
];

function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-cyanSoft/80">
      <span>{number}</span>
      <span className="h-px w-12 bg-white/15" />
      <span>{title}</span>
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={revealViewport}
      variants={fadeUp}
      transition={{ duration: 0.58, ease: smoothEase }}
      className={`motion-safe:will-change-transform ${className}`}
    >
      {children}
    </m.div>
  );
}

function PrimaryButton({ children, href = "#contacto" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-porcelain px-6 text-sm font-semibold text-ink shadow-[0_0_44px_rgba(112,231,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(112,231,255,0.28)]"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-porcelain backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyanSoft/35 hover:bg-white/[0.07]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/70 backdrop-blur-xl">
      <div className="container-premium flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="F&B Digital Studio">
          <Image
            src="/icono.png"
            alt="F&B"
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
            priority
          />
          <div className="leading-none">
            <div className="text-sm font-semibold tracking-[0.22em] text-white">F&B</div>
            <div className="mt-1 text-xs text-muted">Digital Studio</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:border-cyanSoft/40 hover:bg-white/[0.08]"
        >
          Agendar llamada
        </a>
      </div>
    </header>
  );
}

function HeroFlowPanel() {
  const nodes = [
    { label: "Web", icon: Layers3 },
    { label: "Google Business", icon: MapPinned },
    { label: "Automatización", icon: Workflow },
    { label: "QR / NFC", icon: QrCode },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.18, duration: 0.62, ease: smoothEase }}
      className="panel relative overflow-hidden rounded-[2rem] p-5 will-change-transform sm:p-6"
    >
      <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-24 w-24 rounded-full bg-violetSoft/15 blur-3xl" />

      <div className="relative">
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">automation layer</p>
            <p className="mt-2 text-lg font-semibold text-white">Sistema conectado</p>
          </div>
          <div className="rounded-full border border-cyanSoft/25 bg-cyanSoft/10 px-3 py-1 text-xs text-cyanSoft">
            live
          </div>
        </div>

        <div className="grid gap-4">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="relative">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                    <Icon className="h-5 w-5 text-cyanSoft" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{node.label}</p>
                    <p className="mt-1 text-xs text-muted">
                      {index === 0 && "Primera impresión clara"}
                      {index === 1 && "Visibilidad local ordenada"}
                      {index === 2 && "Menos tareas repetitivas"}
                      {index === 3 && "Acciones rápidas en local"}
                    </p>
                  </div>
                  <CircleDot className="h-4 w-4 text-violetSoft" />
                </div>
                {index < nodes.length - 1 && (
                  <div className="ml-[2.15rem] h-4 w-px bg-gradient-to-b from-cyanSoft/40 to-violetSoft/20" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-ink/60 p-4">
          <div className="flex items-center gap-3 text-sm text-white">
            <Sparkles className="h-4 w-4 text-cyanSoft" />
            Más confianza, más contactos, menos fricción.
          </div>
        </div>
      </div>
    </m.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violetSoft/16 blur-[110px]" />

      <div className="container-premium relative grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <m.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >
          <m.div
            variants={fadeUp}
            className="mb-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyanSoft/90 backdrop-blur"
          >
            estudio digital · automatización · presencia online
          </m.div>

          <m.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
          >
            Presencia digital premium para negocios locales.
          </m.h1>

          <m.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            Diseñamos webs modernas, optimizamos tu presencia online y automatizamos procesos para que tu negocio consiga más visibilidad, confianza y clientes.
          </m.p>

          <m.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Solicitar reunión</PrimaryButton>
            <SecondaryButton href="#servicios">Ver servicios</SecondaryButton>
          </m.div>

          <m.div
            variants={fadeUp}
            className="mt-12 grid max-w-2xl gap-4 border-t border-white/10 pt-6 sm:grid-cols-[1fr_auto]"
          >
            <p className="text-sm leading-6 text-muted">
              Para restaurantes, cafeterías, comercios y marcas locales que quieren verse mejor online.
            </p>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
              <span className="h-2 w-2 rounded-full bg-cyanSoft shadow-[0_0_20px_rgba(112,231,255,0.8)]" />
              local business
            </div>
          </m.div>
        </m.div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroFlowPanel />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionLabel number="01" title="El problema" />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Tu negocio puede estar perdiendo clientes antes de que lleguen a conocerte.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Hoy la primera impresión ocurre en Google, en Instagram o en una web vista desde el móvil. Si esa presencia no transmite confianza, muchos clientes simplemente eligen otra opción.
            </p>
          </div>
        </Reveal>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={stagger}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <m.div
                key={problem.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: smoothEase }}
                className="panel rounded-3xl p-6 transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.055] motion-safe:will-change-transform"
              >
                <Icon className="h-5 w-5 text-cyanSoft" />
                <h3 className="mt-8 text-lg font-semibold text-white">{problem.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{problem.text}</p>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="py-24 sm:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionLabel number="02" title="Qué hacemos" />
          <div className="max-w-4xl">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Diseño, presencia digital y automatización para que tu negocio trabaje mejor.
            </h2>
          </div>
        </Reveal>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <m.article
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: smoothEase }}
                className="group panel rounded-3xl p-7 transition-colors duration-300 hover:border-cyanSoft/25 hover:bg-white/[0.055] motion-safe:will-change-transform"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045]">
                    <Icon className="h-5 w-5 text-cyanSoft" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-white/30 transition group-hover:text-cyanSoft" />
                </div>
                <h3 className="mt-10 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{service.text}</p>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

function FlowColumn({
  label,
  title,
  items,
  active,
}: {
  label: string;
  title: string;
  items: string[];
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-6 ${
        active
          ? "border-cyanSoft/30 bg-cyanSoft/[0.06] shadow-glow"
          : "border-white/10 bg-white/[0.035]"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-8 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft/80" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionLabel number="03" title="Cómo opera" />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Una capa digital conectada a lo que ya usa tu negocio.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Ordenamos los puntos de entrada, conectamos acciones simples y convertimos visitas en oportunidades reales.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="panel relative overflow-hidden rounded-[2rem] p-5 sm:p-8">
            <div className="absolute inset-x-12 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyanSoft/35 to-transparent lg:block" />
            <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] lg:items-center">
              <FlowColumn
                label="input"
                title="Clientes"
                items={["Google", "Instagram", "WhatsApp", "Web"]}
              />
              <ArrowRight className="mx-auto hidden h-5 w-5 text-cyanSoft/70 lg:block" />
              <FlowColumn
                label="digital studio"
                title="F&B Digital Studio"
                items={["Web", "Formularios", "Automatización", "QR/NFC"]}
                active
              />
              <ArrowRight className="mx-auto hidden h-5 w-5 text-cyanSoft/70 lg:block" />
              <FlowColumn
                label="output"
                title="Resultados"
                items={["Más contactos", "Más reseñas", "Mejor imagen", "Menos tareas manuales"]}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proceso" className="py-24 sm:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionLabel number="04" title="Proceso" />
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
            Un proceso simple, claro y sin complicaciones.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5">
          {process.map((step, index) => (
            <Reveal key={step.title}>
              <div className="group grid gap-5 border-t border-white/10 py-8 md:grid-cols-[160px_1fr] md:gap-10">
                <div className="text-6xl font-semibold leading-none text-white/[0.08] transition group-hover:text-cyanSoft/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="grid gap-3 md:grid-cols-[0.55fr_1fr] md:items-start">
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="max-w-2xl text-base leading-7 text-muted">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="packs" className="py-24 sm:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionLabel number="05" title="Packs" />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Soluciones claras para empezar sin complicarte.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Elige una base y la adaptamos a tu negocio. Sin humo, sin sistemas difíciles de mantener.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {packs.map((pack) => (
            <Reveal key={pack.name}>
              <m.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22, ease: smoothEase }}
                className={`relative h-full rounded-[2rem] border p-7 transition-colors duration-300 motion-safe:will-change-transform ${
                  pack.featured
                    ? "border-cyanSoft/40 bg-white/[0.07] shadow-[0_0_80px_rgba(76,141,255,0.18)]"
                    : "border-white/10 bg-white/[0.035] hover:border-white/18"
                }`}
              >
                {pack.featured && (
                  <div className="absolute right-6 top-6 rounded-full border border-cyanSoft/30 bg-cyanSoft/10 px-3 py-1 text-xs text-cyanSoft">
                    recomendado
                  </div>
                )}
                <p className="text-sm font-medium text-muted">{pack.name}</p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.02em] text-white">
                  {pack.price}
                </h3>
                <p className="mt-5 min-h-20 text-sm leading-6 text-muted">{pack.description}</p>

                <div className="mt-8 grid gap-3">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-white/78">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyanSoft" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className={`mt-9 inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition ${
                    pack.featured
                      ? "bg-porcelain text-ink hover:-translate-y-0.5"
                      : "border border-white/10 bg-white/[0.04] text-white hover:border-cyanSoft/35 hover:bg-white/[0.08]"
                  }`}
                >
                  {pack.cta}
                </a>
              </m.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-premium">
        <Reveal>
          <div className="border-y border-white/10 py-16 sm:py-20">
            <SectionLabel number="06" title="Manifiesto" />
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-6xl">
                No hacemos webs por hacer webs. Creamos presencia digital que se nota.
              </h2>
              <div>
                <p className="text-lg leading-8 text-muted">
                  Una web bonita no sirve de mucho si no transmite confianza, si no facilita el contacto o si no ayuda al negocio en su día a día. En F&B Digital Studio diseñamos soluciones digitales simples, cuidadas y útiles: tecnología sin ruido, automatización sin complicaciones y diseño con intención.
                </p>
                <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-xl font-medium leading-8 text-white">
                  Menos herramientas sueltas. Más sistemas digitales que trabajan juntos.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-premium">
        <Reveal>
          <SectionLabel number="07" title="Por qué nosotros" />
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
            Boutique, cercano y orientado a negocios reales.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {why.map((item, index) => (
            <Reveal key={item.title}>
              <div className="panel h-full rounded-3xl p-7">
                <div className="mb-10 flex items-center justify-between">
                  <Star className="h-5 w-5 text-violetSoft" />
                  <span className="text-xs uppercase tracking-[0.22em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[80px]" />
      <div className="container-premium relative">
        <Reveal>
          <SectionLabel number="08" title="Quiénes somos" />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Un proyecto que nació lejos de casa y creció con una idea clara: usar la IA para hacer más simple lo digital.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Nos conocimos en Canadá durante un programa de intercambio. Años después, mantuvimos la relación, seguimos aprendiendo y, con los conocimientos adquiridos en la universidad, decidimos empezar F&B Digital Studio.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_0_54px_rgba(45,212,191,0.045)]">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-200/80">
                  origen · criterio · ejecución
                </p>
                <p className="mt-8 max-w-3xl text-2xl font-medium leading-snug tracking-[-0.02em] text-white sm:text-3xl">
                  F&B Digital Studio nace de una relación construida con el tiempo y de una visión compartida: aplicar tecnología e inteligencia artificial con criterio, sin ruido y con impacto real.
                </p>
                <div className="mt-9 grid gap-6 text-base leading-7 text-muted md:grid-cols-2">
                  <p>
                    Nos conocimos en Canadá durante un programa de intercambio. Años después, seguimos en contacto y encontramos una oportunidad clara: unir formación, experiencia y visión digital para crear soluciones útiles para negocios locales.
                  </p>
                  <p>
                    Con raíces en Santander y Valencia, combinamos dos perfiles complementarios. Hugo, ingeniero informático, lidera el desarrollo web y la parte técnica. Mateo, formado en ADE, se centra en la relación con clientes, la lectura comercial del negocio y la definición de ideas que merecen convertirse en sistemas.
                  </p>
                </div>
              </div>

              <div className="grid divide-y divide-white/10">
                {[
                  ["Canadá", "El punto de partida: una experiencia internacional que nos conectó."],
                  ["IA aplicada", "Automatización y tecnología pensadas para ahorrar tiempo, no para complicar."],
                  ["Negocio local", "Diseño, web y presencia digital orientados a confianza, contacto y claridad."],
                ].map(([title, text]) => (
                  <div key={title} className="p-7 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/70">
                      {title}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/68">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {team.map((person) => {
            const Icon = person.icon;

            return (
              <Reveal key={person.name}>
                <m.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.24, ease: smoothEase }}
                  className="group relative isolate aspect-[4/5] overflow-hidden rounded-3xl border border-emerald-400/25 bg-black shadow-[0_0_44px_rgba(45,212,191,0.065)] ring-1 ring-white/[0.035] transition-colors duration-300 hover:border-emerald-300/45 hover:shadow-[0_0_62px_rgba(45,212,191,0.1)] motion-safe:will-change-transform"
                >
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    quality={100}
                    sizes="(min-width: 1280px) 584px, (min-width: 1024px) 46vw, 100vw"
                    className="object-cover object-center grayscale contrast-110 brightness-[0.94] transition-transform duration-500 ease-out [backface-visibility:hidden] group-hover:scale-[1.012]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.34)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.02)_36%,rgba(0,0,0,0.72)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(45,212,191,0.1),transparent_22rem)] opacity-35 transition-opacity duration-500 group-hover:opacity-45" />
                  <div className="absolute inset-0 shadow-[inset_0_0_110px_rgba(0,0,0,0.62)]" />

                  <div className="absolute left-7 top-7 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-black/45 text-emerald-300 shadow-[0_0_24px_rgba(45,212,191,0.1)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="mb-5 h-px w-full bg-gradient-to-r from-emerald-300/55 via-white/10 to-transparent" />
                    <h3 className="font-serif text-4xl font-light italic tracking-[-0.03em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)] sm:text-5xl">
                      {person.name}
                    </h3>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/90">
                      {person.role}
                    </p>
                    <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                      {person.origin}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                      {person.description}
                    </p>
                  </div>
                </m.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[140px]" />
      <div className="container-premium relative">
        <Reveal>
          <div className="panel overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.26em] text-cyanSoft">
                  digital studio · local growth
                </p>
                <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-6xl">
                  Haz que tu negocio se vea tan profesional online como lo es en persona.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                  Cuéntanos qué necesitas y te proponemos una solución digital clara, moderna y adaptada a tu negocio.
                </p>
              </div>

              <div className="lg:justify-self-end">
                <div className="flex flex-col gap-3">
                  <PrimaryButton>Agendar llamada</PrimaryButton>
                  <SecondaryButton href="https://wa.me/">Contactar por WhatsApp</SecondaryButton>
                </div>
                <p className="mt-5 text-sm text-muted">Primera conversación sin compromiso.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-premium">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/logo-largo.png"
              alt="F&B Digital Studio"
              width={220}
              height={80}
              className="h-auto w-48"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Presencia digital premium para negocios locales.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navegación</p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-muted hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contacto</p>
            <div className="mt-5 grid gap-3 text-sm text-muted">
              <a href="mailto:hola@fbdigitalstudio.com" className="hover:text-white">
                hola@fbdigitalstudio.com
              </a>
              <a href="https://instagram.com/fbdigitalstudio" className="hover:text-white">
                @fbdigitalstudio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 F&B Digital Studio. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Aviso legal</a>
            <a href="#" className="hover:text-white">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.58, ease: smoothEase }}>
        <main className="min-h-screen overflow-hidden">
          <Header />
          <Hero />
          <ProblemSection />
          <ServicesSection />
          <FlowSection />
          <ProcessSection />
          <PricingSection />
          <ManifestoSection />
          <WhySection />
          <TeamSection />
          <CTASection />
          <Footer />
        </main>
      </MotionConfig>
    </LazyMotion>
  );
}
