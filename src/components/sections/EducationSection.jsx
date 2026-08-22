import { Reveal } from "../animations/Reveal";
import { EDUCATION } from "../../lib/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="content-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Education Journey</span>

        <h2>Perjalanan pendidikan saya</h2>

        <p>
          Berikut adalah perjalanan pendidikan saya dari awal hingga saat ini
          sebagai mahasiswa Sistem Informasi di Universitas Gunadarma.
        </p>
      </Reveal>

      <div className="timeline">
        {EDUCATION.map((item, index) => (
          <Reveal
            key={`${item.period}-${item.title}`}
            className="timeline-item"
          >
            <div className="timeline-marker">{index + 1}</div>

            <div className="timeline-card glass-card">
              <span className="timeline-period">{item.period}</span>

              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
