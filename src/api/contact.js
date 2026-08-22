import { PERSONAL_INFO } from "../lib/portfolio";

function clean(value, maxLength) {
  return String(value || "")
    .trim()
    .slice(0, maxLength);
}

export function openContactEmail({ name, email, message }) {
  const cleanName = clean(name, 80);
  const cleanEmail = clean(email, 120);
  const cleanMessage = clean(message, 2000);

  if (cleanName.length < 2) {
    throw new Error("Nama minimal 2 karakter.");
  }

  if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
    throw new Error("Format email tidak valid.");
  }

  if (cleanMessage.length < 5) {
    throw new Error("Pesan minimal 5 karakter.");
  }

  const subject = encodeURIComponent(`Pesan Portofolio dari ${cleanName}`);
  const body = encodeURIComponent(
    `Nama: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
  );

  window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
}
