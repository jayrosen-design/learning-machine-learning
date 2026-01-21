import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  src?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const AudioPlayer = ({ src, title, subtitle, className }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  // Simulated waveform bars
  const waveformBars = Array.from({ length: 48 }, (_, i) => ({
    height: Math.random() * 60 + 20,
    delay: i * 0.02,
  }));

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Demo mode without actual audio
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleVolumeChange = useCallback((value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const handleSeek = useCallback((value: number[]) => {
    const newTime = value[0];
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }, []);

  const skipBack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    } else {
      setCurrentTime((prev) => Math.max(0, prev - 10));
    }
  }, []);

  const skipForward = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    } else {
      setCurrentTime((prev) => Math.min(duration || 300, prev + 10));
    }
  }, [duration]);

  // Demo mode: simulate progress
  useEffect(() => {
    if (!src && isPlaying) {
      const demoDuration = 300; // 5 minutes demo
      setDuration(demoDuration);
      
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= demoDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [src, isPlaying]);

  // Format time as MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={cn("bg-card border border-border rounded-xl p-6", className)}>
      {src && <audio ref={audioRef} src={src} preload="metadata" />}

      {/* Title and subtitle */}
      <div className="mb-6">
        <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>

      {/* Waveform visualization */}
      <div className="relative h-20 mb-6 flex items-end justify-center gap-0.5 overflow-hidden rounded-lg bg-surface p-2">
        {waveformBars.map((bar, index) => {
          const isActive = (currentTime / (duration || 300)) * waveformBars.length > index;
          const isNearPlayhead = Math.abs((currentTime / (duration || 300)) * waveformBars.length - index) < 3;
          
          return (
            <div
              key={index}
              className={cn(
                "waveform-bar w-1 min-h-[4px] transition-all duration-150",
                isActive ? "bg-primary" : "bg-muted-foreground/30",
                isPlaying && isNearPlayhead && "animate-pulse"
              )}
              style={{
                height: `${bar.height}%`,
                transitionDelay: `${bar.delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Progress slider */}
      <div className="mb-4">
        <Slider
          value={[currentTime]}
          max={duration || 300}
          step={1}
          onValueChange={handleSeek}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-xs font-display text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration || 300)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Volume control */}
        <div className="flex items-center gap-2 w-32">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={toggleMute}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.1}
            onValueChange={handleVolumeChange}
            className="w-20"
          />
        </div>

        {/* Playback controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            onClick={skipBack}
          >
            <SkipBack className="h-5 w-5" />
          </Button>

          <Button
            variant="default"
            size="icon"
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-1" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            onClick={skipForward}
          >
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>

        {/* Speed control placeholder */}
        <div className="w-32 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="font-display text-xs"
          >
            1.0x
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
