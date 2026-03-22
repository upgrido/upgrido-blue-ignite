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
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-5 sm:gap-6 lg:gap-7" style={{ willChange: "transform" }}>
          {stories.map((story, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-[80vw] sm:w-[45vw] lg:w-[30vw] xl:w-[26vw] transition-all duration-500 ease-out"
                style={{
                  transform: isActive ? "scale(1.06)" : "scale(0.92)",
                  opacity: isActive ? 1 : 0.55,
                  filter: isActive ? "brightness(1.1)" : "brightness(0.7)",
                }}
              >
                <div
                  className={`rounded-[18px] overflow-hidden border bg-card/60 backdrop-blur-md transition-shadow duration-500 ${
                    isActive
                      ? "border-primary/40 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.4)]"
                      : "border-border/30 shadow-none"
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

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-5">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === activeIndex
                ? "w-6 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoStoryTimeline;
