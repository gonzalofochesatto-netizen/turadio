import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, Radio } from "lucide-react";

export const StickyPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  useEffect(() => {
    const handlePlay = () => {
      if (!audioRef.current) return;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    window.addEventListener("play-demo", handlePlay);
    return () => window.removeEventListener("play-demo", handlePlay);
  }, []);

  return (
    <div
      id="demo"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[min(92vw,520px)]"
    >
      <div className="glass border border-border/60 rounded-2xl shadow-elegant p-3 flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar demo" : "Reproducir demo"}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Radio className="h-3.5 w-3.5 text-primary" />
            <span className="uppercase tracking-wider">En vivo · Demo</span>
          </div>
          <div className="font-display text-sm font-semibold truncate">
            Tu Radio en Internet · Calidad HD
          </div>
        </div>

        {/* Waveform */}
        <div className="hidden sm:flex items-end gap-0.5 h-8">
          {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.4].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-primary ${playing ? "animate-wave" : ""}`}
              style={{
                height: `${h * 100}%`,
                animationDelay: `${i * 0.12}s`,
                opacity: playing ? 1 : 0.4,
              }}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-primary"
            aria-label="Volumen"
          />
        </div>

        <audio ref={audioRef} src="https://stream.zeno.fm/0r0xa792kwzuv" preload="none" />
      </div>
    </div>
  );
};
