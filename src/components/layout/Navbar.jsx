import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/site";
import { scrollToSection } from "../../lib/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function go(target) {
    setOpen(false);
    scrollToSection(target);
  }

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <button
          className="brand"
          onClick={() => go("home")}
          aria-label="Kembali ke Home"
        >
          <span className="brand-dot" />
          Rifqi
        </button>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => (
            <button key={item.target} onClick={() => go(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Navigasi mobile">
          {NAV_ITEMS.map((item) => (
            <button key={item.target} onClick={() => go(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
