import { useEffect, useState } from "react";

export function Reveal({ children, className = "" }) {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node]);

  return (
    <div
      ref={setNode}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
