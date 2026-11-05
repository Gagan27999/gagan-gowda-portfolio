# Gagan Gowda TM — Personal Portfolio

A responsive React + Vite portfolio with a dark premium visual style, Framer Motion animations and Lucide icons.

## 1. Requirements
- Node.js LTS (install from https://nodejs.org)
- Visual Studio Code

## 2. Run locally
Open this folder in VS Code, then open Terminal → New Terminal and run:

```bash
npm install
npm run dev
```

Open the Local URL printed by Vite (usually http://localhost:5173).

## 3. Build for production
```bash
npm run build
npm run preview
```

## 4. Personalize before publishing
- In `src/App.jsx`, update the `LINKS` object with your real GitHub and LinkedIn profile URLs.
- Add your actual resume PDF to `public/Gagan-Gowda-Resume.pdf`. The resume button can be added once the PDF is ready; this starter intentionally does not link to a nonexistent file.
- Replace the starter project descriptions with the actual tools, datasets, model details, GitHub URLs, screenshots and results.
- Verify your degree dates, branch and college details.

## 5. Contact form
The email actions use `mailto:` so they open the visitor's configured email app. This does not store messages on a server. For a hosted contact form, connect Formspree, EmailJS or your own backend and add the service's public form endpoint.

## 6. Deploy free with Vercel
1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com using GitHub.
3. Select **Add New → Project**, import this repository.
4. Keep Framework Preset as **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Click **Deploy**. Vercel will provide your public website URL.

## VS Code extensions
Recommended:
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Error Lens
- GitLens (optional)

Extensions are editor helpers; the actual website dependencies are installed with `npm install`.
