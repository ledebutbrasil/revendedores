import React, { useRef, useState } from 'react';

interface Video {
  id: number;
  label: string;
  network: string;
  views: string;
  videoPath: string;
}

const VIDEOS: Video[] = [
  { id: 1, label: 'Cachos Vídeo 1', network: 'TikTok', views: '1.2M', videoPath: '/cachos_video1.mp4' },
  { id: 2, label: 'Cachos Vídeo 2', network: 'Instagram', views: '820K', videoPath: '/cachos_video2.mp4' },
  { id: 3, label: 'HEAL Vídeo 1', network: 'YouTube', views: '540K', videoPath: '/heal_video1.mp4' },
  { id: 4, label: 'HEAL Vídeo 2', network: 'TikTok', views: '2.4M', videoPath: '/heal_video2.mp4' },
  { id: 5, label: 'Morango do Amor Vídeo 1', network: 'Instagram', views: '1.5M', videoPath: '/morango_video1.mp4' }
];

export const VideoCarousel: React.FC = () => {
  // Começa no vídeo central (index 2, ID 3)
  const [activeIndex, setActiveIndex] = useState(2);
  const [activeAudioVideoId, setActiveAudioVideoId] = useState<number | null>(null);
  
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoClick = (index: number) => {
    setActiveIndex(index);
    // Muta todos se mudarmos o vídeo ativo
    if (activeAudioVideoId !== null) {
      VIDEOS.forEach(v => {
        const el = videoRefs.current[v.id];
        if (el) el.muted = true;
      });
      setActiveAudioVideoId(null);
    }
  };

  const toggleMute = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const el = videoRefs.current[id];
    if (!el) return;

    if (activeAudioVideoId === id) {
      el.muted = true;
      setActiveAudioVideoId(null);
    } else {
      // Muta todos os outros
      VIDEOS.forEach(v => {
        const otherEl = videoRefs.current[v.id];
        if (otherEl) otherEl.muted = v.id !== id;
      });
      el.muted = false;
      setActiveAudioVideoId(id);
      
      // Reinicia e garante o play do vídeo ativo
      el.currentTime = 0;
      el.play().catch(err => console.log('Autoplay unmuted blocked:', err));
    }
  };

  const handleArrowNav = (direction: number) => {
    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), VIDEOS.length - 1);
    setActiveIndex(nextIndex);
    // Muta áudio ao navegar por setas
    VIDEOS.forEach(v => {
      const el = videoRefs.current[v.id];
      if (el) el.muted = true;
    });
    setActiveAudioVideoId(null);
  };

  const getCardClasses = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);

    let scale = 'scale-100';
    let opacity = 'opacity-100';
    let zIndex = 'z-20';
    let margin = 'mx-0';
    let visibility = 'flex';

    if (absDiff === 0) {
      scale = 'scale-100';
      opacity = 'opacity-100';
      zIndex = 'z-20';
      margin = 'mx-0';
    } else if (absDiff === 1) {
      scale = 'scale-[0.82]';
      opacity = 'opacity-85';
      zIndex = 'z-10';
      // Margens negativas para criar a sobreposição 3D contínua
      margin = '-mx-10 sm:-mx-14 md:-mx-16 lg:-mx-20';
    } else if (absDiff === 2) {
      scale = 'scale-[0.66]';
      opacity = 'opacity-55';
      zIndex = 'z-0';
      margin = '-mx-10 sm:-mx-14 md:-mx-16 lg:-mx-20';
      visibility = 'max-sm:hidden flex';
    } else {
      scale = 'scale-[0.5]';
      opacity = 'opacity-0';
      zIndex = 'z-0';
      visibility = 'hidden';
    }

    return `${scale} ${opacity} ${zIndex} ${margin} ${visibility} transition-all duration-500 ease-in-out`;
  };

  return (
    <section className="bg-ink text-white py-22 md:py-16 overflow-hidden" id="videos">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-11">
          <div className="text-left">
            <h2 className="font-fraunces font-extrabold text-[26px] sm:text-[32px] lg:text-[40px] tracking-tight leading-[1.02] mt-0 mb-0 max-w-[760px]">
              Estão em <em className="italic text-pink font-extrabold">todas as redes</em>
            </h2>
          </div>
          <div className="text-left md:max-w-[420px]">
            <p className="text-[#bdbdbd] text-[15px] m-0">
              Conteúdos espontâneos, demonstrações e viralizações de quem já está usando Ledebut.
            </p>
          </div>
        </div>

        {/* 3D Centered Scale Video Slider */}
        <div className="relative py-8 flex flex-col items-center">
          <div className="flex items-center justify-center w-full max-w-[1100px] overflow-visible">
            {VIDEOS.map((video, idx) => {
              const isCenter = idx === activeIndex;
              const isUnmuted = activeAudioVideoId === video.id;

              return (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(idx)}
                  className={`relative w-[150px] sm:w-[180px] md:w-[225px] lg:w-[260px] aspect-[9/16] rounded-[24px] overflow-hidden bg-[#111] border border-[#1f1f1f] shadow-2xl cursor-pointer ${getCardClasses(
                    idx
                  )}`}
                >
                  <video
                    ref={el => {
                      videoRefs.current[video.id] = el;
                    }}
                    src={video.videoPath}
                    autoPlay
                    loop
                    muted={!isUnmuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Volume Control / Unmute Overlay for Active Center Video */}
                  {isCenter && (
                    <div 
                      onClick={(e) => toggleMute(e, video.id)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center text-ink shadow-[0_10px_30px_rgba(0,0,0,0.4)] cursor-pointer hover:scale-105 transition-transform duration-150 z-30"
                      title={isUnmuted ? "Mutar vídeo" : "Ativar som"}
                    >
                      {isUnmuted ? (
                        <svg className="w-6 h-6 text-ink fill-current" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-ink fill-current animate-pulse" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        </svg>
                      )}
                    </div>
                  )}

                  {/* Video details (Overlay info) */}
                  <div className="absolute left-3.5 bottom-3.5 right-3.5 text-white flex items-center gap-2.5 text-sm z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-black/55 px-2 py-1 rounded-full font-semibold text-[10px] md:text-xs backdrop-blur-md">
                      ● {video.network}
                    </span>
                    <span className="ml-auto font-semibold text-[10px] md:text-xs">{video.views}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center w-full max-w-[500px] mt-8 px-4">
            <div className="text-[#bdbdbd] text-xs font-semibold tracking-wider text-left">
              <b className="text-white text-base mr-1">{String(activeIndex + 1).padStart(2, '0')}</b> / {String(VIDEOS.length).padStart(2, '0')}
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => handleArrowNav(-1)}
                disabled={activeIndex === 0}
                className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center transition-all hover:bg-white hover:text-ink hover:border-white disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Vídeo anterior"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => handleArrowNav(1)}
                disabled={activeIndex === VIDEOS.length - 1}
                className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center transition-all hover:bg-white hover:text-ink hover:border-white disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Próximo vídeo"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2.5 bg-white text-ink px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-pink hover:text-white duration-200"
          >
            Garantir na minha loja
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
