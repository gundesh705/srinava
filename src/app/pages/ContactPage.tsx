import { motion } from "motion/react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const requiredFilled =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  const contactInfo = [
    {
      icon: "📍",
      label: "Address",
      value: "1, Harbour Colony, 2nd Main Road, Kodungaiyur, Chennai - 600118",
      link: null as string | null,
    },
    {
      icon: "📞",
      label: "Phone",
      value: "9345858195",
      value2: "6382125236",
      link: "tel:9345858195",
      link2: "tel:6382125236",
    },
    {
      icon: "📧",
      label: "Email",
      value: "srinavaindustries@gmail.com",
      link: "mailto:srinavaindustries@gmail.com",
    },
    {
      icon: "📱",
      label: "Instagram",
      value: "@srinava_industries",
      link: "https://www.instagram.com/srinava_industries",
    },
    {
      icon: "🏢",
      label: "GSTIN",
      value: "33AFHPB5508G2ZW",
      link: null as string | null,
    },
  ];

  const stats = [
    { value: "15+", label: "Years of Service" },
    { value: "500+", label: "Projects Delivered" },
    { value: "100+", label: "Companies Served" },
  ];

  return (
    <div className="contact-page-wrapper">
      <style>{`
        .contact-page-wrapper {
          --steel-950: #050506;
          --steel-900: #08090b;
          --steel-800: #0d0e11;
          --steel-700: #15171b;
          --crimson: #e11d2e;
          --crimson-bright: #ff3340;
          --crimson-deep: #8f0f1a;
          --crimson-soft: rgba(225, 29, 46, 0.5);
          --crimson-faint: rgba(225, 29, 46, 0.14);
          --ember: #ff7a2c;
          --line: rgba(255, 255, 255, 0.08);
          --line-strong: rgba(255, 255, 255, 0.14);
          --text: rgba(255, 255, 255, 0.94);
          --text-dim: rgba(255, 255, 255, 0.56);
          --text-faint: rgba(255, 255, 255, 0.34);

          position: relative;
          min-height: 100vh;
          background:
            radial-gradient(140% 90% at 50% -10%, #141416 0%, var(--steel-950) 60%);
          color: var(--text);
          padding-top: 5rem;
          overflow: hidden;
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
        }

        /* ---------- Animated industrial backdrop ---------- */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(225,29,46,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225,29,46,0.055) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at 50% 25%, black 0%, transparent 78%);
          animation: gridDrift 32s linear infinite;
          pointer-events: none;
        }

        @keyframes gridDrift {
          from { background-position: 0 0, 0 0; }
          to   { background-position: 54px 54px, 54px 54px; }
        }

        .bg-glow {
          position: absolute;
          top: -12%;
          left: 50%;
          width: 75vw;
          height: 65vh;
          transform: translateX(-50%);
          background: radial-gradient(ellipse at center, rgba(225,29,46,0.18) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          animation: pulseGlow 8s ease-in-out infinite;
        }

        .bg-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 0%, transparent 55%, rgba(0,0,0,0.55) 100%);
          pointer-events: none;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }

        .scan-beam {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--crimson-bright), transparent);
          opacity: 0.5;
          animation: scan 7.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes scan {
          0%   { top: 6%;  opacity: 0; }
          15%  { opacity: 0.55; }
          85%  { opacity: 0.55; }
          100% { top: 96%; opacity: 0; }
        }

        .spark {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--ember);
          box-shadow: 0 0 8px 2px rgba(255, 122, 44, 0.7);
          pointer-events: none;
          animation: rise linear infinite;
        }

        @keyframes rise {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { transform: translateY(-92vh) scale(0.2); opacity: 0; }
        }

        .contact-inner { position: relative; z-index: 2; }

        /* ---------- Header ---------- */
        .contact-header {
          padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 2.5rem);
          text-align: left;
          max-width: 1280px;
          margin: 0 auto;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--crimson-bright);
          font-weight: 700;
          margin-bottom: 1.4rem;
        }

        .eyebrow::before {
          content: "";
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, var(--crimson-bright), transparent);
        }

        .contact-title {
          font-size: clamp(2.6rem, 7.5vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.02;
          margin-bottom: 1.4rem;
          background: linear-gradient(135deg, #ffffff 0%, #f2f2f2 42%, var(--crimson-bright) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          font-size: clamp(1rem, 2vw, 1.12rem);
          color: var(--text-dim);
          line-height: 1.75;
          max-width: 640px;
        }

        /* ---------- Stats strip ---------- */
        .stats-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 3rem);
        }

        .stats-inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 14px;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
        }

        .stat-cell {
          padding: 1.4rem 1rem;
          text-align: center;
          border-right: 1px solid var(--line);
          position: relative;
        }
        .stat-cell:last-child { border-right: none; }

        .stat-value {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #fff;
          text-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
        }

        .stat-label {
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-faint);
          font-weight: 600;
          margin-top: 0.35rem;
        }

        /* ---------- Layout ---------- */
        .contact-content {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: clamp(2rem, 5vw, 4rem);
          padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem);
          align-items: start;
          max-width: 1280px;
          margin: 0 auto;
        }

        .info-section { display: flex; flex-direction: column; gap: 1.6rem; }

        /* ---------- Company badge ---------- */
        .company-info {
          position: relative;
          padding: 1.85rem 2rem;
          border: 1px solid var(--line);
          border-radius: 16px;
          background:
            linear-gradient(135deg, rgba(225,29,46,0.14) 0%, rgba(255,255,255,0.02) 70%);
          overflow: hidden;
        }

        .company-info::before {
          content: "";
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--crimson-bright), transparent);
        }

        .company-info::after {
          content: "";
          position: absolute;
          right: -40px; top: -40px;
          width: 140px; height: 140px;
          background: radial-gradient(circle, rgba(225,29,46,0.25), transparent 65%);
          filter: blur(8px);
          pointer-events: none;
        }

        .company-name {
          font-size: 1.6rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.4rem;
          letter-spacing: 0.01em;
          position: relative;
        }

        .company-subtitle {
          font-size: 0.78rem;
          color: var(--crimson-bright);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          position: relative;
        }

        .contact-info-grid { display: grid; gap: 1rem; }

        /* ---------- Contact cards ---------- */
        .contact-card {
          position: relative;
          padding: 1.4rem 1.55rem;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: rgba(255,255,255,0.025);
          transition: border-color 0.3s ease, background 0.3s ease,
                      transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          overflow: hidden;
        }

        .contact-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx,50%) var(--my,50%),
                      rgba(225,29,46,0.16), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .contact-card:hover {
          border-color: var(--crimson-soft);
          background: rgba(225,29,46,0.06);
          transform: translateY(-3px);
          box-shadow: 0 14px 34px -14px rgba(225,29,46,0.45);
        }

        .contact-card:hover::after { opacity: 1; }

        .contact-card-header {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 0.65rem;
        }

        .contact-icon {
          font-size: 1.35rem;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: linear-gradient(135deg, rgba(225,29,46,0.18), rgba(225,29,46,0.05));
          border: 1px solid var(--crimson-faint);
          flex-shrink: 0;
        }

        .contact-label {
          font-size: 0.7rem;
          color: var(--crimson-bright);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-value {
          font-size: 0.92rem;
          color: var(--text);
          line-height: 1.6;
          word-break: break-word;
        }

        .contact-value a {
          color: rgba(255,255,255,0.86);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .contact-value a:hover { color: var(--crimson-bright); }

        /* ---------- Form ---------- */
        .form-section {
          position: relative;
          padding: clamp(1.9rem, 4vw, 2.9rem);
          border: 1px solid var(--line);
          border-radius: 18px;
          background:
            linear-gradient(135deg, rgba(225,29,46,0.08) 0%, rgba(13,14,17,0.65) 55%),
            rgba(13,14,17,0.88);
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .form-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--crimson-bright), transparent);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }

        .form-intro {
          font-size: 0.88rem;
          color: var(--text-dim);
          margin-bottom: 1.85rem;
          line-height: 1.6;
        }

        .form-group { margin-bottom: 1.35rem; }

        .form-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.12em;
          margin-bottom: 0.55rem;
          text-transform: uppercase;
          transition: color 0.25s ease;
        }

        .form-label.is-focused { color: var(--crimson-bright); }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.95rem 1.05rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--line);
          border-radius: 10px;
          color: #fff;
          font-size: 0.92rem;
          font-family: inherit;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .form-input::placeholder,
        .form-textarea::placeholder { color: rgba(255,255,255,0.3); }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--crimson-soft);
          background: rgba(225,29,46,0.05);
          box-shadow: 0 0 0 3px rgba(225,29,46,0.13);
        }

        .form-textarea { resize: vertical; min-height: 130px; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-button {
          position: relative;
          width: 100%;
          padding: 1.05rem 2rem;
          background: linear-gradient(135deg, var(--crimson) 0%, var(--crimson-deep) 100%);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease, filter 0.3s ease;
          text-transform: uppercase;
          margin-top: 0.5rem;
          overflow: hidden;
        }

        .form-button::before {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
          transition: left 0.6s ease;
        }

        .form-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 38px -10px rgba(225,29,46,0.6);
        }

        .form-button:hover::before { left: 100%; }
        .form-button:active { transform: translateY(0); }

        .form-button.is-ready {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.08),
                      0 14px 30px -12px rgba(225,29,46,0.55);
        }

        .form-footnote {
          font-size: 0.72rem;
          color: var(--text-faint);
          text-align: center;
          margin-top: 1rem;
          letter-spacing: 0.02em;
        }

        .success-message {
          padding: 1rem;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.35);
          border-radius: 10px;
          color: rgba(134,239,172,0.95);
          text-align: center;
          font-weight: 600;
          margin-bottom: 1.5rem;
          animation: slideDown 0.35s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 880px) {
          .contact-content { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: 1fr; }
          .stat-cell { border-right: none; border-bottom: 1px solid var(--line); }
          .stat-cell:last-child { border-bottom: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-grid, .bg-glow, .scan-beam, .spark { animation: none; }
        }
      `}</style>

      {/* Animated backdrop */}
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="scan-beam" />
      <div className="bg-vignette" />
      {[...Array(7)].map((_, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${8 + i * 13}%`,
            bottom: "-10px",
            animationDuration: `${5 + (i % 4) * 1.5}s`,
            animationDelay: `${i * 0.9}s`,
          }}
        />
      ))}

      <div className="contact-inner">
        {/* Header */}
        <div className="contact-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">Let's Build Together</span>
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Reach out to Sri Nava Industries for
              inquiries, collaborations, or technical support — our engineering
              team responds promptly and with precision.
            </p>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="stats-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="stats-inner">
            {stats.map((s) => (
              <div className="stat-cell" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="contact-content">
          {/* Left: Contact Information */}
          <motion.div
            className="info-section"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="company-info">
              <div className="company-name">Sri Nava Industries</div>
              <div className="company-subtitle">Engineering Excellence</div>
            </div>

            <div className="contact-info-grid">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.09 }}
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                >
                  <div className="contact-card-header">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-label">{item.label}</div>
                  </div>
                  <div className="contact-value">
                    {item.label === "Phone" ? (
                      <>
                        <a href={`tel:${item.value}`}>{item.value}</a>
                        <br />
                        <a href={`tel:${item.value2}`}>{item.value2}</a>
                      </>
                    ) : item.link ? (
                      <a
                        href={item.link}
                        target={item.label === "Instagram" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            className="form-section"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="form-title">Send Us an Enquiry</h2>
            <p className="form-intro">
              Fields marked with <span style={{ color: "var(--crimson-bright)" }}>*</span> are
              required. We typically reply within one business day.
            </p>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your enquiry has been received — we'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className={`form-label ${focusedField === "name" ? "is-focused" : ""}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className={`form-label ${focusedField === "email" ? "is-focused" : ""}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className={`form-label ${focusedField === "phone" ? "is-focused" : ""}`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="+91 xxxxx xxxxx"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className={`form-label ${focusedField === "company" ? "is-focused" : ""}`}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className={`form-label ${focusedField === "subject" ? "is-focused" : ""}`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="form-input"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label className={`form-label ${focusedField === "message" ? "is-focused" : ""}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`form-button ${requiredFilled ? "is-ready" : ""}`}
                whileTap={{ scale: 0.98 }}
              >
                Send Enquiry
              </motion.button>

              <p className="form-footnote">
                Your details are kept confidential and used only to respond to your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
