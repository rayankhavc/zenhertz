# ZenHertz

**Ce morceau, c’est pour quand ?** Dépose un ou plusieurs sons : ZenHertz mesure tempo, énergie et intensité et
dit s’ils conviennent pour dormir, se concentrer, courir ou une longue écoute — avec le niveau de preuve de chaque verdict.
Tout est calculé dans le navigateur : aucun fichier n’est envoyé.

- 1 morceau → rapport · 2 → duel · 3 à 10 → playlist ordonnée (course, séance, endormissement…)
- Partage : image + lien qui contient les mesures (jamais l’audio)

## Structure
| Chemin | Rôle |
|---|---|
| `index.html`, `css/style.css` | Page unique, mobile d’abord, clair/sombre |
| `js/dsp/` | Moteur d’analyse pur JS (tempo, loudness BS.1770, spectre) — tourne dans un Worker et dans Node |
| `js/scoring.js` | Scores d’usage déterministes, seuils commentés |
| `js/report.js`, `js/share.js` | Rendu des rapports, lien et image de partage |
| `js/ads.config.js` | Emplacements publicitaires (mode `placeholder` / `off`) |
| `api/submit.js` | Fonction Vercel des formulaires |
| `tests/run.js` | Tests de référence sur signaux synthétiques (`npm test`) |
| `tools/calibrate.mjs` | Calibration sur de vrais fichiers (nécessite ffmpeg) |

## Formulaires (à configurer dans Vercel → Settings → Environment Variables)
- `SUPABASE_URL` + `SUPABASE_KEY` : table `zh_submissions` (insertion seule, configurée), **ou**
- `FORMS_WEBHOOK_URL` : n’importe quel webhook (Make, Zapier, Discord, Slack…), **ou**
- `RESEND_API_KEY` + `FORMS_TO_EMAIL` (+ `FORMS_FROM_EMAIL`) : envoi par e-mail via resend.com

Sans destination, l’API répond 503 et la page affiche une erreur (aucun message perdu en silence).

## Développement
```
python3 -m http.server 8000   # puis http://localhost:8000
npm test                      # 18 tests de référence
node tools/calibrate.mjs morceau1.mp3 morceau2.mp3
```
