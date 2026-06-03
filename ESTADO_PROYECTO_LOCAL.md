# Estado del proyecto

Fecha de última actualización: 2026-06-03

Este archivo resume el estado actual de la web de F&B Digital Studio y los cambios hechos durante la última ronda de trabajo.

## Qué es

F&B Digital Studio es una web corporativa para una empresa centrada en crear webs profesionales para negocios y mejorar su presencia online.

La propuesta actual es sencilla y directa:

- Crear webs claras, cuidadas y adaptadas a móvil.
- Ayudar a empresas a verse mejor en internet.
- Mejorar cómo aparecen en Google.
- Revisar datos importantes: horarios, fotos, enlaces, reseñas, estrellas y formas de contacto.
- Transmitir confianza sin liar al cliente con demasiada parte técnica.

## Estado actual

- Proyecto en Next.js con App Router.
- Estilos con Tailwind CSS.
- Animaciones con Framer Motion.
- Iconos con lucide-react.
- Web en español castellano.
- Diseño responsive para móvil, tablet, desktop y pantallas grandes.
- Portada ajustada para ser más calmada, menos agresiva y con titulares más contenidos.
- Copy simplificado para dejar claro que el foco son webs para empresas y visibilidad online.
- Servidor local probado en `http://localhost:3000`.
- Build de producción validado con `npm run build`.

## Archivos principales

- `app/page.tsx`: página principal completa, con header, portada, servicios, proyectos, sobre nosotros, proceso, contacto y footer.
- `app/globals.css`: estilos globales, fondo, utilidades visuales y clases compartidas.
- `app/layout.tsx`: metadata, idioma, favicon y configuración base.
- `app/components/AnimatedLogo.tsx`: componente reutilizable para animar el logo con Framer Motion.
- `app/api/contact/route.ts`: endpoint interno para enviar el formulario de contacto mediante Resend.
- `public/favicon.png`: icono de la pestaña del navegador.
- `public/projects/`: imágenes generadas para representar los tipos de proyectos.
- `public/team/`: fotos del equipo en alta calidad.

## Cambios realizados

- Se abrió y revisó la web en local.
- Se leyó el estado anterior del proyecto.
- Se optimizó la fluidez reduciendo efectos pesados, blur excesivo y animaciones innecesarias.
- Se ajustó el punto 5 para convertirlo en una sección de contacto clara.
- Se mejoró la calidad visual de las fotos del equipo usando imágenes originales sin compresión agresiva de Next.
- Se crearon imágenes relacionadas con cada tipo de proyecto para que la sección no dependiera de ventanas genéricas.
- Se rehízo la sección "Sobre nosotros" con tarjetas más premium y mejor estructura visual.
- Se sustituyeron los títulos gigantes de sección por encabezados más compactos y elegantes.
- Se simplificó toda la comunicación para explicar de forma clara que hacemos webs para empresas y mejoramos su presencia digital.
- Se redujo la agresividad de la portada inicial.
- Se creó una animación premium de entrada para el logo con fade in, escala, brillo sutil y soporte responsive.
- Se añadió una atmósfera animada sutil en la portada.
- Se volvió a un ancho de contenido más controlado tras probar una versión demasiado pegada a los márgenes.
- Se añadió el correo real de empresa: `digitalstudiosfb@gmail.com`.
- Se añadió favicon para que no aparezca el icono genérico del navegador.
- Se creó un formulario de contacto dentro de la web para no depender de abrir Gmail.
- Se conectó el formulario con Resend mediante `RESEND_API_KEY`.
- Se corrigió el error `Cannot read properties of null (reading 'reset')` que aparecía tras enviar el formulario aunque el correo llegase correctamente.
- Se ajustó el texto del origen de F&B para dar más validez: Hugo aparece como ingeniero informático y Mateo como perfil de ADE.
- Se incluyó la historia de origen: Hugo de Cantabria, Mateo de Valencia, amistad iniciada en un intercambio en Canadá y unión de perfiles para crear el proyecto.
- Se actualizó `.gitignore` para evitar que entren logs, builds, carpetas de dependencias, archivos de entorno y salidas temporales.

## Contacto y Resend

El formulario envía los mensajes directamente desde la web usando `app/api/contact/route.ts`.

Variables necesarias en `.env.local`:

```env
RESEND_API_KEY=re_tu_clave_aqui
CONTACT_TO_EMAIL=digitalstudiosfb@gmail.com
CONTACT_FROM_EMAIL=F&B Digital Studio <onboarding@resend.dev>
```

Notas:

- `.env.local` no debe subirse al repositorio.
- `.gitignore` ignora `.env`, `.env.*` y permite solo ejemplos como `.env.example`.
- Para producción conviene verificar un dominio propio en Resend y cambiar `CONTACT_FROM_EMAIL` a un remitente del dominio.

## Comandos útiles

```bash
npm run dev
npm run build
npm run start
```

## Pendientes recomendados

- Sustituir enlaces sociales placeholder de LinkedIn, Behance e Instagram por enlaces reales.
- Decidir si los proyectos mostrados serán ejemplos visuales o casos reales.
- Crear textos legales: aviso legal, privacidad y cookies antes de publicar.
- Verificar dominio propio en Resend para usar un remitente profesional.
- Revisar el contenido final con datos reales de servicios, ciudad, teléfono o WhatsApp si se quiere mostrar.
- Probar el formulario en producción cuando la web esté desplegada.

## Notas de mantenimiento

Cuando se haga un cambio importante, actualizar:

- Fecha de última actualización.
- Estado actual.
- Cambios realizados.
- Pendientes recomendados.
