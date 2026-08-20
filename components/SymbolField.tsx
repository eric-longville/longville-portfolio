'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { useTheme } from './ThemeProvider';
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

/* ── Custom icons (matched to lucide's 24×24 / stroke grammar) ────────────
   For symbols lucide doesn't ship. They're intentionally simplified — at
   background scale and opacity, the gesture reads, not the detail. */
type IconProps = { size?: number; strokeWidth?: number };
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

const Seven = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <path d="M6 5h12l-6 14" />
  </svg>
);

// KIXEYE nod — a stylized unicorn head in profile.
const Unicorn = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <path d="M4 15q-1-3 2.5-4L9 9l1.5-5 1.5 4.5q1.5-.5 2.5 1 2 1.5 1.5 5" />
    <path d="M4 15q1 4 4.5 4.5L11 20l1.5-1.5q3.5-.7 4.5-3.5" />
    <path d="M8 12h.01" />
  </svg>
);

const Baseball = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M5.6 5.6c2.8 2 2.8 10.8 0 12.8" />
    <path d="M18.4 5.6c-2.8 2-2.8 10.8 0 12.8" />
  </svg>
);

const BaseballBat = ({ size = 24, strokeWidth = 1.9 }: IconProps) => (
  <svg {...svgProps(size, strokeWidth)}>
    <path d="M4.9 17.9 16.4 4.4q2.4.7 3.1 3.2L8.1 21.1q-1.9.7-3.2-.5-1.2-1.3-.0-2.7Z" />
    <path d="M4.5 19.5 3 21" />
  </svg>
);

/* ── Symbol registry with weights ─────────────────────────────────────────
   Weight biases the field toward your professional work (slots / games / AI),
   with personal symbols sprinkled in as occasional Easter eggs. */
type Entry = { Icon: React.ComponentType<IconProps>; weight: number };

const REGISTRY: Entry[] = [
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
const POOL: React.ComponentType<IconProps>[] = REGISTRY.flatMap(({ Icon, weight }) =>
  Array.from({ length: weight }, () => Icon),
);

interface Placement {
  Icon: React.ComponentType<IconProps>;
  left: number; // %
  top: number; // %
  size: number; // px
  rotate: number; // deg
  duration: number; // s
  delay: number; // s (negative → starts mid-phase)
  oMin: number;
  oMax: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export default function SymbolField() {
  const { theme } = useTheme();
  const [placements, setPlacements] = useState<Placement[]>([]);

  // Generate the scattered layout on the client only (avoids hydration mismatch).
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Jittered grid → even coverage without the clumping of pure random.
    const cols = clamp(Math.round(w / 150), 4, 16);
    const rows = clamp(Math.round(h / 145), 4, 15);
    const keep = 0.8; // ~80% of cells occupied → denser

    // Baseline opacities are tuned per theme; a lighter maroon reads better on
    // near-black, so dark mode runs a touch higher than light. The floor is high
    // enough that icons are always clearly present; the twinkle lifts them from
    // there rather than fading them out.
    const base =
      theme === 'dark'
        ? { min: 0.11, max: 0.26 }
        : { min: 0.09, max: 0.22 };

    const next: Placement[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > keep) continue;
        const jitterX = (Math.random() - 0.5) * 0.7;
        const jitterY = (Math.random() - 0.5) * 0.7;
        const f = 0.75 + Math.random() * 0.5; // per-icon brightness variety
        next.push({
          Icon: POOL[Math.floor(Math.random() * POOL.length)],
          left: clamp(((c + 0.5 + jitterX) / cols) * 100, 1, 99),
          top: clamp(((r + 0.5 + jitterY) / rows) * 100, 1, 99),
          size: Math.round(22 + Math.random() * 20),
          rotate: Math.round((Math.random() - 0.5) * 36),
          duration: 4 + Math.random() * 6,
          delay: -Math.random() * 16,
          oMin: +(base.min * f).toFixed(3),
          oMax: +(base.max * f).toFixed(3),
        });
      }
    }
    setPlacements(next);
  }, [theme]);

  const color = theme === 'dark' ? '#c04a45' : '#800000';

  return (
    <div
      aria-hidden
      className="symbol-field fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -10, color }}
    >
      {placements.map((p, i) => {
        const style: CSSProperties = {
          position: 'absolute',
          left: `${p.left}%`,
          top: `${p.top}%`,
          transform: `translate(-50%, -50%) rotate(${p.rotate}deg)`,
          lineHeight: 0,
          opacity: (p.oMin + p.oMax) / 2, // static fallback (reduced-motion)
          animation: `symbol-twinkle ${p.duration}s ${p.delay}s ease-in-out infinite`,
          // custom props consumed by the keyframes
          ['--o-min' as string]: p.oMin,
          ['--o-max' as string]: p.oMax,
        };
        return (
          <span key={i} style={style}>
            <p.Icon size={p.size} strokeWidth={1.75} />
          </span>
        );
      })}
    </div>
  );
}
