import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// LOGO IMPORT
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/careers", label: "Careers" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="AISmartLive Logo"
            className="h-9 w-9 rounded-xl object-contain shadow-glow"
          />

          <span className="font-display font-semibold tracking-tight text-base sm:text-lg">
            AI
            <span className="text-gradient">
              SmartLive Solutions
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors"
              activeProps={{
                className:
                  "text-foreground bg-surface",
              }}
              activeOptions={{
                exact: item.to === "/",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button className="bg-gradient-primary hover:opacity-95 shadow-glow">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-1">

            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors"
                activeProps={{
                  className:
                    "text-foreground bg-surface",
                }}
                activeOptions={{
                  exact: item.to === "/",
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3"
            >
              <Button className="w-full bg-gradient-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}