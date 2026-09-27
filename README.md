# PaoClean — Sitio web (Next.js)

Sitio construido con **Next.js 14 (App Router)** y React. Mismo diseño y
funcionalidad que la versión estática, pero organizado en componentes para
que sea fácil de mantener y crezca si más adelante quieren agregar páginas
(ej. una por servicio, un blog, etc).

## Requisitos

- [Node.js](https://nodejs.org) 18 o más reciente.

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Los cambios en el
código se reflejan al instante.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio inicial de PaoClean"
git branch -M main
git remote add origin <URL_DE_TU_REPO>
git push -u origin main
```

(`node_modules` y `.next` ya están en `.gitignore`, no se suben).

## Desplegarlo

La forma más simple es [Vercel](https://vercel.com) (son los creadores de
Next.js): conectas el repo de GitHub y cada `push` a `main` lo publica solo,
sin configuración extra. También puedes correr `npm run build && npm start`
en cualquier servidor con Node.

## Estructura

```
paoclean-next/
├── app/
│   ├── layout.js       → fuentes (Fraunces + Karla), metadatos, providers
│   ├── page.js          → ensambla todas las secciones
│   └── globals.css      → paleta de colores y estilos
├── components/           → un componente por sección (Hero, Services, etc.)
├── context/
│   ├── LanguageContext.jsx → maneja el idioma actual (ES/EN) para todo el sitio
│   └── ToastContext.jsx    → notificaciones tipo "Contacto descargado"
├── lib/
│   ├── business.js       → teléfono, correo, horario del negocio
│   └── translations.js   → todos los textos en español e inglés
└── public/                → aquí van las fotos reales (og-image.jpg, etc.)
```

## Contenido pendiente antes de lanzar (buscar "PENDIENTE" en el código)

- [ ] Fotos reales de Pao / equipo trabajando → reemplazar los bloques
      `photo-placeholder` en `components/Hero.jsx` y `components/About.jsx`
      por `<Image>` de `next/image` con la foto real en `/public`.
- [ ] Fotos reales de antes/después → en `components/Results.jsx`, cambiar
      los `<div className="ba-side ...">` por imágenes reales (puedes usar
      `backgroundImage` en el `style` o `<Image fill>`).
- [ ] Testimonios reales → editar el arreglo `testimonialsList` en
      `lib/translations.js` (ya soporta varios, con puntos de navegación).
- [ ] Horario real de atención → objeto `BUSINESS.hours` en `lib/business.js`
      (y el texto `contact.hours_value` en `lib/translations.js`).
- [ ] Zona de cobertura exacta → `contact.zone_value` en `lib/translations.js`.
- [ ] Confirmar si está asegurada/con seguro de responsabilidad → si no,
      quitar ese bloque en `components/TrustStrip.jsx`.
- [ ] Imagen para compartir en redes → agregar `public/og-image.jpg`
      (1200×630px) con una foto real; ya está referenciada en `app/layout.js`.

## Notas técnicas

- El idioma vive en `LanguageContext` — todo componente que necesite texto
  usa `const { t } = useLanguage()` y `t("clave")`.
- El slider de antes/después (`components/Results.jsx`) funciona con mouse,
  touch y teclado (flechas izquierda/derecha).
- "Guardar contacto" genera un archivo `.vcf` real en el navegador a partir
  de `BUSINESS` en `lib/business.js` — si cambia el teléfono o el correo,
  se edita solo ahí.
- El indicador de "Abierto/Cerrado" se calcula en el cliente (evita
  desajustes de hidratación con la hora del servidor) y se recalcula cada
  minuto.
