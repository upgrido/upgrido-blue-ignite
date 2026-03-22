import { motion } from "framer-motion";

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
    summary: "147K subscribers in 8 months. Videos went viral across India. First Telugu one-finger Free Fire creator.",
    year: "2022",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video4_hteekz.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video4_hteekz.mp4",
    title: "Channel Terminated",
    summary: "April 2023. No reason given. The channel was gone overnight.",
    year: "2023",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video5_w5ilh3.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075508/video5_w5ilh3.mp4",
    title: "Starting Again",
    summary: "Restarted on Instagram with one phone. Rebuilding everything from scratch.",
    year: "2023",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video6_mcdh4r.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video6_mcdh4r.mp4",
    title: "1 Lakh Challenge",
    summary: "One phone. One goal. Documenting the journey to earn 1 lakh through editing.",
    year: "2024",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video7_lpcker.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video7_lpcker.mp4",
    title: "Page Growth",
    summary: "Shared real work, tips and breakdowns. Videos started hitting millions of views.",
    year: "2024",
  },
  {
    webm: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video8_ueommf.webm",
    mp4: "https://res.cloudinary.com/dz4hlunuh/video/upload/v1774075509/video8_ueommf.mp4",
    title: "Upgrading Quality",
    summary: "Used earnings to upgrade setup. Better shoots, better edits, everything leveled up.",
    year: "2025",
  },
];

// Duplicate for seamless infinite loop
const duplicatedStories = [...stories, ...stories];

const VideoStoryTimeline = () => {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 mt-10 mb-8">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 sm:gap-5 lg:gap-6 animate-scroll-left hover:[animation-play-state:paused] w-max"
        >
          {duplicatedStories.map((story, i) => (
            <div
              key={i}
              className="group w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 rounded-[18px] overflow-hidden border border-border/40 bg-card/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-primary/30 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.25)]"
            >
              {/* Video */}
              <div className="aspect-[9/14] w-full overflow-hidden relative">
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
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-[11px] font-bold shadow-[0_0_12px_hsl(var(--primary)/0.5)]">
                  {story.year}
                </div>
              </div>

              {/* Text content */}
              <div className="p-4">
                <h4 className="text-sm font-bold text-foreground mb-1 leading-tight">
                  {story.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {story.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoStoryTimeline;
