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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const contactInfo = [
    {
      icon: "📍",
      label: "Address",
      value: "1, Harbour Colony, 2nd Main road, Kodungaiyur, Chennai - 600118",
      link: null,
    },
    {
      icon: "📞",
      label: "Phone",
      value: "9345858195",
      link: "tel:9345858195",
    },
    {
      icon: "📧",
      label: "Email",
      value: "srinavaindustries@gmail.com",
      link: "mailto:srinavaindustries@gmail.com",
    },
    {
      icon: "🌐",
      label: "Website",
      value: "www.srinavaindustries.com",
      link: "https://www.srinavaindustries.com",
    },
    {
      icon: "🏢",
      label: "GSTIN",
      value: "33AFHPB5508G2ZW",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        .contact-page-wrapper {
          background: var(--steel-dark, #0a0a0a);
          color: white;
          padding-top: 6rem;
        }

        .contact-header {
          padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .contact-title {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(212, 175, 55, 0.9) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          max-width: 600px;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem);
          align-items: start;
        }

        .info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .company-info {
          padding: 2rem;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          margin-bottom: 1rem;
        }

        .company-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }

        .company-subtitle {
          font-size: 0.9rem;
          color: rgba(212, 175, 55, 0.8);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .contact-info-grid {
          display: grid;
          gap: 1.5rem;
        }

        .contact-card {
          padding: 1.5rem;
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
          cursor: default;
        }

        .contact-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.08);
          transform: translateX(4px);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .contact-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .contact-icon {
          font-size: 1.5rem;
        }

        .contact-label {
          font-size: 0.85rem;
          color: rgba(212, 175, 55, 0.7);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .contact-value {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          word-break: break-word;
        }

        .contact-value a {
          color: rgba(212, 175, 55, 0.9);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-value a:hover {
          color: var(--gold-bright, #f1d27a);
          text-decoration: underline;
        }

        .form-section {
          padding: 2rem;
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
        }

        .form-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 6px;
          color: white;
          font-size: 0.9rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(212, 175, 55, 0.6);
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-button {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.05) 100%);
          border: 1.5px solid rgba(212, 175, 55, 0.4);
          border-radius: 6px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          margin-top: 0.5rem;
        }

        .form-button:hover {
          border-color: rgba(212, 175, 55, 0.8);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(212, 175, 55, 0.1) 100%);
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.25);
        }

        .success-message {
          padding: 1rem;
          background: rgba(76, 175, 80, 0.15);
          border: 1px solid rgba(76, 175, 80, 0.3);
          border-radius: 6px;
          color: rgba(76, 175, 80, 0.9);
          text-align: center;
          font-weight: 500;
          margin-bottom: 1.5rem;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <div className="contact-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Reach out to Sri Nava Industries for inquiries, collaborations, or support.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="contact-content">
        {/* Left: Contact Information */}
        <motion.div
          className="info-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="company-info">
            <div className="company-name">Sri Nava Industries</div>
            <div className="company-subtitle">Fabrication & Engineering Excellence</div>
          </div>

          <div className="contact-info-grid">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="contact-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <div className="contact-card-header">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-label">{item.label}</div>
                </div>
                <div className="contact-value">
                  {item.link ? (
                    <a href={item.link} target={item.label === "Website" ? "_blank" : undefined} rel="noopener noreferrer">
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
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="form-title">Send Us an Enquiry</h2>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91 xxxxx xxxxx"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>

            <button type="submit" className="form-button">
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
