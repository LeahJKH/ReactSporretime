# Hvordan deploye en Vite React-app til GitHub Pages

## Trinn 1: Opprett en ny Vite React-app

Åpne terminalen og kjør følgende kommandoer for å opprette en ny Vite React-app:

```bash
npm create vite@latest my-vite-app
cd my-vite-app
npm install
```

Velg **React** og ønsket variant (JavaScript eller TypeScript) når du blir bedt om det.

## Trinn 2: Konfigurer `vite.config.js`

1. Åpne `vite.config.js`.
2. Legg til følgende linje for å spesifisere base-URL-en:

   ```js
   base: '/<repository-navn>/',
   ```

3. Bytt ut `<repository-navn>` med navnet på ditt GitHub-repository.

**Eksempel:**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-vite-app/', // Endre dette til ditt repository-navn
});
```

## Trinn 3: Legg til deploy-script i `package.json`

1. Åpne `package.json`.
2. Legg til følgende under `scripts`:

   ```json
   "deploy": "gh-pages -d dist"
   ```

**Eksempel:**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

## Trinn 4: Installer `gh-pages`

Installer `gh-pages`-pakken for å håndtere deploy:

```bash
npm install gh-pages --save-dev
```

## Trinn 5: Bygg og deploy appen

Kjør følgende kommandoer for å bygge prosjektet og deploye det til GitHub Pages:

```bash
npm run build
npm run deploy
```

> `npm run deploy` oppretter grenen `gh-pages` i GitHub-repositoryet og legger innholdet fra `dist` der.

## Trinn 6: Bytt til `gh-pages`-grenen på GitHub

Etter første deploy må GitHub Pages få beskjed om å bruke `gh-pages`-grenen:

1. Gå til repositoryet ditt på GitHub.
2. Klikk på **Settings**.
3. Velg **Pages** i menyen til venstre.
4. Under **Build and deployment** → **Source**, velg **Deploy from a branch**.
5. Under **Branch**, velg `gh-pages` og mappen `/ (root)`.
6. Klikk **Save**.

Vent et minutt eller to mens GitHub publiserer siden.


## Trinn 7: Feilsøking ved deploy

Pass på at du står i riktig mappe før du kjører deploy-kommandoen:

```bash
npm run deploy
```

Hvis du får en feilmelding, sjekk om Git-remote er satt opp:

```bash
git remote -v
```

Hvis ingen remote vises, legg til GitHub-repositoryet manuelt:

```bash
git remote add origin https://github.com/<brukernavn>/<repo-navn>.git
```

Deretter kan du prøve å deploye på nytt:

```bash
npm run deploy
```

## Ferdig

Når deploy er fullført, vil applikasjonen være tilgjengelig på:

```text
https://<brukernavn>.github.io/<repo-navn>/
```

Prosjektet ditt er nå publisert og klart til bruk.