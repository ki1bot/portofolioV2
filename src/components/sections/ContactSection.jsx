import { ExternalLink, Mail } from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { CommentSection } from "../contact/CommentSection";
import { ContactForm } from "../contact/ContactForm";
import { SOCIAL_LINKS } from "../../data/site";

export function ContactSection({ comments }) {
  return (
    <section id="contact" className="content-section contact-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Contact</span>

        <h2>Hubungi Saya</h2>

        <p>
          Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan, dan saya
          akan membalas secepat mungkin.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-panel glass-card">
          <div className="contact-panel-title">
            <div className="icon-box">
              <Mail size={22} />
            </div>

            <div>
              <span className="section-kicker">Hubungi</span>

              <h3>Ada yang ingin didiskusikan?</h3>
            </div>
          </div>

          <p className="contact-copy">Kirim saya pesan dan mari kita bicara.</p>

          <ContactForm />

          <div className="social-block">
            <h4>Connect With Me</h4>

            <div className="social-grid">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={social.image} alt="" />

                  <span>
                    <strong>{social.label}</strong>

                    <small>{social.value}</small>
                  </span>

                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <CommentSection initialComments={comments} />
        </Reveal>
      </div>
    </section>
  );
}
