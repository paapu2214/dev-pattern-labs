
"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom-built websites and web apps engineered for speed, scale, and clean code.",
    icon: "↗",
  },
  {
    number: "02",
    title: "SEO & Growth Marketing",
    description:
      "Data-driven SEO and SMM strategies that turn visibility into real business growth.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Automation & Cloud",
    description:
      "Streamline workflows and scale confidently with automation built on modern cloud infrastructure.",
    icon: "◎",
  },
];

const projects = [
  {
    category: "Web Development",
    title: "Building a faster path to launch",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Automation",
    title: "Creating connected, self-running workflows",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "UI/UX Design",
    title: "Designing the next chapter of the product",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Dev Pattern Labs" />
          DEV PATTERN<span>LABS</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk <span>↗</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero section-wrap" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            WEB DEVELOPMENT &amp; DIGITAL SOLUTIONS
          </div>

          <h1>
            Build. Grow.
            <br />
            Automate your
            <br />
            <span>business.</span>
          </h1>

          <p className="hero-description">
            We craft powerful digital solutions that scale your business and
            automate the future — from web platforms to growth-driven
            marketing.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button button-dark">
              Explore our services <span>↗</span>
            </a>

            <a href="#about" className="text-link">
              Discover Dev Pattern Labs <span>→</span>
            </a>
          </div>

          <div className="hero-note">
            <div className="avatar-stack">
              <span>D</span>
              <span>P</span>
              <span>+</span>
            </div>
            <p>
              Thoughtful people.
              <br />
              Meaningful partnerships.
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90"
            alt="Modern corporate architecture"
          />

          <div className="hero-image-label">
            <span>01 / 03</span>
            <p>Ideas into action.</p>
          </div>

          <div className="floating-card">
            <span className="floating-icon">↗</span>
            <div>
              <strong>Forward thinking</strong>
              <p>Focused on what comes next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      <section className="trust-strip">
        <p>YOUR PARTNER IN PROGRESS</p>
        <div className="trust-logos">
          <span>Northline</span>
          <span>vertex.</span>
          <span>MONOLITH</span>
          <span>arc &amp; co.</span>
          <span>FORMA</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-wrap" id="about">
        <div className="section-label">
          <span>01</span> / WHO WE ARE
        </div>

        <div className="about-grid">
          <h2>
            Good business
            <br />
            starts with
            <br />
            <span>good thinking.</span>
          </h2>

          <div className="about-copy">
            <p>
              Every business has the potential to move forward. The challenge
              is knowing where to focus, what to build, and how to automate
              the work that slows you down.
            </p>

            <p>
              At Dev Pattern Labs, we work alongside teams to build web
              platforms, streamline processes, and craft digital solutions
              that scale.
            </p>

            <a href="#contact" className="text-link">
              More about us <span>→</span>
            </a>
          </div>
        </div>

        <div className="stats-grid">
          <div>
            <strong>12<span>+</span></strong>
            <p>Years of experience</p>
          </div>
          <div>
            <strong>85<span>+</span></strong>
            <p>Projects delivered</p>
          </div>
          <div>
            <strong>24</strong>
            <p>Industry specialists</p>
          </div>
          <div>
            <strong>06</strong>
            <p>Markets served</p>
          </div>
        </div>

        <p className="stats-disclaimer">
          Sample figures — replace with verified company statistics.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-label">
                <span>02</span> / WHAT WE DO
              </div>

              <h2>
                Solutions for
                <br />
                <span>what&apos;s next.</span>
              </h2>
            </div>

            <p>
              We bring strategy, creativity, and practical experience together
              to help your business move forward.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact">
                  Explore service <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>03</span> / SELECTED WORK
            </div>

            <h2>
              Progress in
              <br />
              <span>practice.</span>
            </h2>
          </div>

          <a href="#contact" className="text-link">
            Discuss your project <span>→</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <a href="#contact" className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-arrow">↗</span>
              </a>

              <p className="project-category">
                0{index + 1} / {project.category}
              </p>

              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="section-wrap testimonial-inner">
          <div className="section-label">
            <span>04</span> / CLIENT PERSPECTIVE
          </div>

          <div className="quote-mark">“</div>

          <blockquote>
            Dev Pattern Labs brought structure to our ideas and helped our
            team see a clearer way forward.
          </blockquote>

          <div className="quote-author">
            <span className="author-avatar">JD</span>
            <div>
              <strong>Jordan Davis</strong>
              <p>Managing Director · Example Company</p>
            </div>
          </div>

          <p className="stats-disclaimer">
            Example testimonial — replace with an authorized client quote.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta section-wrap" id="contact">
        <div className="cta-content">
          <div className="section-label">
            <span>05</span> / START A CONVERSATION
          </div>

          <h2>
            Ready to move
            <br />
            <span>forward?</span>
          </h2>

          <p>
            Tell us about your goals. Let&apos;s explore what we can build
            together.
          </p>

          <a
            href="mailto:hello@devpatternlabs.com"
            className="button button-light"
          >
            hello@devpatternlabs.com <span>↗</span>
          </a>
        </div>

        <div className="cta-decoration">D.</div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <a href="#home" className="logo footer-logo">
            <img src="/logo.png" alt="Dev Pattern Labs" />
            DEV PATTERN<span>LABS</span>
          </a>

          <p>
            Build. Grow.
            <br />
            Automate.
          </p>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dev Pattern Labs. All rights reserved.</p>

          <div>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
