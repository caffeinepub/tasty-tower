import { useEffect, useRef, useState } from "react";

interface MenuCardProps {
  name: string;
  price: number;
  description?: string;
  badge?: string;
  image?: string;
  ocid?: string;
  index?: number;
  delay?: number;
}

export default function MenuCard({
  name,
  price,
  description,
  badge,
  image,
  ocid,
  delay = 0,
}: MenuCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setRevealed(true), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      data-ocid={ocid}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        /* ── Reveal animation ── */
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? hovered
            ? "translateY(-6px) scale(1.015)"
            : "translateY(0) scale(1)"
          : "translateY(28px) scale(0.97)",
        transition: revealed
          ? `transform 0.32s cubic-bezier(0.34, 1.3, 0.64, 1),
             box-shadow 0.32s ease,
             border-color 0.24s ease,
             opacity 0.1s ease`
          : `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,

        /* ── Glassmorphism surface ── */
        background: "oklch(0.16 0.045 258 / 0.55)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",

        /* ── Border & depth ── */
        border: hovered
          ? "1px solid oklch(0.84 0.16 86 / 0.38)"
          : "1px solid oklch(0.84 0.16 86 / 0.18)",
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.45),
             0 0 28px oklch(0.84 0.16 86 / 0.28),
             inset 0 1px 0 oklch(0.88 0.17 86 / 0.22)`
          : `0 4px 24px rgba(0,0,0,0.28),
             0 1px 4px rgba(0,0,0,0.18),
             inset 0 1px 0 oklch(0.88 0.17 86 / 0.10)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div
          className="absolute top-3 left-3 z-10 animate-badge"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.58 0.21 30), oklch(0.50 0.19 26))",
            color: "oklch(0.98 0.005 250)",
            fontSize: "0.62rem",
            fontWeight: 700,
            padding: "3px 9px",
            borderRadius: "99px",
            letterSpacing: "0.03em",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.35), inset 0 1px 0 oklch(0.98 0.005 250 / 0.15)",
          }}
        >
          {badge}
        </div>
      )}

      {/* Image with independent scale zoom */}
      {image && (
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition:
                "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
            loading="lazy"
          />
          {/* Gradient: stronger when hovered for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: hovered
                ? "linear-gradient(to top, oklch(0.12 0.04 258 / 0.95) 0%, oklch(0.12 0.04 258 / 0.4) 45%, transparent 100%)"
                : "linear-gradient(to top, oklch(0.15 0.04 258 / 0.85) 0%, transparent 55%)",
              transition: "background 0.32s ease",
            }}
          />
          {/* Gold shimmer line at top of image on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: hovered
                ? "linear-gradient(90deg, transparent 5%, oklch(0.84 0.16 86 / 0.5) 50%, transparent 95%)"
                : "transparent",
              transition: "background 0.3s ease",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-semibold text-base leading-tight"
            style={{ color: "oklch(0.96 0.006 250)" }}
          >
            {name}
          </h3>
          <span
            className="font-display font-bold text-lg flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.90 0.18 86), oklch(0.80 0.16 74))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: hovered
                ? "drop-shadow(0 0 6px oklch(0.84 0.16 86 / 0.5))"
                : "none",
              transition: "filter 0.3s ease",
            }}
          >
            ₹{price}
          </span>
        </div>
        {description && (
          <p
            className="text-xs leading-relaxed line-clamp-2"
            style={{ color: "oklch(0.62 0.028 258)" }}
          >
            {description}
          </p>
        )}

        {/* Bottom edge gold accent line on hover */}
        <div
          className="mt-3 h-px rounded-full"
          style={{
            background: hovered
              ? "linear-gradient(90deg, oklch(0.84 0.16 86 / 0.5), oklch(0.84 0.16 86 / 0.15))"
              : "transparent",
            transition: "background 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
