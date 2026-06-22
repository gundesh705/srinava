import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import headerImg from "../../imports/wmremove-transformed.png";
import img1 from "../../imports/WhatsApp_Image_2026-06-21_at_10.21.12.jpeg";

const machines = [
  {
    name: "Laser Cutting",
    icon: "◈",
    desc: "Precision cuts up to 25mm thick steel with +/-0.1mm tolerance.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2Ffcc9ccca098544a78f65ea68b4c8e97c?format=webp&width=800&height=1200",
    more: "Sri Nava Industries is equipped with an industrial Plasma Cutting Machine capable of cutting stainless steel plates up to 25 mm thickness. The machine provides fast, accurate, and efficient cutting for heavy fabrication projects, structural components, tanks, vessels, and custom metal parts. This capability enables us to process thick materials while maintaining productivity and quality standards",
  },
  {
    name: "Machinaries",
    icon: "⌒",
    desc: "Hydraulic press brake, power press, and bandsaw cutting systems.",
    subEquipment: [
      {
        name: "Hydraulic Press Brake",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F3eb2fd70be9041b9acf5ec5641c4db7f?format=webp&width=800&height=1200",
        desc: "Our CNC Hydraulic Press Brake is designed for high-precision sheet metal bending and forming operations. With the capability to bend mild steel sheets up to 8 mm thickness, the machine delivers exceptional accuracy, repeatability, and productivity.",
      },
      {
        name: "Power Press",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F2cb96f4157784cdb86b4857639ab0373?format=webp&width=800&height=1200",
        desc: "Our Mechanical Power Press is designed for efficient punching, blanking, piercing, and forming operations in sheet metal fabrication.",
      },
      {
        name: "Bandsaw Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F64365b5c7ba04d77b95a9d95d2631353?format=webp&width=800&height=1200",
        desc: "Our Horizontal Metal Cutting Bandsaw Machine provides precise and efficient cutting of pipes, tubes, solid bars, and structural steel sections.",
      },
      {
        name: "Flange Rolling Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F31d50fec31c44e6b9e768f8c0f1688e5?format=webp&width=800&height=1200",
        desc: "Our custom-built Flange Rolling Machine is engineered for precise rolling of flat bars up to 100 mm width into circular rings and flanges.",
      },
      {
        name: "3-Roller Plate Rolling Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F330c9784799d4320b7ad9359b95c5a7d?format=webp&width=800&height=1200",
        desc: "Our custom-built 3-Roller Plate Rolling Machine is designed for precision rolling of metal plates up to 16 mm thickness and 1500 mm width.",
      },
    ],
  },
  {
    name: "Crane",
    icon: "⊤",
    desc: "20-tonne overhead crane for safe heavy-load handling.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F6241501ca2034cd9a5ce55e8a872091b?format=webp&width=800&height=1200",
    more: "Sri Nava Industries is equipped with a 2 Ton Material Handling Crane capable of transporting raw materials, fabricated assemblies, and finished products throughout the facility.",
  },
  {
    name: "Welding",
    icon: "⚡",
    desc: "Advanced welding systems for structural steel and precision joints.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2Fac830ad0394445f3ad6a5d55d6bcd83d?format=webp&width=800&height=1200",
    more: "Sri Nava Industries utilizes the ESAB AUTO K 400 CO₂/MIG Welding Machine for high-quality fabrication and assembly operations. With a welding output of up to 400 Amps and an automatic wire feed system, the machine delivers strong, consistent welds with excellent productivity. It is ideally suited for manufacturing structural assemblies, tanks, machine frames, sheet metal components, and custom fabrication projects.",
  },
];

export function WorkPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="work-page-wrapper">
      <style>{`
        .work-page-wrapper {
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

        .work-inner { position: relative; z-index: 2; }

        .work-hero {
          position: relative;
          height: 50vh;
          overflow: hidden;
        }

        .work-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .work-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }

        .work-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
          z-index: 10;
        }

        .work-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--crimson-bright);
          font-weight: 700;
          margin-bottom: 1.4rem;
          width: fit-content;
        }

        .work-eyebrow::before {
          content: "";
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, var(--crimson-bright), transparent);
        }

        .work-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 1.4rem;
          color: #fff;
        }

        .work-subtitle {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: var(--text-dim);
          line-height: 1.75;
          max-width: 640px;
        }

        .work-section {
          padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem);
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-eyebrow {
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

        .section-eyebrow::before {
          content: "";
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, var(--crimson-bright), transparent);
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #f2f2f2 42%, var(--crimson-bright) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .machinery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-w-4xl;
        }

        .machinery-card {
          position: relative;
          padding: 2rem;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(225,29,46,0.08) 0%, rgba(13,14,17,0.65) 55%), rgba(13,14,17,0.88);
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
        }

        .machinery-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--crimson-bright), transparent);
        }

        .machinery-card:hover {
          border-color: var(--crimson-soft);
          background: linear-gradient(135deg, rgba(225,29,46,0.14) 0%, rgba(13,14,17,0.65) 55%), rgba(13,14,17,0.92);
          transform: translateY(-6px);
          box-shadow: 0 16px 38px -10px rgba(225,29,46,0.45);
        }

        .machinery-icon {
          font-size: 2.5rem;
          color: var(--crimson);
          margin-bottom: 1rem;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .machinery-card:hover .machinery-icon {
          color: var(--crimson-bright);
          transform: scale(1.2) rotate(15deg);
        }

        .machinery-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .machinery-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--crimson-bright), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .machinery-card:hover .machinery-bottom-line {
          opacity: 1;
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

      <div className="work-inner">
        {/* Hero Section */}
        <motion.div
          className="work-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={headerImg} alt="Our facilities" className="work-hero-image" />
          <div className="work-hero-overlay" />
          <div className="work-hero-content">
            <motion.span
              className="work-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Facilities
            </motion.span>
            <motion.h1
              className="work-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Built to Perform.
              <br />
              <span style={{ color: "rgba(255,255,255,0.6)" }}>Ready for Any Scale.</span>
            </motion.h1>
            <motion.p
              className="work-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              From precision cutting to heavy lifting - our facility is equipped with industrial-grade machinery to handle every stage of fabrication in-house.
            </motion.p>
          </div>
        </motion.div>

        {/* Machinery Section */}
        <div className="work-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Equipment & Technology</span>
            <h2 className="section-title">Our Machinery</h2>
          </motion.div>

          <div className="machinery-grid">
            {machines.map((m, i) => (
              <motion.div
                key={m.name}
                className="machinery-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/work/machinery/${encodeURIComponent(m.name)}`)}
              >
                <motion.div
                  className="machinery-icon"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {m.icon}
                </motion.div>
                <h3 className="machinery-name">{m.name}</h3>
                <div className="machinery-bottom-line" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
