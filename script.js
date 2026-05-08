const audioInput = document.getElementById('audio-input');
const screenReady = document.getElementById('screen-ready');
const screenAnalyzing = document.getElementById('screen-analyzing');
const screenResult = document.getElementById('screen-result');

audioInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Passage à l'écran analyse
    screenReady.classList.add('hidden');
    screenAnalyzing.classList.remove('hidden');

    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        
        // Calcul BPM simplifié (Basé sur les pics d'énergie)
        const data = audioBuffer.getChannelData(0);
        let peaks = 0;
        const threshold = 0.5; // On cherche les sons forts (beats)
        
        for (let i = 0; i < data.length; i += 1000) {
            if (Math.abs(data[i]) > threshold) {
                peaks++;
                i += 10000; // Anti-doublon
            }
        }

        const duration = audioBuffer.duration;
        let bpm = Math.round((peaks / duration) * 60);
        
        // Ajustement pour réalisme
        if (bpm < 65) bpm = bpm + 60;
        if (bpm > 180) bpm = Math.round(bpm / 2);

        // Affichage des résultats
        document.getElementById('res-name').innerText = file.name.substring(0, 20);
        document.getElementById('res-bpm').innerText = bpm;
        document.getElementById('res-wave').innerText = bpm < 115 ? "Alpha (Calme)" : "Bêta (Focus)";

        screenAnalyzing.classList.add('hidden');
        screenResult.classList.remove('hidden');

    } catch (err) {
        alert("Erreur lors de l'analyse du fichier.");
        location.reload();
    }
});
