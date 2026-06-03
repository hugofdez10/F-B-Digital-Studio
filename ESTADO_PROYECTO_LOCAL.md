# Estado local del proyecto

Fecha de última actualización: 2026-06-03

Este archivo es un cuaderno local de trabajo para F&B Digital Studio. Está añadido a `.gitignore`, así que no se sube a GitHub.

## Qué es

F&B Digital Studio es una web corporativa para una agencia digital premium. La propuesta de la página es presentar servicios de diseño web, branding, ecommerce, SEO, estrategia digital, automatizaciones e integraciones con IA para empresas que quieren mejorar su presencia online.

## Estado actual

- Proyecto Next.js con App Router.
- Estilos con Tailwind CSS.
- Animaciones con Framer Motion.
- Iconos con lucide-react.
- Landing principal reconstruida con estética oscura, premium, minimalista y tecnológica.
- Copy visible en español castellano.
- Diseño responsive para móvil, tablet, desktop y pantallas grandes.
- Servidor local probado en `http://localhost:3000`.
- Build de producción validado con `npm run build`.

## Archivos principales

- `app/page.tsx`: página principal completa, con navbar, hero, servicios, proyectos, about, proceso, CTA y footer.
- `app/globals.css`: estilos globales, fondo, utilidades visuales y clases compartidas.
- `app/layout.tsx`: metadata, fuente Inter y configuración de idioma.
- `tailwind.config.ts`: colores, sombras y fuente extendida.
- `public/`: logos e imágenes del equipo.

## Últimos cambios realizados

- Traducción completa de la web a español castellano.
- Metadata actualizada a español.
- `html lang` cambiado a `es`.
- Creación de este archivo local de estado.
- Añadido `ESTADO_PROYECTO_LOCAL.md` a `.gitignore`.

## Comandos útiles

```bash
npm run dev
npm run build
npm run start
```

## Pendientes recomendados

- Sustituir `hello@fbdigitalstudio.com` por el email real.
- Sustituir enlaces sociales placeholder de LinkedIn y Behance.
- Revisar si los proyectos ficticios deben convertirse en casos reales.
- Definir textos legales: aviso legal, privacidad y cookies si la web se publica.
- Conectar el CTA a un formulario real, Calendly, WhatsApp o email definitivo.

## Notas de mantenimiento

Cuando se haga un cambio importante, actualizar estas secciones:

- Fecha de última actualización.
- Estado actual.
- Últimos cambios realizados.
- Pendientes recomendados.
