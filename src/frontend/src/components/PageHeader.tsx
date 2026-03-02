interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  badge?: string;
}

export default function PageHeader({
  title,
  subtitle,
  image,
  badge,
}: PageHeaderProps) {
  return (
    <section
      className="relative pt-16 overflow-hidden"
      style={{ minHeight: "240px" }}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.10 0.025 258 / 0.85) 0%, oklch(0.10 0.025 258 / 0.70) 50%, oklch(0.10 0.025 258) 100%)",
            }}
          />
        </div>
      )}

      {/* No image fallback */}
      {!image && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.025 258), oklch(0.14 0.04 258))",
          }}
        />
      )}

      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.84 0.16 86 / 0.06), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {badge && (
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "oklch(0.84 0.16 86 / 0.15)",
              border: "1px solid oklch(0.84 0.16 86 / 0.3)",
              color: "oklch(0.84 0.16 86)",
            }}
          >
            {badge}
          </span>
        )}
        <h1
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.95 0.005 250), oklch(0.88 0.17 86))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-3 text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.70 0.025 258)" }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div
            className="h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.84 0.16 86 / 0.5))",
            }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "oklch(0.84 0.16 86)" }}
          />
          <div
            className="h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.84 0.16 86 / 0.5), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
