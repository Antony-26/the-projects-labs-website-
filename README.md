# The Projects Labs — Website

A Next.js + Styled Components website for The Projects Labs.

## Getting Started

### Prerequisites
- Node.js 18+ ([download here](https://nodejs.org))

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Before You Go Live

Search for `YOURNUMBER` in the codebase and replace it with your WhatsApp number (international format, no spaces):
- Example: `https://wa.me/919876543210`

Files to update:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/WhyUs.tsx`
- `src/components/Footer.tsx`

Also update social media links in `src/components/Footer.tsx`.

## Deploy to Vercel (Free)

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com), sign in with GitHub
3. Click New Project → import your repo → Deploy

Vercel detects Next.js automatically. Zero config needed.

## Project Structure

```
src/
  components/
    Navbar.tsx       Sticky nav with WhatsApp CTA
    Hero.tsx         Hero section
    Services.tsx     6-service card grid
    WhyUs.tsx        About + differentiators
    Results.tsx      Stats + testimonials
    Contact.tsx      Contact form
    Footer.tsx       Footer + floating WhatsApp button
  pages/
    index.tsx        Main page
    _app.tsx         Global styles wrapper
    _document.tsx    HTML head + meta tags
  styles/
    GlobalStyle.ts   CSS reset
    theme.ts         Design tokens
```
