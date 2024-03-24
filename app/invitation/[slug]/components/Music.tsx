import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [autoplay, setAutoplay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonTop, setButtonTop] = useState<number | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const topPosition = buttonRef.current.getBoundingClientRect().top;
      setButtonTop(topPosition);
    }

    const handleScroll = () => {
      if (buttonRef.current && buttonTop !== null) {
        const currentTop = buttonRef.current.getBoundingClientRect().top;
        if (currentTop !== buttonTop) {
          setButtonTop(currentTop); // Menggunakan setButtonTop(currentTop) agar posisi tombol di-update sesuai dengan perubahan scroll
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [buttonTop]);

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
    if (audioRef.current) {
      if (!autoplay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <audio controls autoPlay={autoplay} ref={audioRef} style={{ visibility: "hidden" }}>
          <source src="/jazbersamamu.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
      </audio>
      <button 
        ref={buttonRef}
        onClick={toggleAutoplay}
        style={{
          position: 'fixed',
          bottom: '10px',
          left: '10px',
          zIndex: '999',
          padding: '0',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          transform: autoplay ? 'scale(1.1)' : 'scale(1)',
          animation: autoplay ? 'zoomEffect 0.1s infinite alternate' : 'none', // Memastikan animasi hanya berjalan saat autoplay aktif
        }}
      >
        {autoplay ? (
          <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="10" y1="15" x2="10" y2="9" />
            <line x1="14" y1="15" x2="14" y2="9" />
          </svg>
        ) : (
          <svg className="h-8 w-8 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;