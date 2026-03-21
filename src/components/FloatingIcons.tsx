import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useCallback } from "react";
import { Camera } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#00005B" />
    <text x="5" y="22" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#9999FF">Ae</text>
  </svg>
);

const PrIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#00005B" />
    <text x="5" y="22" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#9999FF">Pr</text>
  </svg>
);

const PsIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#001E36" />
    <text x="5" y="22" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#31A8FF">Ps</text>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#1a1a2e" />
    <path d="M25.5 11.5C25.2 10.4 24.3 9.5 23.2 9.3C21.2 8.8 16 8.8 16 8.8S10.8 8.8 8.8 9.3C7.7 9.6 6.8 10.4 6.5 11.5C6 13.5 6 16 6 16S6 18.5 6.5 20.5C6.8 21.6 7.7 22.4 8.8 22.7C10.8 23.2 16 23.2 16 23.2S21.2 23.2 23.2 22.7C24.3 22.4 25.2 21.6 25.5 20.5C26 18.5 26 16 26 16S26 13.5 25.5 11.5Z" fill="#FF0000"/>
    <path d="M14 19.5V13L20 16.3L14 19.5Z" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#1a1a2e" />
    <rect x="7" y="7" width="18" height="18" rx="5" stroke="url(#ig)" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="16" r="4.5" stroke="url(#ig)" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="10" r="1.2" fill="#E1306C"/>
    <defs>
      <linearGradient id="ig" x1="7" y1="25" x2="25" y2="7">
        <stop stopColor="#FCAF45"/><stop offset="0.5" stopColor="#E1306C"/><stop offset="1" stopColor="#833AB4"/>
      </linearGradient>
    </defs>
  </svg>
);

interface FloatingIcon {
  id: string;
  icon: React.ReactNode;
  // Desktop positions (closer to content)
  x: string;
  y: string;
  // Mobile positions
  mx: string;
  my: string;
  size: number;
  mobileSize: number;
  opacity: number;
  mobileOpacity: number;
  blur: boolean;
  depth: number;
  floatDuration: number;
  floatDelay: number;
  rotation: number;
  hideOnMobile?: boolean;
}

const icons: FloatingIcon[] = [
  {
    id: "ae",
    icon: <AeIcon />,
    x: "12%", y: "22%",
    mx: "5%", my: "15%",
    size: 52, mobileSize: 30,
    opacity: 0.9, mobileOpacity: 0.75,
    blur: false, depth: 3,
    floatDuration: 5, floatDelay: 0, rotation: -8,
  },
  {
    id: "pr",
    icon: <PrIcon />,
    x: "78%", y: "16%",
    mx: "80%", my: "12%",
    size: 46, mobileSize: 26,
    opacity: 0.45, mobileOpacity: 0.4,
    blur: true, depth: 1,
    floatDuration: 6.5, floatDelay: 1.2, rotation: 6,
  },
  {
    id: "ps",
    icon: <PsIcon />,
    x: "15%", y: "68%",
    mx: "8%", my: "78%",
    size: 44, mobileSize: 26,
    opacity: 0.5, mobileOpacity: 0.45,
    blur: true, depth: 1,
    floatDuration: 7, floatDelay: 0.8, rotation: 12,
    hideOnMobile: true,
  },
  {
    id: "yt",
    icon: <YoutubeIcon />,
    x: "82%", y: "52%",
    mx: "82%", my: "60%",
    size: 54, mobileSize: 32,
    opacity: 0.9, mobileOpacity: 0.7,
    blur: false, depth: 3,
    floatDuration: 4.5, floatDelay: 0.3, rotation: -5,
  },
  {
    id: "ig",
    icon: <InstagramIcon />,
    x: "75%", y: "78%",
    mx: "75%", my: "80%",
    size: 42, mobileSize: 24,
    opacity: 0.4, mobileOpacity: 0.35,
    blur: true, depth: 1,
    floatDuration: 6, floatDelay: 2, rotation: 15,
    hideOnMobile: true,
  },
  {
    id: "camera",
    icon: <Camera className="w-full h-full text-primary" />,
    x: "20%", y: "45%",
    mx: "6%", my: "55%",
    size: 46, mobileSize: 28,
    opacity: 0.8, mobileOpacity: 0.65,
    blur: false, depth: 2,
    floatDuration: 5.5, floatDelay: 1.5, rotation: -14,
  },
];

const FloatingIcons = () => {
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 25, mass: 1.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX.set((e.clientX - cx) / cx);
    mouseY.set((e.clientY - cy) / cy);
  }, [isMobile, mouseX, mouseY]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, isMobile]);

  const visibleIcons = isMobile ? icons.filter((i) => !i.hideOnMobile) : icons;

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {visibleIcons.map((item) => (
        <FloatingIconItem
          key={item.id}
          item={item}
          smoothX={smoothX}
          smoothY={smoothY}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

interface FloatingIconItemProps {
  item: FloatingIcon;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
  isMobile: boolean;
}

const FloatingIconItem = ({ item, smoothX, smoothY, isMobile }: FloatingIconItemProps) => {
  const parallaxStrength = item.depth * 10;
  const px = useTransform(smoothX, (v) => (isMobile ? 0 : v * parallaxStrength));
  const py = useTransform(smoothY, (v) => (isMobile ? 0 : v * parallaxStrength));

  const size = isMobile ? item.mobileSize : item.size;
  const opacity = isMobile ? item.mobileOpacity : item.opacity;
  const posX = isMobile ? item.mx : item.x;
  const posY = isMobile ? item.my : item.y;

  const glowColor =
    item.id === "yt"
      ? "rgba(255,0,0,0.4)"
      : item.id === "ig"
      ? "rgba(225,48,108,0.4)"
      : "hsl(217 92% 58% / 0.5)";

  const glowStrong = `drop-shadow(0 0 8px ${glowColor}) drop-shadow(0 0 24px ${glowColor})`;
  const glowSoft = `drop-shadow(0 0 5px ${glowColor})`;

  return (
    <motion.div
      className="absolute"
      style={{
        left: posX,
        top: posY,
        x: px,
        y: py,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{
        opacity: opacity,
        scale: 1,
        y: [0, -8, 0, 5, 0],
        rotate: [item.rotation, item.rotation + 3, item.rotation - 2, item.rotation],
      }}
      transition={{
        opacity: { duration: 0.7, delay: item.floatDelay + 0.6 },
        scale: { duration: 0.5, delay: item.floatDelay + 0.6 },
        y: {
          duration: item.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: item.floatDelay,
        },
        rotate: {
          duration: item.floatDuration * 1.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: item.floatDelay,
        },
      }}
    >
      <div
        className={item.blur && !isMobile ? "blur-[1px]" : ""}
        style={{
          filter: item.blur && !isMobile ? glowSoft : glowStrong,
        }}
      >
        {item.icon}
      </div>
    </motion.div>
  );
};

export default FloatingIcons;
