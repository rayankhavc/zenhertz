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
        
        // --- AMÉLIORATION : FILTRAGE DES BASSES ---
        const offlineCtx = new OfflineAudioContext(1, audioBuffer.length, audioBuffer.sampleRate);
        const source = offlineCtx.createBufferSource();
        source.buffer = audioBuffer;

        // On crée un filtre qui coupe tout au-dessus de 150Hz (on ne garde que le kick)
        const filter = offlineCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 150;

        source.connect(filter);
        filter.connect(offlineCtx.destination);
        source.start(0);

        // On calcule le rendu filtré
        const filteredBuffer = await offlineCtx.startRendering();
        const data = filteredBuffer.getChannelData(0);

        // --- DÉTECTION DES PICS ---
        let peaks = [];
        const sampleRate = filteredBuffer.sampleRate;
        
        // On cherche le volume maximum dans le morceau pour ajuster le seuil
        let maxVal = 0;
        for (let i = 0; i < data.length; i += 1000) {
            if (data[i] > maxVal) maxVal = data[i];
        }

        const threshold = maxVal * 0.8; // On ne prend que les 20% des sons les plus forts

        for (let i = 0; i < data.length; i++) {
            if (data[i] > threshold) {
                peaks.push(i);
                // On saute 0.25 seconde pour éviter de recompter le même kick
                i += sampleRate * 0.25; 
            }
        }

        const duration = filteredBuffer.duration;
        let bpm = Math.round((peaks.length / duration) * 60);

        // Ajustement intelligent pour les musiques rapides (Hardtek / Hardstyle)
        // Si le BPM trouvé est très bas (genre 75), c'est qu'on a compté un coup sur deux
        if (bpm < 90 && bpm > 60) bpm = bpm * 2; 
        // Si c'est trop haut (genre 300), c'est qu'on a compté les rebonds
        if (bpm > 220) bpm = Math.round(bpm / 2);

        // Affichage
        document.getElementById('res-name').innerText = file.name.substring(0, 20);
        document.getElementById('res-bpm').innerText = bpm;
        document.getElementById('res-wave').innerText = bpm < 125 ? "Alpha (Détente)" : "Bêta (Énergie)";

        screenAnalyzing.classList.add('hidden');
        screenResult.classList.remove('hidden');

    } catch (err) {
        console.error(err);
        alert("Erreur analyse. Vérifie le format du fichier.");
        location.reload();
    }
});
