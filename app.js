/* ══ TRANSLATIONS ══ */
const TR = {
  fr:{
    homeBtn:'Accueil',
    tagline:'Découvrez l\'impact de votre musique sur votre <span style="color:#7c3aed;font-weight:600">système nerveux</span> et vos <span style="color:#a855f7;font-weight:600">ondes cérébrales</span>.',
    uplbl:'Analyser un fichier', wlbl:'Onde',
    urlph:'Coller un lien (YouTube, TikTok, SoundCloud…)',
    urlbtn:'Analyser →',
    orLabel:'ou',
    scanning:'Scan bioacoustique…', analyzinglbl:'Analyse en cours',
    extracting:'Extraction du flux audio…', extractsub:'Récupération de la source',
    neuroprofile:'Profil Neuro-acoustique', hormones:'Tableau Hormonal Estimé',
    disclaimer:'Analyse basée sur la périodicité du signal et la moyenne spectrale (ZCR). Visée informative ne constitue pas un diagnostic médical.',
    back:'← Analyser un autre morceau', share:'Partager le bilan', capturing:'Capture...', copyBtn:'Copier',
    landH1fr:'Ta musique impacte ton cerveau.', landH1em:'Découvrez comment.',
    landSub:'ZenHertz analyse les fréquences de ta musique et révèle son impact sur tes ondes cérébrales, tes hormones et ton système nerveux en quelques secondes.',
    landCta:'Analyser ma musique', landCtaSub:'Gratuit · Aucune inscription · Tous formats',
    landHow:'Comment ça marche ?',
    step1T:'Importe ton son', step1D:'Dépose n\'importe quel fichier audio ou vidéo directement depuis ta galerie ou ton ordinateur.',
    step2T:'Analyse instantanée', step2D:'Notre moteur bioacoustique détecte le BPM, les Hz dominants et classe tes ondes cérébrales en temps réel.',
    step3T:'Ton profil neuro-acoustique', step3D:'Découvre l\'impact hormonal, l\'état cérébral induit et si ton écoute prolongée est sûre ou stimulante.',
    feat1T:'iOS · Android · PC', feat1D:'Fonctionne sur tous les appareils, sans installation.',
    feat2T:'100% dans le navigateur', feat2D:'Aucun upload vers un serveur. Tes fichiers restent sur ton appareil.',
    feat3T:'Basé sur la science', feat3D:'ZCR, détection de pics, classification des ondes cérébrales.',
    statFormats:'Formats', statWaves:'Ondes cérébrales', statHorm:'Hormones',
    betaLabel:'Liens : Bientôt disponible', sciLink:'Comment ça marche ?', legalLink:'Mentions légales',
    ecTitle:'ZenHertz arrive officiellement', ecSub:'Soyez informés de la sortie officielle  zéro spam, juste une notification.',
    ecPh:'votre@email.com', ecBtn:"M'avertir", ecConfirm:'✓ Vous serez notifié à la sortie !',
    feedbackBtn:'Feedback', fbTitle:'Votre avis compte', fbSub:'Bug, idée, suggestion? On lit tout',
    fbPh:'Décrivez votre expérience, un bug, une idée...', fbEmailPh:'Votre email (optionnel)',
    fbSend:'Envoyer', fbConfirm:'✓ Merci ! On a bien reçu votre message.',
    fLow:'✓ Écoute prolongée : sûre et régénératrice',
    fMid:'→ Écoute prolongée : modérément stimulante',
    fHigh:'⚠ Écoute prolongée : risque de fatigue nerveuse',
    conseil:'Conseil',
    errLink:'Lien non supporté ou protégé. Essayez un fichier audio directement.',
    errEmpty:'Veuillez coller un lien valide.',
    wnames:{delta:'Delta',theta:'Thêta',alpha:'Alpha',beta:'Bêta',gamma:'Gamma'},
    tags:{sleep:'💤 Sommeil profond',meditate:'🧘 Méditation',create:'✨ Créativité',focus:'🧠 Focus doux',cardiac:'🫀 Cohérence cardiaque',active:'⚡ Éveil actif',perf:'💪 Performance',hstim:'🔥 Haute stimulation',cogn:'⚡ Cognition intense',vagus:'🫀 Nerf vague stimulé',sport:'🏃 Sport / Effort',fatigue:'⚠ Fatigue si prolongé',vibra:'🌊 Vibration profonde'},
    h:{dopamine:['Dopamine','Motivation & Récompense'],cortisol:['Cortisol','Stress & Vigilance'],serotonin:['Sérotonine','Humeur & Bien-être'],melatonin:['Mélatonine','Sommeil & Récupération'],endorphins:['Endorphines','Euphorie & Analgésie'],noradr:['Adrénaline','Éveil & Réactivité']},
    hlvl:['Faible','Modéré','Élevé'],
    conclus:{delta:'Privilégiez ce son pour une phase de récupération totale ou avant le sommeil.',theta:'Ce profil est parfait pour les phases de création ou de visualisation mentale.',alpha:'L\'équilibre idéal pour une session d\'étude ou de travail calme.',beta:'Utilisez cette énergie pour vos entraînements physiques ou vos besoins de motivation.',gamma:'Attention : ce niveau de stimulation est à réserver aux efforts explosifs de courte durée.'}
  },
  en:{
    homeBtn:'Home',
    tagline:'Discover the impact of your music on your <span style="color:#7c3aed;font-weight:600">nervous system</span> and your <span style="color:#a855f7;font-weight:600">brainwaves</span>.',
    uplbl:'Analyze a file', wlbl:'Wave',
    urlph:'Paste a link (YouTube, TikTok, SoundCloud…)',
    urlbtn:'Analyze →',
    orLabel:'or',
    scanning:'Bioacoustic scan…', analyzinglbl:'Analysis in progress',
    extracting:'Extracting audio stream…', extractsub:'Retrieving source',
    neuroprofile:'Neuro-acoustic Profile', hormones:'Estimated Hormonal Dashboard',
    disclaimer:'Analysis based on signal periodicity and spectral average (ZCR). For informational purposes only  not a medical diagnosis.',
    back:'← Analyze another track', share:'Share Results', capturing:'Capturing...', copyBtn:'Copy',
    landH1fr:'Your music impacts your brain.', landH1em:'Find out how.',
    landSub:'ZenHertz analyzes your music\'s frequencies and reveals its impact on your brain waves, hormones and nervous system in seconds.',
    landCta:'Analyze my music', landCtaSub:'Free · No sign-up · All formats',
    landHow:'How does it work?',
    step1T:'Import your track', step1D:'Drop any audio or video file directly from your gallery or computer.',
    step2T:'Instant analysis', step2D:'Our bioacoustic engine detects BPM, dominant Hz and classifies your brain waves in real time.',
    step3T:'Your neuro-acoustic profile', step3D:'Discover the hormonal impact, induced brain state and whether extended listening is safe or stimulating.',
    feat1T:'iOS · Android · PC', feat1D:'Works on all devices, no installation needed.',
    feat2T:'100% in-browser', feat2D:'No upload to any server. Your files stay on your device.',
    feat3T:'Science-based', feat3D:'ZCR, peak detection, brain wave classification.',
    statFormats:'Formats', statWaves:'Brain waves', statHorm:'Hormones',
    betaLabel:'Links Coming soon', sciLink:'How it works', legalLink:'Legal notices',
    ecTitle:'ZenHertz launching officially', ecSub:'Get notified at official launch zero spam, just one notification.',
    ecPh:'your@email.com', ecBtn:'Notify me', ecConfirm:'✓ You will be notified at launch!',
    feedbackBtn:'Feedback', fbTitle:'Your feedback matters', fbSub:'Bug, idea, suggestion we read everything',
    fbPh:'Describe your experience, a bug, an idea...', fbEmailPh:'Your email (optional)',
    fbSend:'Send', fbConfirm:'✓ Thanks! We received your message.',
    fLow:'✓ Extended listening: safe & regenerative',
    fMid:'→ Extended listening: moderately stimulating',
    fHigh:'⚠ Extended listening: risk of neural fatigue',
    conseil:'Insight',
    errLink:'Unsupported or protected link. Try uploading an audio file directly.',
    errEmpty:'Please paste a valid link.',
    wnames:{delta:'Delta',theta:'Theta',alpha:'Alpha',beta:'Beta',gamma:'Gamma'},
    tags:{sleep:'💤 Deep sleep',meditate:'🧘 Meditation',create:'✨ Creativity',focus:'🧠 Soft focus',cardiac:'🫀 Cardiac coherence',active:'⚡ Active wakefulness',perf:'💪 Performance',hstim:'🔥 High stimulation',cogn:'⚡ Intense cognition',vagus:'🫀 Vagus nerve stimulated',sport:'🏃 Sport / Effort',fatigue:'⚠ Fatigue risk',vibra:'🌊 Deep vibration'},
    h:{dopamine:['Dopamine','Motivation & Reward'],cortisol:['Cortisol','Stress & Alertness'],serotonin:['Serotonin','Mood & Wellbeing'],melatonin:['Melatonin','Sleep & Recovery'],endorphins:['Endorphins','Euphoria & Pain Relief'],noradr:['Noradrenaline','Arousal & Reflexes']},
    hlvl:['Low','Moderate','High'],
    conclus:{delta:'Reserve this sound for total recovery phases or use before sleep.',theta:'This profile is ideal for creative work or mental visualization sessions.',alpha:'The perfect balance for study sessions or calm focused work.',beta:'Channel this energy for physical training or motivation-driven tasks.',gamma:'Caution: this stimulation level should be reserved for short explosive efforts.'}
  }
};

let lang='fr', theme='light', lastBpm=null, lastHz=null;
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
  if(lastBpm!==null) renderHormones(lastBpm,lastHz);
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
  lastBpm=null; lastHz=null;
  S('audio-input').value=''; S('url-input').value='';
  hideAlert();
  S('rbpm').innerText='—'; S('rhz').innerText='—'; S('rwave').innerText='—';
  S('rname').innerText=''; S('rdesc').innerHTML=''; S('rtags').innerHTML='';
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
  let i=0,cur=null;
  el.innerHTML='';
  if(words.length>0){
    cur=document.createElement('span'); cur.className='cur';
    el.appendChild(cur);
  }
  function next(){
    if(!el||!el.parentNode) return;
    if(i<words.length&&cur){
      const tn=document.createTextNode(words.slice(0,i+1).join(' ')+' ');
      el.insertBefore(tn,cur);
      i++; setTimeout(next,ms+Math.random()*28);
    } else if(el) { el.innerHTML=html; }
  }
  next();
}

/* ══ BILINGUAL ANALYSIS ══ */
const ANALYSIS={
  fr:{
    bpm:{
      slow:[
        `À %B% BPM, la périodicité du signal active le système nerveux parasympathique, pilier de la récupération.`,
        `Ce rythme de %B% BPM stimule directement le nerf vague, induisant une baisse du cortisol circulant.`,
        `La pulsation à %B% BPM favorise la cohérence cardiaque, synchronisant cycles respiratoires et cardiaques.`,
        `Avec %B% BPM, le corps entre en phase de neuro-régénération et de repos cellulaire profond.`,
        `Ce profil de %B% BPM mime les rythmes biologiques du sommeil profond, apaisant la tension artérielle.`,
        `L'absence de stress acoustique à %B% BPM permet la libération d'acétylcholine, médiateur du calme.`
      ],
      medium:[
        `Le tempo de %B% BPM maintient une homéostasie neuro-végétative parfaite, ni stressante ni sédative.`,
        `À %B% BPM, le signal entretient une vigilance neutre, idéale pour des tâches cognitives prolongées.`,
        `Ce rythme modéré (%B% BPM) préserve vos ressources nerveuses tout en évitant la somnolence.`,
        `L'équilibre sympathique/parasympathique est optimal à ce tempo de %B% BPM.`,
        `La dynamique à %B% BPM soutient un état d'éveil stable, compatible avec l'attention soutenue.`,
        `À %B% BPM, le circuit dopaminergique de récompense est stimulé sans surcharger le système cardiovasculaire.`
      ],
      fast:[
        `Ce tempo de %B% BPM déclenche une cascade orthosympathique, libérant adrénaline et noradrénaline.`,
        `À %B% BPM, le corps se mobilise : le débit sanguin s'accélère et la vigilance devient maximale.`,
        `Le signal à %B% BPM simule un eustress, un stress positif boostant la réactivité musculaire.`,
        `Avec %B% BPM, l'entraînement rythmique force une accélération métabolique préparant à l'effort intense.`,
        `La dominance orthosympathique à %B% BPM favorise la glycolyse et la disponibilité énergétique immédiate.`,
        `À %B% BPM, le cerveau bascule en mode haute performance, optimisant réflexes et motricité fine.`
      ]
    },
    hz:{
      veryLow:[
        `Les fréquences infra-basses (%H% Hz) créent une résonance limbique favorisant la sécrétion d'endorphines.`,
        `Le spectre à %H% Hz stimule les récepteurs mécanosensibles, renforçant l'ancrage corporel profond.`,
        `À %H% Hz, l'énergie acoustique agit comme un anxiolytique naturel sur l'amygdale cérébrale.`,
        `Cette dominante de %H% Hz privilégie la relaxation des tissus et la décharge sensorielle.`,
        `Les ondes à %H% Hz favorisent une déconnexion du cortex préfrontal, propice au lâcher-prise.`,
        `Le centroïde spectral bas (%H% Hz) réduit la pollution mentale et l'hyper-vigilance auditive.`
      ],
      low:[
        `Le registre médiums-graves (%H% Hz) est perçu comme sécurisant par le cortex auditif droit.`,
        `Les fréquences à %H% Hz imitent les timbres vocaux naturels, stabilisant la réponse émotionnelle.`,
        `À %H% Hz, le signal enveloppe le système nerveux sans provoquer de fatigue corticale.`,
        `Ce profil spectral à %H% Hz est idéal pour maintenir un confort acoustique en longue durée.`,
        `La richesse harmonique à %H% Hz favorise la production de sérotonine, l'hormone de l'humeur.`,
        `À %H% Hz, le traitement neuronal reste fluide, évitant toute saturation des voies ascendantes.`
      ],
      mid:[
        `La présence de médiums-aigus (%H% Hz) stimule l'attention sélective et la clarté mentale.`,
        `À %H% Hz, le cerveau traite le signal comme prioritaire, boostant la concentration active.`,
        `Ce niveau fréquentiel (%H% Hz) active les circuits de mémorisation à court terme.`,
        `L'énergie spectrale à %H% Hz favorise un éveil cognitif net, utile pour l'apprentissage.`,
        `À %H% Hz, le cortex primaire est sollicité pour une analyse précise des textures sonores.`,
        `Le signal à %H% Hz agit comme un catalyseur pour les tâches demandant précision et focus.`
      ],
      high:[
        `La densité d'aigus à %H% Hz provoque une hyperexcitabilité neuronale temporaire.`,
        `À %H% Hz, le système auditif central est en hyper-alerte, augmentant la tension nerveuse.`,
        `Ces fréquences élevées (%H% Hz) peuvent saturer les neurotransmetteurs en écoute prolongée.`,
        `Le spectre à %H% Hz est un puissant stimulant, mais peut altérer la qualité du sommeil futur.`,
        `À %H% Hz, l'activité électrique corticale est intense typique des phases de sport ou de stress.`,
        `La dominance haute fréquence (%H% Hz) accélère la fatigue sensorielle globale.`
      ]
    }
  },
  en:{
    bpm:{
      slow:[
        `At %B% BPM, the signal's periodicity activates the parasympathetic nervous system the cornerstone of deep recovery.`,
        `This %B% BPM tempo directly stimulates the vagus nerve, inducing a measurable drop in circulating cortisol.`,
        `The %B% BPM pulse promotes cardiac coherence, synchronizing respiratory and cardiac cycles in phase.`,
        `At %B% BPM, the body enters a state of neuro-regeneration and deep cellular rest.`,
        `This %B% BPM profile mirrors deep-sleep biological rhythms, effectively lowering arterial tension.`,
        `The absence of acoustic stress at %B% BPM enables acetylcholine release the neuromediator of calm.`
      ],
      medium:[
        `The %B% BPM tempo maintains perfect neuro-vegetative homeostasis neither stressful nor sedative.`,
        `At %B% BPM, the signal sustains neutral vigilance, ideal for extended cognitive tasks.`,
        `This moderate rhythm (%B% BPM) preserves nervous resources while preventing drowsiness.`,
        `The sympathetic/parasympathetic balance is optimal at this %B% BPM tempo.`,
        `The %B% BPM dynamic sustains stable wakefulness, compatible with sustained attention spans.`,
        `At %B% BPM, the dopaminergic reward circuit is stimulated without overloading the cardiovascular system.`
      ],
      fast:[
        `This %B% BPM tempo triggers an orthosympathetic cascade, releasing adrenaline and noradrenaline.`,
        `At %B% BPM, the body mobilizes: blood flow accelerates and vigilance reaches its peak.`,
        `The %B% BPM signal simulates eustress positive stress boosting muscular reactivity.`,
        `With %B% BPM, rhythmic entrainment forces a metabolic acceleration priming the body for intense effort.`,
        `Orthosympathetic dominance at %B% BPM promotes glycolysis and immediate energy availability.`,
        `At %B% BPM, the brain shifts into high-performance mode, optimizing reflexes and fine motor control.`
      ]
    },
    hz:{
      veryLow:[
        `The infra-low frequencies (%H% Hz) create a limbic resonance promoting endorphin secretion.`,
        `The spectrum at %H% Hz stimulates mechanosensitive receptors, reinforcing deep body grounding.`,
        `At %H% Hz, acoustic energy acts as a natural anxiolytic on the cerebral amygdala.`,
        `This %H% Hz dominant promotes tissue relaxation and deep sensory discharge.`,
        `Sound waves at %H% Hz encourage prefrontal cortex disconnection, conducive to letting go.`,
        `The low spectral centroid (%H% Hz) reduces mental noise and auditory hyper-vigilance.`
      ],
      low:[
        `The mid-bass register (%H% Hz) is perceived as safe and comforting by the right auditory cortex.`,
        `Frequencies at %H% Hz mimic natural vocal timbres, stabilizing the emotional response.`,
        `At %H% Hz, the sound signal envelops the nervous system without triggering cortical fatigue.`,
        `This spectral profile at %H% Hz is ideal for acoustic comfort over long listening sessions.`,
        `The harmonic richness at %H% Hz promotes serotonin production the mood hormone.`,
        `At %H% Hz, neural processing remains fluid, avoiding saturation of ascending auditory pathways.`
      ],
      mid:[
        `The presence of upper-mids (%H% Hz) stimulates selective attention and mental clarity.`,
        `At %H% Hz, the brain processes the signal as priority information, boosting active concentration.`,
        `This frequency level (%H% Hz) activates short-term memory encoding circuits.`,
        `The spectral energy at %H% Hz promotes sharp cognitive alertness, useful for learning.`,
        `At %H% Hz, the primary cortex is engaged for precise analysis of sound textures.`,
        `The %H% Hz signal acts as a catalyst for tasks requiring precision and sustained focus.`
      ],
      high:[
        `The high-frequency density at %H% Hz triggers temporary neural hyperexcitability.`,
        `At %H% Hz, the central auditory system is on high alert, increasing nervous tension.`,
        `These elevated frequencies (%H% Hz) can saturate neurotransmitters during prolonged listening.`,
        `The rich spectrum at %H% Hz is a powerful stimulant but may impair future sleep quality.`,
        `At %H% Hz, cortical electrical activity is intense typical of stress or high-performance states.`,
        `High-frequency dominance (%H% Hz) accelerates overall sensory fatigue.`
      ]
    }
  }
};

function pick(a){ return a[Math.floor(Math.random()*a.length)]; }

function generateNeuroAnalysis(bpm,hertz,wt){
  const vB=bpm>0&&isFinite(bpm), vH=hertz>0&&isFinite(hertz);
  const D=ANALYSIS[lang]||ANALYSIS.fr;
  const bCat=vB?(bpm<80?'slow':bpm<115?'medium':'fast'):'medium';
  const hCat=vH?(hertz<500?'veryLow':hertz<1500?'low':hertz<4000?'mid':'high'):'mid';
  const b=pick(D.bpm[bCat]).replaceAll('%B%',bpm);
  const h=pick(D.hz[hCat]).replaceAll('%H%',hertz.toLocaleString());
  const c=L('conclus')[wt]||'';
  return `${b} ${h}<br><br><strong style="color:#7c3aed">${L('conseil')} :</strong> ${c}`;
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

function fatigueScore(bpm,hz){let s=0;if(bpm>140)s+=40;else if(bpm>110)s+=20;if(hz>3000)s+=40;else if(hz>1500)s+=20;return Math.min(s,100);}

const HCOL={dopamine:'linear-gradient(90deg,#7c3aed,#a855f7)',cortisol:'linear-gradient(90deg,#f59e0b,#ef4444)',serotonin:'linear-gradient(90deg,#10b981,#059669)',melatonin:'linear-gradient(90deg,#6366f1,#4338ca)',endorphins:'linear-gradient(90deg,#ec4899,#db2777)',noradr:'linear-gradient(90deg,#f59e0b,#d97706)'};

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
  return{dopamine:cap(d),cortisol:cap(c),serotonin:cap(s),melatonin:cap(m),endorphins:cap(e),noradr:cap(n)};
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
function showResults(bpm,hz,label,rms=0.15,signalVariance=0.1){
  const wt=getWave(bpm);
  const wn=L('wnames');
  S('rname').innerText=label.length>42?label.substring(0,40)+'…':label;
  S('rbpm').innerText=(bpm>0&&isFinite(bpm))?bpm:'—';
  S('rhz').innerText=hz>0?hz.toLocaleString():'—';
  S('rwave').innerText=wn[wt];
  ['wd','wt','wa','wb','wg'].forEach(id=>S(id).classList.remove('on'));
  S({delta:'wd',theta:'wt',alpha:'wa',beta:'wb',gamma:'wg'}[wt]).classList.add('on');
  typeWords(S('rdesc'),generateNeuroAnalysis(bpm,hz,wt),72);
  S('rtags').innerHTML=generateTags(bpm,hz,wt);
  const fs=fatigueScore(bpm,hz);
  const ff=S('ffill'),fl=S('flbl');
  if(fs>=60){ff.style.cssText=`width:${fs}%;background:linear-gradient(90deg,#f59e0b,#ef4444)`;fl.style.color='#b91c1c';fl.textContent=L('fHigh');}
  else if(fs>=30){ff.style.cssText=`width:${fs}%;background:linear-gradient(90deg,#a855f7,#7c3aed)`;fl.style.color='#6d28d9';fl.textContent=L('fMid');}
  else{ff.style.cssText=`width:${Math.max(fs,8)}%;background:linear-gradient(90deg,#10b981,#059669)`;fl.style.color='#065f46';fl.textContent=L('fLow');}
  if(bpm>0&&isFinite(bpm))S('hbdot').style.animation=`heartbeat ${(60/bpm).toFixed(3)}s ease-in-out infinite`;
  lastBpm=bpm;lastHz=hz;renderHormones(bpm,hz,rms,signalVariance);
  S('sc-analyzing').classList.add('hidden');
  S('sc-result').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
  cachedShareCanvas=null;
  setTimeout(async()=>{
    try{
      const target=S('rleft');
      const actionsDiv=target.querySelector('.backbtn').parentElement;
      actionsDiv.style.display='none';
      const rdesc=S('rdesc');
      const cur=rdesc.querySelector('.cur');
      if(cur) cur.style.display='none';
      cachedShareCanvas=await html2canvas(target,{
        backgroundColor:theme==='dark'?'#04040e':'#eeeef5',
        scale:1,useCORS:true,logging:false
      });
      if(cur) cur.style.display='';
      actionsDiv.style.display='flex';
    }catch{}
  },3500);
}

/* ══════════════════════════════════
   FFMPEG.WASM — Décodeur universel
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
    ctx.decodeAudioData(ab,resolve,reject);
  });
}

/* ══ Pro Peak-Detection BPM Algorithm (native DSP) ══ */
function calculateBpmFromPeaks(data, sampleRate) {
    let peaks = [];
    const minIndex = Math.floor(sampleRate * 0.2); // Minimum 200ms between kicks (max 300 BPM physical limit)
    
    // 1. Dynamic Thresholding (Chunk Analysis)
    // Analyze block by block to detect kicks even in quiet sections/intros
    const blockSize = sampleRate; // 1-second blocks
    for (let i = 0; i < data.length; i += blockSize) {
        let block = data.subarray(i, i + blockSize);
        let maxInBlock = 0;
        
        for (let j = 0; j < block.length; j++) {
            if (Math.abs(block[j]) > maxInBlock) maxInBlock = Math.abs(block[j]);
        }
        
        // Lower threshold for more sensitivity inside the block
        let threshold = maxInBlock * 0.80; 
        
        for (let j = 0; j < block.length; j++) {
            if (block[j] > threshold) {
                let absoluteIndex = i + j;
                // Avoid double-counting the same peak
                if (peaks.length === 0 || absoluteIndex - peaks[peaks.length - 1] > minIndex) {
                    peaks.push(absoluteIndex);
                }
            }
        }
    }
    
    if (peaks.length < 2) return 0;
    
    // 2. Interval Calculation and Octave Correction
    let bpmCounts = [];
    for (let i = 1; i < peaks.length; i++) {
        let interval = peaks[i] - peaks[i - 1];
        let bpm = (60 * sampleRate) / interval;
        
        // Force BPM into standard DJ range [75 - 150 BPM] to fix octave errors
        while (bpm < 75) bpm *= 2;
        while (bpm >= 150) bpm /= 2;
        
        bpmCounts.push(Math.round(bpm));
    }
    
    // 3. Cluster Voting System
    // Find the most frequent BPM with a +/- 1 BPM tolerance
    let counts = {};
    bpmCounts.forEach(bpm => {
        counts[bpm] = (counts[bpm] || 0) + 1;
    });
    
    let bestBpm = 0;
    let maxCount = 0;
    
    for (let bpmStr in counts) {
        let bpm = parseInt(bpmStr);
        // Add adjacent BPM counts to smooth out micro-variations
        let clusterScore = (counts[bpm] || 0) + (counts[bpm - 1] || 0) + (counts[bpm + 1] || 0);
        
        if (clusterScore > maxCount) {
            maxCount = clusterScore;
            bestBpm = bpm;
        }
    }
    
    return bestBpm;
}

/* ══ Main BPM detection function — Native DSP via OfflineAudioContext ══ */
async function detectBpm(file) {
    const resultElement = document.getElementById('bpm-resultat');
    if (resultElement) resultElement.innerText = "Analyse...";

    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        
        // 1. Limit analysis to the first 60 seconds for insane speed
        const duration = Math.min(audioBuffer.duration, 60);
        const sampleRate = audioBuffer.sampleRate;
        
        // 2. Create lightning-fast Offline Context (1 channel is enough for BPM)
        const offlineCtx = new OfflineAudioContext(1, sampleRate * duration, sampleRate);
        
        const source = offlineCtx.createBufferSource();
        source.buffer = audioBuffer;
        
        // 3. Professional DSP Filter: Isolate the Kick drum (Lowpass filter at 150Hz)
        const filter = offlineCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, offlineCtx.currentTime);
        
        // Connect pipeline: Source -> Filter -> Virtual Destination
        source.connect(filter);
        filter.connect(offlineCtx.destination);
        source.start(0);
        
        // 4. Render the audio at hardware speed (takes a few milliseconds)
        const renderedBuffer = await offlineCtx.startRendering();
        const bufferData = renderedBuffer.getChannelData(0);
        
        // 5. Peak matching algorithm
        const bpm = calculateBpmFromPeaks(bufferData, sampleRate);

        // 6. Extract Hz (ZCR), RMS, and signal variance from the ORIGINAL unfiltered audio
        const originalData = audioBuffer.getChannelData(0);
        const sigLen = Math.min(originalData.length, sampleRate * 60);
        const dur = Math.min(audioBuffer.duration, 60);

        // ZCR for Hz
        let zc = 0, pos = originalData[0] > 0;
        for (let i = 1; i < sigLen; i++) {
            if (pos && originalData[i] < -0.005) pos = false;
            else if (!pos && originalData[i] > 0.005) { pos = true; zc++; }
        }
        const hz = Math.round(zc / dur);

        // RMS
        let sumSq = 0;
        for (let i = 0; i < sigLen; i++) sumSq += originalData[i] * originalData[i];
        const rms = Math.sqrt(sumSq / sigLen);

        // Signal variance
        let sumDev = 0;
        for (let i = 0; i < sigLen; i++) sumDev += Math.abs(Math.abs(originalData[i]) - rms);
        const signalVariance = sumDev / sigLen;

        // 7. Extract label from filename
        const label = (() => {
            let l = file.name.replace(/\.[^/.]+$/, '');
            if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(l) || l.length > 40)
                l = lang === 'en' ? 'Audio Analysis' : 'Analyse audio';
            return l;
        })();

        // 8. Show results
        showResults(bpm, hz, label, rms, signalVariance);
        console.log(`[ZenHertz] Analysis successful. BPM: ${bpm}, Hz: ${hz}`);

    } catch (error) {
        console.error("[ZenHertz] Error analyzing BPM:", error);
        S('sc-analyzing').classList.add('hidden');
        S('sc-ready').classList.remove('hidden');
        showAlert(L('errLink'));
    }
}

/* ── Analyse BPM native (utilisé par les chemins vidéo/FFmpeg) ── */
async function analyzeRawSamples(data, sr, dur, label){
  // Calcul du BPM via native algorithm
  const step = Math.floor(sr / 4);
  let peaks = [];
  let maxAmp = 0;
  for (let i = 0; i < data.length; i++) {
    if (Math.abs(data[i]) > maxAmp) maxAmp = Math.abs(data[i]);
  }
  const threshold = maxAmp * 0.75;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > threshold) { peaks.push(i); i += step; }
  }
  
  let bpm = 0;
  if (peaks.length >= 2) {
    let intervals = [];
    for (let i = 1; i < peaks.length; i++) intervals.push(peaks[i] - peaks[i - 1]);
    let counts = {};
    intervals.forEach(ival => { const r = Math.round(ival / 100) * 100; counts[r] = (counts[r] || 0) + 1; });
    let maxC = 0, bestI = 0;
    for (let ival in counts) { if (counts[ival] > maxC) { maxC = counts[ival]; bestI = parseInt(ival); } }
    if (bestI) {
      let raw = (60 * sr) / bestI;
      while (raw < 60) raw *= 2;
      while (raw > 180) raw /= 2;
      bpm = raw;
    }
  }

  // Hz (ZCR)
  let zc = 0, pos = data[0] > 0;
  for (let i = 1; i < data.length; i++) {
    if (pos && data[i] < -0.005) pos = false;
    else if (!pos && data[i] > 0.005) { pos = true; zc++; }
  }
  const hz = Math.round(zc / dur);

  // RMS
  const sigLen = Math.min(data.length, sr * 60);
  let sumSq = 0;
  for (let i = 0; i < sigLen; i++) sumSq += data[i] * data[i];
  const rms = Math.sqrt(sumSq / sigLen);

  // Signal variance
  let sumDev = 0;
  for (let i = 0; i < sigLen; i++) sumDev += Math.abs(Math.abs(data[i]) - rms);
  const signalVariance = sumDev / sigLen;

  showResults(bpm, hz, label, rms, signalVariance);
}

async function processArrayBuffer(ab,label){
  const ctx=getAudioCtx();
  if(ctx.state==='suspended') await ctx.resume();
  const buf=await decodeAudioDataUniversal(ctx,ab);
  const sr=buf.sampleRate,durFull=buf.duration;
  const rawData=buf.getChannelData(0);
  const data=rawData.subarray(0,Math.min(rawData.length,Math.floor(90*sr)));
  analyzeRawSamples(data,sr,Math.min(durFull,90),label);
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

/* ══ FILE UPLOAD (audio + video) — direct detectBpm() call ══ */
S('audio-input').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;
  hideAlert();
  S('sc-ready').classList.add('hidden');
  S('sc-analyzing').classList.remove('hidden');
  S('scan-title').textContent=L('scanning');
  S('scan-sub').textContent=L('analyzinglbl');
  S('home-btn').style.display='flex';

  // Fichier vidéo détecté → chemin vidéo (ne peut pas passer par AudioContext)
  const isVideo=file.type.startsWith('video/')||/\.(mp4|mov|avi|mkv|webm|m4v|3gp)$/i.test(file.name);

  if(!isVideo){
    // Audio file → Direct native DSP via OfflineAudioContext (ultra-rapide)
    try{await detectBpm(file);return;}
    catch(err){/* audio non reconnu → tente chemin vidéo */}
  }

  // Chemin vidéo — MediaRecorder (PC Chrome/Firefox)
  if(typeof MediaRecorder!=='undefined'){
    try{await processViaVideoElement(file,labelFromFile(file));return;}
    catch(err2){console.warn('[MediaRecorder]',err2);}
    // Chrome peut décoder l'audio MP4 directement
    try{const ab=await file.arrayBuffer();await processArrayBuffer(ab,labelFromFile(file));return;}
    catch(err2b){console.warn('[ArrayBuffer fallback]',err2b);}
  }

  // Chemin vidéo — FFmpeg.wasm
  try{
    S('scan-sub').textContent=lang==='en'?'Loading decoder…':'Chargement du décodeur…';
    await processViaFFmpeg(file,labelFromFile(file));
    return;
  }catch(err3){console.warn('[FFmpeg]',err3);}

  // Chemin vidéo iOS — ScriptProcessorNode (last resort)
  try{await processViaAnalyserSampling(file,labelFromFile(file));}
  catch(err4){goHome();}
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

/* ══ URL ANALYSIS ══ */
function triggerAnalyzeLink(){
  const url=S('url-input').value.trim();
  if(!url){showAlert(L('errEmpty'));return;}
  hideAlert();
  analyzeLink(url);
}

S('url-input').addEventListener('keydown',e=>{if(e.key==='Enter')triggerAnalyzeLink();});

async function analyzeLink(url){
  S('sc-ready').classList.add('hidden');
  S('sc-analyzing').classList.remove('hidden');
  S('scan-title').textContent=L('extracting');
  S('scan-sub').textContent=L('extractsub');
  S('home-btn').style.display='flex';

  const COBALT=[
    'https://cobalt-api.v0l.io/',
    'https://cobalt.api.timkodiert.de/',
    'https://api.cobalt.tools/',
  ];

  let audioUrl=null;
  for(const inst of COBALT){
    try{
      const r=await fetch(inst,{
        method:'POST',
        headers:{'Accept':'application/json','Content-Type':'application/json'},
        body:JSON.stringify({url,downloadMode:'audio',audioFormat:'mp3',filenameStyle:'basic'}),
        signal:AbortSignal.timeout(9000)
      });
      if(!r.ok) continue;
      const d=await r.json();
      const u=d.url||d.tunnel;
      if(u){audioUrl=u;break;}
    }catch(e){console.warn('[Cobalt]',inst,e.message);}
  }

  if(!audioUrl){
    S('sc-analyzing').classList.add('hidden');
    S('sc-ready').classList.remove('hidden');
    S('home-btn').style.display='none';
    showAlert(L('errLink'));
    return;
  }

  S('scan-title').textContent=L('scanning');
  S('scan-sub').textContent=L('analyzinglbl');

  const PROXIES=[
    u=>u,
    u=>'https://corsproxy.io/?'+encodeURIComponent(u),
    u=>'https://api.allorigins.win/raw?url='+encodeURIComponent(u),
  ];

  let ab=null;
  for(const makeUrl of PROXIES){
    try{
      const r=await fetch(makeUrl(audioUrl),{signal:AbortSignal.timeout(20000)});
      if(!r.ok) continue;
      const buf=await r.arrayBuffer();
      if(buf.byteLength>1000){ab=buf;break;}
    }catch(e){console.warn('[fetch]',e.message);}
  }

  if(!ab){
    S('sc-analyzing').classList.add('hidden');
    S('sc-ready').classList.remove('hidden');
    S('home-btn').style.display='none';
    showAlert(L('errLink'));
    return;
  }

  let label='Audio';
  try{const u=new URL(url);label=u.hostname.replace('www.','')+' — '+u.pathname.split('/').filter(Boolean).pop();}catch{}
  await processArrayBuffer(ab,label);
}

let cachedShareCanvas=null;

/* ══ CAPTURE BILAN (SHARE) ══ */
async function captureBilan(){
  const btn=S('btn-share');
  const originalHTML=btn.innerHTML;
  btn.innerHTML=`📸 <span>${L('capturing')}</span>`;

  try{
    let canvas=cachedShareCanvas;

    if(!canvas){
      const target=S('rleft');
      const actionsDiv=target.querySelector('.backbtn').parentElement;
      actionsDiv.style.display='none';
      canvas=await html2canvas(target,{
        backgroundColor:theme==='dark'?'#04040e':'#eeeef5',
        scale:1,useCORS:true,logging:false
      });
      actionsDiv.style.display='flex';
    }

    btn.innerHTML=originalHTML;

    const zenScore=Math.max(0,100-fatigueScore(lastBpm,lastHz));
    const shareText=`Score Zen Hertz : ${zenScore} 🧠\nRythme : ${lastBpm} BPM 🥁\nFréquence : ${lastHz} Hz 🌊\n\nViens tester l'impact de ta musique sur ton cerveau : https://zenhertz.com`;

    if(typeof navigator.share==='function'){
      try{
        const blob=await new Promise(res=>canvas.toBlob(res,'image/png'));
        const file=new File([blob],`ZenHertz_${lastBpm}BPM.png`,{type:'image/png'});
        if(navigator.canShare&&navigator.canShare({files:[file]})){
          await navigator.share({title:'ZenHertz',text:shareText,files:[file]});
          btn.innerHTML=originalHTML;
          return;
        }
      }catch(e){if(e.name==='AbortError'){btn.innerHTML=originalHTML;return;}}

      try{
        await navigator.share({title:'ZenHertz',text:shareText});
        btn.innerHTML=originalHTML;
        return;
      }catch(e){if(e.name==='AbortError'){btn.innerHTML=originalHTML;return;}}
    }

    await navigator.clipboard.writeText(shareText);
    alert('Résultat copié dans le presse-papier !');

  }catch(err){
    console.error(err);
    btn.innerHTML=originalHTML;
    alert('Erreur lors de la capture de l\'image.');
  }
}

/* ══ COPIER TEXTE SEUL ══ */
async function copierTexte(){
  const zenScore=Math.max(0,100-fatigueScore(lastBpm,lastHz));
  const txt=`Score Zen Hertz : ${zenScore} 🧠\nRythme : ${lastBpm} BPM 🥁\nFréquence : ${lastHz} Hz 🌊\n\nViens tester l'impact de ta musique sur ton cerveau : https://zenhertz.com`;
  try{
    await navigator.clipboard.writeText(txt);
    alert('Résultat copié dans le presse-papier !');
  }catch(e){
    alert(txt);
  }
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
          ['#818cf8','δ Delta','0,5–4 Hz — sommeil profond, régénération cellulaire, pic de mélatonine'],
          ['#a78bfa','θ Thêta','4–8 Hz — créativité, mémoire à long terme, pics de dopamine'],
          ['#7c3aed','α Alpha','8–13 Hz — relaxation vigilante, état de flow, sérotonine élevée'],
          ['#c084fc','β Bêta','13–30 Hz — concentration active, résolution de problèmes, cortisol modéré'],
          ['#e879f9','γ Gamma','30–100 Hz — cognition intense, conscience élargie, noradrénaline haute'],
        ],p2:`Des chercheurs de Stanford ont démontré que les oscillations à 40 Hz (onde Gamma) stimulent le cortex préfrontal, améliorant l'attention et la mémoire de travail en quelques minutes d'exposition.`},
        {h:'Dopamine & circuit de la récompense',p:`La musique est l'un des seuls stimuli non-chimiques capables d'activer le <strong>noyau accumbens</strong> — le centre du plaisir du cerveau. Une étude de Salimpoor et al. (2011, <em>Nature Neuroscience</em>) a mesuré des pics de dopamine allant jusqu'à +65% lors de l'écoute de musique émotionnellement intense. ZenHertz analyse ces patterns pour estimer l'impact probable sur votre circuit de récompense.`},
        {h:'Cortisol & stress acoustique',p:`Des tempos très rapides (>160 BPM) peuvent déclencher une réponse de stress, augmentant le cortisol via l'axe HHS. En revanche, les fréquences graves (40–100 Hz) stimulent le nerf vague, réduisant le cortisol et favorisant la récupération — principe utilisé en musicothérapie clinique.`},
        {h:'Comment ZenHertz calcule-t-il ?',p:`L'algorithme analyse le fichier audio en deux temps :`,list2:[
          ['Détection de pics d\'amplitude','calcul du BPM par intervalles inter-battements'],
          ['FFT (Transformée de Fourier rapide)','isolation de la fréquence dominante réelle en Hz'],
        ],p2:`Ces valeurs sont croisées avec des modèles neuroacoustiques pour estimer l'impact hormonal probable. Tout le traitement s'effectue <strong>localement dans votre navigateur</strong> — aucune donnée ne quitte votre appareil.`},
      ]
    },
    en:{
      logo:'🔬',title:'The science behind ZenHertz',sub:'Bioacoustics & neuroscience — simply explained',
      sections:[
        {h:'BPM & cardiac synchronization',p:`A song's tempo (measured in beats per minute, BPM) directly influences heart rate through a phenomenon called <strong>cardiovascular entrainment</strong>. Studies published in the <em>Journal of Music Therapy</em> show that music between 60 and 80 BPM promotes cardiac coherence, activating the parasympathetic nervous system the body's rest and recovery mode.<br><br>Conversely, tempos above 130–140 BPM stimulate the sympathetic system, increasing heart rate and noradrenaline production — which is why they're used in workout playlists.`},
        {h:'Hz frequencies & brainwaves',p:`Sound frequencies interact with the brain through <strong>neural resonance</strong>. Each brainwave band corresponds to a distinct mental state:`,list:[
          ['#818cf8','δ Delta','0.5–4 Hz — deep sleep, cellular regeneration, melatonin peak'],
          ['#a78bfa','θ Theta','4–8 Hz — creativity, long-term memory, dopamine peaks'],
          ['#7c3aed','α Alpha','8–13 Hz — alert relaxation, flow state, elevated serotonin'],
          ['#c084fc','β Beta','13–30 Hz — active focus, problem-solving, moderate cortisol'],
          ['#e879f9','γ Gamma','30–100 Hz — intense cognition, expanded awareness, high noradrenaline'],
        ],p2:`Stanford researchers demonstrated that 40 Hz oscillations (Gamma wave) stimulate the prefrontal cortex, improving attention and working memory within minutes of exposure.`},
        {h:'Dopamine & the reward circuit',p:`Music is one of the only non-chemical stimuli capable of activating the <strong>nucleus accumbens</strong> — the brain's pleasure center. A study by Salimpoor et al. (2011, <em>Nature Neuroscience</em>) measured dopamine peaks of up to +65% during emotionally intense music listening. ZenHertz analyzes these patterns to estimate the likely impact on your reward circuit.`},
        {h:'Cortisol & acoustic stress',p:`Very fast tempos (>160 BPM) can trigger a stress response, increasing cortisol through the HPA axis. Conversely, bass frequencies (40–100 Hz) stimulate the vagus nerve, reducing cortisol and promoting recovery — the same principle used in clinical music therapy.`},
        {h:'How does ZenHertz calculate?',p:`The algorithm analyzes the audio file in two steps:`,list2:[
          ['Amplitude peak detection','BPM calculation via inter-beat intervals'],
          ['FFT (Fast Fourier Transform)','isolation of the real dominant frequency in Hz'],
        ],p2:`These values are cross-referenced with neuroacoustic models to estimate the probable hormonal impact. All processing happens <strong>locally in your browser</strong> — no data ever leaves your device.`},
      ]
    }
  },
  legal:{
    fr:{
      logo:'⚖️',title:'Mentions légales',sub:'Transparence & confidentialité',
      sections:[
        {h:'Disclaimer médical',p:`ZenHertz est un outil de <strong>divertissement et d'exploration personnelle</strong>. Les scores BPM, Hz, les estimations hormonales et les profils neuroacoustiques générés sont des <strong>approximations algorithmiques</strong> basées sur l'analyse du signal audio.<br><br>Ces résultats ne constituent en aucun cas un diagnostic médical, psychiatrique ou neurologique. Ils ne remplacent pas l'avis d'un professionnel de santé. En cas de troubles du sommeil, d'anxiété ou de tout autre symptôme, consultez un médecin qualifié.`},
        {h:"Limites de l'algorithme",p:`L'analyse repose sur la détection de pics d'amplitude (BPM) et une FFT pour la fréquence dominante (Hz). Elle fonctionne de manière optimale sur des morceaux avec une structure rythmique claire. Les résultats peuvent varier selon la qualité du fichier audio, le genre musical ou la complexité harmonique du morceau.`},
        {h:'🔒 Confidentialité & données',p:`ZenHertz respecte intégralement votre vie privée :`,list2:[
          ['Tout traitement est 100 % local','votre fichier audio est analysé directement dans votre navigateur'],
          ['Aucun fichier n\'est envoyé sur un serveur','vos musiques restent sur votre appareil'],
          ['Aucune donnée personnelle collectée','pas de cookies de traçage, pas de compte requis'],
          ['Aucune base de données','les résultats ne sont pas stockés ni transmis'],
        ],p2:`ZenHertz ne collecte, ne vend et ne partage aucune donnée utilisateur.`},
        {h:'Propriété intellectuelle',p:`ZenHertz et son algorithme d'analyse bioacoustique sont la propriété de leurs créateurs. Toute reproduction ou distribution sans autorisation explicite est interdite.`},
      ],
      copy:'© 2025 ZenHertz — Tous droits réservés'
    },
    en:{
      logo:'⚖️',title:'Legal Notice',sub:'Transparency & privacy',
      sections:[
        {h:'Medical disclaimer',p:`ZenHertz is a <strong>entertainment and personal exploration tool</strong>. BPM scores, Hz values, hormonal estimates and neuroacoustic profiles are <strong>algorithmic approximations</strong> based on audio signal analysis.<br><br>These results do not constitute a medical, psychiatric or neurological diagnosis. They do not replace the advice of a healthcare professional. If you experience sleep disorders, anxiety or any other symptoms, please consult a qualified physician.`},
        {h:'Algorithm limitations',p:`The analysis uses amplitude peak detection (BPM) and FFT for the dominant frequency (Hz). It works best on tracks with a clear rhythmic structure. Results may vary depending on audio file quality, music genre, or harmonic complexity.`},
        {h:'🔒 Privacy & data',p:`ZenHertz fully respects your privacy:`,list2:[
          ['All processing is 100% local','your audio file is analyzed directly in your browser'],
          ['No file is sent to a server','your music stays on your device'],
          ['No personal data collected','no tracking cookies, no account required'],
          ['No database','results are not stored or transmitted'],
        ],p2:`ZenHertz does not collect, sell or share any user data.`},
        {h:'Intellectual property',p:`ZenHertz and its bioacoustic analysis algorithm are the property of their creators. Any reproduction or distribution without explicit authorization is prohibited.`},
      ],
      copy:'© 2025 ZenHertz — All rights reserved'
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
        html+=`<li>✅ <strong>${strong}</strong> — ${desc}</li>`;
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