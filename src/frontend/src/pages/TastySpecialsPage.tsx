import { useEffect, useRef, useState } from "react";
import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import { tastySpecials } from "../data/menuData";

export default function TastySpecialsPage() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let raf: number;
    let angle = 0;
    const animate = () => {
      angle += 0.3;
      setGlowPos({
        x: 50 + Math.sin(angle * 0.017) * 25,
        y: 50 + Math.cos(angle * 0.013) * 20,
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pt-16">
      <PageHeader
        title="Tasty Specials"
        subtitle="Signature creations — our special lassi and vibrant mocktails"
        image="/assets/generated/category-specials.dim_600x400.jpg"
        badge="🌟 House Creations"
      />

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated glow background */}
        <div ref={glowRef} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full transition-all duration-1000"
            style={{
              background:
                "radial-gradient(circle, oklch(0.84 0.16 86 / 0.08) 0%, transparent 70%)",
              top: `${glowPos.y}%`,
              left: `${glowPos.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tastySpecials.map((item, i) => (
              <MenuCard
                key={item.name}
                {...item}
                ocid={`tasty-specials.item.${i + 1}`}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Special note */}
          <div
            className="mt-12 text-center p-8 rounded-3xl relative overflow-hidden"
            style={{
              background: "oklch(0.15 0.04 258 / 0.9)",
              border: "1px solid oklch(0.84 0.16 86 / 0.2)",
              boxShadow: "0 0 40px oklch(0.84 0.16 86 / 0.08)",
            }}
          >
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none animate-shimmer"
              style={{ opacity: 0.5 }}
            />
            <div className="relative">
              <p
                className="text-2xl font-display font-bold mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                🎉 Daily Special Offer
              </p>
              <p
                style={{ color: "oklch(0.70 0.025 258)" }}
                className="text-sm leading-relaxed"
              >
                For every ₹100 billed, get an Amul ice cream worth ₹40 —
                absolutely free!
                <br />
                <span
                  className="font-semibold mt-1 block"
                  style={{ color: "oklch(0.84 0.16 86)" }}
                >
                  Vanilla · Strawberry · Butterscotch
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
