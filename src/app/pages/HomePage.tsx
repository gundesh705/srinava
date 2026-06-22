import { useNavigate } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import bgVideo from "../../imports/make_this_animated__like_a_ovi.mp4";

const EASE = [0.16, 1, 0.3, 1] as const;

const headlineLines = ["Building Excellence", "in Steel Since 1985"];

export function HomePage() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  // Pre-compute random spark trajectories once
  const sparks = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        delay: 0.6 + Math.random() * 1.2,
        x: (Math.random() - 0.5) * 120,
        y: -(40 + Math.random() * 90),
        size: 1 + Math.random() * 2.5,
        duration: 0.5 + Math.random() * 0.6,
      })),
    [],
  );

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layered cinematic grading */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_30%_40%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      {/* Fine grain / scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-7"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <span className="block w-10 h-px bg-gradient-to-r from-amber-400 to-transparent" />
          <span
            className="uppercase text-amber-400/90"
            style={{ fontSize: "0.7rem", letterSpacing: "0.32em", fontWeight: 600 }}
          >
            Precision Steel Fabrication
          </span>
        </motion.div>

        {/* Laser-cut headline */}
        <h1
          className="leading-none mb-8 select-none"
          style={{
            fontSize: "clamp(2.75rem, 6vw, 5.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.04,
            color: "#fff",
          }}
        >
          {headlineLines.map((line, lineIndex) => (
            <span key={line} className="relative block overflow-hidden py-[0.08em]">
              {/* The text, masked from below as the "cut" passes */}
              <motion.span
                className="relative block"
                initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.45 + lineIndex * 0.18,
                  ease: EASE,
                }}
              >
                {line}
              </motion.span>

              {/* Laser beam sweeping across the line */}
              {!reduceMotion && (
                <motion.span
                  className="absolute top-0 bottom-0 w-[3px] z-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #ff5e1a 15%, #ffd27a 50%, #ff5e1a 85%, transparent)",
                    boxShadow:
                      "0 0 14px 3px rgba(255,94,26,0.9), 0 0 40px 10px rgba(255,94,26,0.45)",
                  }}
                  initial={{ left: "-2%", opacity: 0 }}
                  animate={{
                    left: ["-2%", "102%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.45 + lineIndex * 0.18,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.9, 1],
                  }}
                >
                  {/* Molten glow point at the cut */}
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: 14,
                      height: 14,
                      background:
                        "radial-gradient(circle, #fff 0%, #ffd27a 40%, rgba(255,94,26,0) 70%)",
                    }}
                  />
                </motion.span>
              )}
            </span>
          ))}
        </h1>

        {/* Spark particle field (anchored under the headline) */}
        {!reduceMotion && (
          <div className="absolute top-[42%] left-8 md:left-16 lg:left-24 w-1 h-1 pointer-events-none">
            {sparks.map((s) => (
              <motion.span
                key={s.id}
                className="absolute rounded-full"
                style={{
                  width: s.size,
                  height: s.size,
                  background: "linear-gradient(#fff, #ff8a3d)",
                  boxShadow: "0 0 6px 1px rgba(255,138,61,0.8)",
                }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: [0, s.x],
                  y: [0, s.y * 0.4, s.y],
                }}
                transition={{
                  duration: s.duration,
                  delay: s.delay,
                  repeat: Infinity,
                  repeatDelay: 1.6 + Math.random(),
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Subheading */}
        <motion.p
          className="text-white/65 mb-10 max-w-lg"
          style={{ fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 400,color:"rgb(231, 168, 1)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        >
          From custom fabrication to advanced laser cutting, we transform ideas
          into reliable industrial solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        >
          <button
            onClick={() => navigate("/work")}
            className="group relative px-8 py-3.5 bg-white text-black rounded-full overflow-hidden transition-transform duration-300 hover:scale-[1.04] cursor-pointer"
            style={{ fontSize: "0.85rem", letterSpacing: "0.05em", fontWeight: 600 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Explore Work
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            className="group flex items-center gap-3 px-7 py-3.5 border border-white/25 text-white/80 rounded-full hover:border-white/60 hover:text-white transition-all duration-300 hover:scale-[1.04] cursor-pointer"
            style={{ fontSize: "0.85rem", letterSpacing: "0.05em", fontWeight: 500 }}
          >
            <span
              className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center group-hover:border-amber-400 group-hover:text-amber-400 transition-colors"
              style={{ fontSize: "0.55rem" }}
            >
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
        <span
          className="text-white/40 uppercase"
          style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Stat bar */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden sm:flex items-end gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        {[
          { value: "200+", label: "Projects" },
          { value: "12", label: "Awards" },
          { value: "40yr", label: "Experience" },
        ].map(({ value, label }) => (
          <div key={label} className="text-right">
            <div
              className="text-white"
              style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}
            >
              {value}
            </div>
            <div
              className="text-white/40 uppercase mt-1"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
