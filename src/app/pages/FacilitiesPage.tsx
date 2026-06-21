import { useNavigate } from "react-router";
import { motion } from "motion/react";
import headerImg from "../../imports/wmremove-transformed.png";

const facilities = [
  {
    name: "Production Studio",
    tag: "Creative Hub",
    desc: "State-of-the-art production facility equipped with professional lighting, green screens, and soundproofing for high-quality video and photo production.",
  },
  {
    name: "Innovation Lab",
    tag: "R&D Space",
    desc: "Dedicated research and development space for testing new technologies, materials, and innovative fabrication techniques.",
  },
  {
    name: "Metal Fabrication Shop",
    tag: "Manufacturing",
    desc: "Fully equipped metalworking facility with CNC machines, welding stations, and precision cutting equipment.",
  },
  {
    name: "Assembly Area",
    tag: "Operations",
    desc: "Large-scale assembly and quality control center for completing complex projects and final inspections.",
  },
];

export function FacilitiesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Header */}
      <div className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
        <img
          src={headerImg}
          alt="Our facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Nav */}
        <motion.nav
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={() => navigate("/")}
            className="text-white uppercase bg-transparent border-none cursor-pointer"
            style={{ fontSize: "0.85rem", letterSpacing: "0.2em" }}
          >
            OVISION
          </button>
          <button
            onClick={() => navigate("/work")}
            className="text-white/40 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
            style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
          >
            ← Back
          </button>
        </motion.nav>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-16 lg:px-24 z-10">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="w-8 h-px bg-white/40" />
            <span className="text-white/50 uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              Our World-Class Infrastructure
            </span>
          </motion.div>

          <motion.h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            State-of-the-Art Facilities
          </motion.h1>

          <motion.p
            className="text-white/40 max-w-lg"
            style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Comprehensive facilities designed for precision manufacturing, innovation, and creative excellence.
          </motion.p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-white/40 uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.25em", fontWeight: 500 }}>
              Our Spaces
            </span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Facilities Overview
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={f.name}
              className="group relative border border-white/15 bg-white/5 p-8 hover:border-white/30 hover:bg-white/8 transition-all duration-300 rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-white"
                  style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {f.name}
                </h3>
                <span
                  className="text-white/30 text-xs px-3 py-1 border border-white/20 rounded-full"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                >
                  {f.tag}
                </span>
              </div>

              <p className="text-white/45" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                {f.desc}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <motion.div
          className="border-t border-white/10 pt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/60 mb-2" style={{ fontSize: "1.1rem", fontWeight: 500 }}>
            Ready to experience our facilities?
          </p>
          <p className="text-white/30 mb-8" style={{ fontSize: "0.95rem" }}>
            Schedule a tour or discuss your project requirements with our team.
          </p>
          <button
            className="px-8 py-3.5 border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer bg-transparent"
            style={{ fontSize: "0.8rem", letterSpacing: "0.06em" }}
          >
            Schedule a Tour
          </button>
        </motion.div>
      </div>
    </div>
  );
}
