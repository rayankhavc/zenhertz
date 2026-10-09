# Master prompt — Refonte complète de ZenHertz (v2)

> **Statut : BROUILLON.** Les points marqués **[À CONFIRMER]** ont une valeur par défaut
> raisonnable. Remplacez-les par la réponse de l'équipe avant de lancer la session.
> Ce prompt est autonome : la session qui l'exécute n'a pas besoin du contexte de la conversation.

---

## 0. Rôle et mission

Tu es développeur front-end senior et ingénieur audio (DSP). Tu fais la **refonte complète** de
ZenHertz, un site statique (`index.html`, `app.js`, `style.css`, déployé sur Vercel :
https://zen-hertz.vercel.app). Le résultat doit être **utilisable par un vrai utilisateur dès
aujourd'hui**, sans explication.

Exemple de scénario : un ami ouvre le site sur son téléphone, dépose **un ou deux morceaux** et
obtient en moins de 15 secondes un **petit rapport clair et honnête** :
- à quel moment de la journée chaque morceau convient le mieux ;
- en cas de comparaison, lequel choisir.

Il peut ensuite partager ce rapport.

Le site doit aussi contenir des **emplacements publicitaires** propres et non intrusifs.

---

## 1. Pourquoi une refonte : problèmes à corriger (tous obligatoires)

### 1.1 Problème de besoin (le plus important)
Personne ne veut « analyser l'impact de sa musique ». En revanche, les gens veulent **choisir le
bon morceau pour ce qu'ils font** : dormir, se concentrer, courir, écouter longtemps sans fatigue.

➜ Le produit doit répondre à la question **« Ce morceau, c'est pour quand ? »** (et en mode
comparaison : **« Lequel des deux pour… ? »**), pas afficher des données brutes.

### 1.2 Erreurs scientifiques à supprimer
| Actuel | Problème | Action |
|---|---|---|
| `getWave()` (`app.js:475`) : BPM → Delta/Thêta/Alpha/Bêta/Gamma | Erreur de catégorie. Les ondes cérébrales sont des oscillations EEG. 120 BPM = 2 Hz : l'entraînement neural au rythme se situe vers 1–3 Hz quel que soit le tempo (Nozaradan 2011). | **Supprimer entièrement** : sélecteur d'ondes, tags, textes, stats « 5 ondes cérébrales ». |
| `calcHormones()` + jauges en % (dopamine, cortisol…) | Coefficients inventés, rien ne se mesure depuis un fichier audio. La dopamine dépend surtout du fait d'**aimer** le morceau (Salimpoor 2011, Ferreri 2019). | **Supprimer** les jauges hormonales et la stat « 6 hormones ». |
| « +65 % de dopamine » (Salimpoor) | Chiffre inexact : l'étude rapporte un effet de quelques pour cent sur la liaison du raclopride. | Supprimer. |
| « Chercheurs de Stanford, 40 Hz » | C'est le MIT (labo Tsai), sur la souris, avec une stimulation sensorielle à 40 Hz, pas le contenu musical. | Supprimer. |
| « 40–100 Hz stimulent le nerf vague, baissent le cortisol » | Non établi. | Supprimer. |
| « 432 Hz » dans la carte d'aperçu du hero (`index.html:78`) | Marqueur de pseudoscience. | Supprimer. |
| `pick()` avec `Math.random()` (`app.js:302`) | Le même fichier analysé deux fois donne un rapport différent. | **Rapport 100 % déterministe.** |
| `analyzeSpectrum()` : une seule FFT de 32 768 points au milieu du morceau (≈ 0,7 s) | Le profil spectral ne représente pas le morceau. | Moyenner sur tout le morceau (méthode de Welch, voir §4). |
| RMS calculé sur les 60 premières secondes, et `variance` = écart absolu moyen à la RMS | Ce n'est pas une mesure de dynamique. | Remplacer par loudness, crest factor et plage de loudness (voir §4). |
| Landing : « révèle son impact sur tes hormones », « Basé sur la science » | Promesse santé contredite par le disclaimer « divertissement ». Risque de pratique commerciale trompeuse. | Réécrire le copywriting (voir §6). |

### 1.3 Bugs
- **Formulaires cassés.** `email-capture` et `feedback` utilisent Netlify Forms (`data-netlify`),
  alors que le site est sur Vercel. `POST /` renvoie **405**, mais `handleEmailSubmit` et
  `handleFeedbackSubmit` affichent « Merci » parce que `fetch` ne rejette pas sur une erreur HTTP.
  Toutes les inscriptions sont perdues.
  ➜ Envoyer vers **[À CONFIRMER : Formspree par défaut]**, vérifier `res.ok`, afficher une
  erreur en cas d'échec.
- Les mentions légales disent « aucune donnée personnelle collectée » alors qu'on collecte des
  e-mails. ➜ Corriger (RGPD, voir §7).

### 1.4 Ce qui marche et qu'il faut GARDER
- Traitement 100 % local dans le navigateur, aucun upload : c'est l'argument vie privée **et**
  ce qui règle le droit d'auteur.
- Le moteur BPM : onset multi-bande, ACF normalisée, scoring harmonique, corrections d'octave
  (`onsetEnvelope`, `bpmFromOnset`, `analyzeRhythm`). On peut le réutiliser et l'améliorer.
- Les chemins de décodage universels : `decodeAudioDataUniversal`, fallback FFmpeg.wasm pour
  vidéo et formats exotiques, fallback iOS.
- Bilingue FR/EN, thème clair/sombre, partage d'image.

---

## 2. Le produit cible

### 2.1 Proposition de valeur (hero)
- Titre, dans cet esprit : **« Ce morceau, c'est pour quand ? »**
- Sous-titre, dans cet esprit : *« Dépose un ou deux sons. ZenHertz mesure le tempo, l'énergie et
  l'intensité, et te dit s'ils conviennent pour dormir, te concentrer, courir ou une longue écoute.
  Gratuit, sans compte, rien n'est envoyé sur un serveur. »*

### 2.2 Parcours utilisateur (mobile d'abord)
1. **Landing** : hero, une zone de dépôt visible tout de suite (pas besoin de cliquer sur
   « commencer »), 3 étapes, la section « Comment on mesure / niveaux de preuve », FAQ courte,
   footer.
2. **Dépôt** : 1 ou 2 fichiers, par glisser-déposer ou via le sélecteur (galerie sur mobile).
   Mode comparaison **[À CONFIRMER : 2 morceaux max]**. Formats : MP3, WAV, OGG, FLAC, AAC, M4A,
   MP4, MOV.
3. **Analyse** : progression réelle par fichier, en étapes (décodage → rythme → spectre →
   rapport). L'analyse tourne dans un **Web Worker** pour ne pas figer l'interface. Cible :
   moins de 10 s pour un morceau de 4 min sur un téléphone récent.
4. **Rapport** (voir §3).
5. Actions : **Partager** (image PNG au format story 1080×1920 + texte), **Copier le lien**,
   **Analyser un autre morceau**, **Comparer avec un autre**.

### 2.3 Hors périmètre
Comptes, base de données, analyse par URL (YouTube/Spotify), lecture ou streaming de musique.

---

## 3. Le rapport (cœur du produit)

### 3.1 Rapport d'un morceau
1. **En-tête** : titre (nom de fichier nettoyé), durée.
2. **Verdict principal**, une phrase. Exemple : *« Idéal pour courir à allure modérée. À éviter
   pour s'endormir. »*
3. **4 cartes d'usage**, chacune avec :
   - une note sur 100 et un libellé : Idéal / Convient / Moyen / À éviter ;
   - une ligne d'explication fondée sur les **mesures réelles**, par exemple : « 168 BPM stable :
     proche d'une cadence de course naturelle » ;
   - un **badge de niveau de preuve** : 🟢 Solide / 🟡 Modéré / 🔴 Exploratoire (voir §5).

   | Usage | Mesures utilisées |
   |---|---|
   | 😴 **Sommeil / détente** | Tempo bas, faible énergie, peu de transitoires, pas de pics de volume soudains, dynamique douce, peu d'aigus |
   | 🎯 **Concentration** | Tempo modéré, énergie régulière (faible variance de loudness dans le temps), peu de ruptures |
   | 🏃 **Course / sport** | BPM et cadence : affiche « ≈ X pas/min » (cadence = BPM ou 2×BPM selon la plage 150–190), confiance du tempo, énergie |
   | 🎧 **Écoute prolongée** | Compression (crest factor faible), loudness élevée, énergie dans 2–8 kHz. **Toujours** préciser : « le vrai risque dépend de ton volume et de ta durée d'écoute » |

4. **Mesures** (bloc repliable « Voir les mesures ») :
   - BPM, avec indice de confiance et stabilité du tempo ;
   - loudness intégrée (≈ LUFS) ;
   - crest factor (dB) et plage de loudness ;
   - répartition spectrale sub / grave / médium / aigu, moyennée sur tout le morceau ;
   - centroïde spectral (brillance) ;
   - **courbe d'énergie dans le temps** (sparkline), avec marqueurs sur les pics soudains. C'est
     utile pour le sommeil (« attention : montée brutale à 2:41 »).
5. **Lien « Comment on calcule ? »** vers la section méthode.

### 3.2 Rapport de comparaison (2 morceaux)
- Tableau côte à côte des 4 usages, avec le **gagnant mis en avant** pour chacun.
- Une phrase de synthèse, par exemple : *« Pour dormir : A. Pour courir : B. »*
- Mesures côte à côte.

### 3.3 Règles de rédaction
- **Déterministe** : même fichier → même rapport, au caractère près. Les textes sont choisis par
  des règles sur les mesures, jamais au hasard.
- Ton : tutoiement, phrases courtes, concrètes, sans jargon. Aucune affirmation médicale ou
  hormonale. Formuler en « tend à », « convient pour », jamais « provoque » ou « libère ».
- Toujours relier une phrase à une mesure affichée.

---

## 4. Moteur d'analyse (exigences techniques)

Tout s'exécute **côté client**, dans un Web Worker. Mono = moyenne des canaux.

- **Tempo** : garder et améliorer l'approche actuelle. Exposer :
  - `bpm` ;
  - `bpmConfidence` (0–1, par exemple le rapport entre le pic ACF retenu et le second) ;
  - `tempoStability` (BPM estimé sur des fenêtres de 20 s glissantes, puis écart-type).

  En dessous d'un seuil de confiance, afficher « tempo peu marqué » au lieu d'un chiffre faux
  (cas de l'ambient).
- **Loudness** : approximation de la loudness intégrée ITU-R BS.1770 / EBU R128 (filtre de
  pondération K, blocs de 400 ms, gating). Plage de loudness (LRA) approximée. Afficher en LUFS
  avec le libellé « approx. ».
- **Crest factor** = crête / RMS en dB, sur tout le morceau, comme indicateur de compression.
- **Spectre** : moyenne de Welch, avec des FFT de 4 096 ou 8 192 points, fenêtre de Hann, 50 % de
  recouvrement, **sur tout le morceau** (sous-échantillonner les trames pour les morceaux longs
  si besoin). Bandes : <60, 60–250, 250–2 k, 2–6 k, >6 k Hz. Calculer aussi le centroïde.
- **Courbe d'énergie** : loudness court terme (fenêtres de 3 s), environ 100 points pour la
  sparkline. Détection des montées soudaines (> X dB en < Y s, à documenter).
- Supprimer les « 3 pics dominants » affichés en Hz. Ils n'ont pas de sens pour l'utilisateur.
- **Scores d'usage** : fonctions pures, documentées, dans `scoring.js`. Chaque coefficient est
  justifié par un commentaire d'une ligne. Les seuils sont regroupés dans un objet de config.
- **Validation (obligatoire)** :
  - un script `tests/` (Node, sans dépendance lourde) qui génère des signaux synthétiques :
    clics à 60, 90, 120, 128, 140, 174 BPM, bruit rose, sinus, signal compressé ou non ;
  - le script vérifie BPM ±2 % (octave acceptée et signalée), le classement correct des
    crest factors et le déterminisme ;
  - publier le taux de réussite dans la section méthode, par exemple « testé sur N signaux de
    référence ». C'est un argument fort devant un jury.

---

## 5. Rigueur scientifique : règles

1. Chaque affirmation affichée porte un badge de niveau de preuve :
   - 🟢 **Solide** : plusieurs études ou une méta-analyse concordantes ;
   - 🟡 **Modéré** : des études, mais des effets variables selon les personnes ;
   - 🔴 **Exploratoire** : peu d'études, ou extrapolation.
2. Section « **Comment on mesure** » sur la landing :
   - ce qu'on mesure (objectif) ;
   - ce qu'on en déduit (avec niveau de preuve) ;
   - **ce qu'on ne peut PAS savoir** : ton volume, ta durée d'écoute, si tu aimes le morceau
     (qui compte souvent plus que le tempo).
3. Sources. N'utiliser **que** des références vérifiées. Vérifie chaque référence (auteurs,
   année, revue, conclusion réelle) avant de l'afficher ; si tu ne peux pas la vérifier, ne la
   cite pas. Références candidates :
   - Course et tempo : Karageorghis & Priest (2012), revue sur la musique dans le sport ;
     Van Dyck et al. (2015), entraînement de la cadence de course au tempo.
   - Sommeil : revue Cochrane de Jespersen et al. sur la musique et l'insomnie (version la plus
     récente).
   - Plaisir et récompense : Salimpoor et al. (2011, *Nature Neuroscience*) ; Ferreri et al.
     (2019, *PNAS*). À utiliser pour dire que **l'appréciation personnelle compte**.
   - Entraînement neural au rythme : Nozaradan et al. (2011, *J. Neurosci.*).
   - Écoute sûre : OMS, *Make Listening Safe* et standard mondial pour l'écoute sûre (2022).
   - Loudness : ITU-R BS.1770, EBU R128.
4. Pas de chiffre précis inventé. Pas de « % d'hormones ».

---

## 6. Copywriting et marque
- Nom : **[À CONFIRMER : garder « ZenHertz »]**. Si on le garde, ne plus parler d'ondes
  cérébrales ni de fréquences de guérison.
- Supprimer : hormones, ondes cérébrales, 432 Hz, « bioacoustique », « neuro-acoustique ».
- Garder : gratuit, sans compte, 100 % local, rapide, honnête (« on te dit aussi ce qu'on ne
  sait pas »).
- Disclaimer court, visible sous chaque rapport : *« Outil indicatif, pas un avis médical. »*

---

## 7. Publicité, légal, RGPD

### 7.1 Emplacements publicitaires
- Créer un composant `AdSlot` réutilisable, configuré dans un seul fichier `ads.config.js`
  (activé ou non, type, contenu).
- Emplacements, tous **non bloquants**, **clairement libellés « Publicité »**, avec une taille
  réservée pour éviter les décalages de mise en page :
  1. sous le rapport (après le verdict et les cartes, jamais avant) ;
  2. entre deux sections de la landing ;
  3. dans le footer.
- **Jamais** de publicité pendant l'analyse, en pop-up, ni sur l'image partagée.
- Mode **[À CONFIRMER : par défaut « placeholder »]** :
  - `placeholder` : encart « Votre marque ici — contact » (vente directe, sans cookie) ;
  - `house` : promotion interne ou affiliation simple sans traceur ;
  - `adsense` : charger le script **uniquement après consentement**, via une bannière de
    consentement conforme CNIL (refuser aussi simple qu'accepter). Sans consentement, rien n'est
    chargé.

### 7.2 Mentions légales et confidentialité (FR/EN) à réécrire
- Éditeur **[À CONFIRMER : nom / contact]**.
- Fichiers audio : jamais envoyés, traités localement.
- Données collectées : e-mail de la liste d'attente et feedback, avec leur finalité, le
  prestataire, la durée de conservation et le contact pour suppression.
- Cookies et publicité selon le mode retenu.
- Droit d'auteur : l'outil n'héberge, ne copie ni ne diffuse aucune œuvre. Seules des mesures
  (faits) sont calculées. L'image de partage ne contient ni pochette ni extrait audio, seulement
  le titre et les mesures.

---

## 8. Design
- Mobile d'abord (360 px), puis tablette et desktop. Aucun scroll horizontal.
- Clair et sombre via des tokens CSS sur `:root`. Respecter `prefers-color-scheme` et
  `prefers-reduced-motion`.
- Accessibilité :
  - contrastes AA ;
  - zone de dépôt utilisable au clavier ;
  - `aria-live` sur la progression ;
  - libellés explicites ;
  - les couleurs des badges de preuve ne sont jamais la seule information (icône + texte).
- Style : sobre et moderne. On garde l'identité violette actuelle mais on l'épure (moins
  d'effets gadgets). La lisibilité du rapport passe avant tout.
- La carte de partage (PNG) doit être lisible en story : titre, verdict, 4 usages, logo et URL.

---

## 9. Contraintes techniques
- Site **statique**, déployé sur Vercel, **sans étape de build** **[À CONFIRMER]**. HTML, CSS et
  JS en modules ES natifs. Découper `app.js` (≈ 1 500 lignes) en modules :
  - `i18n.js` ;
  - `ui.js` ;
  - `decode.js` (décodage, FFmpeg, iOS) ;
  - `worker/analyze.worker.js` ;
  - `dsp/tempo.js`, `dsp/loudness.js`, `dsp/spectrum.js` ;
  - `scoring.js`, `report.js`, `share.js`, `ads.js`, `forms.js`.
- Dépendances externes : versions **épinglées**. FFmpeg.wasm chargé **à la demande** seulement.
  html2canvas, ou dessin direct sur `<canvas>` pour la carte de partage (préféré, plus fiable).
- Mettre à jour `_headers` et la config Vercel si nécessaire (les headers COOP/COEP ne doivent
  pas casser le chargement FFmpeg ni les publicités).
- Aucune donnée audio ne quitte l'appareil. Vérifier dans l'onglet réseau.

---

## 10. Critères d'acceptation (à vérifier avant de livrer)
- [ ] Un utilisateur sur iPhone Safari et sur Android Chrome dépose un MP3, obtient un rapport
      en moins de 15 s et peut le partager.
- [ ] Le mode 2 morceaux produit un comparatif avec un gagnant par usage.
- [ ] Même fichier analysé deux fois → rapport identique.
- [ ] Plus aucune mention d'hormones, d'ondes cérébrales, de 432 Hz ni de citations inexactes
      (`grep -ri "hormon\|delta\|thêta\|theta\|gamma\|432\|cortisol\|dopamine"` ne trouve que
      les sections explicatives autorisées).
- [ ] Chaque affirmation du rapport porte un badge de preuve, et chaque source citée est vérifiée.
- [ ] Les formulaires livrent réellement les messages, et un échec affiche une erreur.
- [ ] Les emplacements pub s'affichent, sont libellés et ne décalent pas la mise en page. Aucun
      script tiers n'est chargé sans consentement.
- [ ] Les tests synthétiques passent (`node tests/run.js`) et leur résultat est affiché dans la
      section méthode.
- [ ] Lighthouse mobile : performance ≥ 85, accessibilité ≥ 95.
- [ ] Les versions FR et EN sont complètes, sans clé manquante.

## 11. Méthode de travail
1. Lire tout le code existant avant de modifier.
2. Commencer par le moteur et ses tests (§4), puis le scoring, puis l'interface.
3. Faire de petits commits explicites. Pousser sur la branche de travail désignée. Pas de PR
   sans demande.
4. À la fin, livrer un résumé : ce qui a changé, ce qui reste à faire, les limites connues, et
   un script de démo de 2 minutes pour le jury.
