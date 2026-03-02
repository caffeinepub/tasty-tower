import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:7093394910"
      data-ocid="floating.call.button"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 animate-call-pulse"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
        boxShadow:
          "0 4px 20px oklch(0.84 0.16 86 / 0.5), 0 2px 10px rgba(0,0,0,0.3)",
        color: "oklch(0.10 0.025 258)",
      }}
      aria-label="Call Tasty Tower"
    >
      <Phone size={22} strokeWidth={2.5} />
    </a>
  );
}
