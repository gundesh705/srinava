import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const cinemaStyles = `
:root {
  --steel-dark: #0a0d12;
  --steel-mid: #161b22;
  --steel-light: #2a313b;
  --gold: #d4af37;
  --gold-bright: #f1d27a;
  --silver: #c8ccd2;
  --accent-red: #c81e1e;
  --text-soft: rgba(255, 255, 255, 0.65);
  --scene-dur: 0.9s;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--steel-dark);
  color: #fff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ============ HERO SHELL ============ */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.06), transparent 55%),
    radial-gradient(ellipse at 75% 80%, rgba(200,30,30,0.07), transparent 55%),
    linear-gradient(160deg, #0a0d12 0%, #11161d 45%, #0a0d12 100%);
}

/* Steel texture overlay */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px);
  opacity: 0.6;
  pointer-events: none;
}

/* Moving light streaks */
.light-streak {
  position: absolute;
  top: 0; left: -40%;
  width: 60%; height: 100%;
  background: linear-gradient(105deg, transparent, rgba(212,175,55,0.10), rgba(255,255,255,0.06), transparent);
  transform: skewX(-18deg);
  animation: sweep 9s linear infinite;
  pointer-events: none;
}
.light-streak.delay { animation-delay: 4.5s; opacity: 0.6; }
@keyframes sweep {
  0% { left: -50%; }
  100% { left: 130%; }
}

/* ============ SPARKS / PARTICLES ============ */
.particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.spark {
  position: absolute;
  width: 2px; height: 2px;
  border-radius: 50%;
  background: var(--gold-bright);
  box-shadow: 0 0 6px 1px rgba(241,210,122,0.8);
  bottom: -10px;
  animation: rise linear infinite;
  opacity: 0;
}
@keyframes rise {
  0%   { transform: translateY(0) scale(1);   opacity: 0; }
  10%  { opacity: 1; }
  80%  { opacity: 0.8; }
  100% { transform: translateY(-105vh) scale(0.2); opacity: 0; }
}

/* ============ SCENES ============ */
.scene {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
}
.scene.active { opacity: 1; pointer-events: auto; }

/* shared metallic headline */
.metallic {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.05;

  background: linear-gradient(
      110deg,
      #ff0000 0%,
      #ff3333 30%,
      #ffffff 50%,
      #ff3333 70%,
      #cc0000 100%
  );

  background-size: 250% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow:
    0 0 10px rgba(255,255,255,0.3),
    0 0 20px rgba(255,0,0,0.3);    -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: none;
}

.subtitle {
  margin-top: 18px;
  font-size: clamp(0.85rem, 1.8vw, 1.05rem);
  color: var(--text-soft);
  font-weight: 400;
  letter-spacing: 0.4px;
  max-width: 560px;
}

/* reveal helpers */
@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
@keyframes shine {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* ---- Scene 1 ---- */
#scene1 .big {
  font-size: clamp(2.2rem, 8vw, 6rem);
}
.scene.active .reveal-1 { animation: revealUp var(--scene-dur) cubic-bezier(.16,1,.3,1) both; }
.scene.active .reveal-2 { animation: revealUp var(--scene-dur) cubic-bezier(.16,1,.3,1) 0.25s both; }

/* ---- Scene 2 ---- */
#scene2 .counter {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: clamp(2.6rem, 9vw, 7rem);

  background: linear-gradient(
      110deg,
      #ff0000 0%,
      #ff3333 30%,
      #ffffff 50%,
      #ff3333 70%,
      #cc0000 100%
  );

  background-size: 250% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
#scene2 .label {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1rem, 3vw, 1.6rem);
  letter-spacing: 4px;
  color: var(--silver);
  margin-top: 4px;
}
.scene.active .zoom-in { animation: zoomFrame var(--scene-dur) cubic-bezier(.16,1,.3,1) both; }
@keyframes zoomFrame {
  from { opacity: 0; transform: scale(1.4); filter: blur(10px); }
  to   { opacity: 1; transform: scale(1);   filter: blur(0); }
}

/* ---- Scene 3 ---- */
.values { display: flex; gap: 0; flex-wrap: wrap; justify-content: center; align-items: center; }
.value-word {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: clamp(1.4rem, 5vw, 3rem);
  letter-spacing: 3px;
  padding: 0 28px;
  position: relative;
background: linear-gradient(
      110deg,
      #ff0000 0%,
      #ff3333 30%,
      #ffffff 50%,
      #ff3333 70%,
      #cc0000 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;    background-size: 250% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  opacity: 0;
}
.value-word + .value-word::before {
  content: ""; position: absolute; left: 0; top: 18%; height: 64%;
  width: 1px; background: linear-gradient(var(--gold), transparent);
  box-shadow: 0 0 8px var(--gold);
}
.scene.active .v1 { animation: revealUp 0.7s cubic-bezier(.16,1,.3,1) 0.1s both, shine 3s linear 0.9s infinite; }
.scene.active .v2 { animation: revealUp 0.7s cubic-bezier(.16,1,.3,1) 0.55s both, shine 3s linear 1.4s infinite; }
.scene.active .v3 { animation: revealUp 0.7s cubic-bezier(.16,1,.3,1) 1.0s both, shine 3s linear 1.9s infinite; }

/* spark sweep transition */
.spark-sweep {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; z-index: 30;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), rgba(255,255,255,0.8), rgba(200,30,30,0.4), transparent);
  transform: translateX(-100%);
}
.spark-sweep.run { animation: sparkSweep 0.9s ease-in-out both; }
@keyframes sparkSweep {
  0%   { transform: translateX(-100%); opacity: 0; }
  40%  { opacity: 1; }
  100% { transform: translateX(120%); opacity: 0; }
}

/* ---- Scene 4 : Brand ---- */
#scene4 { background: radial-gradient(ellipse at center, rgba(20,24,30,0.9), rgba(6,8,11,0.96)); }
.brand-logo {
  width: clamp(180px, 25vw, 300px);
  height: auto;
  animation: logoShine 3s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255,0,0,0.3));
}
.logo-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.logo-wrapper::after {
  content: "";
  position: absolute;
  top: -20%;
  left: -100%;
  width: 40%;
  height: 140%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.8),
      transparent
  );
  transform: skewX(-25deg);
  animation: shineSweep 3s infinite;
}

@keyframes shineSweep {
  0% { left: -100%; }
  100% { left: 200%; }
}

@keyframes logoShine {
  0% {
    filter:
      drop-shadow(0 0 5px rgba(255,0,0,0.2))
      brightness(1);
  }

  50% {
    filter:
      drop-shadow(0 0 20px rgba(255,0,0,0.8))
      drop-shadow(0 0 40px rgba(255,255,255,0.4))
      brightness(1.3);
  }

  100% {
    filter:
      drop-shadow(0 0 5px rgba(255,0,0,0.2))
      brightness(1);
  }
}
.brand-name {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  letter-spacing: 6px;
  font-size: clamp(1.6rem, 6vw, 3.4rem);
  margin-top: 22px;
}
.brand-sub {
  margin-top: 14px;
  font-size: clamp(0.75rem, 2.4vw, 1rem);
  letter-spacing: 2px;
  color: var(--text-soft);
}
.scene.active .brand-logo { animation: logoEmerge 1.1s cubic-bezier(.16,1,.3,1) both; }
@keyframes logoEmerge {
  from { opacity: 0; transform: scale(0.5) rotate(-8deg); filter: blur(14px); }
  to   { opacity: 1; transform: scale(1) rotate(0); filter: blur(0); }
}
.scene.active .brand-name { animation: revealUp 0.9s cubic-bezier(.16,1,.3,1) 0.5s both; }
.scene.active .brand-sub  { animation: revealUp 0.9s cubic-bezier(.16,1,.3,1) 0.75s both; }
.scene.active .cta        { animation: fadeIn 0.9s ease 1.1s both; }

/* glassmorphism CTA */
.cta {
  margin-top: 34px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 34px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(0.85rem, 2vw, 1rem);
  letter-spacing: 1px;
  color: #fff;
  cursor: pointer;
  border-radius: 14px;
  border: 1px solid rgba(212,175,55,0.4);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.cta:hover {
  transform: translateY(-3px);
  border-color: var(--gold-bright);
  box-shadow: 0 12px 40px rgba(212,175,55,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
}
.cta svg { transition: transform 0.3s ease; }
.cta:hover svg { transform: translateX(4px); }

/* skip button */
.skip {
  position: absolute; bottom: 26px; right: 28px; z-index: 40;
  font-size: 0.78rem; letter-spacing: 1px; color: var(--text-soft);
  background: transparent; border: 1px solid rgba(255,255,255,0.18);
  padding: 7px 16px; border-radius: 20px; cursor: pointer;
  transition: color 0.25s, border-color 0.25s;
}
.skip:hover { color: #fff; border-color: var(--gold); }
.skip.hide { opacity: 0; pointer-events: none; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .scene { opacity: 0; }
  #scene4 { opacity: 1; pointer-events: auto; }
}
`;

export function AboutPage() {
  const navigate = useNavigate();
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    (function () {
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* ---- generate floating sparks ---- */
      var pc = document.getElementById("particles");
      if (pc) {
        for (var i = 0; i < 28; i++) {
          var s = document.createElement("div");
          s.className = "spark";
          s.style.left = Math.random() * 100 + "%";
          s.style.animationDuration = (5 + Math.random() * 7) + "s";
          s.style.animationDelay = (Math.random() * 8) + "s";
          var scale = 0.6 + Math.random() * 1.8;
          s.style.transform = "scale(" + scale + ")";
          pc.appendChild(s);
        }
      }

      var scenes = ["scene1", "scene2", "scene3", "scene4"];
      var sweep = document.getElementById("sweep");
      var skip = document.getElementById("skip");
      var current = -1;
      var timers: NodeJS.Timeout[] = [];

      function clearAll() {
        timers.forEach(clearTimeout);
        timers = [];
      }

      function show(idx: number) {
        scenes.forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.classList.remove("active");
        });
        var el = document.getElementById(scenes[idx]);
        if (el) el.classList.add("active");
        current = idx;
      }

      function runSweep() {
        if (sweep) {
          sweep.classList.remove("run");
          void sweep.offsetWidth; // reflow to restart
          sweep.classList.add("run");
        }
      }

      /* ---- counter for scene 2 ---- */
      function animateCounter() {
        var node = document.getElementById("count");
        if (!node) return;
        var target = 10000, start = 0, dur = 1800, t0: number | null = null;
        function step(ts: number) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          node!.textContent = Math.floor(start + (target - start) * eased).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else node!.textContent = "10,000";
        }
        requestAnimationFrame(step);
      }

      function finish() {
        clearAll();
        show(3);
        if (skip) skip.classList.add("hide");
        setIntroComplete(true);
      }

      function play() {
        if (reduced) {
          finish();
          return;
        }
        // Scene 1
        show(0);
        // Scene 2 after ~3s
        timers.push(setTimeout(function () { runSweep(); }, 2800));
        timers.push(setTimeout(function () { show(1); animateCounter(); }, 3000));
        // Scene 3 after ~3s
        timers.push(setTimeout(function () { runSweep(); }, 5900));
        timers.push(setTimeout(function () { show(2); }, 6100));
        // Scene 4 (permanent) after ~3.2s
        timers.push(setTimeout(function () { runSweep(); }, 9200));
        timers.push(setTimeout(function () { finish(); }, 9400));
      }

      if (skip) {
        skip.addEventListener("click", finish);
      }
      play();
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{cinemaStyles}</style>

      {!introComplete && (
        <section className="hero" id="hero" aria-label="Sri Nava Industries cinematic intro">
          <div className="light-streak"></div>
          <div className="light-streak delay"></div>
          <div className="particles" id="particles" aria-hidden="true"></div>

          {/* Scene 1 — Experience */}
          <div className="scene" id="scene1">
            <h1 className="metallic big reveal-1">41 YEARS OF EXPERIENCE</h1>
            <p className="subtitle reveal-2">Delivering excellence in fabrication and engineering since 1985.</p>
          </div>

          {/* Scene 2 — Projects */}
          <div className="scene" id="scene2">
            <div className="zoom-in">
              <div className="counter"><span id="count">0</span>+</div>
              <div className="label">PROJECTS COMPLETED</div>
              <p className="subtitle">Trusted by industries across multiple sectors.</p>
            </div>
          </div>

          {/* Scene 3 — Core Values */}
          <div className="scene" id="scene3">
            <div className="values">
              <span className="value-word v1">PRECISION</span>
              <span className="value-word v2">QUALITY</span>
              <span className="value-word v3">RELIABILITY</span>
            </div>
          </div>

          {/* Scene 4 — Brand Reveal */}
          <div className="scene" id="scene4">
            <div className="logo-wrapper">
              <h2 className="brand-name metallic">SRI NAVA INDUSTRIES</h2>
            </div>
            <p className="brand-sub">WELDING • FABRICATION • LASER CUTTING • STRUCTURAL WORKS</p>
          </div>

          <div className="spark-sweep" id="sweep"></div>
          <button className="skip" id="skip">SKIP INTRO</button>
        </section>
      )}

      {introComplete && (
        <div className="px-8 md:px-16 lg:px-24 py-24">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200 bg-transparent border-none cursor-pointer mb-12 w-fit"
            style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ← Back to Home
          </motion.button>

          {/* Hero Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-white mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              About Sri Nava Industries
            </h1>
          </motion.div>

          {/* Company History */}
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/60 mb-6" style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Sri Nava Industries was established in 1985 by Mr. K. Bhuvanendran with a vision to deliver reliable and high-quality engineering solutions. Over the past 41 years, the company has successfully completed numerous projects across various industrial sectors, earning a reputation for precision, quality, and customer satisfaction.
            </p>

            <p className="text-white/60" style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Renowned for its expertise in 2 mm and 3 mm plate fabrication, Sri Nava Industries has grown into a trusted partner for fabrication, engineering, and manufacturing services. At its peak, the organization employed over 150 skilled professionals, contributing to its legacy of excellence, innovation, and commitment to industrial growth.
            </p>
          </motion.div>

          {/* Industries Served */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-white mb-8" style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Industries We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {[
                "Foundries & Metal Casting Industries",
                "Surface Preparation & Sandblasting Operations",
                "Industrial Equipment Manufacturing",
                "Material Handling Systems",
                "Heavy Engineering & Fabrication",
                "Industrial Maintenance & Shutdown Services",
                "Process Industries",
                "OEMs and Engineering Contractors",
              ].map((industry, i) => (
                <motion.div
                  key={industry}
                  className="flex items-start gap-3 p-4 border border-white/10 rounded-lg bg-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                >
                  <div className="text-white/40 mt-1" style={{ fontSize: "1.2rem" }}>◆</div>
                  <p className="text-white/70" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {industry}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Expertise */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-white mb-10" style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Core Expertise & Specializations
            </h2>

            <div className="space-y-12 max-w-3xl">
              {[
                {
                  title: "Fabrication & Engineering",
                  items: [
                    "Structural Steel Fabrication",
                    "Custom Industrial Fabrication",
                    "Heavy Equipment Fabrication",
                    "Sheet Metal Components",
                    "Laser Cutting & Precision Manufacturing",
                  ],
                },
                {
                  title: "Industrial Equipment & Components",
                  items: [
                    "Sandblasting Machine Components",
                    "Industrial Blowers",
                    "Impellers",
                    "Ducting Systems",
                    "Industrial Fans",
                    "Material Handling Equipment",
                  ],
                },
                {
                  title: "Maintenance & Support",
                  items: [
                    "Equipment Refurbishment",
                    "Breakdown Maintenance",
                    "Spare Parts Manufacturing",
                    "Reverse Engineering of Components",
                    "Machine Service Support",
                  ],
                },
                {
                  title: "Casting & Foundry Solutions",
                  items: [
                    "Foundry Equipment Components",
                    "Castings from 5 kg to 5 Tons",
                    "Customized Foundry Products",
                    "Pattern-Based Manufacturing",
                  ],
                },
              ].map((expertise, idx) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                >
                  <h3 className="text-white mb-4" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    {expertise.title}
                  </h3>
                  <ul className="space-y-2">
                    {expertise.items.map((item) => (
                      <li key={item} className="text-white/60 flex items-center gap-3" style={{ fontSize: "0.95rem" }}>
                        <span className="text-white/30">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Major Clients */}
          <motion.div
            className="mb-20 pb-12 border-t border-white/10 pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-white mb-8" style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Major Clients & Business Associates
            </h2>

            <p className="text-white/60 mb-8" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              We have proudly supported and collaborated with organizations such as:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {["Schwing Stetter", "Nelcast", "Southern Alloy Foundry", "Gravera Pvt. Ltd."].map((client) => (
                <motion.div
                  key={client}
                  className="p-4 border border-white/15 rounded-lg bg-white/5 hover:border-white/30 hover:bg-white/8 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <p className="text-white/70" style={{ fontSize: "0.95rem" }}>
                    {client}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-white/50 mt-6" style={{ fontSize: "0.9rem" }}>
              Plus various Engineering Contractors and Industrial Suppliers
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              onClick={() => navigate("/work")}
              className="px-8 py-3.5 border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer bg-transparent rounded-full"
              style={{ fontSize: "0.8rem", letterSpacing: "0.06em" }}
            >
              Explore Our Work
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
