import { useState } from "react";
import { Send } from "lucide-react";
import { openContactEmail } from "../../api/contact";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  function submit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      text: "",
    });

    try {
      openContactEmail(form);

      setStatus({
        type: "info",
        text: "Aplikasi email dibuka untuk mengirim pesan.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : "Data form tidak valid.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        <span>Nama</span>

        <input
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          placeholder="Nama Anda"
          maxLength={80}
        />
      </label>

      <label>
        <span>Email</span>

        <input
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              email: event.target.value,
            }))
          }
          placeholder="Email Anda"
          maxLength={120}
        />
      </label>

      <label>
        <span>Pesan</span>

        <textarea
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          placeholder="Tulis pesan Anda"
          rows={5}
          maxLength={2000}
        />
      </label>

      {status.text && (
        <p className={`form-status ${status.type}`}>{status.text}</p>
      )}

      <button className="primary-button" type="submit">
        Kirim Pesan
        <Send size={16} />
      </button>
    </form>
  );
}
