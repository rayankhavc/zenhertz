const audioInput = document.getElementById('audio-input');
const screenReady = document.getElementById('screen-ready');
const screenAnalyzing = document.getElementById('screen-analyzing');
const screenResult = document.getElementById('screen-result');

audioInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    screenReady.classList.add('hidden');
    screenAnalyzing.classList.remove('hidden');

    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        
        // --- 1. PRÉ-TRAITEMENT (FILTRE PASSE-BAS) ---
        // On isole les basses pour ne pas être perturbé par les cymbales/voix
        const offlineCtx = new OfflineAudioContext(1, audioBuffer.length, audioBuffer.sampleRate);
        const source = offlineCtx.createBufferSource();
        source.buffer = audioBuffer;
        
        const filter = offlineCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 150; 

        source.connect(filter);
        filter.connect(offlineCtx.destination);
        source.start(0);
        const filteredBuffer = await offlineCtx.startRendering();
        const data = filteredBuffer.getChannelData(0);

        // --- 2. ANALYSE PAR AUTOCORRÉLATION ---
        // On définit une plage de recherche réaliste (60 à 200 BPM)
        const sampleRate = filteredBuffer.sampleRate;
        const minBpm = 60;
        const maxBpm = 200;
        const minInterval = Math.floor(sampleRate * 60 / maxBpm);
        const maxInterval = Math.floor(sampleRate * 60 / minBpm);

        let bestLag = 0;
        let maxCorrelation = -Infinity;

        // On échantillonne plusieurs parties du morceau pour plus de précision
        // On prend 10 fenêtres de 2 secondes à différents endroits
        const windowSize = sampleRate * 2; 
        const stepSize = Math.floor((data.length - windowSize) / 10);
        
        let bpmEstimates = [];

        for (let offset = 0; offset < data.length - windowSize; offset += stepSize) {
            let localMaxCorr = -Infinity;
            let localBestLag = 0;

            for (let lag = minInterval; lag <= maxInterval; lag++) {
                let correlation = 0;
                for (let i = 0; i < windowSize; i += 10) { // On saute des pas pour la performance
                    correlation += data[offset + i] * data[offset + i + lag];
                }

                if (correlation > localMaxCorr) {
                    localMaxCorr = correlation;
                    localBestLag = lag;
                }
            }
            bpmEstimates.push(Math.round(60 * sampleRate / localBestLag));
        }

        // --- 3. CALCUL DE LA MOYENNE (TRI DES ERREURS) ---
        // On trie les résultats et on prend la valeur centrale (médiane) pour éviter les "bugs"
        bpmEstimates.sort((a, b) => a - b);
        let finalBpm = bpmEstimates[Math.floor(bpmEstimates.length / 2)];

        // Correction finale pour les genres spécifiques
        if (finalBpm < 70) finalBpm *= 2; // Évite les demi-tempos

        // Affichage
        document.getElementById('res-name').innerText = file.name.split('.')[0].substring(0, 20);
        document.getElementById('res-bpm').innerText = finalBpm;
        
        // Diagnostic neuro
        let waveType = "Alpha (Repos)";
        if (finalBpm >= 100 && finalBpm < 140) waveType = "Bêta (Focus)";
        if (finalBpm >= 140) waveType = "Gamma (Hyper-Activité)";
        
        document.getElementById('res-wave').innerText = waveType;

        screenAnalyzing.classList.add('hidden');
        screenResult.classList.remove('hidden');

    } catch (err) {
        console.error(err);
        alert("Fichier illisible ou trop lourd.");
        location.reload();
    }
});
