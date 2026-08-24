/* Shared symbol set — used by both the ambient background (SymbolField) and the
   hero image transition (HeroCarousel), so the two read as one system. */
import {
  Cherry,
  Diamond,
  Bell,
  Crown,
  Coins,
  Dice5,
  Clover,
  Spade,
  Club,
  Heart,
  Star,
  Gamepad2,
  Joystick,
  Trophy,
  Bot,
  Brain,
  Cpu,
  Network,
  Sparkles,
  Flower2,
  Gift,
  Snowflake,
  Mail,
  GraduationCap,
} from 'lucide-react';

export type IconProps = { size?: number; strokeWidth?: number };

/* ── Custom icons (matched to lucide's 24×24 / stroke grammar) ────────────
   For symbols lucide doesn't ship. Intentionally simplified — at small scale
   the gesture reads, not the detail. */
const svgProps = (size: number, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const Seven = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <path d="M6 5h12l-6 14" />
  </svg>
);

// KIXEYE nod — a stylized unicorn head in profile.
export const Unicorn = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <path d="M4 15q-1-3 2.5-4L9 9l1.5-5 1.5 4.5q1.5-.5 2.5 1 2 1.5 1.5 5" />
    <path d="M4 15q1 4 4.5 4.5L11 20l1.5-1.5q3.5-.7 4.5-3.5" />
    <path d="M8 12h.01" />
  </svg>
);

export const Baseball = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M5.6 5.6c2.8 2 2.8 10.8 0 12.8" />
    <path d="M18.4 5.6c-2.8 2-2.8 10.8 0 12.8" />
  </svg>
);

export const BaseballBat = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <path d="M4.9 17.9 16.4 4.4q2.4.7 3.1 3.2L8.1 21.1q-1.9.7-3.2-.5-1.2-1.3-.0-2.7Z" />
    <path d="M4.5 19.5 3 21" />
  </svg>
);

/* ── Registry with weights ────────────────────────────────────────────────
   Weight biases the field toward the professional work (slots / games / AI),
   with personal symbols sprinkled in as occasional Easter eggs. */
type Entry = { Icon: React.ComponentType<IconProps>; weight: number };

export const REGISTRY: Entry[] = [
  // Slots / casino (Everi)
  { Icon: Seven, weight: 3 },
  { Icon: Cherry, weight: 3 },
  { Icon: Diamond, weight: 3 },
  { Icon: Bell, weight: 2 },
  { Icon: Crown, weight: 2 },
  { Icon: Coins, weight: 3 },
  { Icon: Dice5, weight: 2 },
  { Icon: Clover, weight: 2 },
  { Icon: Spade, weight: 2 },
  { Icon: Club, weight: 2 },
  { Icon: Heart, weight: 2 },
  { Icon: Star, weight: 2 },
  // Games / engines (American Greetings, SEGA, KIXEYE)
  { Icon: Gamepad2, weight: 3 },
  { Icon: Joystick, weight: 2 },
  { Icon: Trophy, weight: 2 },
  // AI / RAG (SHU.ai)
  { Icon: Bot, weight: 3 },
  { Icon: Brain, weight: 3 },
  { Icon: Cpu, weight: 2 },
  { Icon: Network, weight: 3 },
  { Icon: Sparkles, weight: 2 },
  // American Greetings / Jacquie Lawson (rose, e-cards, advent calendars)
  { Icon: Flower2, weight: 2 }, // rose
  { Icon: Mail, weight: 1 }, // e-cards
  { Icon: Gift, weight: 1 }, // advent calendars
  { Icon: Snowflake, weight: 1 }, // advent calendars
  // Personal / interests
  { Icon: Baseball, weight: 2 },
  { Icon: BaseballBat, weight: 1 },
  { Icon: Unicorn, weight: 2 }, // KIXEYE
  { Icon: GraduationCap, weight: 1 }, // RIT
];

// Expand into a weighted pool for uniform-by-weight sampling.
export const POOL: React.ComponentType<IconProps>[] = REGISTRY.flatMap(({ Icon, weight }) =>
  Array.from({ length: weight }, () => Icon),
);
