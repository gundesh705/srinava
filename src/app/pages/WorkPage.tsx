import { useNavigate } from "react-router";
import { motion } from "motion/react";
import headerImg from "../../imports/wmremove-transformed.png";
import img1 from "../../imports/WhatsApp_Image_2026-06-21_at_10.21.12.jpeg";
import img2 from "../../imports/sgsfbr.jpeg";
import img3 from "../../imports/WhatsApp_Image_2026-06-21_at_10.19.35.jpeg";
import img4 from "../../imports/WhatsApp_Image_2026-06-21_at_10.19.35__2_.jpeg";

const machines = [
  {
    name: "Laser Cutting",
    icon: "◈",
    desc: "Precision cuts up to 25mm thick steel with ±0.1mm tolerance.",
    img: img1,
    more: "Our 3 kW CNC Fiber Laser Cutting Machine delivers high-speed, high-precision sheet metal processing using premium components from RayTools, HIWIN, THK, SMC, Schneider Electric, and ABB. With positioning accuracy of ±0.05 mm and the capability to cut mild steel up to 20 mm thickness, the machine ensures superior quality, repeatability, and productivity for industrial fabrication requirements.",
  },
  {
    name: "Machinaries",
    icon: "⌒",
    desc: "CNC press brake for complex profiles and high-volume bends.",
  },
  {
    name: "Crane",
    icon: "⊤",
    desc: "20-tonne overhead crane for safe heavy-load handling.",
  },
  {
    name: "Welding",
    icon: "⚡",
    desc: "Advanced welding systems for structural steel and precision joints.",
  },
];

const facilities = [];

export function WorkPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* ── Hero Header ──────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
        <img
          src={headerImg}
          alt="Our facilities"
          className="w-full h-full object-cover"
        />
        {/* overlays */}
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
          <div className="flex items-center gap-8">
            {["Work", "Facilities", "Team", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === "Facilities") navigate("/facilities");
                  else if (item === "Team") navigate("/team");
                }}
                className={`bg-transparent border-none cursor-pointer transition-colors duration-200 ${item === "Work" ? "text-white" : "text-white/40 hover:text-white"}`}
                style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.nav>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-16 lg:px-24 z-10">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200 bg-transparent border-none cursor-pointer mb-8 w-fit"
            style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ← Back to Home
          </motion.button>

          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="w-8 h-px bg-white/40" />
            <span className="text-white/50 uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              Our Facilities
            </span>
          </motion.div>

          <motion.h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Built to Perform.<br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Ready for Any Scale.</span>
          </motion.h1>

          <motion.p
            className="text-white/40 max-w-lg"
            style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            From precision cutting to heavy lifting — our facility is equipped with
            industrial-grade machinery to handle every stage of fabrication in-house.
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* ── Machine Boxes ─────────────────────────────────────── */}
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
              Equipment & Technology
            </span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Our Machinery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {machines.map((m, i) => (
            <motion.div
              key={m.name}
              className="group relative border border-white/15 bg-white/5 p-8 hover:border-white/30 hover:bg-white/8 transition-all duration-300 cursor-pointer overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => navigate(`/work/machinery/${m.name}`)}
              style={{ minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <div
                className="text-white/30 mb-6 group-hover:text-white/50 transition-colors duration-300"
                style={{ fontSize: "2.5rem" }}
              >
                {m.icon}
              </div>

              <h3
                className="text-white"
                style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.3 }}
              >
                {m.name}
              </h3>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Facilities Grid ───────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-20">
        <motion.div
          className="mb-12 border-t border-white/8 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-white/30" />
            <span className="text-white/35 uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.25em" }}>
              Spaces
            </span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Where Great Work Gets Made
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white/70 uppercase"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
                >
                  {f.tag}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-white mb-3" style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {f.title}
                </h3>
                <p className="text-white/45" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {f.desc}
                </p>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10 mt-4">
                        <p className="text-white/35" style={{ fontSize: "0.85rem", lineHeight: 1.75 }}>
                          {f.more}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="mt-5 flex items-center gap-2 transition-colors duration-200 group/btn bg-transparent border-none cursor-pointer"
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    color: expanded === i ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                  }}
                >
                  <span>{expanded === i ? "Show less" : "Learn more"}</span>
                  <motion.span
                    animate={{ rotate: expanded === i ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
