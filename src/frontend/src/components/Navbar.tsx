import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "Juices", to: "/juices", ocid: "nav.juices.link" },
  { label: "Milkshakes", to: "/milkshakes", ocid: "nav.milkshakes.link" },
  { label: "Pure Juices", to: "/pure-juices", ocid: "nav.pure-juices.link" },
  { label: "Thick Shakes", to: "/thick-shakes", ocid: "nav.thick-shakes.link" },
  {
    label: "Fruit Flavors",
    to: "/fruit-flavors",
    ocid: "nav.fruit-flavors.link",
  },
  {
    label: "Tasty Specials",
    to: "/tasty-specials",
    ocid: "nav.tasty-specials.link",
  },
  { label: "Contact", to: "/contact", ocid: "nav.contact.link" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: currentPath is the trigger
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath === to || currentPath.startsWith(`${to}/`);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "oklch(0.10 0.025 258 / 0.95)"
          : "oklch(0.10 0.025 258)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid oklch(0.84 0.16 86 / 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.home.link"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-display font-black"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                color: "oklch(0.10 0.025 258)",
              }}
            >
              T
            </div>
            <span
              className="font-display font-bold text-xl lg:text-2xl tracking-wide"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tasty Tower
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={link.ocid}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 inline-block"
                    style={{
                      background: active
                        ? "oklch(0.84 0.16 86 / 0.12)"
                        : undefined,
                    }}
                  >
                    <span
                      style={
                        active
                          ? {
                              background:
                                "linear-gradient(135deg, oklch(0.88 0.17 86), oklch(0.78 0.16 72))",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : { color: "oklch(0.80 0.01 258)" }
                      }
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "oklch(0.84 0.16 86)" }}
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            data-ocid="nav.mobile.toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul
            className="py-4 pb-6 flex flex-col gap-1 border-t"
            style={{ borderColor: "oklch(0.84 0.16 86 / 0.15)" }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={link.ocid}
                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: active
                        ? "oklch(0.84 0.16 86 / 0.12)"
                        : "transparent",
                      color: active
                        ? "oklch(0.88 0.17 86)"
                        : "oklch(0.85 0.01 258)",
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
