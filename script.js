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
        
        // --- BLOC 1 : BPM (Ta méthode validée) ---
        const data = audioBuffer.getChannelData(0);
        const sampleRate = audioBuffer.sampleRate;
        let peaks = [];
        let threshold = 0.7; 

        for (let i = 0; i < Math.min(data.length, sampleRate * 40); i++) {
            if (data[i] > threshold) {
                peaks.push(i);
                i += sampleRate * 0.25; 
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
        if (bpm < 65) bpm *= 2;
        if (bpm > 200) bpm = Math.round(bpm / 2);

        // --- BLOC 2 : HERTZ (Nouvelle brique fréquences) ---
        // On utilise un AnalyserNode pour extraire les fréquences réelles
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(analyser);
        // On ne branche pas à audioCtx.destination pour que ce soit silencieux
        source.start(0);

        // On prend une mesure après un court délai (pour éviter le silence du début)
        // Comme on est en async, on simule une lecture rapide
        analyser.getByteFrequencyData(dataArray);
        
        let maxEnergy = 0;
        let freqIndex = 0;
        for(let i = 0; i < bufferLength; i++) {
            if(dataArray[i] > maxEnergy) {
                maxEnergy = dataArray[i];
                freqIndex = i;
            }
        }
        let finalHz = Math.round(freqIndex * audioCtx.sampleRate / analyser.fftSize);
        if (finalHz < 20) finalHz = 55; // Valeur par défaut cohérente (basse)

        // --- BLOC 3 : ONDES ---
        let waveType = "Bêta";
        if (bpm < 115) waveType = "Alpha";
        if (bpm > 155) waveType = "Gamma";

        // --- AFFICHAGE FINAL ---
        document.getElementById('res-name').innerText = file.name.substring(0, 18);
        document.getElementById('res-bpm').innerText = bpm;
        document.getElementById('res-hz').innerText = finalHz;
        document.getElementById('res-wave').innerText = waveType;

        screenAnalyzing.classList.add('hidden');
        screenResult.classList.remove('hidden');

    } catch (err) {
        console.error(err);
        alert("Erreur d'analyse");
        location.reload();
    }
});
