import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const stories = [
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075293/video1_q15hwr.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075293/video1_q15hwr.mp4",
    title: "The Beginning",
    summary: "First tech videos. Budget phone. Learning what makes people watch.",
    year: "2018",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075493/video2_x3pl8e.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075493/video2_x3pl8e.mp4",
    title: "Gaming Phase",
    summary: "Tech didn't work out. Lockdown hit. Started a Free Fire channel playing with just one finger.",
    year: "2022",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video3_ubxeab.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video3_ubxeab.mp4",
    title: "Viral Phase",
    summary: "147K subscribers in 8 months. Videos went viral across India.",
    year: "2022",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video4_hteekz.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video4_hteekz.mp4",
    title: "Channel Terminated",
    summary: "No reason given. The channel was gone overnight.",
    year: "2023",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video5_w5ilh3.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video5_w5ilh3.mp4",
    title: "Starting Again",
    summary: "Lost everything. Started over on Instagram with one phone.",
    year: "2023",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video6_mcdh4r.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video6_mcdh4r.mp4",
    title: "1 Lakh Challenge",
    summary: "Documenting earning 1 lakh through mobile editing.",
    year: "2024",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video7_lpcker.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video7_lpcker.mp4",
    title: "Page Growth",
    summary: "Content exploded. Millions of views.",
    year: "2024",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video8_ueommf.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video8_ueommf.mp4",
    title: "Upgrading Quality",
    summary: "Reinvested earnings into better setup.",
    year: "2025",
  },
];

const VideoStoryTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHovering = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
  });

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi && !isHovering.current) emblaApi.scrollNext();
    }, 3500);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, 3000);
  }, [startAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    const onPointerDown = () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
    const onSettle = () => scheduleResume();

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("settle", onSettle);
    onSelect();
    startAutoplay();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("settle", onSettle);
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [emblaApi, startAutoplay, stopAutoplay, scheduleResume]);

  const handleMouseEnter = () => {
    isHovering.current = true;
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    scheduleResume();
  };

  return (
    <div
      className="w-screen relative left-1/2 -translate-x-1/2 mt-10 mb-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div
          className="flex gap-5 sm:gap-6 lg:gap-7"
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
        >
          {stories.map((story, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-[82vw] sm:w-[44vw] lg:w-[29vw] xl:w-[25vw] transition-all duration-500 ease-out"
                style={{
                  transform: isActive ? "scale(1.07)" : "scale(0.9)",
                  opacity: isActive ? 1 : 0.5,
                  filter: isActive ? "brightness(1.1)" : "brightness(0.65)",
                }}
              >
                <div
                  className={`rounded-[18px] overflow-hidden border backdrop-blur-md transition-shadow duration-500 bg-card/60 ${
                    isActive
                      ? "border-primary/40 shadow-[0_0_50px_-10px_hsl(var(--primary)/0.45)]"
                      : "border-border/20 shadow-none"
                  }`}
                >
                  {/* Video 16:9 */}
                  <div className="aspect-video w-full overflow-hidden relative">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    >
                      <source src={story.webm} type="video/webm" />
                      <source src={story.mp4} type="video/mp4" />
                    </video>
                    {/* Year badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm text-primary-foreground text-[11px] font-bold shadow-[0_0_16px_hsl(var(--primary)/0.5)]">
                      {story.year}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-foreground mb-1 leading-tight">
                      {story.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {story.summary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoStoryTimeline;
