# Portfolio – Broki

![Portfolio Banner](./public/hero-banner.jpg)

Cześć! 👋  
To jest moje **portfolio front-end** stworzone w Next.js z wykorzystaniem Tailwind CSS i nowoczesnych praktyk web developmentu.

---

## 🛠 Technologie

- **Next.js 14** – framework React do SSR i SSG
- **React** – interaktywne komponenty UI
- **TypeScript** – typowanie dla większej pewności kodu
- **Tailwind CSS / SCSS** – stylowanie responsywne i nowoczesne
- **Vercel** – hosting front-endu

---

## 📂 Struktura projektu

/portfolio
├─ /public # statyczne obrazy i assets
├─ /src
│ ├─ /components # wszystkie komponenty (Navbar, Footer, PortfolioCard)
│ ├─ /pages # strony Next.js
│ └─ /styles # pliki SCSS / Tailwind CSS
├─ next.config.js # konfiguracja Next.js
├─ package.json
└─ README.md

---

## 🌐 Funkcjonalności

- Responsywna strona landingowa
- Sekcja **Umiejętności** z ikonami technologii
- Interaktywny **Portfolio Grid** z filtrami: Strony WWW, Sklepy, Aplikacje
- Formularz kontaktowy z walidacją
- Łatwa nawigacja: Navbar + Footer
- Animacje wchodzące komponentów (Framer Motion)
- Optymalizacja wydajności: `<Image>` z `fill`, `sizes`, LCP, lazy-loading

---

## 🚀 Instalacja

1. Sklonuj repozytorium:

````bash
git clone https://github.com/broki04/portfolio.git```

2. Zainstaluj zależności:
```bash
cd portfolio
npm install
````

3. Uruchom lokalny serwer deweloperski:

```bash
npm run dev
```

Strona powinna być dostępna pod `http://localhost:3000`
