export function scrollToSection(target) {
  const element = document.getElementById(target);

  if (!element) {
    return;
  }

  const offset = window.innerWidth < 768 ? 76 : 92;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}
