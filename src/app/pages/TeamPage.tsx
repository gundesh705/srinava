import { useNavigate } from "react-router";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "K. Bhuvanendran",
    role: "Founder",
    expertise: "Strategic Vision & Leadership",
    bio: "Visionary founder who established Sri Nava Industries in 1985, building a legacy of excellence in fabrication and engineering.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8d59509cf87341108edce9d018bc2251%2F00069108c25d40428305c9e6076ac7a4?format=webp&width=800&height=1200",
  },
  {
    name: "Vijayalakshmi Bhuvanendran",
    role: "Managing Director & Finance",
    expertise: "Business Strategy & Finance",
    bio: "Leads overall business operations and financial management, ensuring sustainable growth and profitability.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8d59509cf87341108edce9d018bc2251%2F06964036adde469bbf95cc6e2403dd1b?format=webp&width=800&height=1200",
  },
  {
    name: "Kathiravan B",
    role: "Operations Manager & Administration",
    expertise: "Operations & Administration",
    bio: "Oversees daily operations, resource management, and administrative functions for seamless business delivery.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fc150baa7acad4741b119baabb752da24?format=webp&width=800&height=1200",
  },
  {
    name: "Karthigeyan B",
    role: "Design Engineer & CAD Specialist",
    expertise: "CAD Design & Engineering",
    bio: "Creates precision designs and technical specifications using advanced CAD tools for complex fabrication projects.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Faeabf3660714467494ceeb8be96b8f10?format=webp&width=800&height=1200",
  },
  {
    name: "Kamalesh S",
    role: "Accounts & Information Technology",
    expertise: "Finance & IT Systems",
    bio: "Manages financial operations, IT infrastructure, and systems to support business growth and data security.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fee07453fcebd435c9d7aa1bcd637d990?format=webp&width=800&height=1200",
  },
];

export function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="team-page-wrapper">
      <style>{`
        .team-page-wrapper {
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
          background: radial-gradient(140% 90% at 50% -10%, #141416 0%, var(--steel-950) 60%);
          color: var(--text);
          padding-top: 5rem;
          overflow: hidden;
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
        }

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

        .team-inner { position: relative; z-index: 2; }

        .team-header {
          padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 2.5rem);
          text-align: center;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
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

        .team-title {
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

        .team-subtitle {
          font-size: clamp(1rem, 2vw, 1.12rem);
          color: var(--text-dim);
          line-height: 1.75;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        .team-grid-wrapper {
          padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem);
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }

        .team-card {
          position: relative;
          padding: 1.85rem 2rem;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(225,29,46,0.08) 0%, rgba(13,14,17,0.65) 55%), rgba(13,14,17,0.88);
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .team-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(225,29,46,0.16), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .team-card:hover {
          border-color: var(--crimson-soft);
          background: linear-gradient(135deg, rgba(225,29,46,0.14) 0%, rgba(13,14,17,0.65) 55%), rgba(13,14,17,0.92);
          transform: translateY(-4px);
          box-shadow: 0 16px 38px -10px rgba(225,29,46,0.45);
        }

        .team-card:hover::after { opacity: 1; }

        .team-card-content h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }

        .team-card-role {
          font-size: 0.9rem;
          color: var(--crimson-bright);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .team-card-expertise {
          display: inline-block;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-faint);
          font-weight: 600;
          padding: 0.5rem 0.8rem;
          border: 1px solid var(--crimson-faint);
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(225,29,46,0.12), rgba(225,29,46,0.04));
          margin-bottom: 0.8rem;
        }

        .team-card-bio {
          font-size: 0.88rem;
          color: var(--text-dim);
          line-height: 1.6;
        }

        .team-card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--crimson-bright), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .team-card-line { opacity: 1; }

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

      <div className="team-inner">
        {/* Header */}
        <div className="team-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">Our Team</span>
            <h1 className="team-title">Talented Professionals</h1>
            <p className="team-subtitle">
              Our team comprises industry veterans and skilled craftspeople dedicated to delivering excellence in every project. With combined experience spanning decades, we bring innovation and precision to every challenge.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="team-grid-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="mb-4 flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-red-500/30 to-red-500/10 border border-red-500/30 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-red-500/50">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="team-card-content text-center">
                  <h3>{member.name}</h3>
                  <div className="team-card-role">{member.role}</div>
                  <div className="flex justify-center mb-3">
                    <span className="team-card-expertise">{member.expertise}</span>
                  </div>
                  <p className="team-card-bio">{member.bio}</p>
                </div>

                <div className="team-card-line" />
              </motion.div>
            ))}

            {/* Professionals Count Card */}
            <motion.div
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: teamMembers.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="text-5xl mb-4 text-center"
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                👥
              </motion.div>
              <div className="team-card-content text-center">
                <h3>9+ Professionals</h3>
                <div className="team-card-role">Skilled Specialists</div>
                <div className="flex justify-center mb-3">
                  <span className="team-card-expertise">Expanding Team</span>
                </div>
                <p className="team-card-bio">Dedicated experts across manufacturing, engineering, and operations working together to deliver excellence.</p>
              </div>
              <div className="team-card-line" />
            </motion.div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="team-grid-wrapper">
        </div>
      </div>
    </div>
  );
}
