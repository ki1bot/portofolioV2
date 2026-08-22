import { useEffect, useState } from "react";

export function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] || "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || words.length === 0) {
      return undefined;
    }

    const current = words[wordIndex] || "";
    const complete = text === current;
    const delay = complete && !deleting ? 1400 : deleting ? 45 : 75;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }

      if (deleting) {
        const next = current.slice(0, Math.max(text.length - 1, 0));

        setText(next);

        if (next === "") {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
        }

        return;
      }

      setText(current.slice(0, text.length + 1));
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [deleting, text, wordIndex, words]);

  return text;
}
