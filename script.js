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
        
        // On ne garde que les 40 premières secondes pour un calcul rapide et précis
        const offlineCtx = new OfflineAudioContext(1, audioBuffer.sampleRate * 40, audioBuffer.sampleRate);
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

        // Algorithme de détection de tempo (Energy Peak detection raffiné)
        const sampleRate = filteredBuffer.sampleRate;
        let peaks = [];
        let threshold = 0.7; // Seuil initial
        
        // On cherche les pics sur toute la durée traitée
        for (let i = 0; i < data.length; i++) {
            if (data[i] > threshold) {
                peaks.push(i);
                i += sampleRate * 0.25; // Empêche de compter les doubles kicks (max 240 BPM)
            }
        }

        // Calcul des intervalles entre les pics pour trouver le rythme dominant
        let intervals = {};
        for (let i = 1; i < peaks.length; i++) {
            let interval = peaks[i] - peaks[i-1];
            // On arrondit pour grouper les intervalles similaires
            let rounded = Math.round(interval / 100) * 100;
            intervals[rounded] = (intervals[rounded] || 0) + 1;
        }

        // On cherche l'intervalle le plus fréquent
        let maxCount = 0;
        let bestInterval = 0;
        for (let int in intervals) {
            if (intervals[int] > maxCount) {
                maxCount = intervals[int];
                bestInterval = int;
            }
        }

        let finalBpm = Math.round(60 / (bestInterval / sampleRate));

        // Sécurité pour les genres ultra-rapides ou lents
        if (finalBpm < 70) finalBpm *= 2; 
        if (finalBpm > 200) finalBpm = Math.round(finalBpm / 2);

        // Affichage
        document.getElementById('res-name').innerText = file.name.split('.')[0].substring(0, 18);
        document.getElementById('res-bpm').innerText = finalBpm;
        
        let waveType = "Bêta (Focus)";
        if (finalBpm < 110) waveType = "Alpha (Relax)";
        if (finalBpm > 150) waveType = "Gamma (Intense)";
        document.getElementById('res-wave').innerText = waveType;

        screenAnalyzing.classList.add('hidden');
        screenResult.classList.remove('hidden');

    } catch (err) {
        console.error(err);
        alert("Erreur. Essayez un fichier plus court ou un autre format.");
        location.reload();
    }
});
