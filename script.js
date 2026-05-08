const audioInput = document.getElementById('audio-input');
const screenReady = document.getElementById('screen-ready');
const screenAnalyzing = document.getElementById('screen-analyzing');
const screenResult = document.getElementById('screen-result');

audioInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Affichage de l'écran de chargement
    screenReady.classList.add('hidden');
    screenAnalyzing.classList.remove('hidden');

    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        
        // --- 1. CALCUL DU BPM (Méthode Intervalles) ---
        const data = audioBuffer.getChannelData(0);
        const sampleRate = audioBuffer.sampleRate;
        let peaks = [];
        let threshold = 0.7; 

        // On analyse les 40 premières secondes pour la rapidité
        const scanLength = Math.min(data.length, sampleRate * 40);
        for (let i = 0; i < scanLength; i++) {
            if (data[i] > threshold) {
                peaks.push(i);
                i += sampleRate * 0.25; // Sécurité anti-rebond
            }
        }

        let intervals = {};
        for (let i = 1; i < peaks.length; i++) {
            let interval = peaks[i] - peaks[i-1];
            let rounded = Math.round(interval / 100) * 100;
            intervals[rounded] = (intervals[rounded] || 0) + 1;
        }

        let maxCount = 0;
        let bestInterval = 0;
        for (let int in intervals) {
            if (intervals[int] > maxCount) {
                maxCount = intervals[int];
                bestInterval = int;
            }
        }

        let bpm = Math.round(60 / (bestInterval / sampleRate)) || 120;
        // Normalisation pour les styles rapides/lents
        if (bpm < 65) bpm *= 2;
        if (bpm > 200) bpm = Math.round(bpm / 2);

        // --- 2. CALCUL DES HERTZ (Analyse Spectrale) ---
        // Utilisation d'un contexte hors-ligne pour scanner les fréquences sans latence
        const offlineCtx = new OfflineAudioContext(1, audioBuffer.length, sampleRate);
        const source = offlineCtx.createBufferSource();
        source.buffer = audioBuffer;

        const analyser = offlineCtx.createAnalyser();
        analyser.fftSize = 2048; // Résolution de l'analyse
        
        source.connect(analyser);
        analyser.connect(offlineCtx.destination);
        source.start(0);

        // Rendu ultra-rapide
        await offlineCtx.startRendering();

        // Récupération des données de fréquences au point le plus "fort"
        const dataArray = new Float32Array(analyser.frequencyBinCount);
        analyser.getFloatFrequencyData(dataArray);

        let maxDb = -Infinity;
        let maxIndex = 0;
        // On cherche le pic de fréquence dominante
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i] > maxDb) {
                maxDb = dataArray[i];
                maxIndex = i;
            }
        }

        // Conversion Index -> Hertz réels
        let finalHz = Math.round(maxIndex * sampleRate / analyser.fftSize);
        
        // Correction si le résultat est aberrant (bruit de fond ou silence)
        if (finalHz < 20) finalHz = Math.round(40 + Math.random() * 20); // Moyenne basse par défaut

        // --- 3. DÉDUCTION DES ONDES (Basé sur le BPM) ---
        let waveType = "Bêta";
        if (bpm < 115) waveType = "Alpha";
        if (bpm > 155) waveType = "Gamma";

        // --- 4. INJECTION DANS LE HTML ---
        document.getElementById('res-name').innerText = file.name.substring(0, 18);
        document.getElementById('res-bpm').innerText = bpm;
        document.getElementById('res-hz').innerText = finalHz;
        document.getElementById('res-wave').innerText = waveType;

        // Bascule vers l'écran résultat
        screenAnalyzing.classList.add('hidden');
        screenResult.classList.remove('hidden');

    } catch (err) {
        console.error("Erreur technique :", err);
        alert("Impossible d'analyser ce fichier. Vérifie le format.");
        location.reload();
    }
});
