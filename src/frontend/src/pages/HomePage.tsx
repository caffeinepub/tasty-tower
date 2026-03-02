import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MenuCard from "../components/MenuCard";
import { menuCategories, thickShakes } from "../data/menuData";

type ValidRoute =
  | "/"
  | "/juices"
  | "/milkshakes"
  | "/pure-juices"
  | "/thick-shakes"
  | "/fruit-flavors"
  | "/tasty-specials"
  | "/contact";

function CategoryCard({
  title,
  slug,
  image,
  description,
  count,
  index,
}: {
  title: string;
  slug: string;
  image: string;
  description: string;
  count: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <Link
        to={slug as ValidRoute}
        className="group relative rounded-2xl overflow-hidden block"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms, box-shadow 0.25s ease, border-color 0.25s ease`,
          border: "1px solid oklch(0.84 0.16 86 / 0.12)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow =
            "0 8px 40px rgba(0,0,0,0.4), 0 0 20px oklch(0.84 0.16 86 / 0.2)";
          el.style.borderColor = "oklch(0.84 0.16 86 / 0.35)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
          el.style.borderColor = "oklch(0.84 0.16 86 / 0.12)";
        }}
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.10 0.025 258) 0%, oklch(0.10 0.025 258 / 0.3) 60%, transparent 100%)",
            }}
          />
        </div>
        <div
          className="p-4"
          style={{
            background: "oklch(0.14 0.04 258 / 0.95)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h3
            className="font-display font-bold text-lg"
            style={{ color: "oklch(0.95 0.005 250)" }}
          >
            {title}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs" style={{ color: "oklch(0.60 0.025 258)" }}>
              {description}
            </p>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
              style={{
                background: "oklch(0.84 0.16 86 / 0.12)",
                color: "oklch(0.84 0.16 86)",
                border: "1px solid oklch(0.84 0.16 86 / 0.2)",
              }}
            >
              {count} items
            </span>
          </div>

          <div
            className="mt-3 flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
            style={{ color: "oklch(0.84 0.16 86)" }}
          >
            View Menu
            <ChevronDown size={12} className="rotate-[-90deg]" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomePage() {
  const highlightRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToHighlight = () => {
    highlightRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bg.dim_1600x900.jpg"
            alt="Tasty Tower hero"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.45) saturate(1.1)" }}
          />
          {/* Layered cinematic overlay: navy vignette + bottom fog */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.08 0.022 258 / 0.55) 0%, oklch(0.07 0.02 258 / 0.45) 50%, oklch(0.06 0.018 258 / 0.95) 100%)",
            }}
          />
          {/* Radial center vignette for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 85% 70% at 50% 55%, transparent 30%, oklch(0.06 0.018 258 / 0.55) 100%)",
            }}
          />
        </div>

        {/* Gold atmosphere glow — large, slow, ethereal */}
        <div
          className="absolute w-[900px] h-[500px] rounded-full pointer-events-none animate-hero-glow"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.84 0.16 86 / 0.10) 0%, transparent 65%)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Secondary smaller glow behind text cluster */}
        <div
          className="absolute w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.84 0.16 86 / 0.07) 0%, transparent 70%)",
            top: "35%",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "hero-glow 6s ease-in-out infinite 1.4s",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-7"
            style={{
              background: "oklch(0.84 0.16 86 / 0.12)",
              border: "1px solid oklch(0.84 0.16 86 / 0.45)",
              color: "oklch(0.90 0.17 86)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 16px oklch(0.84 0.16 86 / 0.18), inset 0 1px 0 oklch(0.98 0.005 250 / 0.12)",
            }}
          >
            ⭐ Premium Juices & Shakes — Vizag
          </div>

          <h1
            className="font-display font-black text-4xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-6"
            style={{
              color: "oklch(0.98 0.005 250)",
              textShadow:
                "0 2px 40px oklch(0.08 0.022 258 / 0.8), 0 1px 0 oklch(0.08 0.022 258 / 0.5)",
            }}
          >
            Experience{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.18 86) 0%, oklch(0.82 0.17 72) 60%, oklch(0.88 0.16 78) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px oklch(0.84 0.16 86 / 0.5))",
                letterSpacing: "-0.01em",
              }}
            >
              Premium
            </span>
            <br />
            <span style={{ letterSpacing: "-0.02em" }}>Freshness</span>
          </h1>

          <p
            className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{
              color: "oklch(0.82 0.018 258)",
              textShadow: "0 1px 12px oklch(0.08 0.022 258 / 0.6)",
            }}
          >
            Made with rich Amul Ice Creams, premium dry fruits & farm fresh
            fruits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToHighlight}
              data-ocid="hero.explore_menu.button"
              className="px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.04] hover:brightness-110 animate-cta-glow"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.90 0.18 86), oklch(0.80 0.17 72))",
                color: "oklch(0.10 0.025 258)",
              }}
            >
              Explore Menu
            </button>
            <Link
              to="/contact"
              data-ocid="hero.visit_us.button"
              className="px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.04]"
              style={{
                background: "oklch(0.98 0.005 250 / 0.07)",
                border: "1.5px solid oklch(0.84 0.16 86 / 0.55)",
                color: "oklch(0.92 0.015 258)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 oklch(0.98 0.005 250 / 0.12)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "oklch(0.84 0.16 86 / 0.14)";
                el.style.borderColor = "oklch(0.84 0.16 86 / 0.85)";
                el.style.color = "oklch(0.92 0.17 86)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "oklch(0.98 0.005 250 / 0.07)";
                el.style.borderColor = "oklch(0.84 0.16 86 / 0.55)";
                el.style.color = "oklch(0.92 0.015 258)";
              }}
            >
              Visit Us
            </Link>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            onClick={scrollToHighlight}
            className="mt-16 mx-auto flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "oklch(0.84 0.16 86)" }}
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest font-medium">
              Scroll
            </span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── Thick Shakes Highlight ─────────────────────────────── */}
      <section
        ref={highlightRef}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "oklch(0.84 0.16 86 / 0.12)",
              border: "1px solid oklch(0.84 0.16 86 / 0.25)",
              color: "oklch(0.84 0.16 86)",
            }}
          >
            House Specialties
          </span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-3"
            style={{ color: "oklch(0.98 0.005 250)" }}
          >
            ⭐ Tasty Tower Specials
          </h2>
          <p
            style={{ color: "oklch(0.65 0.025 258)" }}
            className="text-base sm:text-lg"
          >
            Our Premium Thick Shakes — 350ml crafted to perfection
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div
              className="h-px w-20"
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
              className="h-px w-20"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.84 0.16 86 / 0.5), transparent)",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {thickShakes.map((item, i) => (
            <MenuCard
              key={item.name}
              {...item}
              ocid={`thick-shakes.item.${i + 1}`}
              index={i + 1}
              delay={i * 60}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/thick-shakes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "oklch(0.84 0.16 86 / 0.12)",
              border: "1px solid oklch(0.84 0.16 86 / 0.25)",
              color: "oklch(0.88 0.17 86)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "oklch(0.84 0.16 86 / 0.20)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "oklch(0.84 0.16 86 / 0.12)";
            }}
          >
            See Full Thick Shakes Menu{" "}
            <ChevronDown size={14} className="rotate-[-90deg]" />
          </Link>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div
        className="h-px mx-8"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.84 0.16 86 / 0.25), transparent)",
        }}
      />

      {/* ── Menu Categories ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "oklch(0.84 0.16 86 / 0.12)",
              border: "1px solid oklch(0.84 0.16 86 / 0.25)",
              color: "oklch(0.84 0.16 86)",
            }}
          >
            Full Menu
          </span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-3"
            style={{ color: "oklch(0.98 0.005 250)" }}
          >
            Explore Our Categories
          </h2>
          <p style={{ color: "oklch(0.65 0.025 258)" }} className="text-base">
            From fresh juices to premium thick shakes — everything made to order
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuCategories.map((cat, i) => (
            <CategoryCard key={cat.slug} {...cat} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section
        className="mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-3xl overflow-hidden relative"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.04 258), oklch(0.18 0.055 258))",
          border: "1px solid oklch(0.84 0.16 86 / 0.2)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 100%, oklch(0.84 0.16 86 / 0.08), transparent)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center py-16 px-6">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.84 0.16 86)" }}
          >
            Special Offer
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: "oklch(0.98 0.005 250)" }}
          >
            For Every ₹100 Billed
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "oklch(0.75 0.025 258)" }}
          >
            Get an Ice Cream Worth{" "}
            <strong style={{ color: "oklch(0.88 0.17 86)" }}>
              ₹40 Absolutely FREE!
            </strong>
            <br />
            <span
              className="text-sm mt-1 block"
              style={{ color: "oklch(0.60 0.025 258)" }}
            >
              Vanilla · Strawberry · Butterscotch
            </span>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
              color: "oklch(0.10 0.025 258)",
              boxShadow: "0 4px 20px oklch(0.84 0.16 86 / 0.4)",
            }}
          >
            Find Our Location
          </Link>
        </div>
      </section>
    </div>
  );
}
