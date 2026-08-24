'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { useTheme } from './ThemeProvider';
import { POOL, type IconProps } from './symbols';

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
