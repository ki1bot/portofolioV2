import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToSection } from "../../lib/navigation";

export function BackToTop() {
  const [visible, setVisible] = useState(() => window.scrollY > 700);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      onClick={() => scrollToSection("home")}
      aria-label="Kembali ke atas"
    >
      <ArrowUp size={20} />
    </button>
  );
}
