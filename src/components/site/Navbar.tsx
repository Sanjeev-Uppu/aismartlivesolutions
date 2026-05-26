import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// LOGO
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // CLOSE MENU ON DESKTOP
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", resize);

    return () =>
      window.removeEventListener(
        "resize",
        resize
      );
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[9999]
          transition-all
          duration-300
          ${
            scrolled || open
              ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
              : "bg-black/30 backdrop-blur-xl"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-10
          "
        >
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="AISmartLive Logo"
              className="
                h-10
                w-10
                rounded-xl
                object-contain
                shadow-[0_0_25px_rgba(139,92,246,0.55)]
              "
            />

            <h1
              className="
                text-[15px]
                sm:text-lg
                font-bold
                tracking-tight
                text-white
                whitespace-nowrap
              "
            >
              AI
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-violet-400
                  to-pink-400
                  bg-clip-text
                  text-transparent
                "
              >
                SmartLive
              </span>
            </h1>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-2
            "
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white/70
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:text-white
                "
                activeProps={{
                  className:
                    "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]",
                }}
                activeOptions={{
                  exact: item.to === "/",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ================= DESKTOP BUTTON ================= */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-violet-500
                  to-pink-500
                  px-5
                  text-white
                  shadow-[0_0_25px_rgba(168,85,247,0.45)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                md:hidden
                border-t
                border-white/10
                bg-black/95
                backdrop-blur-2xl
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-1
                  px-5
                  py-5
                "
              >
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-center
                        rounded-xl
                        px-4
                        py-3
                        text-[15px]
                        font-medium
                        text-white/75
                        transition-all
                        duration-300
                        hover:bg-white/10
                        hover:text-white
                      "
                      activeProps={{
                        className:
                          "bg-white/10 text-white",
                      }}
                      activeOptions={{
                        exact: item.to === "/",
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* MOBILE BUTTON */}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4"
                >
                  <Button
                    className="
                      w-full
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      via-violet-500
                      to-pink-500
                      text-white
                      shadow-[0_0_25px_rgba(168,85,247,0.45)]
                    "
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* NAVBAR SPACER */}
      <div className="h-16" />
    </>
  );
}