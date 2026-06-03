"use client";

import Image from "next/image";
import { AnimatedLogo } from "./components/AnimatedLogo";
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import type { ComponentType, FormEvent, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Brush,
  Check,
  Compass,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  MousePointer2,
  SearchCheck,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";

type IconType = ComponentType<{ className?: string }>;

const smoothEase = [0.22, 1, 0.36, 1] as const;
const revealViewport = { once: true, margin: "0px 0px -8% 0px", amount: 0.12 };

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
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
    title: "Web profesional",
    text: "Creamos una web clara, cuidada y fácil de entender para que tu empresa dé buena imagen desde el primer clic.",
    icon: MousePointer2,
  },
  {
    title: "Aparecer en Google",
    text: "Preparamos la web y la información básica para que sea más fácil encontrarte cuando alguien busca lo que ofreces.",
    icon: SearchCheck,
  },
  {
    title: "Perfil y reseñas",
    text: "Revisamos cómo se ve tu empresa en Google: horarios, fotos, enlaces, reseñas y estrellas.",
    icon: Check,
  },
  {
    title: "Presencia online",
    text: "Ordenamos lo importante: qué haces, dónde estás, cómo contactarte y por qué deberían confiar en ti.",
    icon: Compass,
  },
  {
    title: "Imagen de marca",
    text: "Cuidamos colores, textos, fotos y estilo para que todo se vea profesional y coherente.",
    icon: Brush,
  },
  {
    title: "Contacto fácil",
    text: "Dejamos claro cómo pedir información, llamar, escribir por WhatsApp o reservar una cita.",
    icon: Workflow,
  },
  {
    title: "Ajustes y mantenimiento",
    text: "Te ayudamos a mantener la web al día con cambios sencillos, mejoras y contenido nuevo cuando haga falta.",
    icon: Check,
  },
];

const contactEmail = "digitalstudiosfb@gmail.com";

const projects = [
  {
    title: "Web para restaurante",
    category: "Hostelería / Web y reservas",
    text: "Una web clara para mostrar el local, la carta, las fotos y facilitar reservas o contactos desde el móvil.",
    result: "Más facilidad para reservar",
    image: "/projects/restaurant-web.jpg",
    tone: "from-[#f8f5ed] via-[#1b1b1f] to-[#4c8dff]",
  },
  {
    title: "Web para tienda de moda",
    category: "Retail / Web comercial",
    text: "Una presencia online cuidada para enseñar productos, reforzar la imagen de marca y guiar al cliente hacia la compra.",
    result: "Mejor presentación de producto",
    image: "/projects/fashion-ecommerce.jpg",
    tone: "from-[#f0f7ff] via-[#111827] to-[#8f6bff]",
  },
  {
    title: "Web para estudio fitness",
    category: "Fitness / Web y captación",
    text: "Una web con horarios, servicios, fotos y llamadas a la acción para convertir visitas en solicitudes de prueba.",
    result: "Más solicitudes de información",
    image: "/projects/fitness-branding.jpg",
    tone: "from-[#70e7ff] via-[#0f172a] to-[#f4f7fb]",
  },
  {
    title: "Web inmobiliaria",
    category: "Inmobiliaria / Web corporativa",
    text: "Una web para presentar inmuebles, generar confianza y facilitar que clientes interesados pidan más información.",
    result: "Contacto más directo",
    image: "/projects/real-estate-platform.jpg",
    tone: "from-[#f4f7fb] via-[#111113] to-[#4c8dff]",
  },
  {
    title: "Web para empresa de servicios",
    category: "Servicios / Presencia digital",
    text: "Una web profesional para explicar qué hace la empresa, mostrar valor y convertir visitas en contactos reales.",
    result: "Mensaje más claro",
    image: "/projects/saas-dashboard.jpg",
    tone: "from-[#8f6bff] via-[#07111f] to-[#70e7ff]",
  },
];

const process = [
  {
    title: "Entender el negocio",
    text: "Hablamos contigo para entender qué haces, a quién quieres llegar y qué necesita mejorar tu presencia online.",
  },
  {
    title: "Ordenar el mensaje",
    text: "Dejamos claro qué debe contar la web: servicios, ventajas, ubicación, contacto y puntos de confianza.",
  },
  {
    title: "Diseño",
    text: "Preparamos una imagen profesional y sencilla para que el cliente entienda rápido la empresa.",
  },
  {
    title: "Publicar la web",
    text: "Construimos y publicamos una web adaptada a móvil, con formas claras de contactar o pedir información.",
  },
  {
    title: "Revisar presencia",
    text: "Miramos cómo se ve la empresa en Google y qué ajustes sencillos pueden ayudar: fotos, reseñas, enlaces y datos básicos.",
  },
];

const metrics = [
  ["Web", "profesional"],
  ["Google", "más visible"],
  ["Reseñas", "mejor presencia"],
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
      transition={{ duration: 0.46, ease: smoothEase }}
      className={className}
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
      <div className="border-t border-white/10 pt-7">
        <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-cyanSoft/60" />
            <p className="section-eyebrow">{eyebrow}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.95fr)_minmax(16rem,0.72fr)] md:items-start">
            <h2 className="max-w-3xl text-pretty text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            {title}
            </h2>
            {text ? (
              <p className="max-w-xl border-l border-white/10 pl-5 text-sm leading-6 text-muted sm:text-base">
                {text}
              </p>
            ) : null}
          </div>
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
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.045] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.28] hover:bg-white/[0.075] focus:outline-none focus:ring-2 focus:ring-white/[0.35] focus:ring-offset-2 focus:ring-offset-ink"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/[0.88] backdrop-blur-md">
      <div className="container-premium flex h-20 items-center justify-between">
        <a href="#" aria-label="Inicio de F&B Digital Studio">
          <AnimatedLogo
            src="/icono.png"
            alt=""
            width={42}
            height={42}
            imageClassName="h-10 w-10 rounded-full object-cover ring-1 ring-white/[0.12]"
            priority
          >
          <div className="leading-none">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">
              F&B
            </span>
            <span className="mt-1 block text-xs text-muted">Digital Studio</span>
          </div>
          </AnimatedLogo>
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
            className="border-t border-white/10 bg-ink/[0.97] px-6 pb-6 pt-3 lg:hidden"
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
    ["Web profesional", "92"],
    ["Presencia en Google", "88"],
    ["Contacto claro", "76"],
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.12, duration: 0.5, ease: smoothEase }}
      className="relative"
    >
      <div className="absolute -inset-3 border border-white/[0.05] bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_38%,rgba(112,231,255,0.05))]" />
      <div className="panel relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
        <div className="grid gap-4 border-b border-white/10 pb-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyanSoft">presencia online</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Estado digital de la empresa</h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft" />
            revisión inicial
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
            <p className="mt-6 text-3xl font-semibold text-white">24/7</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">web disponible</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <Target className="h-5 w-5 text-violetSoft" />
            <p className="mt-6 text-3xl font-semibold text-white">Google</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">perfil y reseñas</p>
          </div>
        </div>
      </div>
    </m.div>
  );
}

function PremiumHeroAtmosphere() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <m.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={shouldReduceMotion ? undefined : { opacity: [0, 0.55, 0.42], scale: [0.9, 1.04, 1] }}
        transition={{ duration: 2.5, ease: smoothEase }}
        className="absolute left-1/2 top-20 h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(112,231,255,0.18),rgba(76,141,255,0.08)_34%,transparent_68%)] blur-3xl"
      />
      <m.div
        initial={shouldReduceMotion ? false : { x: "-45%", opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { x: "45%", opacity: [0, 0.5, 0] }}
        transition={{ delay: 0.55, duration: 2.2, ease: smoothEase }}
        className="absolute top-28 h-px w-[70vw] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),rgba(112,231,255,0.55),transparent)]"
      />
      <m.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: [0, 0.2, 0.12] }}
        transition={{ delay: 0.9, duration: 2.5, ease: smoothEase }}
        className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(112,231,255,0.06))]"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(76,141,255,0.1),transparent_34%,rgba(143,107,255,0.08)_64%,transparent_82%)]" />
      <PremiumHeroAtmosphere />
      <div className="container-premium relative grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <m.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl">
          <m.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyanSoft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft" />
            webs para empresas
          </m.div>

          <m.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl"
          >
            Webs profesionales para empresas que quieren verse mejor en internet.
          </m.h1>

          <m.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Creamos una web clara, cuidamos cómo aparece tu empresa online y dejamos fácil que el
            cliente te encuentre, confíe y contacte.
          </m.p>

          <m.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Quiero mejorar mi web</PrimaryButton>
            <SecondaryButton href="#services">Qué hacemos</SecondaryButton>
          </m.div>

          <m.div variants={fadeUp} className="mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
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
          title="Lo que hacemos: web, visibilidad y una presencia online que genere confianza."
          text="Sin liarlo con palabras raras. Te ayudamos a verte mejor en internet y a que tus clientes tengan más fácil encontrarte y contactarte."
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
                className={`group panel relative min-h-72 overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanSoft/30 hover:bg-white/[0.055] ${
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

function ProjectVisual({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-black">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        unoptimized
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),transparent_58%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />
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
          title="Ejemplos del tipo de webs y presencia digital que podemos crear para empresas."
          text="Cada proyecto parte de una idea sencilla: que el negocio se entienda rápido, se vea profesional y tenga más opciones de recibir contactos."
        />

        <div className="mt-16 grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="group grid gap-6 border-t border-white/10 py-8 transition duration-300 hover:-translate-y-1 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <ProjectVisual image={project.image} title={project.title} />
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const team = [
    {
      label: "DESARROLLO",
      name: "Hugo Fernández",
      role: "Webs claras y bien construidas",
      image: "/team/hugo-fernandez.png",
      bio: "Se encarga de convertir la idea en una web funcional, rápida y fácil de usar. Cuida que todo se vea bien en móvil, cargue correctamente y tenga formas claras de contacto.",
      tags: ["Web profesional", "Móvil y velocidad", "Formas de contacto"],
      note: "Una web que se entienda, se vea bien y funcione.",
      imagePosition: "object-[50%_18%]",
    },
    {
      label: "ESTRATEGIA",
      name: "Mateo Blanco",
      role: "Mensaje, imagen y presencia online",
      image: "/team/mateo.png",
      bio: "Ayuda a ordenar cómo se presenta la empresa: qué decir, qué destacar, cómo transmitir confianza y cómo mejorar la imagen que el cliente encuentra en internet.",
      tags: ["Mensaje claro", "Imagen online", "Google y reseñas"],
      note: "Que el cliente entienda rápido por qué confiar.",
      imagePosition: "object-[50%_16%]",
    },
  ];

  return (
    <section id="about" className="section-band py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="03 / Sobre nosotros"
          title="Un equipo pequeño para crear webs claras y mejorar cómo se ve tu empresa online."
          text="Trabajamos de forma directa, sin complicar el proceso y poniendo el foco en lo que más importa: buena imagen, confianza y contacto."
        />

        <Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {team.map((person) => (
              <article
                key={person.name}
                className="rounded-3xl border border-white/[0.09] bg-[#0b0c10] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8"
              >
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/[0.12] bg-black ring-4 ring-white/[0.03]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="80px"
                      unoptimized
                      className={`object-cover ${person.imagePosition}`}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-cyanSoft">
                      {person.label}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold leading-none text-white">{person.name}</h3>
                    <p className="mt-2 text-base leading-6 text-muted">{person.role}</p>
                  </div>
                </div>

                <p className="mt-8 text-base leading-7 text-white/[0.72]">{person.bio}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.1] bg-white/[0.035] px-3 py-1.5 font-mono text-xs text-white/[0.72]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-7 border-t border-dashed border-white/[0.1] pt-5 font-mono text-sm leading-6 text-white/40">
                  {person.note}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
            <div>
              <p className="section-eyebrow">Origen</p>
              <p className="mt-4 font-mono text-sm leading-6 text-white/40">
                Cantabria / Valencia / Canadá
              </p>
            </div>
            <div className="mt-6 max-w-4xl lg:mt-0">
              <p className="text-xl font-semibold leading-8 text-white sm:text-2xl">
                F&B nace de una amistad que empezó lejos de casa y de dos carreras que encajaban
                demasiado bien como para no construir algo juntos.
              </p>
              <p className="mt-5 text-base leading-7 text-muted">
                Hugo, de Cantabria, es ingeniero informático. Mateo, de Valencia, viene del mundo
                de ADE. Nos conocimos durante un intercambio en Canadá y con el tiempo vimos que esa
                mezcla tenía sentido: criterio técnico para crear webs bien hechas y visión de
                negocio para entender cómo debe presentarse una empresa en internet.
              </p>
            </div>
          </div>
        </Reveal>
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
          title="Un proceso sencillo para pasar de una empresa poco visible a una presencia online cuidada."
          text="Nos centramos en lo importante: entender el negocio, crear la web y revisar cómo aparece en internet."
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

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const replyEmail = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, business, email: replyEmail, phone, message }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      form.reset();
      setStatus("sent");
      setFeedback("Mensaje enviado. Os responderemos lo antes posible.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      );
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-black/[0.24] p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/70">
          Nombre
          <input
            name="name"
            required
            className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyanSoft/50"
            placeholder="Tu nombre"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Empresa
          <input
            name="business"
            className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyanSoft/50"
            placeholder="Nombre de la empresa"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Email
          <input
            name="email"
            type="email"
            required
            className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyanSoft/50"
            placeholder="tu@email.com"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Teléfono
          <input
            name="phone"
            type="tel"
            className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyanSoft/50"
            placeholder="Opcional"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-white/70">
        ¿Qué necesitas?
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-cyanSoft/50"
          placeholder="Cuéntanos si necesitas una web, mejorar Google, reseñas o presencia online."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-cyanSoft focus:outline-none focus:ring-2 focus:ring-cyanSoft/70 focus:ring-offset-2 focus:ring-offset-ink"
      >
        {status === "sending" ? "Enviando..." : "Enviar consulta"}
      </button>
      <p className={`mt-3 text-sm leading-6 ${status === "error" ? "text-red-200" : "text-muted"}`}>
        {feedback || `El mensaje se enviará directamente a ${contactEmail}.`}
      </p>
    </form>
  );
}

function CTASection() {
  return (
    <section id="contact" className="section-band py-24 sm:py-32">
      <div className="container-premium">
        <Reveal>
          <div className="relative overflow-hidden border-y border-white/10 py-12 sm:py-16">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(112,231,255,0.08),transparent_46%,rgba(143,107,255,0.09))]" />
            <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-cyanSoft/60" />
                  <p className="section-eyebrow">05 / Empezar</p>
                </div>
                <h2 className="mt-6 text-pretty text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Hablemos de cómo quieres que tu empresa aparezca en internet.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                  Cuéntanos qué empresa tienes, qué quieres mostrar y qué te gustaría mejorar:
                  web, Google, reseñas o formas de contacto.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="#contact-form">Quiero mejorar mi presencia online</PrimaryButton>
                  <a
                    href="#contact-form"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.045] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.075]"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <ContactForm />
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
              Webs profesionales para empresas que quieren verse mejor, aparecer en internet y generar más confianza.
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
              <a href="#contact-form" className="transition hover:text-white">
                {contactEmail}
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
        <main className="min-h-screen overflow-x-hidden">
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
