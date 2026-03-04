import { Heart, MapPin, Phone, Star } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

function setStyle(
  el: EventTarget & HTMLElement,
  styles: Partial<CSSStyleDeclaration>,
) {
  Object.assign(el.style, styles);
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.08 0.022 258)" }}
    >
      {/* Gold accent top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.88 0.17 86), oklch(0.78 0.16 72), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.84 0.16 86 / 0.05), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-display font-black"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                  color: "oklch(0.10 0.025 258)",
                }}
              >
                T
              </div>
              <div>
                <h3
                  className="font-display font-bold text-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Tasty Tower
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.03 258)" }}
                >
                  Premium Juices & Shakes
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "oklch(0.65 0.03 258)" }}
            >
              Made with rich Amul Ice Creams, premium dry fruits & farm fresh
              fruits. Your premium juice destination in Vizag.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-5 flex-wrap">
              <a
                href="https://www.instagram.com/tastytower2024"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram.link"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: "oklch(0.20 0.045 258)",
                  border: "1px solid oklch(0.30 0.06 258)",
                  color: "oklch(0.85 0.01 258)",
                }}
                onMouseEnter={(e) =>
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.84 0.16 86 / 0.4)",
                    color: "oklch(0.88 0.17 86)",
                  })
                }
                onMouseLeave={(e) =>
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.30 0.06 258)",
                    color: "oklch(0.85 0.01 258)",
                  })
                }
              >
                <SiInstagram size={16} />
                tastytower2024
              </a>
              <a
                href="https://www.youtube.com/@Tasty-Tower"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.youtube.link"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: "oklch(0.20 0.045 258)",
                  border: "1px solid oklch(0.30 0.06 258)",
                  color: "oklch(0.85 0.01 258)",
                }}
                onMouseEnter={(e) =>
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.84 0.16 86 / 0.4)",
                    color: "oklch(0.88 0.17 86)",
                  })
                }
                onMouseLeave={(e) =>
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.30 0.06 258)",
                    color: "oklch(0.85 0.01 258)",
                  })
                }
              >
                <SiYoutube size={16} />
                Tasty-Tower
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.84 0.16 86)" }}
            >
              Visit Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.84 0.16 86)" }}
                />
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.03 258)" }}
                >
                  Indra Colony, Gajuwaka,
                  <br />
                  Vizag, Andhra Pradesh - 530026
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  size={15}
                  className="flex-shrink-0"
                  style={{ color: "oklch(0.84 0.16 86)" }}
                />
                <a
                  href="tel:9861188235"
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.65 0.03 258)" }}
                  onMouseEnter={(e) =>
                    setStyle(e.currentTarget, { color: "oklch(0.88 0.17 86)" })
                  }
                  onMouseLeave={(e) =>
                    setStyle(e.currentTarget, { color: "oklch(0.65 0.03 258)" })
                  }
                >
                  9861188235
                </a>
              </div>
            </div>
          </div>

          {/* Google Review CTA */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.84 0.16 86)" }}
            >
              Love Our Drinks?
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.65 0.03 258)" }}
            >
              Your reviews help us grow! Share your experience with others.
            </p>
            <a
              href="https://www.google.com/search?q=Tasty+Tower+Gajuwaka+Vizag+review"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.google_review.link"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                color: "oklch(0.10 0.025 258)",
              }}
            >
              <Star size={15} fill="currentColor" />
              Review Us on Google
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full my-6"
          style={{ background: "oklch(0.25 0.05 258)" }}
        />

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "oklch(0.50 0.03 258)" }}
        >
          <p>© {year} Tasty Tower. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart
              size={12}
              fill="oklch(0.84 0.16 86)"
              color="oklch(0.84 0.16 86)"
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
              style={{ color: "oklch(0.84 0.16 86)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
