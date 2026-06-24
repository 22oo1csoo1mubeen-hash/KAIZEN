import { useEffect, useRef, useState } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const rAFRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fadeTo = (targetOpacity: number, durationMs: number = 500) => {
    if (!videoRef.current) return;
    const el = videoRef.current;
    
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    
    const startOpacity = parseFloat(el.style.opacity || '0');
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // linear interpolation
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      el.style.opacity = currentOpacity.toString();
      
      if (progress < 1) {
        rAFRef.current = requestAnimationFrame(animate);
      }
    };
    
    rAFRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      video.style.opacity = '0';
      video.play().catch(console.error);
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const timeLeft = video.duration - video.currentTime;
      
      if (!fadingOutRef.current && timeLeft <= 0.55 && timeLeft > 0) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(console.error);
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className={className} style={{ ...style, pointerEvents: 'none' }}>
      {!isLoaded && <div className="absolute inset-0 bg-black" />}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-top"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
