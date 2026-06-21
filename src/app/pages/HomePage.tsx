import { useNavigate } from "react-router";
import { motion } from "motion/react";
import bgVideo from "../../imports/make_this_animated__like_a_ovi.mp4";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-5xl">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="w-8 h-px bg-white/60" />
          <span
            className="text-white/60 uppercase"
            style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}
          >
            Visual Experience
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="text-white leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafted for
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="leading-none mb-8"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            the Bold.
          </motion.h1>
        </div>

        <motion.p
          className="text-white/55 mb-10 max-w-md"
          style={{ fontSize: "1rem", lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
        >
          We build immersive digital experiences that push the boundaries of
          what's possible. Where vision meets execution.
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: "easeOut" }}
        >
          <button
            onClick={() => navigate("/work")}
            className="group relative px-8 py-3.5 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}
          >
            <span className="relative z-10">Explore Work</span>
            <div className="absolute inset-0 bg-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            className="flex items-center gap-2.5 px-8 py-3.5 border border-white/25 text-white/80 rounded-full hover:border-white/60 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}
          >
            <span className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center" style={{ fontSize: "0.6rem" }}>
              ▶
            </span>
            Watch Reel
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-white/40 uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Stat bar */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex items-end gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        {[{ value: "200+", label: "Projects" }, { value: "12", label: "Awards" }, { value: "8yr", label: "Experience" }].map(({ value, label }) => (
          <div key={label} className="text-right">
            <div className="text-white" style={{ fontSize: "1.4rem", fontWeight: 600, lineHeight: 1 }}>{value}</div>
            <div className="text-white/40 uppercase mt-1" style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}>{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
