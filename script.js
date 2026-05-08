const { useState, useEffect } = React;

function App() {
  const [status, setStatus] = useState('loading_ia'); 
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const initIA = async () => {
      try {
        if (typeof EssentiaWASM !== 'undefined') {
          const wasm = await EssentiaWASM();
          window.essentia = new Essentia(wasm);
          setStatus('ready');
          setTimeout(() => lucide.createIcons(), 100);
        } else {
          setTimeout(initIA, 1000);
        }
      } catch (e) {
        console.error("Erreur IA:", e);
      }
    };
    initIA();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setStatus('analyzing');
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const arrayBuffer = await file.arrayBuffer();
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      const channelData = audioBuffer.getChannelData(0).slice(0, audioBuffer.sampleRate * 20);
      const vectorData = window.essentia.arrayToVector(channelData);
      const bpmResult = window.essentia.PercivalBpmEstimator(vectorData);
      
      setAnalysis({
        name: file.name.substring(0, 20) + (file.name.length > 20 ? '...' : ''),
        bpm: Math.round(bpmResult.bpm),
        wave: bpmResult.bpm < 100 ? "Alpha (Détente)" : "Bêta (Focus)"
      });
      setStatus('result');
      setTimeout(() => lucide.createIcons(), 100);
    } catch (err) {
      alert("Erreur analyse");
      setStatus('ready');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {status === 'loading_ia' && (
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto"></div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Initialisation ZenHertz...</p>
        </div>
      )}

      {status === 'ready' && (
        <div className="max-w-md w-full text-center space-y-10">
          <h1 className="text-5xl font-black text-gray-900">Zen<span className="text-violet-600">Hertz</span></h1>
          <div className="relative glass p-12 rounded-[38px] cursor-pointer group">
            <input type="file" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept="audio/*" />
            <div className="bg-violet-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <i data-lucide="music-4" className="text-violet-600 w-8 h-8"></i>
            </div>
            <p className="text-lg font-bold">Analyser un morceau</p>
          </div>
        </div>
      )}

      {status === 'analyzing' && (
        <div className="text-center space-y-8">
          <div className="flex items-end justify-center gap-1.5 h-12">
            {[0.1, 0.2, 0.3].map(d => <div key={d} className="wave-anim" style={{animationDelay: `${d}s`}}></div>)}
          </div>
          <p className="text-xs font-black uppercase text-violet-600 animate-pulse">Calcul des données...</p>
        </div>
      )}

      {status === 'result' && analysis && (
        <div className="max-w-lg w-full glass rounded-[48px] p-10 space-y-8 text-center">
          <h2 className="text-2xl font-bold">{analysis.name}</h2>
          <div className="flex justify-around items-center bg-gray-50 p-8 rounded-[32px]">
             <div>
               <p className="text-4xl font-black">{analysis.bpm}</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase">BPM</p>
             </div>
             <div className="w-px h-10 bg-gray-200"></div>
             <div>
               <p className="text-xl font-bold text-violet-600">{analysis.wave}</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase">Onde</p>
             </div>
          </div>
          <button onClick={() => setStatus('ready')} className="w-full py-4 bg-black text-white rounded-full font-bold">RETOUR</button>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
