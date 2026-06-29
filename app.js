/* ══ TRANSLATIONS ══ */
const TR = {
  fr:{
    homeBtn:'Accueil',
    tagline:'Découvrez l\'impact de votre musique sur votre <span style="color:#7c3aed;font-weight:600">système nerveux</span> et vos <span style="color:#a855f7;font-weight:600">ondes cérébrales</span>.',
    uplbl:'Analyser un fichier', wlbl:'Onde',
    scanning:'Scan bioacoustique…', analyzinglbl:'Analyse en cours',
    neuroprofile:'Profil Neuro-acoustique', hormones:'Tableau Hormonal Estimé',
    disclaimer:'BPM détecté par autocorrélation multi-bande (kick + snare) ; fréquences par détection de pics spectraux (FFT). Résultats à visée informative — ne constituent pas un diagnostic médical.',
    back:'← Analyser un autre morceau', share:'Partager le bilan', capturing:'Capture...', copyBtn:'Copier',
    landH1fr:'Ta musique impacte ton cerveau.', landH1em:'Découvrez comment.',
    landSub:'ZenHertz analyse les fréquences de ta musique et révèle son impact sur tes ondes cérébrales, tes hormones et ton système nerveux en quelques secondes.',
    landCta:'Analyser ma musique', landCtaSub:'Gratuit · Aucune inscription · Tous formats',
    landHow:'Comment ça marche ?',
    step1T:'Importe ton son', step1D:'Dépose n\'importe quel fichier audio ou vidéo directement depuis ta galerie ou ton ordinateur.',
    step2T:'Analyse instantanée', step2D:'Notre moteur bioacoustique analyse le kick et la caisse claire séparément, détecte les pics Hz réels et classe tes ondes cérébrales.',
    step3T:'Ton profil neuro-acoustique', step3D:'Découvre l\'impact hormonal, l\'état cérébral induit et si ton écoute prolongée est sûre ou stimulante.',
    feat1T:'iOS · Android · PC', feat1D:'Fonctionne sur tous les appareils, sans installation.',
    feat2T:'100% dans le navigateur', feat2D:'Aucun upload vers un serveur. Tes fichiers restent sur ton appareil.',
    feat3T:'Basé sur la science', feat3D:'Autocorrélation multi-bande, FFT 32k points, scoring harmonique — moteur inspiré d\'Essentia.',
    statFormats:'Formats', statWaves:'Ondes cérébrales', statHorm:'Hormones',
    sciLink:'Comment ça marche ?', legalLink:'Mentions légales',
    ecTitle:'ZenHertz arrive officiellement', ecSub:'Soyez informés de la sortie officielle  zéro spam, juste une notification.',
    ecPh:'votre@email.com', ecBtn:"M'avertir", ecConfirm:'✓ Vous serez notifié à la sortie !',
    feedbackBtn:'Feedback', fbTitle:'Votre avis compte', fbSub:'Bug, idée, suggestion? On lit tout',
    fbPh:'Décrivez votre expérience, un bug, une idée...', fbEmailPh:'Votre email (optionnel)',
    fbSend:'Envoyer', fbConfirm:'✓ Merci ! On a bien reçu votre message.',
    fLow:'✓ Écoute prolongée : sûre et régénératrice',
    fMid:'→ Écoute prolongée : modérément stimulante',
    fHigh:'⚠ Écoute prolongée : risque de fatigue nerveuse',
    conseil:'Conseil',
    errFile:'Fichier audio illisible ou non supporté. Essayez un autre fichier (MP3, WAV, MP4…).',
    effectsTitle:'Effets ressentis estimés',
    wnames:{delta:'Delta',theta:'Thêta',alpha:'Alpha',beta:'Bêta',gamma:'Gamma'},
    tags:{sleep:'💤 Sommeil profond',meditate:'🧘 Méditation',create:'✨ Créativité',focus:'🧠 Focus doux',cardiac:'🫀 Cohérence cardiaque',active:'⚡ Éveil actif',perf:'💪 Performance',hstim:'🔥 Haute stimulation',cogn:'⚡ Cognition intense',vagus:'🫀 Nerf vague stimulé',sport:'🏃 Sport / Effort',fatigue:'⚠ Fatigue si prolongé',vibra:'🌊 Vibration profonde'},
    h:{dopamine:['Dopamine','Motivation & Récompense'],cortisol:['Cortisol','Stress & Vigilance'],serotonin:['Sérotonine','Humeur & Bien-être'],melatonin:['Mélatonine','Sommeil & Récupération'],endorphins:['Endorphines','Euphorie & Analgésie'],adr:['Adrénaline','Éveil & Réactivité']},
    hlvl:['Faible','Modéré','Élevé'],
    conclus:{delta:'Privilégiez ce son pour une phase de récupération totale ou avant le sommeil.',theta:'Ce profil est parfait pour les phases de création ou de visualisation mentale.',alpha:'L\'équilibre idéal pour une session d\'étude ou de travail calme.',beta:'Utilisez cette énergie pour vos entraînements physiques ou vos besoins de motivation.',gamma:'Attention : ce niveau de stimulation est à réserver aux efforts explosifs de courte durée.'}
  },
  en:{
    homeBtn:'Home',
    tagline:'Discover the impact of your music on your <span style="color:#7c3aed;font-weight:600">nervous system</span> and your <span style="color:#a855f7;font-weight:600">brainwaves</span>.',
    uplbl:'Analyze a file', wlbl:'Wave',
    scanning:'Bioacoustic scan…', analyzinglbl:'Analysis in progress',
    neuroprofile:'Neuro-acoustic Profile', hormones:'Estimated Hormonal Dashboard',
    disclaimer:'BPM detected via multi-band onset autocorrelation (kick + snare); frequencies via spectral peak detection (FFT). For informational purposes only — not a medical diagnosis.',
    back:'← Analyze another track', share:'Share Results', capturing:'Capturing...', copyBtn:'Copy',
    landH1fr:'Your music impacts your brain.', landH1em:'Find out how.',
    landSub:'ZenHertz analyzes your music\'s frequencies and reveals its impact on your brain waves, hormones and nervous system in seconds.',
    landCta:'Analyze my music', landCtaSub:'Free · No sign-up · All formats',
    landHow:'How does it work?',
    step1T:'Import your track', step1D:'Drop any audio or video file directly from your gallery or computer.',
    step2T:'Instant analysis', step2D:'Our bioacoustic engine analyses kick and snare separately, detects real spectral Hz peaks and classifies your brain waves.',
    step3T:'Your neuro-acoustic profile', step3D:'Discover the hormonal impact, induced brain state and whether extended listening is safe or stimulating.',
    feat1T:'iOS · Android · PC', feat1D:'Works on all devices, no installation needed.',
    feat2T:'100% in-browser', feat2D:'No upload to any server. Your files stay on your device.',
    feat3T:'Science-based', feat3D:'Multi-band autocorrelation, 32k-point FFT, harmonic scoring — engine inspired by Essentia.',
    statFormats:'Formats', statWaves:'Brain waves', statHorm:'Hormones',
    sciLink:'How it works', legalLink:'Legal notices',
    ecTitle:'ZenHertz launching officially', ecSub:'Get notified at official launch zero spam, just one notification.',
    ecPh:'your@email.com', ecBtn:'Notify me', ecConfirm:'✓ You will be notified at launch!',
    feedbackBtn:'Feedback', fbTitle:'Your feedback matters', fbSub:'Bug, idea, suggestion we read everything',
    fbPh:'Describe your experience, a bug, an idea...', fbEmailPh:'Your email (optional)',
    fbSend:'Send', fbConfirm:'✓ Thanks! We received your message.',
    fLow:'✓ Extended listening: safe & regenerative',
    fMid:'→ Extended listening: moderately stimulating',
    fHigh:'⚠ Extended listening: risk of neural fatigue',
    conseil:'Insight',
    errFile:'Could not read this audio file. Try another file (MP3, WAV, MP4…).',
    effectsTitle:'Estimated felt effects',
    wnames:{delta:'Delta',theta:'Theta',alpha:'Alpha',beta:'Beta',gamma:'Gamma'},
    tags:{sleep:'💤 Deep sleep',meditate:'🧘 Meditation',create:'✨ Creativity',focus:'🧠 Soft focus',cardiac:'🫀 Cardiac coherence',active:'⚡ Active wakefulness',perf:'💪 Performance',hstim:'🔥 High stimulation',cogn:'⚡ Intense cognition',vagus:'🫀 Vagus nerve stimulated',sport:'🏃 Sport / Effort',fatigue:'⚠ Fatigue risk',vibra:'🌊 Deep vibration'},
    h:{dopamine:['Dopamine','Motivation & Reward'],cortisol:['Cortisol','Stress & Alertness'],serotonin:['Serotonin','Mood & Wellbeing'],melatonin:['Melatonin','Sleep & Recovery'],endorphins:['Endorphins','Euphoria & Pain Relief'],adr:['adrenaline','Arousal & Reflexes']},
    hlvl:['Low','Moderate','High'],
    conclus:{delta:'Reserve this sound for total recovery phases or use before sleep.',theta:'This profile is ideal for creative work or mental visualization sessions.',alpha:'The perfect balance for study sessions or calm focused work.',beta:'Channel this energy for physical training or motivation-driven tasks.',gamma:'Caution: this stimulation level should be reserved for short explosive efforts.'}
  }
};

let lang='fr', theme='light', lastBpm=null, lastHz=null;
let lastBands=null, lastRms=0.15, lastVar=0.1, lastEffects=[], lastPeaks=null;
const L = k => TR[lang][k] ?? TR.fr[k];
const S = id => document.getElementById(id);

function applyLang(){
  document.documentElement.setAttribute('data-lang',lang);
  S('llbl').textContent=lang.toUpperCase();
  document.querySelectorAll('[data-i]').forEach(el=>{
    const v=L(el.dataset.i); if(v!==undefined) el.innerHTML=v;
  });
  document.querySelectorAll('[data-i-ph]').forEach(el=>{
    const v=L(el.dataset.iPh); if(v) el.placeholder=v;
  });
  // Wave bar labels (hardcoded in HTML, must be updated on lang toggle)
  const wlblBar=document.getElementById('wlbl-bar');
  if(wlblBar){
    const wn=L('wnames');
    const spans=wlblBar.querySelectorAll('span');
    ['delta','theta','alpha','beta','gamma'].forEach((k,i)=>{ if(spans[i]) spans[i].textContent=wn[k]; });
  }
  if(lastBpm!==null){
    renderHormones(lastBpm,lastHz,lastRms,lastVar);
    if(lastEffects.length){ const d=S('rdesc'); if(d) d.innerHTML=summaryFromEffects(lastEffects); }
  }
}

function toggleLang(){ lang=lang==='fr'?'en':'fr'; applyLang(); }
function toggleTheme(){
  theme=theme==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',theme);
  S('thbtn').textContent=theme==='dark'?'☀️':'🌙';
  document.getElementById('meta-theme-color').content=theme==='dark'?'#04040e':'#eeeef5';
}
function showAlert(msg){ S('alert-box').style.display='block'; S('alert-msg').textContent=msg; }
function hideAlert(){ S('alert-box').style.display='none'; }

function goLanding(){
  S('sc-result').classList.add('hidden');
  S('sc-analyzing').classList.add('hidden');
  S('sc-ready').classList.add('hidden');
  S('sc-landing').classList.remove('hidden');
  S('home-btn').style.display='none';
  const wave=document.getElementById('zh-wave');
  if(wave) wave.style.display='flex';
  window.scrollTo({top:0,behavior:'smooth'});
}

function showTool(){
  S('sc-landing').classList.add('hidden');
  S('sc-ready').classList.remove('hidden');
  S('home-btn').style.display='flex';
  window.scrollTo({top:0,behavior:'smooth'});
}

function goHome(){
  lastBpm=null; lastHz=null; lastBands=null; lastEffects=[]; lastPeaks=null;
  S('audio-input').value='';
  hideAlert();
  S('rbpm').innerText='—'; S('rhz').innerText='—'; S('rwave').innerText='—';
  S('rname').innerText=''; S('rdesc').innerHTML=''; S('rtags').innerHTML='';
  const re=S('reffects'); if(re) re.innerHTML='';
  S('hgauges').innerHTML=''; S('ffill').style.width='0%'; S('flbl').innerText='';
  S('hbdot').style.animation='';
  ['wd','wt','wa','wb','wg'].forEach(id=>S(id).classList.remove('on'));
  S('sc-result').classList.add('hidden');
  S('sc-analyzing').classList.add('hidden');
  S('sc-ready').classList.remove('hidden');
  S('sc-landing').classList.add('hidden');
  S('home-btn').style.display='flex';
  const wave=document.getElementById('zh-wave');
  if(wave) wave.style.display='flex';
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ══ MOUSE MESH ══ */
document.addEventListener('mousemove', e=>{
  const x=(e.clientX/window.innerWidth-.5)*70, y=(e.clientY/window.innerHeight-.5)*70;
  S('b1').style.transform=`translate(${x*.7}px,${y*.7}px)`;
  S('b2').style.transform=`translate(${-x*.55}px,${-y*.55}px)`;
  S('b3').style.transform=`translate(calc(-50% + ${x*.35}px),calc(-50% + ${y*.35}px))`;
});

/* ══ WORD TYPEWRITER ══ */
function typeWords(el,html,ms=75){
  if(!el||!el.parentNode) return;
  const tmp=document.createElement('div'); tmp.innerHTML=html;
  const words=tmp.textContent.split(' ');
  let i=0;
  el.innerHTML='';
  // One growing text node + a trailing cursor (no per-tick node accumulation).
  const textNode=document.createTextNode('');
  const cur=document.createElement('span'); cur.className='cur';
  el.appendChild(textNode); el.appendChild(cur);
  function next(){
    // Stop silently if this typewriter was superseded (rdesc re-rendered by a
    // new analysis or a language toggle removed the cursor node).
    if(!el||!el.parentNode||cur.parentNode!==el) return;
    if(i<words.length){
      textNode.textContent=words.slice(0,i+1).join(' ')+' ';
      i++; setTimeout(next,ms+Math.random()*28);
    } else { el.innerHTML=html; }
  }
  next();
}

/* ══ DYNAMIC BILINGUAL EFFECTS ══
   3–5 short, realistic, bilingual (FR + EN) effects generated from the actual
   BPM range and the detected frequency-band character. Small randomisation
   keeps repeats of similar tracks feeling slightly different. */
const EFFECTS = {
  tempo: {
    calm: [
      {fr:`À %B% BPM, votre cœur ralentit doucement pour suivre le rythme : le corps glisse en mode repos.`,
       en:`At %B% BPM, your heart slows to follow the beat as your body slips into rest mode.`},
      {fr:`Ce tempo lent de %B% BPM laisse la respiration et le pouls s'apaiser ensemble.`,
       en:`This slow %B% BPM tempo lets your breathing and pulse settle together.`},
      {fr:`À %B% BPM, le rythme cardiaque tend à se caler sur la musique et redescend naturellement.`,
       en:`At %B% BPM, your heart rate tends to sync with the music and naturally winds down.`}
    ],
    baseline: [
      {fr:`À %B% BPM, votre fréquence cardiaque reste proche de son rythme de repos, ni poussée ni freinée.`,
       en:`At %B% BPM, your heart rate stays near its resting pace, neither pushed nor slowed.`},
      {fr:`Ce tempo de %B% BPM accompagne le pouls sans le bousculer : un équilibre confortable.`,
       en:`This %B% BPM tempo rides along with your pulse without rushing it — a comfortable balance.`},
      {fr:`À %B% BPM, le corps trouve un rythme naturel, proche d'une marche tranquille.`,
       en:`At %B% BPM, your body settles into a natural rhythm, close to an easy walking pace.`}
    ],
    focus: [
      {fr:`À %B% BPM, le pouls s'élève légèrement pour suivre la cadence : une vigilance douce s'installe.`,
       en:`At %B% BPM, your pulse lifts slightly to match the pace, easing you into light alertness.`},
      {fr:`Ce tempo de %B% BPM pousse gentiment le rythme cardiaque vers le haut, propice à la concentration.`,
       en:`This %B% BPM tempo nudges your heart rate up just enough to favour focus.`},
      {fr:`À %B% BPM, la musique entraîne le corps vers un éveil actif mais maîtrisé.`,
       en:`At %B% BPM, the music draws your body toward active but controlled wakefulness.`}
    ],
    energy: [
      {fr:`À %B% BPM, le rythme cardiaque grimpe pour suivre le beat : le corps passe en mode action.`,
       en:`At %B% BPM, your heart rate climbs to keep up with the beat as your body shifts into action mode.`},
      {fr:`Ce tempo soutenu de %B% BPM accélère le pouls et prépare l'organisme à l'effort.`,
       en:`This driving %B% BPM tempo speeds up your pulse and primes the body for effort.`},
      {fr:`À %B% BPM, la cadence tire la fréquence cardiaque vers le haut, idéale pour bouger.`,
       en:`At %B% BPM, the pace pulls your heart rate upward — great for moving.`}
    ],
    intense: [
      {fr:`À %B% BPM, le rythme cardiaque est poussé haut pour tenir la cadence : mobilisation maximale.`,
       en:`At %B% BPM, your heart rate is pushed high to hold the pace — full mobilisation.`},
      {fr:`Ce tempo très rapide de %B% BPM emballe le pouls, comme lors d'un sprint.`,
       en:`This very fast %B% BPM tempo races your pulse, much like a sprint.`},
      {fr:`À %B% BPM, le corps bascule en haute intensité, proche de la réponse « combat ou fuite ».`,
       en:`At %B% BPM, your body tips into high intensity, close to a fight-or-flight response.`}
    ]
  },
  hormone: {
    calm: [
      {fr:`Le cortisol (hormone du stress) tend à baisser tandis que la mélatonine monte : sensation calme, presque endormie.`,
       en:`Cortisol (the stress hormone) tends to drop while melatonin rises, leaving a calm, almost sleepy feeling.`},
      {fr:`Ce rythme favorise la détente : moins de stress, plus de récupération.`,
       en:`This rhythm favours relaxation: less stress, more recovery.`},
      {fr:`Le système nerveux passe en mode « repos » et invite le corps à relâcher les tensions.`,
       en:`Your nervous system shifts into "rest" mode, inviting the body to release tension.`}
    ],
    baseline: [
      {fr:`Les hormones restent globalement équilibrées : ni coup de fouet, ni grosse fatigue.`,
       en:`Your hormones stay broadly balanced — no rush, no crash.`},
      {fr:`L'humeur reste stable, sans pic notable de stress ni d'excitation.`,
       en:`Mood stays steady, with no notable spike of stress or excitement.`},
      {fr:`Un état neutre où le corps n'est ni stimulé ni endormi.`,
       en:`A neutral state where the body is neither revved up nor lulled down.`}
    ],
    focus: [
      {fr:`La dopamine (motivation) augmente un peu, créant une sensation de concentration agréable.`,
       en:`Dopamine (motivation) rises a little, producing a pleasant, focused feeling.`},
      {fr:`Une légère poussée d'adrénaline réveille l'attention sans créer de stress.`,
       en:`A mild adrenaline bump sharpens attention without tipping into stress.`},
      {fr:`Le cerveau se met en condition pour travailler : motivation douce, esprit clair.`,
       en:`Your brain gets into working condition: gentle motivation, clear mind.`}
    ],
    energy: [
      {fr:`La dopamine et l'adrénaline montent nettement : énergie et envie de bouger.`,
       en:`Dopamine and adrenaline rise clearly, bringing energy and the urge to move.`},
      {fr:`Le cortisol grimpe un peu aussi : le corps est sous tension positive, prêt à l'effort.`,
       en:`Cortisol ticks up too: the body is under positive tension, ready for effort.`},
      {fr:`Cocktail stimulant typique des séances de sport : motivation haute et réactivité accrue.`,
       en:`A stimulating mix typical of workouts: high motivation and quicker reactions.`}
    ],
    intense: [
      {fr:`L'adrénaline explose et le cortisol grimpe fort : le corps est en alerte maximale.`,
       en:`Adrenaline surges and cortisol climbs hard — the body is on peak alert.`},
      {fr:`Les endorphines se libèrent, ce « second souffle » qui aide à encaisser l'intensité.`,
       en:`Endorphins release — the "second wind" that helps you ride the intensity.`},
      {fr:`Stimulation extrême : galvanisant sur le moment, fatigant si l'écoute se prolonge.`,
       en:`Extreme stimulation: galvanising in the moment, tiring if listening goes on.`}
    ]
  },
  freq: {
    sub: [
      {fr:`Les sub-graves (20–60 Hz) se ressentent physiquement : une vibration dans le corps, parfois une légère tension.`,
       en:`The sub-bass (20–60 Hz) is felt physically — a vibration through the body, sometimes a slight tension.`},
      {fr:`Ces fréquences très basses agissent autant sur la peau et la poitrine que sur les oreilles.`,
       en:`These very low frequencies act on your skin and chest as much as your ears.`}
    ],
    bass: [
      {fr:`Les basses (60–250 Hz) apportent une chaleur qui résonne dans la poitrine : sensation pleine et rassurante.`,
       en:`The bass (60–250 Hz) brings a warmth that resonates in the chest — a full, reassuring feel.`},
      {fr:`Un grave généreux qui « enveloppe » et ancre l'écoute sans fatiguer.`,
       en:`A generous low end that wraps around you and grounds the listen without tiring.`}
    ],
    bright: [
      {fr:`Les aigus marqués (2 kHz et plus) gardent l'esprit en alerte ; sur la durée, ils peuvent fatiguer l'oreille.`,
       en:`The bright highs (2 kHz and up) keep the mind alert; over time they can tire the ears.`},
      {fr:`Beaucoup d'énergie dans les hautes fréquences : vif et détaillé, mais stimulant si prolongé.`,
       en:`Lots of energy up high: crisp and detailed, but stimulating if it goes on too long.`}
    ],
    balanced: [
      {fr:`Le spectre est équilibré entre graves et aigus : un son confortable, facile à écouter longtemps.`,
       en:`The spectrum is balanced between lows and highs — a comfortable sound, easy on long listens.`},
      {fr:`Aucune bande de fréquences ne domine : l'écoute reste naturelle et reposante.`,
       en:`No single frequency band dominates, so the listen stays natural and easy.`}
    ]
  }
};

function pick(a){ return a[Math.floor(Math.random() * a.length)]; }

function effectKeyForBpm(bpm){
  if (!(bpm > 0) || !isFinite(bpm)) return 'baseline';
  if (bpm < 70)  return 'calm';
  if (bpm < 90)  return 'baseline';
  if (bpm < 120) return 'focus';
  if (bpm < 140) return 'energy';
  return 'intense';
}

function dominantBand(bands, peaks){
  // Strongest spectral peak gives the most precise characterisation
  if (peaks && peaks.length > 0){
    const f = peaks[0];
    if (f < 60)   return 'sub';
    if (f < 250)  return 'bass';
    if (f >= 2000) return 'bright';
    return 'balanced';
  }
  if (!bands) return 'balanced';
  const sub = bands.sub || 0, bass = bands.bass || 0, bright = bands.bright || 0;
  if (sub >= 0.18) return 'sub';
  if (bright >= 0.30 && bright >= bass) return 'bright';
  if (bass >= 0.28) return 'bass';
  return 'balanced';
}

/* Returns an array of 3–5 { fr, en } effects for the given BPM + band profile. */
function generateEffects(bpm, bands, peaks){
  const b  = Math.round(bpm > 0 && isFinite(bpm) ? bpm : 0);
  const bk = effectKeyForBpm(b);
  const fk = dominantBand(bands, peaks);
  const fill = s => s.replaceAll('%B%', b || '—');

  const tempo   = pick(EFFECTS.tempo[bk]);
  const hormone = pick(EFFECTS.hormone[bk]);
  const freq    = pick(EFFECTS.freq[fk]);
  const out = [tempo, hormone, freq];

  // Richer ranges get an extra (distinct) hormonal nuance, sometimes.
  if ((bk === 'focus' || bk === 'energy' || bk === 'intense') && Math.random() < 0.7){
    let extra = pick(EFFECTS.hormone[bk]), guard = 0;
    while (extra === hormone && guard++ < 4) extra = pick(EFFECTS.hormone[bk]);
    if (extra !== hormone) out.push(extra);
  }
  return out.slice(0, 5).map(e => ({ fr: fill(e.fr), en: fill(e.en) }));
}

/* Short current-language summary (used on the left card + when sharing). */
function summaryFromEffects(effects){
  if (!effects || !effects.length) return '';
  const txt = effects.slice(0, 2).map(e => (lang === 'en' ? e.en : e.fr)).join(' ');
  const c = (L('conclus')[getWave(lastBpm)]) || '';
  return `${txt}<br><br><strong style="color:#7c3aed">${L('conseil')} :</strong> ${c}`;
}

function generateTags(bpm,hz,wt){
  const vB=bpm>0&&isFinite(bpm),vH=hz>0&&isFinite(hz);
  const T=L('tags'); const out=[];
  if(wt==='delta')out.push({k:'sleep',t:'s'});
  if(wt==='theta')out.push({k:'meditate',t:'s'},{k:'create',t:''});
  if(wt==='alpha')out.push({k:'focus',t:''},{k:'cardiac',t:'s'});
  if(wt==='beta') out.push({k:'active',t:''},{k:'perf',t:''});
  if(wt==='gamma')out.push({k:'hstim',t:'w'},{k:'cogn',t:''});
  if(vB&&bpm<80)  out.push({k:'vagus',t:'s'});
  if(vB&&bpm>130) out.push({k:'sport',t:''});
  if(vH&&hz>3000) out.push({k:'fatigue',t:'w'});
  if(vH&&hz<600)  out.push({k:'vibra',t:'s'});
  return out.slice(0,4).map(o=>`<span class="tag ${o.t}">${T[o.k]}</span>`).join('');
}

/* Fatigue score 0–100. Based on parameters professional MIR tools (Essentia,
   AcousticBrainz) use: bright-band energy (cochlear hair cells at 3–6 kHz
   fatigue fastest), RMS loudness, dynamic range (low variance = brick-wall
   mastering = more fatiguing), extreme BPM (>155 only), dominant Hz peak
   in the harsh 3–8 kHz band. Moderate dance tempos are NOT a fatigue risk. */
function fatigueScore(bpm, hz, bands, rms, variance, peaks){
  let s = 0;
  const br = (bands && bands.bright) || 0;
  if      (br > 0.48) s += 45;
  else if (br > 0.38) s += 25;
  else if (br > 0.28) s += 10;

  const r = isFinite(rms) ? Math.min(rms, 0.5) : 0.15;
  if      (r > 0.35) s += 20;
  else if (r > 0.25) s += 10;

  const v = isFinite(variance) ? variance : 0.1;
  if      (v < 0.03) s += 20;
  else if (v < 0.06) s += 10;

  if      (bpm > 165) s += 20;
  else if (bpm > 155) s += 10;

  if (peaks && peaks.length > 0){
    const p = peaks[0];
    if      (p >= 3000 && p <= 8000) s += 20;
    else if (p >= 2000 && p < 3000)  s += 10;
  } else if (hz > 3500) {
    s += 15;
  }
  return Math.min(s, 100);
}

const HCOL={dopamine:'linear-gradient(90deg,#7c3aed,#a855f7)',cortisol:'linear-gradient(90deg,#f59e0b,#ef4444)',serotonin:'linear-gradient(90deg,#10b981,#059669)',melatonin:'linear-gradient(90deg,#6366f1,#4338ca)',endorphins:'linear-gradient(90deg,#ec4899,#db2777)',adr:'linear-gradient(90deg,#f59e0b,#d97706)'};

function calcHormones(bpm,hz,rms,signalVariance){
  const b=bpm>0&&isFinite(bpm)?bpm:100;
  const h=hz>0&&isFinite(hz)?hz:1200;
  const r=isFinite(rms)?Math.min(rms,0.5):0.15;
  const v=isFinite(signalVariance)?Math.min(signalVariance,0.25):0.1;

  let d=18;
  if(b>=95&&b<=145) d+=Math.min(48,(b-95)*0.97);
  else if(b>145) d+=Math.max(0,48-(b-145)*0.8);
  if(h>=900&&h<=3800) d+=14;
  if(v>=0.05&&v<=0.14) d+=15;
  if(v>0.18) d-=10;
  if(r>0.2) d+=8;

  let c=10;
  if(b>125) c+=Math.min(52,(b-125)*1.4);
  if(h>2800) c+=Math.min(22,(h-2800)/120);
  if(v>0.15) c+=Math.min(18,v*90);
  if(r>0.28) c+=12;
  if(b<85&&r<0.12) c=Math.max(8,c-20);

  let s=18;
  if(b>=72&&b<=118) s+=40;
  else if(b<72) s+=25;
  else if(b>118&&b<150) s+=Math.max(0,40-(b-118)*1.2);
  if(h<1600) s+=18;else if(h<3200) s+=7;
  if(v<0.08) s+=15;
  if(v>0.16) s-=12;
  if(r>=0.05&&r<=0.2) s+=8;

  let m=8;
  if(b<82) m+=Math.min(55,(82-b)*1.6);
  if(h<900) m+=22;else if(h<1600) m+=10;
  if(v<0.06) m+=18;
  if(r<0.1) m+=12;
  if(b>120) m=Math.max(4,m-(b-120)*0.8);
  if(v>0.14||r>0.25) m=Math.max(4,m-15);

  let e=14;
  if(b>128) e+=Math.min(45,(b-128)*1.1);
  if(b<68) e+=28;
  if(h<700) e+=16;
  if(r>0.22&&b>120) e+=15;
  if(v>0.14&&b>130) e+=10;

  let n=10;
  if(b>138) n+=Math.min(55,(b-138)*1.6);
  if(h>3200) n+=20;
  if(v>0.14) n+=Math.min(20,v*100);
  if(r>0.25) n+=15;
  if(b<90&&v<0.08) n=Math.max(8,n-15);

  const cap=val=>Math.round(Math.min(95,Math.max(4,val)));
  return{dopamine:cap(d),cortisol:cap(c),serotonin:cap(s),melatonin:cap(m),endorphins:cap(e),adr:cap(n)};
}

function renderHormones(bpm,hz,rms,signalVariance){
  const vals=calcHormones(bpm,hz,rms,signalVariance);const hl=L('h');const lvls=L('hlvl');
  S('hgauges').innerHTML=Object.entries(vals).map(([k,v])=>{
    const info=hl[k]||[k,''];const lvl=v<35?lvls[0]:v<65?lvls[1]:lvls[2];
    const tr=v>=65?'↑':v<=34?'↓':'→';
    return`<div class="hitem"><div class="hrow"><div><span class="hname">${info[0]}</span><span class="hdesc">${info[1]}</span></div><span class="hval">${v}% <span class="hlvl">${tr} ${lvl}</span></span></div><div class="hbg"><div class="hfill" style="background:${HCOL[k]}" data-w="${v}"></div></div></div>`;
  }).join('');
  setTimeout(()=>S('hgauges').querySelectorAll('.hfill').forEach(el=>el.style.width=el.dataset.w+'%'),60);
}

function getWave(bpm){if(!bpm||!isFinite(bpm)||bpm<60)return'delta';if(bpm<80)return'theta';if(bpm<115)return'alpha';if(bpm<155)return'beta';return'gamma';}

/* ══ SHOW RESULTS ══ */
function renderEffects(effects){
  const box = S('reffects');
  if (!box) return;
  box.innerHTML = (effects || []).map(e =>
    `<div class="effitem"><p class="eff-fr">${e.fr}</p><p class="eff-en">${e.en}</p></div>`
  ).join('');
}

function showResults(bpm, hz, label, rms = 0.15, signalVariance = 0.1, bands = null, peaks = null){
  const wt = getWave(bpm);
  const wn = L('wnames');
  S('rname').innerText = (label && label.length > 42) ? label.substring(0, 40) + '…' : (label || '');
  S('rbpm').innerText  = (bpm > 0 && isFinite(bpm)) ? bpm : '—';
  S('rhz').innerText   = formatHzDisplay(peaks, hz);
  S('rwave').innerText = wn[wt];
  ['wd','wt','wa','wb','wg'].forEach(id => S(id).classList.remove('on'));
  S({delta:'wd',theta:'wt',alpha:'wa',beta:'wb',gamma:'wg'}[wt]).classList.add('on');

  lastBpm = bpm; lastHz = hz; lastBands = bands; lastRms = rms; lastVar = signalVariance; lastPeaks = peaks;
  lastEffects = generateEffects(bpm, bands, peaks);

  typeWords(S('rdesc'), summaryFromEffects(lastEffects), 64);
  S('rtags').innerHTML = generateTags(bpm, hz, wt);

  const fs = fatigueScore(bpm, hz, bands, rms, signalVariance, peaks);
  const ff = S('ffill'), fl = S('flbl');
  if (fs >= 60){ ff.style.cssText = `width:${fs}%;background:linear-gradient(90deg,#f59e0b,#ef4444)`; fl.style.color = '#b91c1c'; fl.textContent = L('fHigh'); }
  else if (fs >= 30){ ff.style.cssText = `width:${fs}%;background:linear-gradient(90deg,#a855f7,#7c3aed)`; fl.style.color = '#6d28d9'; fl.textContent = L('fMid'); }
  else { ff.style.cssText = `width:${Math.max(fs, 8)}%;background:linear-gradient(90deg,#10b981,#059669)`; fl.style.color = '#065f46'; fl.textContent = L('fLow'); }

  if (bpm > 0 && isFinite(bpm)) S('hbdot').style.animation = `heartbeat ${(60 / bpm).toFixed(3)}s ease-in-out infinite`;

  renderHormones(bpm, hz, rms, signalVariance);
  renderEffects(lastEffects);

  S('sc-analyzing').classList.add('hidden');
  S('sc-result').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  cachedShareCanvas = null;
  setTimeout(async () => {
    if (typeof html2canvas !== 'function') return;   // optional dependency
    const target = S('rleft');
    const actionsDiv = target.querySelector('.backbtn').parentElement;
    const cur = S('rdesc').querySelector('.cur');
    try {
      actionsDiv.style.display = 'none';
      if (cur) cur.style.display = 'none';
      cachedShareCanvas = await html2canvas(target, {
        backgroundColor: theme === 'dark' ? '#04040e' : '#eeeef5',
        scale: 1, useCORS: true, logging: false
      });
    } catch (_) {
      cachedShareCanvas = null;
    } finally {
      // Always restore the action buttons, even if capture failed.
      if (cur) cur.style.display = '';
      actionsDiv.style.display = 'flex';
    }
  }, 3500);
}

/* ══════════════════════════════════
   FFMPEG.WASM  Décodeur universel
   Single-thread (core-st) : aucun
   header COEP requis, fonctionne
   sur tout navigateur / iOS / Android
══════════════════════════════════ */
let _ffmpegInst=null;
let _ffmpegLoadPromise=null;

function loadFFmpeg(){
  if(_ffmpegInst) return Promise.resolve(_ffmpegInst);
  if(_ffmpegLoadPromise) return _ffmpegLoadPromise;
  _ffmpegLoadPromise=(async()=>{
    if(!window.FFmpeg){
      await new Promise((res,rej)=>{
        const s=document.createElement('script');
        s.src='https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js';
        s.onload=res; s.onerror=rej;
        document.head.appendChild(s);
      });
    }
    const {createFFmpeg}=FFmpeg;
    const ff=createFFmpeg({
      log:false,
      corePath:'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js'
    });
    await ff.load();
    _ffmpegInst=ff;
    return ff;
  })();
  return _ffmpegLoadPromise;
}

async function processViaFFmpeg(file,label){
  const {fetchFile}=FFmpeg;
  const ff=await loadFFmpeg();
  const ext=(file.name.split('.').pop()||'mp4').toLowerCase();
  const inName=`input.${ext}`;

  ff.FS('writeFile',inName,await fetchFile(file));

  await ff.run('-i',inName,'-vn','-ar','44100','-ac','1','-c:a','pcm_s16le','out.wav');

  const raw=ff.FS('readFile','out.wav');
  try{ff.FS('unlink',inName);}catch{}
  try{ff.FS('unlink','out.wav');}catch{}

  if(raw.length<1000) throw new Error('ffmpeg_empty');

  const ab=raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.byteLength);
  await processArrayBuffer(ab,label);
}

/* ══════════════════════════════════
   AUDIO ENGINE — NATIVE DSP BPM DETECTION
══════════════════════════════════ */

/* ── iOS/Safari : AudioContext partagé ── */
let sharedAudioCtx=null;
function getAudioCtx(){
  if(!sharedAudioCtx||sharedAudioCtx.state==='closed'||sharedAudioCtx.state==='interrupted'){
    sharedAudioCtx=new(window.AudioContext||window.webkitAudioContext)();
  }
  return sharedAudioCtx;
}

/* ── Unlock silencieux sur premier geste utilisateur ── */
['click','touchstart'].forEach(evt=>{
  document.addEventListener(evt,()=>{
    const ctx=getAudioCtx();
    if(ctx.state==='suspended') ctx.resume();
  },{once:true,passive:true});
});

/* ── decodeAudioData universel : callback-style supporté par tous (Safari inclus) ── */
function decodeAudioDataUniversal(ctx,ab){
  return new Promise((resolve,reject)=>{
    let p;
    try{ p=ctx.decodeAudioData(ab,resolve,reject); }
    catch(e){ reject(e); return; }
    // Modern decodeAudioData fulfils BOTH the callbacks and a returned promise;
    // swallow the promise rejection so it isn't reported as "unhandled".
    if(p&&typeof p.catch==='function') p.catch(()=>{});
  });
}

/* ══════════════════════════════════════════════════════════════
   BPM ENGINE — onset-strength + autocorrelation (native Web Audio)

   Pipeline (no external libraries, Web Audio API only):
     OfflineAudioContext @ 4000 Hz   (8000 Hz fallback if a browser
                                       refuses sub-8 kHz contexts)
       → BiquadFilter highpass 30 Hz  Q 0.707   (drop sub-bass rumble / DC)
       → BiquadFilter lowpass  100 Hz Q 0.707   (keep the kick band only)
       → 20 ms sliding-window energy envelope
       → half-wave rectified derivative          (onset strength function —
                                                  survives brick-wall limiting)
       → downsample to ~100 Hz
       → 20 s centre segment, subtract DC mean
       → autocorrelation ACF(τ) over lags matching 60–185 BPM
       → pick the lag with the highest correlation
       → octave correction: if BPM > 140 and ACF(2τ) ≥ 0.40·ACF(τ)
                            use 2τ  (folds trap octave-doubling back down)

   TEST CASES this engine is tuned to pass:
     1. Trap, slow tempo ~75–80 BPM ("7 rings" — Ariana Grande):
        previously read 157 (octave doubling). The correction folds 2τ back,
        so it must report ~78, NOT 150–160.
     2. Compressed / brick-wall rap (Jul and similar urban masters):
        raw peak-picking returned 0 because every sample sits near full scale;
        the onset-strength derivative still catches the kick transients → never 0.
     3. House, 4-on-the-floor ~128 BPM:
        clean kick → autocorrelation locks the 128 lag accurately.
══════════════════════════════════════════════════════════════ */

const ENV_FPS = 100;   // onset-envelope frame-rate (Hz)
const BPM_MIN = 60;
const BPM_MAX = 185;

/* Lowest-latency offline context for the kick band. 4000 Hz per spec, with an
   8000 Hz fallback because a few engines reject contexts below 8 kHz. */
function makeKickContext(durationSec){
  for (const sr of [4000, 8000]){
    try {
      const frames = Math.max(1, Math.ceil(durationSec * sr));
      return { ctx: new OfflineAudioContext(1, frames, sr), sr };
    } catch (_) { /* try the next rate */ }
  }
  const frames = Math.max(1, Math.ceil(durationSec * 8000));
  return { ctx: new OfflineAudioContext(1, frames, 8000), sr: 8000 };
}

/* 20 ms energy envelope → half-wave rectified derivative, decimated to ~100 Hz. */
function onsetEnvelope(x, sr){
  const win = Math.max(1, Math.round(0.02 * sr));     // 20 ms window
  const hop = Math.max(1, Math.round(sr / ENV_FPS));  // → ~100 Hz frames
  const frames = Math.floor((x.length - win) / hop) + 1;
  if (frames < 2) return new Float32Array(0);
  const energy = new Float32Array(frames);
  for (let f = 0; f < frames; f++){
    const base = f * hop;
    let e = 0;
    for (let j = 0; j < win; j++){ const s = x[base + j]; e += s * s; }
    energy[f] = e / win;
  }
  const osf = new Float32Array(frames);
  for (let f = 1; f < frames; f++){
    const d = energy[f] - energy[f - 1];
    osf[f] = d > 0 ? d : 0;     // half-wave rectify → onset strength
  }
  return osf;
}

/* Autocorrelation tempo estimate from a ~100 Hz onset-strength function.
   Approach mirrors Essentia RhythmExtractor2013 / librosa beat_track:

   1. Normalized ACF: divide by zero-lag energy → values in (−1,1), thresholds
      are now file-independent (unlike raw sum which scales with loudness).

   2. Full bidirectional harmonic scoring:
      - Super-harmonics (τ×2, τ×3, τ×4, τ×5): a genuine beat at τ produces
        energy at all multiples → reinforces the true period.
      - Sub-harmonics (τ÷2, τ÷3): prevents choosing a lag that is merely the
        double/triple of a shorter, stronger period.

   3. Gaussian tempo prior centred at 115 BPM (σ=50): 12 % weight only —
      barely affects clear signals, gently breaks ties toward common tempos.

   4. Refined octave corrections using normalized thresholds:
      - Down (> 148 BPM, half-tempo ≥ 50 % of best): trap/hi-hat doubling.
      - Up  (< 80 BPM,  double-tempo ≥ 60 % of best): ghost-beat / slow intro. */
function bpmFromOnset(osf){
  const fps = ENV_FPS;
  const segLen = Math.min(osf.length, 20 * fps);
  if (segLen < fps) return 0;
  const from = Math.floor((osf.length - segLen) / 2);
  const seg = osf.subarray(from, from + segLen);

  let mean = 0;
  for (let i = 0; i < segLen; i++) mean += seg[i];
  mean /= segLen;
  const s = new Float32Array(segLen);
  let e0 = 0;
  for (let i = 0; i < segLen; i++){ s[i] = seg[i] - mean; e0 += s[i] * s[i]; }
  if (e0 < 1e-12) return 0;

  const lagMin = Math.max(2, Math.floor(60 * fps / BPM_MAX));
  const lagMax = Math.min(segLen - 1, Math.ceil(60 * fps / BPM_MIN));
  if (lagMax <= lagMin) return 0;

  // Normalized ACF (range ≈ −1 … 1, comparable across files)
  const acf = new Float32Array(lagMax + 1);
  for (let lag = lagMin; lag <= lagMax; lag++){
    let sum = 0;
    const n = segLen - lag;
    for (let i = 0; i < n; i++) sum += s[i] * s[i + lag];
    acf[lag] = sum / e0;
  }

  // Bidirectional harmonic support score
  const score = new Float32Array(lagMax + 1);
  for (let lag = lagMin; lag <= lagMax; lag++){
    let sc = acf[lag];
    // Super-harmonics: energy at lag*k confirms lag as fundamental period
    for (const [k, w] of [[2,0.50],[3,0.33],[4,0.25],[5,0.20]]){
      const h = Math.round(lag * k);
      if (h <= lagMax) sc += Math.max(0, acf[h]) * w;
    }
    // Sub-harmonics: if a shorter period explains lag, this lag scores lower
    for (const [k, w] of [[2,0.40],[3,0.25]]){
      const h = Math.round(lag / k);
      if (h >= lagMin) sc += Math.max(0, acf[h]) * w;
    }
    // Gentle prior (12 % weight)
    const bpmC = 60 * fps / lag;
    const prior = Math.exp(-0.5 * ((bpmC - 115) / 50) ** 2);
    score[lag] = sc * (0.88 + 0.12 * prior);
  }

  let best = 0, bestLag = 0;
  for (let lag = lagMin; lag <= lagMax; lag++){
    if (score[lag] > best){ best = score[lag]; bestLag = lag; }
  }
  if (bestLag === 0) return 0;

  let bpm = 60 * fps / bestLag;

  // Downward octave correction (trap / hi-hat doubling) — normalized threshold
  if (bpm > 148){
    const dbl = bestLag * 2;
    if (dbl <= lagMax && acf[dbl] >= 0.50 * acf[bestLag]) bpm = 60 * fps / dbl;
  }
  // Upward octave correction (ghost-beat / half-tempo) — normalized threshold
  if (bpm < 80){
    const half = Math.round(bestLag / 2);
    if (half >= lagMin){
      const c = 60 * fps / half;
      if (c <= BPM_MAX && acf[half] >= 0.60 * acf[bestLag]) bpm = c;
    }
  }

  return Math.round(bpm);
}

/* Decode-agnostic rhythm analysis: two frequency bands rendered in parallel,
   onset functions fused before autocorrelation.

   Band 1 — kick/bass (25–200 Hz, 4 kHz context):
     Covers kick drum, 808 sub-bass, bass-guitar fundamentals.
   Band 2 — snare/clap (150–600 Hz, 8 kHz context):
     Covers snare body, clap, tom hits — essential for music without a
     prominent kick (sampled drums, acoustic, some hip-hop).

   Fusion: osf = osf1 + 0.55 * osf2
   Running both contexts via Promise.all keeps wall-clock time near single-band. */
async function analyzeRhythm(audioBuffer){
  const dur = Math.min(audioBuffer.duration || 0, 60) || 1;

  function makeCtx(targetSr){
    for (const sr of [targetSr, 8000]){
      try{
        const frames = Math.max(1, Math.ceil(dur * sr));
        return { ctx: new OfflineAudioContext(1, frames, sr), sr };
      }catch(_){}
    }
    const frames = Math.max(1, Math.ceil(dur * 8000));
    return { ctx: new OfflineAudioContext(1, frames, 8000), sr: 8000 };
  }

  // Band 1: kick/bass 25–200 Hz
  const b1 = makeCtx(4000);
  const src1 = b1.ctx.createBufferSource(); src1.buffer = audioBuffer;
  const hp1 = b1.ctx.createBiquadFilter(); hp1.type='highpass'; hp1.frequency.value=25;  hp1.Q.value=0.707;
  const lp1 = b1.ctx.createBiquadFilter(); lp1.type='lowpass';  lp1.frequency.value=200; lp1.Q.value=0.707;
  src1.connect(hp1); hp1.connect(lp1); lp1.connect(b1.ctx.destination); src1.start(0);

  // Band 2: snare/clap 150–600 Hz
  const b2 = makeCtx(8000);
  const src2 = b2.ctx.createBufferSource(); src2.buffer = audioBuffer;
  const hp2 = b2.ctx.createBiquadFilter(); hp2.type='highpass'; hp2.frequency.value=150; hp2.Q.value=0.707;
  const lp2 = b2.ctx.createBiquadFilter(); lp2.type='lowpass';  lp2.frequency.value=600; lp2.Q.value=0.707;
  src2.connect(hp2); hp2.connect(lp2); lp2.connect(b2.ctx.destination); src2.start(0);

  const [r1, r2] = await Promise.all([b1.ctx.startRendering(), b2.ctx.startRendering()]);
  const osf1 = onsetEnvelope(r1.getChannelData(0), b1.sr);
  const osf2 = onsetEnvelope(r2.getChannelData(0), b2.sr);

  // Fuse: both decimated to ENV_FPS, align lengths
  const len = Math.min(osf1.length, osf2.length);
  const osf = new Float32Array(len);
  for (let i = 0; i < len; i++) osf[i] = osf1[i] + 0.55 * osf2[i];

  return bpmFromOnset(osf);
}

/* ── Compact in-place radix-2 FFT (native JS, no libraries) ── */
function fftRadix2(re, im){
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++){
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j){
      let t = re[i]; re[i] = re[j]; re[j] = t;
      t = im[i]; im[i] = im[j]; im[j] = t;
    }
  }
  for (let len = 2; len <= n; len <<= 1){
    const half = len >> 1, ang = -2 * Math.PI / len;
    const wr = Math.cos(ang), wi = Math.sin(ang);
    for (let i = 0; i < n; i += len){
      let cr = 1, ci = 0;
      for (let k = 0; k < half; k++){
        const a = i + k, b = a + half;
        const tr = re[b] * cr - im[b] * ci;
        const ti = re[b] * ci + im[b] * cr;
        re[b] = re[a] - tr; im[b] = im[a] - ti;
        re[a] += tr;        im[a] += ti;
        const ncr = cr * wr - ci * wi;
        ci = cr * wi + ci * wr; cr = ncr;
      }
    }
  }
}

/* Spectral character (dominant Hz + band-energy split) plus loudness/dynamics. */
function analyzeSpectrum(audioBuffer){
  const sr = audioBuffer.sampleRate;
  const ch = audioBuffer.getChannelData(0);
  const total = Math.min(ch.length, Math.floor(sr * 60));

  let sumSq = 0;
  for (let i = 0; i < total; i++) sumSq += ch[i] * ch[i];
  const rms = Math.sqrt(sumSq / Math.max(1, total));
  let sumDev = 0;
  for (let i = 0; i < total; i++) sumDev += Math.abs(Math.abs(ch[i]) - rms);
  const variance = sumDev / Math.max(1, total);

  const N = 32768;
  const re = new Float32Array(N), im = new Float32Array(N);
  const offset = Math.max(0, Math.floor((total - N) / 2));
  const have = Math.min(N, Math.max(0, total - offset));
  for (let i = 0; i < have; i++){
    const w = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (N - 1));   // Hann window
    re[i] = ch[offset + i] * w;
  }
  fftRadix2(re, im);

  const half = N >> 1, binHz = sr / N;
  let mTotal = 0, mWeighted = 0, sub = 0, bass = 0, lowMid = 0, bright = 0;
  for (let k = 1; k < half; k++){
    const mag = Math.hypot(re[k], im[k]);
    const f = k * binHz;
    mTotal += mag; mWeighted += mag * f;
    if      (f < 60)   sub    += mag;
    else if (f < 250)  bass   += mag;
    else if (f < 2000) lowMid += mag;
    else               bright += mag;
  }
  const eAll = sub + bass + lowMid + bright || 1;

  // Top-3 spectral peaks (local maxima with min 60 Hz spacing, 30–14000 Hz range)
  const SMOOTH = 4;
  const pkCandidates = [];
  for (let k = SMOOTH + 1; k < half - SMOOTH; k++){
    const f = k * binHz;
    if (f < 30 || f > 14000) continue;
    const mag = Math.hypot(re[k], im[k]);
    let isPeak = true;
    for (let d = 1; d <= SMOOTH; d++){
      if (Math.hypot(re[k-d], im[k-d]) >= mag || Math.hypot(re[k+d], im[k+d]) >= mag){
        isPeak = false; break;
      }
    }
    if (isPeak) pkCandidates.push({ f: Math.round(f), mag });
  }
  pkCandidates.sort((a, b) => b.mag - a.mag);
  const peaks = [];
  for (const p of pkCandidates){
    // Frequency-proportional minimum spacing (avoids clustering at one frequency)
    const minSpacing = Math.max(80, 0.18 * p.f);
    // Harmonic suppression: skip if p.f ≈ 2× or 3× (or ½× or ⅓×) an existing peak
    const ok = peaks.every(q => {
      if (Math.abs(q - p.f) < minSpacing) return false;
      for (const ratio of [2, 3, 0.5, 0.333]){
        if (Math.abs(p.f - q * ratio) / Math.max(p.f, 1) < 0.07) return false;
      }
      return true;
    });
    if (ok){ peaks.push(p.f); if (peaks.length >= 3) break; }
  }

  return {
    hz: mTotal > 0 ? Math.round(mWeighted / mTotal) : 0,
    peaks,
    rms, variance,
    bands: { sub: sub / eAll, bass: bass / eAll, lowMid: lowMid / eAll, bright: bright / eAll }
  };
}

/* Format Hz peaks for display: "87 · 340 · 2.1k"  (centroid fallback). */
function formatHzDisplay(peaks, centroid){
  if (peaks && peaks.length){
    return peaks.map(f => f >= 1000 ? `${(f / 1000).toFixed(1).replace(/\.0$/, '')}k` : `${f}`).join(' · ');
  }
  return centroid > 0 ? centroid.toLocaleString() : '—';
}

/* Single analysis entry-point shared by every decode path. */
async function analyzeBuffer(audioBuffer, label){
  if (!audioBuffer || !audioBuffer.length) throw new Error('empty_buffer');
  const bpm  = await analyzeRhythm(audioBuffer);
  const spec = analyzeSpectrum(audioBuffer);
  showResults(bpm, spec.hz, label, spec.rms, spec.variance, spec.bands, spec.peaks);
}

/* ══ Main BPM detection — native DSP. Signature unchanged: detectBpm(file) ══ */
async function detectBpm(file){
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended'){ try { await ctx.resume(); } catch (_) {} }
  const arrayBuffer = await file.arrayBuffer();
  const audioBuffer = await decodeAudioDataUniversal(ctx, arrayBuffer);
  await analyzeBuffer(audioBuffer, labelFromFile(file));
}

/* Raw Float32 samples (iOS capture path) → AudioBuffer → shared analysis. */
async function analyzeRawSamples(data, sr, dur, label){
  const ctx = getAudioCtx();
  const buf = ctx.createBuffer(1, Math.max(1, data.length), sr || ctx.sampleRate);
  buf.copyToChannel(data, 0);
  await analyzeBuffer(buf, label);
}

/* Encoded bytes (FFmpeg / MediaRecorder paths) → AudioBuffer → shared analysis. */
async function processArrayBuffer(ab, label){
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended') await ctx.resume();
  const buf = await decodeAudioDataUniversal(ctx, ab);
  await analyzeBuffer(buf, label);
}

/* ── Fallback iOS : ScriptProcessorNode ── */
function processViaAnalyserSampling(file,label){
  return new Promise((resolve,reject)=>{
    const url=URL.createObjectURL(file);
    const video=document.createElement('video');
    video.src=url;
    video.playsInline=true;
    video.preload='auto';
    video.muted=true;
    video.style.cssText='position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none';
    document.body.appendChild(video);

    const cleanup=()=>{
      try{video.pause();}catch{}
      URL.revokeObjectURL(url);
      try{document.body.removeChild(video);}catch{}
    };

    const ctx=getAudioCtx();
    ctx.resume().catch(()=>{});

    let mediaSrc,scriptProc;
    try{
      mediaSrc=ctx.createMediaElementSource(video);
      scriptProc=ctx.createScriptProcessor(4096,1,1);
    }catch(e){cleanup();reject(e);return;}

    const chunks=[];
    let totalSamples=0;
    const maxSamples=ctx.sampleRate*90;
    let progress=null,finished=false;

    scriptProc.onaudioprocess=(evt)=>{
      if(finished)return;
      const input=evt.inputBuffer.getChannelData(0);
      const copy=new Float32Array(input.length);
      copy.set(input);
      chunks.push(copy);
      totalSamples+=input.length;
      if(totalSamples>=maxSamples) finish();
    };

    mediaSrc.connect(scriptProc);
    scriptProc.connect(ctx.destination);

    const finish=()=>{
      if(finished)return;finished=true;
      try{scriptProc.disconnect();mediaSrc.disconnect();}catch{}
      if(progress)progress.stop();
      cleanup();
      if(totalSamples<1000){reject(new Error('no_samples'));return;}
      const fullData=new Float32Array(totalSamples);
      let offset=0;
      for(const chunk of chunks){fullData.set(chunk,offset);offset+=chunk.length;}
      const durSec=Math.max(1,totalSamples/ctx.sampleRate);
      analyzeRawSamples(fullData,ctx.sampleRate,durSec,label);
      resolve();
    };

    video.addEventListener('error',()=>{
      try{scriptProc.disconnect();mediaSrc.disconnect();}catch{}
      cleanup();reject(new Error('video_error'));
    });

    video.addEventListener('playing',()=>{
      const durSec=Math.min(isFinite(video.duration)?video.duration:60,90);
      if(durSec>10) progress=startProgressBar(durSec);
      video.addEventListener('ended',finish,{once:true});
      setTimeout(finish,(durSec+3)*1000);
    },{once:true});

    setTimeout(()=>{
      if(!finished&&totalSamples===0){
        try{scriptProc.disconnect();mediaSrc.disconnect();}catch{}
        cleanup();reject(new Error('play_timeout'));
      }
    },12000);

    video.play().catch(()=>{
      try{scriptProc.disconnect();mediaSrc.disconnect();}catch{}
      cleanup();reject(new Error('play_rejected'));
    });
  });
}

/* ══ FILE UPLOAD — file only (audio + video), routed through detectBpm() ══ */
function showAnalyzing(){
  S('sc-ready').classList.add('hidden');
  S('sc-analyzing').classList.remove('hidden');
  S('scan-title').textContent = L('scanning');
  S('scan-sub').textContent   = L('analyzinglbl');
  S('home-btn').style.display = 'flex';
}

function showAnalysisError(){
  S('sc-analyzing').classList.add('hidden');
  S('sc-ready').classList.remove('hidden');
  showAlert(L('errFile'));
}

S('audio-input').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  e.target.value = '';              // allow re-selecting the same file later
  hideAlert();
  showAnalyzing();

  const isVideo = file.type.startsWith('video/') ||
                  /\.(mp4|mov|avi|mkv|webm|m4v|3gp)$/i.test(file.name);

  // Audio (and most MP4 / M4A) decode natively and fast via detectBpm().
  if (!isVideo){
    try { await detectBpm(file); return; }
    catch (_) { /* not decodable as audio → fall through to extraction paths */ }
  }

  // Video / container extraction fallbacks — each feeds the same pipeline.
  if (typeof MediaRecorder !== 'undefined'){
    try { await processViaVideoElement(file, labelFromFile(file)); return; } catch (_) {}
    try { const ab = await file.arrayBuffer(); await processArrayBuffer(ab, labelFromFile(file)); return; } catch (_) {}
  }
  try {
    S('scan-sub').textContent = lang === 'en' ? 'Loading decoder…' : 'Chargement du décodeur…';
    await processViaFFmpeg(file, labelFromFile(file));
    return;
  } catch (_) {}
  try { await processViaAnalyserSampling(file, labelFromFile(file)); return; } catch (_) {}

  // Every path failed → friendly message, never a crash.
  showAnalysisError();
});

function labelFromFile(file) {
  let l = file.name.replace(/\.[^/.]+$/, '');
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(l) || l.length > 40)
    l = lang === 'en' ? 'Audio Analysis' : 'Analyse audio';
  return l;
}

// Textes ondes cérébrales affichés pendant le fallback vidéo
const WAVE_MSGS = {
  fr:[
    'Synchronisation des ondes delta…',
    'Lecture des fréquences thêta…',
    'Calibration neuronale en cours…',
    'Détection des oscillations alpha…',
    'Analyse du spectre bêta…',
    'Mesure des vibrations gamma…',
    'Décodage bioacoustique…',
    'Alignement des fréquences cérébrales…',
    'Cartographie des ondes neurales…',
    'Résonance corticale en calcul…',
  ],
  en:[
    'Synchronizing delta waves…',
    'Reading theta frequencies…',
    'Neural calibration in progress…',
    'Detecting alpha oscillations…',
    'Analyzing beta spectrum…',
    'Measuring gamma vibrations…',
    'Bioacoustic decoding…',
    'Aligning brainwave frequencies…',
    'Mapping neural oscillations…',
    'Cortical resonance computing…',
  ]
};

function startProgressBar(durationSec){
  const wrap=document.getElementById('pbar-wrap');
  const fill=document.getElementById('pbar-fill');
  const msg=document.getElementById('pbar-msg');
  const wave=document.getElementById('zh-wave');
  const msgs=WAVE_MSGS[lang]||WAVE_MSGS.fr;
  wave.style.display='none';
  wrap.classList.remove('hidden');
  fill.style.width='0%';
  msg.textContent=msgs[0];

  let elapsed=0,msgIdx=0,displayedPct=0;
  const interval=setInterval(()=>{
    elapsed+=1;
    const raw=Math.round((elapsed/durationSec)*100);
    displayedPct=Math.max(displayedPct,Math.min(96,raw));
    fill.style.width=displayedPct+'%';
    const newIdx=Math.min(msgs.length-1,Math.floor(elapsed/8));
    if(newIdx!==msgIdx){
      msgIdx=newIdx;
      msg.style.opacity='0';
      setTimeout(()=>{msg.textContent=msgs[msgIdx];msg.style.opacity='1';},300);
    }
  },1000);

  return {
    stop(){
      clearInterval(interval);
      fill.style.width='100%';
      msg.textContent='';
      setTimeout(()=>{
        wrap.classList.add('hidden');
        wave.style.display='flex';
      },600);
    }
  };
}

// Fallback : capture audio via MediaElementSource sur un <video> invisible
function processViaVideoElement(file, label){
  return new Promise((resolve,reject)=>{
    const url=URL.createObjectURL(file);
    const video=document.createElement('video');
    video.src=url;
    video.preload='auto';
    video.muted=true;
    video.playsInline=true;
    video.style.cssText='position:fixed;top:-9999px;left:-9999px;width:1px;height:1px';
    document.body.appendChild(video);

    video.addEventListener('error',()=>{
      URL.revokeObjectURL(url);
      try{document.body.removeChild(video);}catch{}
      reject(new Error('video_load_error'));
    });

    let started=false;
    const startCapture=async()=>{
      if(started) return; started=true;
      try{
        const durSec=Math.min(video.duration||90, 90);
        const progress = durSec > 10 ? startProgressBar(durSec) : null;

        const AC=window.AudioContext||window.webkitAudioContext;
        const liveCtx=new AC();
        video.muted=false;
        const liveSrc=liveCtx.createMediaElementSource(video);
        const dest=liveCtx.createMediaStreamDestination();
        liveSrc.connect(dest);

        const chunks=[];
        const recorder=new MediaRecorder(dest.stream);
        recorder.ondataavailable=ev=>{if(ev.data.size>0)chunks.push(ev.data);};
        recorder.onstop=async()=>{
          if(progress) progress.stop();
          liveCtx.close();
          URL.revokeObjectURL(url);
          try{document.body.removeChild(video);}catch{}
          if(chunks.length===0){reject(new Error('no_audio_chunks'));return;}
          const blob=new Blob(chunks,{type:'audio/webm'});
          const ab=await blob.arrayBuffer();
          try{await processArrayBuffer(ab,label);resolve();}
          catch(e){reject(e);}
        };

        recorder.start(1000);
        video.currentTime=0;
        await video.play();

        const stopTimer=setTimeout(()=>{
          video.pause();
          if(recorder.state!=='inactive') recorder.stop();
        }, durSec*1000);

        video.addEventListener('ended',()=>{
          clearTimeout(stopTimer);
          if(recorder.state!=='inactive') recorder.stop();
        },{once:true});

      }catch(e){
        URL.revokeObjectURL(url);
        try{document.body.removeChild(video);}catch{}
        reject(e);
      }
    };

    const onReady=()=>{ video.removeEventListener('canplaythrough',onReady); video.removeEventListener('loadeddata',onReady); startCapture(); };
    video.addEventListener('canplaythrough',onReady,{once:true});
    video.addEventListener('loadeddata',onReady,{once:true});

    video.load();
  });
}

let cachedShareCanvas=null;

/* Build the share text — BPM, Hz and a one-line hormonal-effects summary. */
function buildShareText(){
  const zen = Math.max(0, 100 - fatigueScore(lastBpm, lastHz, lastBands, lastRms, lastVar, lastPeaks));
  const bpm = (lastBpm > 0 && isFinite(lastBpm)) ? lastBpm : '—';
  const hz  = formatHzDisplay(lastPeaks, lastHz);
  const eff = (lastEffects && lastEffects.length) ? (lang === 'en' ? lastEffects[0].en : lastEffects[0].fr) : '';
  if(lang === 'en'){
    return `ZenHertz score: ${zen} 🧠\nTempo: ${bpm} BPM 🥁\nFrequency: ${hz} Hz 🌊${eff ? '\n\n' + eff : ''}\n\nSee how your music affects your brain: https://zenhertz.com`;
  }
  return `Score ZenHertz : ${zen} 🧠\nRythme : ${bpm} BPM 🥁\nFréquence : ${hz} Hz 🌊${eff ? '\n\n' + eff : ''}\n\nTeste l'impact de ta musique sur ton cerveau : https://zenhertz.com`;
}

/* Clipboard copy with a legacy execCommand fallback. Never throws. */
async function copyText(txt){
  try{
    if(navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(txt);
      return true;
    }
  }catch(_){}
  try{
    const ta=document.createElement('textarea');
    ta.value=txt; ta.setAttribute('readonly','');
    ta.style.cssText='position:fixed;top:-9999px;left:-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok=document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }catch(_){ return false; }
}

function flashBtn(btn, original, msg){
  if(!btn) return;
  btn.innerHTML=msg;
  setTimeout(()=>{ btn.innerHTML=original; }, 1600);
}

/* ══ SHARE — Web Share API on mobile, clipboard fallback on desktop ══ */
async function captureBilan(){
  const btn=S('btn-share');
  const originalHTML=btn ? btn.innerHTML : '';
  const shareText=buildShareText();
  const copiedMsg=lang==='en' ? '✓ Copied' : '✓ Copié';

  try{
    let canvas=cachedShareCanvas;
    if(!canvas && typeof html2canvas==='function'){
      if(btn) btn.innerHTML=`📸 <span>${L('capturing')}</span>`;
      const target=S('rleft');
      const actionsDiv=target.querySelector('.backbtn').parentElement;
      try{
        actionsDiv.style.display='none';
        canvas=await html2canvas(target,{
          backgroundColor:theme==='dark'?'#04040e':'#eeeef5',
          scale:1,useCORS:true,logging:false
        });
      }catch(_){ canvas=null; }
      finally{ actionsDiv.style.display='flex'; if(btn) btn.innerHTML=originalHTML; }
    }

    // Mobile: share the image + text via the Web Share API.
    if(typeof navigator.share==='function'){
      try{
        const blob=await new Promise(res=>{ try{ canvas.toBlob(res,'image/png'); }catch(_){ res(null); } });
        const file=blob ? new File([blob],`ZenHertz_${(lastBpm>0&&isFinite(lastBpm))?lastBpm:''}BPM.png`,{type:'image/png'}) : null;
        if(file && navigator.canShare && navigator.canShare({files:[file]})){
          await navigator.share({title:'ZenHertz',text:shareText,files:[file]});
          return;
        }
        await navigator.share({title:'ZenHertz',text:shareText});
        return;
      }catch(e){
        if(e && e.name==='AbortError') return;   // user cancelled — do nothing
        // otherwise fall through to clipboard
      }
    }

    // Desktop / no Web Share API → copy the text summary.
    const ok=await copyText(shareText);
    if(btn) flashBtn(btn, originalHTML, ok ? copiedMsg : originalHTML);
  }catch(_){
    const ok=await copyText(shareText);
    if(btn) flashBtn(btn, originalHTML, ok ? copiedMsg : originalHTML);
  }
}

/* ══ COPY TEXT ONLY ══ */
async function copierTexte(){
  const btn=S('btn-copy');
  const original=btn ? btn.innerHTML : '';
  const ok=await copyText(buildShareText());
  const msg=ok ? (lang==='en'?'✓ Copied':'✓ Copié') : (lang==='en'?'Copy failed':'Échec');
  if(btn) flashBtn(btn, original, msg);
}

/* ══ FEEDBACK MODAL ══ */
function openFeedbackModal(){
  const m=document.getElementById('modal-feedback');
  m.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeFeedbackModal(){
  const m=document.getElementById('modal-feedback');
  m.classList.remove('open');
  document.body.style.overflow='';
}

/* ══ NETLIFY FORMS HANDLERS ══ */
function handleEmailSubmit(e,form){
  e.preventDefault();
  fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:new URLSearchParams(new FormData(form)).toString()})
    .then(()=>{form.style.display='none';document.getElementById('ec-confirm').style.display='block';})
    .catch(()=>{form.submit();});
}
function handleFeedbackSubmit(e,form){
  e.preventDefault();
  fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:new URLSearchParams(new FormData(form)).toString()})
    .then(()=>{form.style.display='none';document.getElementById('fb-confirm').style.display='block';})
    .catch(()=>{form.submit();});
}

applyLang();

const MODAL_CONTENT={
  science:{
    fr:{
      logo:'🔬',title:'La science derrière ZenHertz',sub:'Bioacoustique & neurosciences expliqué simplement',
      sections:[
        {h:'BPM & synchronisation cardiaque',p:`Le tempo d'une musique (mesuré en battements par minute, BPM) influence directement le rythme cardiaque par un phénomène appelé <strong>entraînement cardiovasculaire</strong>. Des études publiées dans le <em>Journal of Music Therapy</em> montrent qu'une musique entre 60 et 80 BPM favorise la cohérence cardiaque, activant le système nerveux parasympathique  celui du calme et de la récupération.<br><br>À l'inverse, des tempos supérieurs à 130–140 BPM stimulent le système sympathique, augmentant la fréquence cardiaque et la production d'adrénaline d'où leur usage dans les playlists de sport.`},
        {h:'Fréquences Hz & ondes cérébrales',p:`Les fréquences sonores interagissent avec le cerveau via la <strong>résonance neuronale</strong>. Chaque bande d'onde cérébrale correspond à un état mental :`,list:[
          ['#818cf8','δ Delta','0,5–4 Hz sommeil profond, régénération cellulaire, pic de mélatonine'],
          ['#a78bfa','θ Thêta','4–8 Hz créativité, mémoire à long terme, pics de dopamine'],
          ['#7c3aed','α Alpha','8–13 Hz relaxation vigilante, état de flow, sérotonine élevée'],
          ['#c084fc','β Bêta','13–30 Hz concentration active, résolution de problèmes, cortisol modéré'],
          ['#e879f9','γ Gamma','30–100 Hz cognition intense, conscience élargie, adrénaline + haute'],
        ],p2:`Des chercheurs de Stanford ont démontré que les oscillations à 40 Hz (onde Gamma) stimulent le cortex préfrontal, améliorant l'attention et la mémoire de travail en quelques minutes d'exposition.`},
        {h:'Dopamine & circuit de la récompense',p:`La musique est l'un des seuls stimuli non-chimiques capables d'activer le <strong>noyau accumbens</strong> le centre du plaisir du cerveau. Une étude de Salimpoor et al. (2011, <em>Nature Neuroscience</em>) a mesuré des pics de dopamine allant jusqu'à +65% lors de l'écoute de musique émotionnellement intense. ZenHertz analyse ces patterns pour estimer l'impact probable sur votre circuit de récompense.`},
        {h:'Cortisol & stress acoustique',p:`Des tempos très rapides (>160 BPM) peuvent déclencher une réponse de stress, augmentant le cortisol via l'axe HHS. En revanche, les fréquences graves (40–100 Hz) stimulent le nerf vague, réduisant le cortisol et favorisant la récupération principe utilisé en musicothérapie clinique.`},
        {h:'Comment ZenHertz calcule-t-il ?',p:`L'algorithme analyse le fichier en trois étapes simultanées, directement dans le navigateur :`,list2:[
          ['Filtrage multi-bande en parallèle','kick/basse (25–200 Hz) et caisse claire/clap (150–600 Hz) sont isolés par deux OfflineAudioContext lancés en même temps — chaque bande capture des informations rythmiques que l\'autre ne voit pas.'],
          ['ACF normalisée + scoring harmonique','autocorrélation divisée par l\'énergie zéro-lag (valeurs comparables entre fichiers). Chaque lag candidat est renforcé par ses super-harmoniques (τ×2..5) et ses sous-harmoniques (τ÷2, τ÷3), plus un prior gaussien centré sur 115 BPM. Corrections d\'octave dans les deux sens.'],
          ['FFT 32 768 points (fenêtre de Hann)','détection des 3 pics spectraux dominants avec suppression des harmoniques et espacement proportionnel à la fréquence → affichage « 87 · 340 · 2.1k ».'],
        ],p2:`Ces valeurs sont croisées avec des modèles neuroacoustiques pour estimer l'impact hormonal probable. Tout le traitement s'effectue <strong>localement dans votre navigateur</strong> — aucune donnée ne quitte votre appareil.`},
      ]
    },
    en:{
      logo:'🔬',title:'The science behind ZenHertz',sub:'Bioacoustics & neuroscience simply explained',
      sections:[
        {h:'BPM & cardiac synchronization',p:`A song's tempo (measured in beats per minute, BPM) directly influences heart rate through a phenomenon called <strong>cardiovascular entrainment</strong>. Studies published in the <em>Journal of Music Therapy</em> show that music between 60 and 80 BPM promotes cardiac coherence, activating the parasympathetic nervous system the body's rest and recovery mode.<br><br>Conversely, tempos above 130–140 BPM stimulate the sympathetic system, increasing heart rate and adrenaline production , which is why they're used in workout playlists.`},
        {h:'Hz frequencies & brainwaves',p:`Sound frequencies interact with the brain through <strong>neural resonance</strong>. Each brainwave band corresponds to a distinct mental state:`,list:[
          ['#818cf8','δ Delta','0.5–4 Hz deep sleep, cellular regeneration, melatonin peak'],
          ['#a78bfa','θ Theta','4–8 Hz creativity, long-term memory, dopamine peaks'],
          ['#7c3aed','α Alpha','8–13 Hz alert relaxation, flow state, elevated serotonin'],
          ['#c084fc','β Beta','13–30 Hz active focus, problem-solving, moderate cortisol'],
          ['#e879f9','γ Gamma','30–100 Hz intense cognition, expanded awareness, high adrenaline'],
        ],p2:`Stanford researchers demonstrated that 40 Hz oscillations (Gamma wave) stimulate the prefrontal cortex, improving attention and working memory within minutes of exposure.`},
        {h:'Dopamine & the reward circuit',p:`Music is one of the only non-chemical stimuli capable of activating the <strong>nucleus accumbens</strong> the brain's pleasure center. A study by Salimpoor et al. (2011, <em>Nature Neuroscience</em>) measured dopamine peaks of up to +65% during emotionally intense music listening. ZenHertz analyzes these patterns to estimate the likely impact on your reward circuit.`},
        {h:'Cortisol & acoustic stress',p:`Very fast tempos (>160 BPM) can trigger a stress response, increasing cortisol through the HPA axis. Conversely, bass frequencies (40–100 Hz) stimulate the vagus nerve, reducing cortisol and promoting recovery the same principle used in clinical music therapy.`},
        {h:'How does ZenHertz calculate?',p:`The algorithm runs three steps in parallel, entirely in your browser:`,list2:[
          ['Multi-band parallel filtering','kick/bass (25–200 Hz) and snare/clap (150–600 Hz) are isolated by two OfflineAudioContext instances running simultaneously — each band captures rhythmic information the other misses.'],
          ['Normalised ACF + harmonic scoring','autocorrelation divided by zero-lag energy (values are comparable across files). Each lag candidate is reinforced by its super-harmonics (τ×2..5) and sub-harmonics (τ÷2, τ÷3), plus a Gaussian prior centred at 115 BPM. Octave corrections in both directions.'],
          ['32 768-point FFT (Hann window)','detection of the 3 dominant spectral peaks with harmonic suppression and frequency-proportional spacing → displayed as "87 · 340 · 2.1k".'],
        ],p2:`These values are cross-referenced with neuroacoustic models to estimate the probable hormonal impact. All processing happens <strong>locally in your browser</strong> — no data ever leaves your device.`},
      ]
    }
  },
  legal:{
    fr:{
      logo:'⚖️',title:'Mentions légales',sub:'Transparence & confidentialité',
      sections:[
        {h:'Disclaimer médical',p:`ZenHertz est un outil de <strong>divertissement et d'exploration personnelle</strong>. Les scores BPM, Hz, les estimations hormonales et les profils neuroacoustiques générés sont des <strong>approximations algorithmiques</strong> basées sur l'analyse du signal audio.<br><br>Ces résultats ne constituent en aucun cas un diagnostic médical, psychiatrique ou neurologique. Ils ne remplacent pas l'avis d'un professionnel de santé. En cas de troubles du sommeil, d'anxiété ou de tout autre symptôme, consultez un médecin qualifié.`},
        {h:"Limites de l'algorithme",p:`L'analyse repose sur une autocorrélation multi-bande (kick 25–200 Hz + snare 150–600 Hz) pour le BPM, et une FFT 32 768 points pour les pics spectraux dominants. Elle fonctionne de manière optimale sur des morceaux avec une structure rythmique claire. Les résultats peuvent varier sur de la musique très expérimentale, du son ambiant sans rythme, ou des fichiers de très faible qualité.`},
        {h:'🔒 Confidentialité & données',p:`ZenHertz respecte intégralement votre vie privée :`,list2:[
          ['Tout traitement est 100 % local','votre fichier audio est analysé directement dans votre navigateur'],
          ['Aucun fichier n\'est envoyé sur un serveur','vos musiques restent sur votre appareil'],
          ['Aucune donnée personnelle collectée','pas de cookies de traçage, pas de compte requis'],
          ['Aucune base de données','les résultats ne sont pas stockés ni transmis'],
        ],p2:`ZenHertz ne collecte, ne vend et ne partage aucune donnée utilisateur.`},
        {h:'Propriété intellectuelle',p:`ZenHertz et son algorithme d'analyse bioacoustique sont la propriété de leurs créateurs. Toute reproduction ou distribution sans autorisation explicite est interdite.`},
      ],
      copy:'© 2026 ZenHertz  Tous droits réservés'
    },
    en:{
      logo:'⚖️',title:'Legal Notice',sub:'Transparency & privacy',
      sections:[
        {h:'Medical disclaimer',p:`ZenHertz is a <strong>entertainment and personal exploration tool</strong>. BPM scores, Hz values, hormonal estimates and neuroacoustic profiles are <strong>algorithmic approximations</strong> based on audio signal analysis.<br><br>These results do not constitute a medical, psychiatric or neurological diagnosis. They do not replace the advice of a healthcare professional. If you experience sleep disorders, anxiety or any other symptoms, please consult a qualified physician.`},
        {h:'Algorithm limitations',p:`The analysis uses multi-band onset autocorrelation (kick 25–200 Hz + snare 150–600 Hz) for BPM, and a 32 768-point FFT for dominant spectral peaks. It works best on tracks with a clear rhythmic structure. Results may vary on highly experimental music, ambient sound without rhythm, or very low-quality files.`},
        {h:'🔒 Privacy & data',p:`ZenHertz fully respects your privacy:`,list2:[
          ['All processing is 100% local','your audio file is analyzed directly in your browser'],
          ['No file is sent to a server','your music stays on your device'],
          ['No personal data collected','no tracking cookies, no account required'],
          ['No database','results are not stored or transmitted'],
        ],p2:`ZenHertz does not collect, sell or share any user data.`},
        {h:'Intellectual property',p:`ZenHertz and its bioacoustic analysis algorithm are the property of their creators. Any reproduction or distribution without explicit authorization is prohibited.`},
      ],
      copy:'© 2026 ZenHertz  All rights reserved'
    }
  }
};

function renderModalContent(modalId, type){
  const data=MODAL_CONTENT[type][lang]||MODAL_CONTENT[type].fr;
  let html=`<p class="zh-modal-logo">${data.logo}</p><h2 class="zh-modal-title">${data.title}</h2><p class="zh-modal-sub">${data.sub}</p>`;
  data.sections.forEach((s,si)=>{
    const last=si===data.sections.length-1;
    html+=`<div class="zh-section"${last?' style="border:none;padding-bottom:0"':''}>`;
    html+=`<h3>${s.h}</h3>`;
    if(s.p) html+=`<p>${s.p}</p>`;
    if(s.list){
      html+=`<ul class="zh-list">`;
      s.list.forEach(([color,label,desc])=>{
        html+=`<li><span class="zh-badge" style="background:${color}">${label}</span>${desc}</li>`;
      });
      html+=`</ul>`;
    }
    if(s.list2){
      html+=`<ul class="zh-list">`;
      s.list2.forEach(([strong,desc])=>{
        html+=`<li>✅ <strong>${strong}</strong>  ${desc}</li>`;
      });
      html+=`</ul>`;
    }
    if(s.p2) html+=`<p>${s.p2}</p>`;
    html+=`</div>`;
  });
  if(data.copy) html+=`<p style="font-size:.68rem;color:var(--t3);text-align:center;margin-top:.5rem">${data.copy}</p>`;
  document.getElementById(modalId+'-content').innerHTML=html;
}

function openModal(id){
  const type=id.replace('modal-','');
  renderModalContent(id,type);
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
function closeModalOutside(e,id){
  if(e.target===document.getElementById(id)) closeModal(id);
}