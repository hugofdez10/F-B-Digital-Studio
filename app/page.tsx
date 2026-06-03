"use client";

import Image from "next/image";
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Brush,
  Check,
  Code2,
  Compass,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  MousePointer2,
  SearchCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";

type IconType = ComponentType<{ className?: string }>;

const smoothEase = [0.22, 1, 0.36, 1] as const;
const revealViewport = { once: true, margin: "0px 0px -12% 0px", amount: 0.18 };

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const navItems = [
  { label: "Proyectos", href: "#work" },
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Sobre nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const services: Array<{
  title: string;
  text: string;
  icon: IconType;
}> = [
  {
    title: "Diseño web",
    text: "Webs premium, rápidas y orientadas a conversión, con una primera impresión cuidada al detalle.",
    icon: MousePointer2,
  },
  {
    title: "Branding",
    text: "Identidades visuales, tono, sistemas y activos digitales para que tu marca sea reconocible.",
    icon: Brush,
  },
  {
    title: "Ecommerce",
    text: "Tiendas online diseñadas para generar confianza, vender mejor y simplificar la compra.",
    icon: ShoppingBag,
  },
  {
    title: "SEO y visibilidad",
    text: "Bases técnicas, estructura de búsqueda y señales de contenido para que te encuentre quien debe encontrarte.",
    icon: SearchCheck,
  },
  {
    title: "Estrategia digital",
    text: "Dirección clara para marcas que necesitan mejor posicionamiento, mensajes y prioridades de crecimiento.",
    icon: Compass,
  },
  {
    title: "Sistemas de automatización",
    text: "Flujos ligeros que conectan formularios, CRM, email, datos y operaciones sin añadir fricción.",
    icon: Workflow,
  },
  {
    title: "Integraciones con IA",
    text: "Capas de IA útiles para contenido, herramientas internas, atención al cliente y procesos más inteligentes.",
    icon: BrainCircuit,
  },
];

const projects = [
  {
    title: "Web premium para restaurante",
    category: "Hostelería / Diseño web",
    text: "Una experiencia cinematográfica con reservas como prioridad, carta editorial y navegación móvil refinada.",
    result: "+38% intención de reserva",
    tone: "from-[#f8f5ed] via-[#1b1b1f] to-[#4c8dff]",
  },
  {
    title: "Ecommerce de moda",
    category: "Retail / Ecommerce",
    text: "Una tienda minimalista con ritmo de producto, navegación rápida y un checkout que transmite confianza.",
    result: "2,4x más rapidez al descubrir producto",
    tone: "from-[#f0f7ff] via-[#111827] to-[#8f6bff]",
  },
  {
    title: "Rebranding de estudio fitness",
    category: "Branding / Identidad",
    text: "Un sistema visual con carácter para pasar de gimnasio local a marca lifestyle con presencia propia.",
    result: "+52% solicitudes de clase de prueba",
    tone: "from-[#70e7ff] via-[#0f172a] to-[#f4f7fb]",
  },
  {
    title: "Plataforma digital inmobiliaria",
    category: "Inmobiliaria / Plataforma",
    text: "Una plataforma premium con búsqueda guiada, captación de leads y presentación cuidada de inmuebles.",
    result: "+31% leads cualificados",
    tone: "from-[#f4f7fb] via-[#111113] to-[#4c8dff]",
  },
  {
    title: "Dashboard SaaS",
    category: "SaaS / Producto digital",
    text: "Una experiencia de dashboard moderna para convertir datos complejos en decisiones claras y accionables.",
    result: "18% menos tiempo por tarea",
    tone: "from-[#8f6bff] via-[#07111f] to-[#70e7ff]",
  },
];

const process = [
  {
    title: "Descubrimiento",
    text: "Entendemos el negocio, los objetivos, el público y las oportunidades antes de diseñar nada.",
  },
  {
    title: "Estrategia",
    text: "Definimos la estructura, el mensaje, la dirección visual y las prioridades digitales de la marca.",
  },
  {
    title: "Diseño",
    text: "Creamos una experiencia visual premium con jerarquía clara, intención de conversión y detalles memorables.",
  },
  {
    title: "Desarrollo",
    text: "Construimos una web rápida, responsive y escalable, con implementación limpia e interacciones cuidadas.",
  },
  {
    title: "Lanzamiento y crecimiento",
    text: "Publicamos, medimos y mejoramos para que la presencia digital siga ganando fuerza después del lanzamiento.",
  },
];

const metrics = [
  ["7", "servicios clave"],
  ["01", "proceso estratégico"],
  ["100%", "diseño responsive"],
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={revealViewport}
      variants={fadeUp}
      transition={{ duration: 0.62, ease: smoothEase }}
      className={`motion-safe:will-change-transform ${className}`}
    >
      {children}
    </m.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <p className="section-eyebrow">{eyebrow}</p>
        <div>
          <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {text ? <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{text}</p> : null}
        </div>
      </div>
    </Reveal>
  );
}

function PrimaryButton({
  children,
  href = "#contact",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-ink shadow-[0_0_48px_rgba(112,231,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyanSoft hover:shadow-[0_0_70px_rgba(112,231,255,0.28)] focus:outline-none focus:ring-2 focus:ring-cyanSoft/70 focus:ring-offset-2 focus:ring-offset-ink"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.035] px-6 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.28] hover:bg-white/[0.075] focus:outline-none focus:ring-2 focus:ring-white/[0.35] focus:ring-offset-2 focus:ring-offset-ink"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/[0.72] backdrop-blur-2xl">
      <div className="container-premium flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Inicio de F&B Digital Studio">
          <Image
            src="/icono.png"
            alt=""
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/[0.12]"
            priority
          />
          <div className="leading-none">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">
              F&B
            </span>
            <span className="mt-1 block text-xs text-muted">Digital Studio</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.045] px-4 text-sm font-semibold text-white transition hover:border-cyanSoft/[0.35] hover:bg-white/[0.08]"
          >
            Reserva una llamada
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.045] text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="border-t border-white/10 bg-ink/[0.94] px-6 pb-6 pt-3 backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-2" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-2 py-3 text-lg font-medium text-white/[0.86] transition hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              ))}
              <PrimaryButton href="#contact">Reserva una llamada</PrimaryButton>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroVisual() {
  const rows = [
    ["Sistema de marca", "92"],
    ["Conversión web", "88"],
    ["Capa de automatización", "76"],
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.16, duration: 0.7, ease: smoothEase }}
      className="relative"
    >
      <div className="absolute -inset-4 border border-white/[0.06] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_36%,rgba(112,231,255,0.07))] blur-2xl" />
      <div className="panel relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
        <div className="grid gap-4 border-b border-white/10 pb-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyanSoft">sistema operativo digital</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Auditoría de presencia digital</h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft" />
            concepto activo
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          {rows.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-black/[0.24] p-4">
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-white">{label}</span>
                <span className="text-xs text-muted">{value}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <m.div
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ delay: 0.5, duration: 0.9, ease: smoothEase }}
                  className="h-full rounded-full bg-gradient-to-r from-cyanSoft via-white to-violetSoft"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <Sparkles className="h-5 w-5 text-cyanSoft" />
            <p className="mt-6 text-3xl font-semibold text-white">4.8s</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">claridad de decisión</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <Target className="h-5 w-5 text-violetSoft" />
            <p className="mt-6 text-3xl font-semibold text-white">+64%</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">calidad de leads</p>
          </div>
        </div>
      </div>
    </m.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40 lg:min-h-screen lg:pt-48">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(76,141,255,0.16),transparent_30%,rgba(143,107,255,0.13)_58%,transparent_78%)]" />
      <div className="container-premium relative grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <m.div initial="hidden" animate="visible" variants={stagger} className="max-w-6xl">
          <m.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyanSoft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft" />
            estudio digital premium
          </m.div>

          <m.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold leading-[0.92] text-white sm:text-7xl lg:text-[6.8rem]"
          >
            Construimos experiencias digitales que hacen que las marcas sean imposibles de ignorar.
          </m.h1>

          <m.p variants={fadeUp} className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            F&B Digital Studio ayuda a empresas modernas a crecer con webs premium, branding,
            ecommerce y sistemas digitales inteligentes.
          </m.p>

          <m.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Empezar un proyecto</PrimaryButton>
            <SecondaryButton href="#work">Ver proyectos</SecondaryButton>
          </m.div>

          <m.div variants={fadeUp} className="mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <p className="text-3xl font-semibold text-white sm:text-4xl">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
              </div>
            ))}
          </m.div>
        </m.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-band py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="01 / Servicios"
          title="Un conjunto preciso de capacidades digitales, diseñado para trabajar como un sistema."
          text="Nada de entregables inflados. Creamos las superficies, sistemas y señales que hacen que un negocio se vea mejor, venda con más claridad y funcione de forma más inteligente."
        />

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={stagger}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <m.article
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.24, ease: smoothEase }}
                className={`group panel relative min-h-72 overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-cyanSoft/30 hover:bg-white/[0.055] ${
                  index === 6 ? "lg:col-span-3" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.045]">
                    <Icon className="h-5 w-5 text-cyanSoft" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">{service.text}</p>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

function ProjectMockup({ tone, title }: { tone: string; title: string }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div className={`absolute inset-0 bg-gradient-to-br ${tone} opacity-85`} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.34),transparent_55%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
      <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/[0.14] bg-black/[0.34] p-3 backdrop-blur-md">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          <span className="h-2 w-2 rounded-full bg-white/[0.35]" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <div className="h-3 w-20 rounded-full bg-white/[0.65]" />
            <div className="h-10 rounded-xl bg-white/20" />
            <div className="h-10 w-3/4 rounded-xl bg-white/[0.16]" />
          </div>
          <div className="rounded-xl border border-white/[0.12] bg-white/[0.16] p-3">
            <div className="h-24 rounded-lg bg-black/[0.24]" />
            <div className="mt-3 h-2 w-2/3 rounded-full bg-white/[0.45]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="max-w-xs text-3xl font-semibold leading-none text-white">{title}</p>
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="02 / Proyectos"
          title="Conceptos destacados para marcas que necesitan presencia, ritmo y precisión."
          text="Casos ficticios creados para mostrar el tipo de sistemas digitales que F&B Digital Studio puede desarrollar para empresas ambiciosas."
        />

        <div className="mt-16 grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <m.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.24, ease: smoothEase }}
                className="group grid gap-6 border-t border-white/10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <ProjectMockup tone={project.tone} title={project.title} />
                </div>
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyanSoft">{project.category}</p>
                  <h3 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-muted">{project.text}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm text-white">
                      {project.result}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition group-hover:text-white">
                      Ver dirección creativa <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </m.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-band py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="03 / Sobre nosotros"
          title="Jóvenes para movernos rápido. Serios para construir cosas que duren."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <Reveal>
            <div className="h-full border-y border-white/10 py-10">
              <p className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                F&B Digital Studio es un estudio creativo digital centrado en construir webs,
                marcas y sistemas de alto nivel para negocios que quieren verse mejor, vender más y
                crecer online.
              </p>
              <div className="mt-10 grid gap-5 text-base leading-7 text-muted md:grid-cols-2">
                <p>
                  Combinamos diseño moderno, desarrollo limpio y visión de negocio para crear
                  experiencias digitales premium sin complicar lo que no hace falta complicar.
                </p>
                <p>
                  Trabajamos de forma cercana, directa y orientada a resultados: mejor percepción,
                  mensajes más claros, recorridos de conversión más fuertes y sistemas que reducen
                  trabajo manual.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid h-full gap-5 sm:grid-cols-2">
              {[
                { name: "Hugo Fernández", role: "Desarrollo / Sistemas", image: "/team/hugo-fernandez-web.jpg", icon: Code2 },
                { name: "Mateo Blanco", role: "Estrategia / Crecimiento", image: "/team/mateo-web.jpg", icon: Bot },
              ].map((person) => {
                const Icon = person.icon;

                return (
                  <article
                    key={person.name}
                    className="group relative min-h-[28rem] overflow-hidden rounded-2xl border border-white/10 bg-black"
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(min-width: 1024px) 320px, 50vw"
                      className="object-cover grayscale contrast-110 transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.82))]" />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-black/[0.34] text-cyanSoft backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-3xl font-semibold text-white">{person.name}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/[0.58]">{person.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="04 / Proceso"
          title="Un camino claro desde la primera idea hasta un sistema digital publicado."
          text="Lo bastante estructurado para avanzar con criterio y lo bastante flexible para adaptarse a las necesidades reales del negocio."
        />

        <div className="mt-16">
          {process.map((step, index) => (
            <Reveal key={step.title}>
              <div className="group grid gap-6 border-t border-white/10 py-8 md:grid-cols-[150px_0.7fr_1fr] md:items-start">
                <span className="text-6xl font-semibold leading-none text-white/[0.08] transition group-hover:text-cyanSoft/[0.24]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl font-semibold text-white">{step.title}</h3>
                <p className="max-w-2xl text-base leading-7 text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="section-band py-24 sm:py-32">
      <div className="container-premium">
        <Reveal>
          <div className="relative overflow-hidden border-y border-white/10 py-16 sm:py-24">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(112,231,255,0.11),transparent_42%,rgba(143,107,255,0.13))]" />
            <div className="max-w-5xl">
              <p className="section-eyebrow">05 / Empezar</p>
              <h2 className="mt-8 text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-7xl">
                ¿Listo para construir algo excepcional?
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                Creemos una presencia digital que haga que tu negocio destaque desde el primer clic.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Empezar un proyecto</PrimaryButton>
                <a
                  href="mailto:hello@fbdigitalstudio.com"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.035] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.075]"
                >
                  hello@fbdigitalstudio.com
                </a>
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
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Image src="/logo-largo.png" alt="F&B Digital Studio" width={220} height={80} className="h-auto w-48" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Webs premium, marcas memorables y sistemas digitales inteligentes para empresas ambiciosas.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Estudio</p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contacto</p>
            <div className="mt-5 grid gap-3 text-sm text-muted">
              <a href="mailto:hello@fbdigitalstudio.com" className="transition hover:text-white">
                hello@fbdigitalstudio.com
              </a>
              <a href="#contact" className="transition hover:text-white">
                Reserva una llamada
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Social</p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com/fbdigitalstudio" aria-label="Instagram" className="social-link">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="social-link">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://behance.net" aria-label="Behance" className="social-link">
                <Layers3 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 F&B Digital Studio. Todos los derechos reservados.</p>
          <p>Diseñado para marcas que quieren ser recordadas.</p>
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
          <ServicesSection />
          <WorkSection />
          <AboutSection />
          <ProcessSection />
          <CTASection />
          <Footer />
        </main>
      </MotionConfig>
    </LazyMotion>
  );
}
