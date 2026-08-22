import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Send,
  Sparkles,
  X,
  Youtube,
} from "lucide-react";
import {
  EDUCATION,
  HERO_STACKS,
  PERSONAL_INFO,
  TECH_STACK,
  createComment,
  getPortfolioData,
} from "./lib/portfolio";

const heroRoles = ["Fullstack Website", "Mobile Application"];

const navItems = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Portofolio",
    target: "projects",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    value: "Rifqi Susanto",
    href: PERSONAL_INFO.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@ki1bot",
    href: PERSONAL_INFO.github,
    icon: Github,
  },
  {
    label: "Instagram",
    value: "@ki1bot_",
    href: PERSONAL_INFO.instagram,
    icon: Instagram,
  },
  {
    label: "YouTube",
    value: "@kibot7659",
    href: PERSONAL_INFO.youtube,
    icon: Youtube,
  },
  {
    label: "Spotify",
    value: "kibot",
    href: PERSONAL_INFO.spotify,
    icon: Music2,
  },
  {
    label: "TikTok",
    value: "@kiibott_",
    href: PERSONAL_INFO.tiktok,
    icon: Sparkles,
  },
];

function scrollToSection(target) {
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

function useTypewriter(words) {
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

    const current = words[wordIndex];
    const complete = text === current;
    const empty = text === "";

    const delay = complete && !deleting ? 1400 : deleting ? 45 : 75;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }

      if (deleting) {
        const next = current.slice(0, Math.max(text.length - 1, 0));

        setText(next);

        if (empty || next === "") {
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

function Reveal({ children, className = "" }) {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
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

function ImageWithFallback({ src, alt, className = "", initials = "?" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`image-fallback ${className}`}>
        {initials.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

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
          {navItems.map((item) => (
            <button key={item.target} onClick={() => go(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Buka menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Navigasi mobile">
          {navItems.map((item) => (
            <button key={item.target} onClick={() => go(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function HeroSection() {
  const role = useTypewriter(heroRoles);

  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <div className="eyebrow-pill">
            <Sparkles size={16} />
            Ready to Innovate
          </div>

          <h1>
            Software
            <span>Engineer</span>
          </h1>

          <div className="typewriter">
            {role}
            <span>|</span>
          </div>

          <p className="hero-description">
            Saya membangun website yang modern, fungsional, dan mudah digunakan
            untuk menjawab berbagai kebutuhan digital.
          </p>

          <div className="chip-list hero-chips">
            {HERO_STACKS.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              Projects
              <ExternalLink size={17} />
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              Contact
              <Mail size={17} />
            </button>
          </div>

          <div className="hero-socials">
            {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="hero-visual-glow" />

          <img
            src={PERSONAL_INFO.heroImage}
            alt="Ilustrasi pengembangan website"
          />
        </Reveal>
      </div>

      <button
        className="scroll-indicator"
        onClick={() => scrollToSection("education")}
        aria-label="Lanjut ke bagian pendidikan"
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}

function EducationSection() {
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

function AboutSection({ projectCount, certificateCount }) {
  const capabilities = [
    {
      icon: Code2,
      title: "Frontend Development",
      text: "Mengembangkan antarmuka website yang responsif, modern, dan mudah digunakan dengan React, Next.js, Tailwind CSS, dan framework lainnya.",
    },
    {
      icon: Database,
      title: "Database Integration",
      text: "Mengintegrasikan aplikasi dengan database untuk menyimpan, mengelola, dan menampilkan project, sertifikat, komentar, dan data pendukung lainnya.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Clean Code Structure",
      text: "Menata struktur folder, komponen, dan kode secara terorganisir agar mudah dipahami, dipelihara, dan dikembangkan.",
    },
  ];

  return (
    <section id="about" className="content-section about-section">
      <Reveal className="section-heading align-left">
        <span className="section-kicker">About Me</span>

        <h2>
          Saya membangun website dengan tampilan yang rapi, responsif, dan
          nyaman digunakan di berbagai perangkat.
        </h2>

        <p>
          Saya adalah mahasiswa Sistem Informasi yang berfokus pada pengembangan
          website modern. Saya menggunakan React, Next.js, Tailwind CSS, dan
          framework lainnya untuk membangun antarmuka yang responsif, mengelola
          data aplikasi, serta menghadirkan pengalaman pengguna yang nyaman di
          berbagai perangkat.
        </p>
      </Reveal>

      <div className="about-grid">
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="capability-card glass-card">
              <div className="icon-box">
                <Icon size={22} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="profile-card glass-card">
          <div className="profile-image-wrap">
            <ImageWithFallback
              src={PERSONAL_INFO.profileImage}
              alt="Rifqi"
              className="profile-image"
              initials="RF"
            />
          </div>

          <h3>{PERSONAL_INFO.name}</h3>

          <p className="profile-role">{PERSONAL_INFO.role}</p>

          <p className="profile-location">
            <MapPin size={16} />
            {PERSONAL_INFO.location}
          </p>

          <div className="profile-stats">
            <div>
              <strong>{projectCount}</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>{certificateCount}</strong>
              <span>Certificates</span>
            </div>

            <div>
              <strong>{TECH_STACK.length}</strong>
              <span>Tech Stack</span>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="github-card"
          >
            <Github size={22} />

            <div>
              <strong>GitHub Contributions</strong>
              <span>View on GitHub</span>
            </div>

            <ExternalLink size={16} />
          </a>

          <div className="profile-actions">
            <a
              className="secondary-button"
              href="https://drive.google.com/drive/folders/1SmhgvKkpRICHDnnvEH3dTHS-72bmsp16?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              Download CV
            </a>

            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, onDetails }) {
  return (
    <article className="project-card glass-card">
      <div className="project-image-wrap">
        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="project-image"
          initials={project.title}
        />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech-preview">
          {(project.tech_stack || []).slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="secondary-button small-button"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          ) : (
            <span className="disabled-button">No Demo</span>
          )}

          <button
            className="primary-button small-button"
            onClick={() => onDetails(project)}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="project-modal glass-card"
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${project.title}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Tutup detail"
        >
          <X size={22} />
        </button>

        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="modal-image"
          initials={project.title}
        />

        <div className="modal-content">
          <span className="section-kicker">Project Detail</span>

          <h2>{project.title}</h2>

          <p>{project.description}</p>

          {project.features?.length > 0 && (
            <div className="modal-block">
              <h3>Fitur Utama</h3>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={17} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tech_stack?.length > 0 && (
            <div className="modal-block">
              <h3>Tech Stack</h3>

              <div className="chip-list">
                {project.tech_stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            {project.link && (
              <a
                className="primary-button"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                className="secondary-button"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>
            )}

            {project.pdf && (
              <a
                className="secondary-button"
                href={project.pdf}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} />
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSection({ projects, certificates }) {
  const [tab, setTab] = useState("projects");

  const [expanded, setExpanded] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const initialCount = 5;

  const visibleProjects = expanded ? projects : projects.slice(0, initialCount);

  const remaining = Math.max(projects.length - initialCount, 0);

  return (
    <section id="projects" className="content-section portfolio-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Portofolio Showcase</span>

        <h2>Project, sertifikat, dan teknologi</h2>

        <p>
          Jelajahi project, sertifikat, dan teknologi yang saya gunakan dalam
          proses belajar dan pengembangan portofolio ini.
        </p>
      </Reveal>

      <div className="tabs" role="tablist" aria-label="Portofolio">
        <button
          className={tab === "projects" ? "active" : ""}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>

        <button
          className={tab === "certificates" ? "active" : ""}
          onClick={() => setTab("certificates")}
        >
          Certificates
        </button>

        <button
          className={tab === "tech" ? "active" : ""}
          onClick={() => setTab("tech")}
        >
          Tech Stack
        </button>
      </div>

      {tab === "projects" && (
        <>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDetails={setSelectedProject}
              />
            ))}
          </div>

          {remaining > 0 && (
            <button
              className="see-more-button"
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "Show Less" : `See More ${remaining}`}

              <ChevronDown className={expanded ? "rotate" : ""} size={18} />
            </button>
          )}
        </>
      )}

      {tab === "certificates" && (
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.pdf_url || certificate.img}
              target="_blank"
              rel="noreferrer"
              className="certificate-card glass-card"
            >
              <ImageWithFallback
                src={certificate.img}
                alt={certificate.title}
                className="certificate-image"
                initials="CT"
              />

              <div>
                <h3>{certificate.title}</h3>

                <span>
                  Open Certificate
                  <ExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {tab === "tech" && (
        <div className="tech-grid">
          {TECH_STACK.map((tech, index) => (
            <div className="tech-card glass-card" key={tech}>
              <span className="tech-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{tech}</strong>
            </div>
          ))}
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [submitting, setSubmitting] = useState(false);

  async function submit(event) {
    event.preventDefault();

    const name = form.name.trim();

    const email = form.email.trim();

    const message = form.message.trim();

    if (
      name.length < 2 ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      message.length < 5
    ) {
      setStatus({
        type: "error",
        text: "Lengkapi nama, email, dan pesan dengan benar.",
      });

      return;
    }

    setSubmitting(true);

    setStatus({
      type: "",
      text: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("API contact belum tersedia");
      }

      setStatus({
        type: "success",
        text: "Pesan berhasil dikirim.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);

      const body = encodeURIComponent(
        `Nama: ${name}\nEmail: ${email}\n\n${message}`,
      );

      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

      setStatus({
        type: "info",
        text: "Aplikasi email dibuka sebagai fallback pengiriman pesan.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        <span>Nama</span>

        <input
          value={form.name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
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
            setForm({
              ...form,
              email: event.target.value,
            })
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
            setForm({
              ...form,
              message: event.target.value,
            })
          }
          placeholder="Tulis pesan Anda"
          rows={5}
          maxLength={2000}
        />
      </label>

      {status.text && (
        <p className={`form-status ${status.type}`}>{status.text}</p>
      )}

      <button className="primary-button" type="submit" disabled={submitting}>
        {submitting ? "Mengirim..." : "Kirim Pesan"}

        <Send size={16} />
      </button>
    </form>
  );
}

function CommentSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments);

  const [form, setForm] = useState({
    name: "",
    content: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const pinned = comments.find((comment) => comment.is_pinned);

  const regular = comments.filter((comment) => !comment.is_pinned);

  async function submit(event) {
    event.preventDefault();

    setSubmitting(true);

    setStatus({
      type: "",
      text: "",
    });

    try {
      const newComment = await createComment(form);

      setComments((current) => [newComment, ...current]);

      setForm({
        name: "",
        content: "",
      });

      setStatus({
        type: "success",
        text: "Komentar berhasil dikirim.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error.message || "Komentar gagal dikirim.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  function CommentCard({ comment, isPinned = false }) {
    const date = new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(comment.created_at));

    const initials = String(comment.user_name || "?").slice(0, 2);

    return (
      <article className={`comment-card ${isPinned ? "pinned" : ""}`}>
        <ImageWithFallback
          src={comment.profile_image}
          alt={comment.user_name}
          className="comment-avatar"
          initials={initials}
        />

        <div>
          <div className="comment-meta">
            <strong>{comment.user_name}</strong>

            {isPinned && <span>Admin</span>}

            <time>{date}</time>
          </div>

          <p>{comment.content}</p>
        </div>
      </article>
    );
  }

  return (
    <div className="comments-panel glass-card">
      <div className="comments-header">
        <div>
          <span className="section-kicker">Komentar ({comments.length})</span>

          <h3>Tinggalkan tanggapan</h3>
        </div>

        <MessageCircle size={24} />
      </div>

      <form className="comment-form" onSubmit={submit}>
        <input
          value={form.name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
          placeholder="Masukkan nama Anda"
          maxLength={50}
        />

        <textarea
          value={form.content}
          onChange={(event) =>
            setForm({
              ...form,
              content: event.target.value,
            })
          }
          placeholder="Tulis komentar"
          rows={4}
          maxLength={500}
        />

        {status.text && (
          <p className={`form-status ${status.type}`}>{status.text}</p>
        )}

        <button className="primary-button" type="submit" disabled={submitting}>
          {submitting ? "Mengirim..." : "Kirim Komentar"}
        </button>
      </form>

      <div className="comment-list">
        {pinned && (
          <div className="pinned-wrap">
            <span className="pinned-label">Pinned Comment</span>

            <CommentCard comment={pinned} isPinned />
          </div>
        )}

        {regular.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function ContactSection({ comments }) {
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
              {socialLinks.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <Icon size={18} />

                  <span>
                    <strong>{label}</strong>

                    <small>{value}</small>
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

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="brand-dot" />
        <strong>Rifqi</strong>
      </div>

      <p>© {new Date().getFullYear()} Rifqi. All rights reserved.</p>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

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

function App() {
  const [portfolio, setPortfolio] = useState({
    projects: [],
    certificates: [],
    comments: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getPortfolioData()
      .then((data) => {
        if (active) {
          setPortfolio(data);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const counts = useMemo(
    () => ({
      projects: portfolio.projects.length,
      certificates: portfolio.certificates.length,
    }),
    [portfolio.certificates.length, portfolio.projects.length],
  );

  return (
    <div className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-grid" />

      <Navbar />

      <main>
        <HeroSection />

        <EducationSection />

        <AboutSection
          projectCount={counts.projects}
          certificateCount={counts.certificates}
        />

        {loading ? (
          <section className="content-section loading-section">
            <div className="loading-card glass-card">
              Memuat data portofolio...
            </div>
          </section>
        ) : (
          <>
            <PortfolioSection
              projects={portfolio.projects}
              certificates={portfolio.certificates}
            />

            <ContactSection comments={portfolio.comments} />
          </>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
