import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function OfferPopup({ onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 260);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      handleClose();
    }
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop dismiss handled via keyDown on button
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundColor: closing ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        transition: "background-color 0.25s ease",
      }}
      onClick={handleClose}
      data-ocid="popup.dialog"
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: stop propagation only */}
      <div
        className={`relative max-w-sm w-full rounded-3xl overflow-hidden ${
          closing
            ? "animate-popup-out"
            : visible
              ? "animate-popup-in"
              : "opacity-0 scale-50"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow:
            "0 0 60px oklch(0.84 0.16 86 / 0.4), 0 20px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Offer image as full background */}
        <img
          src="/assets/uploads/TASTY-TOWER-OFFER-LOGO-1.jpeg"
          alt="Special Offer - Free Ice Cream Worth Rs 30 for every ₹125 billed"
          className="w-full h-auto block"
          style={{ display: "block" }}
        />

        {/* Gold border overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: "2px solid oklch(0.84 0.16 86 / 0.6)",
            boxShadow: "inset 0 0 40px oklch(0.84 0.16 86 / 0.08)",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          data-ocid="popup.close_button"
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:rotate-90"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
            color: "oklch(0.10 0.025 258)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}
          aria-label="Close offer"
        >
          <X size={16} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
