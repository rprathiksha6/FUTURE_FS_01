# Prathiksha R — Personal Portfolio Website

**Future Interns — Full Stack Web Development, Task 1**
Repository: `FUTURE_FS_01`

A personal portfolio website built with React and Vite, showcasing my
skills, projects, and professional profile as part of the Future Interns
Full Stack Web Development internship.

## Live demo

`[Add your live URL here once deployed, e.g. https://prathiksha-portfolio.vercel.app]`

## Overview

This is a single-page portfolio with sections for a hero introduction, an
about section, skills, projects, experience/education, an interactive
resume, certifications, and a working contact form. It's built to be easy
to keep updating as I finish more coursework, projects, and internship
tasks.

## Features

- Responsive design — works from small phones up to desktop
- Dark/light theme toggle with saved preference and system-preference detection
- Sticky navigation with active-section highlighting and an accessible mobile menu
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Contact form with client-side validation and EmailJS-powered email delivery
- SEO: semantic HTML, meta tags, Open Graph/Twitter cards, JSON-LD structured
  data, `robots.txt`, and `sitemap.xml`
- Accessible: semantic landmarks, labelled form fields, visible focus states,
  keyboard-operable navigation

## Tech stack

- **Frontend:** React 18, Vite
- **Styling:** Plain CSS with custom properties (design tokens) — no framework
- **Icons:** lucide-react
- **Contact form email delivery:** EmailJS (`@emailjs/browser`)

## Project structure

```
src/
├── components/     Reusable UI pieces (Navbar, Footer, ProjectCard, etc.)
├── sections/       One component per page section (Hero, About, Skills, ...)
├── data/
│   └── portfolioData.js   All personal content lives here — see below
├── hooks/          useTheme, useActiveSection, useScrollReveal
├── utils/          Small helpers (email validation)
├── App.jsx
├── main.jsx
└── index.css       Design tokens + global styles
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── PLACE_YOUR_FILES_HERE.txt   Where to put your photo/resume
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

## Updating my information

Almost everything on the site is read from a single file:
**`src/data/portfolioData.js`**. Edit the values there — name, bio, skills,
projects, education, certifications, social links — and the whole site
updates. No need to touch the components.

To add a new project, add a new object to the `projects` array in that
file (copy an existing entry as a template).

### Adding my photo and resume

See `public/PLACE_YOUR_FILES_HERE.txt` for exact steps. In short:

- Photo → save as `public/avatar.jpg`, then set `avatarUrl: "/avatar.jpg"` in `portfolioData.js`

## Contact form setup (EmailJS)

The contact form is wired to send email via [EmailJS](https://www.emailjs.com/),
so no backend server is required.

1. Create a free EmailJS account.
2. Add an **email service** (e.g. connect your Gmail) — note the **Service ID**.
3. Create an **email template** with variables `from_name`, `from_email`,
   `subject`, and `message` — note the **Template ID**.
4. Find your **Public Key** under Account → API Keys.
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server so Vite picks up the new environment variables.

Until `.env` is filled in, the form still validates input correctly, but
clearly tells the visitor the form isn't connected yet instead of silently
pretending to send the message — so submissions during development are never
lost or faked.

**`.env` is git-ignored and must never be committed.**

## Available commands

```bash
npm run dev       # start local dev server
npm run build     # production build, output to dist/
npm run preview   # preview the production build locally
```

## Deployment

This project deploys cleanly to [Vercel](https://vercel.com) or
[Netlify](https://netlify.com) (both have generous free tiers and detect
Vite automatically).

**Vercel:**
1. Push this repo to GitHub.
2. Import the repo at vercel.com → New Project.
3. Framework preset: Vite (auto-detected). Build command `npm run build`,
   output directory `dist`.
4. Add the three `VITE_EMAILJS_*` environment variables in the Vercel
   project settings.
5. Deploy.

**Netlify:** same idea — build command `npm run build`, publish directory
`dist`, and add the same environment variables under Site settings →
Environment variables.

A custom domain can be connected later from either platform's dashboard
under Domains.

## About this project

Built for Future Interns Task 1 (Full Stack Web Development track). All
content — skills, projects, and achievements — reflects my actual
background as a 3rd-year engineering student at St Joseph Engineering
College.
