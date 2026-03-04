import { ExternalLink, MapPin, Phone, Star } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import PageHeader from "../components/PageHeader";

function setStyle(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles);
}

function ContactCard({
  children,
  delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      className="p-6 rounded-2xl transition-all duration-300"
      style={{
        background: "oklch(0.15 0.04 258 / 0.8)",
        border: "1px solid oklch(0.84 0.16 86 / 0.15)",
        backdropFilter: "blur(12px)",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Find Us"
        subtitle="Come visit Tasty Tower in Gajuwaka, Vizag — we'd love to see you!"
        badge="Vizag, Andhra Pradesh"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <ContactCard>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "oklch(0.84 0.16 86 / 0.15)" }}
            >
              <MapPin size={20} style={{ color: "oklch(0.84 0.16 86)" }} />
            </div>
            <h2
              className="font-display font-bold text-xl mb-2"
              style={{ color: "oklch(0.95 0.005 250)" }}
            >
              Our Address
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.70 0.025 258)" }}
            >
              Indra Colony, Gajuwaka,
              <br />
              Visakhapatnam (Vizag),
              <br />
              Andhra Pradesh — 530026
            </p>
            <a
              href="https://www.google.com/maps/search/Indra+Colony+Gajuwaka+Vizag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: "oklch(0.84 0.16 86 / 0.12)",
                border: "1px solid oklch(0.84 0.16 86 / 0.25)",
                color: "oklch(0.84 0.16 86)",
              }}
              onMouseEnter={(e) => {
                setStyle(e.currentTarget, {
                  background: "oklch(0.84 0.16 86 / 0.20)",
                });
              }}
              onMouseLeave={(e) => {
                setStyle(e.currentTarget, {
                  background: "oklch(0.84 0.16 86 / 0.12)",
                });
              }}
            >
              <ExternalLink size={12} />
              Find on Google Maps
            </a>
          </ContactCard>

          {/* Phone */}
          <ContactCard>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "oklch(0.84 0.16 86 / 0.15)" }}
            >
              <Phone size={20} style={{ color: "oklch(0.84 0.16 86)" }} />
            </div>
            <h2
              className="font-display font-bold text-xl mb-2"
              style={{ color: "oklch(0.95 0.005 250)" }}
            >
              Call Us
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.70 0.025 258)" }}
            >
              We're happy to answer any questions about our menu!
            </p>
            <a
              href="tel:9861188235"
              data-ocid="contact.phone.link"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                color: "oklch(0.10 0.025 258)",
                boxShadow: "0 4px 16px oklch(0.84 0.16 86 / 0.35)",
              }}
            >
              <Phone size={18} strokeWidth={2.5} />
              98611 88235
            </a>
          </ContactCard>

          {/* Social Media */}
          <ContactCard>
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.95 0.005 250)" }}
            >
              Follow Us
            </h2>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/tastytower2024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] group"
                style={{
                  background: "oklch(0.18 0.045 258)",
                  border: "1px solid oklch(0.30 0.06 258)",
                }}
                onMouseEnter={(e) => {
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.84 0.16 86 / 0.4)",
                  });
                }}
                onMouseLeave={(e) => {
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.30 0.06 258)",
                  });
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <SiInstagram size={18} color="white" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.95 0.005 250)" }}
                  >
                    Instagram
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.60 0.025 258)" }}
                  >
                    @tastytower2024
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto"
                  style={{ color: "oklch(0.60 0.025 258)" }}
                />
              </a>

              <a
                href="https://www.youtube.com/@Tasty-Tower"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] group"
                style={{
                  background: "oklch(0.18 0.045 258)",
                  border: "1px solid oklch(0.30 0.06 258)",
                }}
                onMouseEnter={(e) => {
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.84 0.16 86 / 0.4)",
                  });
                }}
                onMouseLeave={(e) => {
                  setStyle(e.currentTarget, {
                    borderColor: "oklch(0.30 0.06 258)",
                  });
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#ff0000" }}
                >
                  <SiYoutube size={18} color="white" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.95 0.005 250)" }}
                  >
                    YouTube
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.60 0.025 258)" }}
                  >
                    @Tasty-Tower
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto"
                  style={{ color: "oklch(0.60 0.025 258)" }}
                />
              </a>
            </div>
          </ContactCard>

          {/* Google Review */}
          <ContactCard>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "oklch(0.84 0.16 86 / 0.15)" }}
            >
              <Star size={20} style={{ color: "oklch(0.84 0.16 86)" }} />
            </div>
            <h2
              className="font-display font-bold text-xl mb-2"
              style={{ color: "oklch(0.95 0.005 250)" }}
            >
              Love Our Drinks?
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.70 0.025 258)" }}
            >
              Your reviews mean the world to us! Share your experience and help
              others discover Tasty Tower.
            </p>
            <a
              href="https://www.google.com/search?q=Tasty+Tower+Gajuwaka+Vizag+review"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.google_review.link"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                color: "oklch(0.10 0.025 258)",
                boxShadow: "0 4px 16px oklch(0.84 0.16 86 / 0.35)",
              }}
            >
              <Star size={16} fill="currentColor" />
              Review Us on Google
            </a>
          </ContactCard>
        </div>

        {/* Google Maps Embed Placeholder */}
        <div
          className="mt-6 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(0.84 0.16 86 / 0.15)",
          }}
        >
          <div
            className="relative h-56 sm:h-72 flex flex-col items-center justify-center gap-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.12 0.035 258), oklch(0.16 0.045 258))",
            }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.84 0.16 86 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.84 0.16 86 / 0.04) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "oklch(0.84 0.16 86 / 0.15)",
                  border: "1px solid oklch(0.84 0.16 86 / 0.25)",
                }}
              >
                <MapPin size={24} style={{ color: "oklch(0.84 0.16 86)" }} />
              </div>
              <h3
                className="font-bold text-xl mb-2"
                style={{ color: "oklch(0.95 0.005 250)" }}
              >
                Tasty Tower, Gajuwaka
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "oklch(0.60 0.025 258)" }}
              >
                Indra Colony, Gajuwaka, Vizag — 530026
              </p>
              <a
                href="https://www.google.com/maps/search/Indra+Colony+Gajuwaka+Visakhapatnam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                  color: "oklch(0.10 0.025 258)",
                }}
              >
                <ExternalLink size={14} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
