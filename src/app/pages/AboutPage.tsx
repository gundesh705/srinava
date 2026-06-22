import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const cinemaStyles = `
:root {
  --steel-950: #050506;
  --steel-900: #08090b;
  --steel-800: #0d0e11;
  --steel-700: #15171b;
  --steel-dark: #08090b;
  --steel-mid: #15171b;
  --steel-light: #2a313b;
  --crimson: #e11d2e;
  --crimson-bright: #ff3340;
  --crimson-deep: #8f0f1a;
  --crimson-soft: rgba(225, 29, 46, 0.5);
  --crimson-faint: rgba(225, 29, 46, 0.14);
  --ember: #ff7a2c;
  --gold: #e11d2e;
  --gold-bright: #ff3340;
  --silver: #c8ccd2;
  --accent-red: #e11d2e;
  --text-soft: rgba(255, 255, 255, 0.65);
  --text-dim: rgba(255, 255, 255, 0.56);
  --text-faint: rgba(255, 255, 255, 0.34);
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(255, 255, 255, 0.14);
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
    radial-gradient(140% 90% at 50% -10%, #141416 0%, var(--steel-950) 60%);
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
  background: linear-gradient(105deg, transparent, rgba(225,29,46,0.15), rgba(255,255,255,0.08), transparent);
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
  width: 3px; height: 3px;
  border-radius: 50%;
  background: var(--ember);
  box-shadow: 0 0 8px 2px rgba(255, 122, 44, 0.7);
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
      135deg,
      #ffffff 0%,
      #f2f2f2 42%,
      var(--crimson-bright) 100%
  );

  background-size: 250% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
  background: linear-gradient(90deg, transparent, rgba(255,100,100,0.55), rgba(255,255,255,0.8), rgba(200,30,30,0.4), transparent);
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
  border: 1px solid rgba(255,100,100,0.35);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.cta:hover {
  transform: translateY(-3px);
  border-color: var(--gold-bright);
  box-shadow: 0 12px 40px rgba(255,100,100,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
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

const PORTFOLIO_IMAGES = [
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fa58f0b2518754815a34f6c9c83dda511?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F0cd9153897374513b3d102c0460396f6?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F6d043fd9dc9648f8b3b3cbcbce35d055?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F089cfebf1ad74e988199777754af9d06?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F39dd1c3495324ae6958d804daacecaa1?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fc1b326a97aad46028a396cebce2057fd?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F2ff252bed03543b6930e3858d1671edc?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F8102b150f4c14c8099e4f53ec000ee28?format=webp&width=800&height=1200",
];

export function AboutPage() {
  const navigate = useNavigate();
  const [introComplete, setIntroComplete] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className="about-page-container">
          <style>{`
            .about-page-container {
              background: var(--steel-dark);
              color: white;
            }

            .about-header {
              padding: clamp(2rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem);
              max-width: 100%;
            }

            .about-back-btn {
              font-size: 0.75rem;
              letter-spacing: 0.08em;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.5);
              background: transparent;
              border: 1px solid rgba(255, 255, 255, 0.1);
              padding: 0.5rem 1rem;
              border-radius: 6px;
              cursor: pointer;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 2rem;
            }

            .about-back-btn:hover {
              color: rgba(255, 255, 255, 0.8);
              border-color: rgba(231, 76, 60, 0.3);
              background: rgba(231, 76, 60, 0.05);
            }

            .about-title {
              font-size: clamp(2.5rem, 7vw, 4.5rem);
              font-weight: 700;
              letter-spacing: -0.02em;
              line-height: 1.1;
              margin-bottom: 1.5rem;
              background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(231, 76, 60, 0.9) 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .about-subtitle {
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.6);
              line-height: 1.6;
              max-width: 600px;
            }

            .about-content-section {
              padding: clamp(2rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem);
              border-top: 1px solid rgba(255, 255, 255, 0.08);
            }

            .about-content-section:first-of-type {
              border-top: none;
            }

            .section-title {
              font-size: clamp(1.5rem, 4vw, 2.2rem);
              font-weight: 600;
              letter-spacing: -0.01em;
              margin-bottom: 2rem;
              color: white;
              display: flex;
              align-items: center;
              gap: 1rem;
            }

            .section-title::before {
              content: '';
              width: 4px;
              height: 2rem;
              background: linear-gradient(180deg, var(--gold) 0%, transparent 100%);
              border-radius: 2px;
            }

            .history-text {
              max-width: 800px;
              display: grid;
              gap: 1.5rem;
            }

            .history-paragraph {
              font-size: 1.05rem;
              line-height: 1.8;
              color: rgba(255, 255, 255, 0.65);
            }

            .industries-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 1.5rem;
              max-width: 1200px;
            }

            .industry-card {
              padding: 1.5rem;
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 8px;
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(231, 76, 60, 0.02) 100%);
              transition: all 0.3s ease;
              cursor: default;
              position: relative;
              overflow: hidden;
            }

            .industry-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, var(--gold), transparent);
              opacity: 0;
              transition: opacity 0.3s ease;
            }

            .industry-card:hover {
              border-color: rgba(231, 76, 60, 0.3);
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(231, 76, 60, 0.04) 100%);
              box-shadow: 0 0 20px rgba(231, 76, 60, 0.1);
            }

            .industry-card:hover::before {
              opacity: 1;
            }

            .industry-icon {
              font-size: 1.2rem;
              color: rgba(231, 76, 60, 0.6);
              margin-right: 0.75rem;
            }

            .industry-name {
              font-size: 0.95rem;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.75);
            }

            .expertise-section {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
            }

            .expertise-category {
              padding: 2rem;
              border: 1px solid rgba(231, 76, 60, 0.15);
              border-radius: 8px;
              background: linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }

            .expertise-category::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, var(--gold) 0%, transparent 100%);
              opacity: 0.6;
            }

            .expertise-category::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(135deg, transparent 0%, rgba(231, 76, 60, 0.03) 100%);
              pointer-events: none;
            }

            .expertise-category:hover {
              border-color: rgba(231, 76, 60, 0.35);
              background: linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
              transform: translateY(-4px);
              box-shadow: 0 12px 40px rgba(231, 76, 60, 0.15);
            }

            .expertise-title {
              font-size: 1.2rem;
              font-weight: 600;
              color: white;
              margin-bottom: 1.5rem;
              letter-spacing: 0.5px;
              position: relative;
              z-index: 1;
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            .expertise-title::before {
              content: '◆';
              color: var(--gold);
              font-size: 0.8rem;
            }

            .expertise-list {
              display: flex;
              flex-direction: column;
              gap: 0.9rem;
              position: relative;
              z-index: 1;
            }

            .expertise-item {
              font-size: 0.9rem;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.7);
              display: flex;
              align-items: flex-start;
              gap: 0.65rem;
              transition: color 0.3s ease;
            }

            .expertise-category:hover .expertise-item {
              color: rgba(255, 255, 255, 0.85);
            }

            .expertise-item::before {
              content: '→';
              color: rgba(231, 76, 60, 0.6);
              font-weight: 600;
              flex-shrink: 0;
              margin-top: 2px;
              transition: color 0.3s ease;
            }

            .expertise-category:hover .expertise-item::before {
              color: var(--gold);
            }

            @media (max-width: 768px) {
              .expertise-section {
                grid-template-columns: 1fr;
              }
            }

            .clients-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 1rem;
              max-width: 900px;
            }

            .client-card {
              padding: 1.25rem;
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 8px;
              background: rgba(255, 255, 255, 0.03);
              text-align: center;
              transition: all 0.3s ease;
              cursor: default;
            }

            .client-card:hover {
              border-color: rgba(231, 76, 60, 0.4);
              background: rgba(231, 76, 60, 0.08);
              transform: translateY(-2px);
              box-shadow: 0 4px 16px rgba(231, 76, 60, 0.1);
            }

            .client-name {
              font-size: 0.95rem;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.8);
              letter-spacing: 0.3px;
            }

            .cta-section {
              padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 4vw, 3rem);
              text-align: center;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
            }

            .cta-button {
              padding: 1rem 2.5rem;
              font-size: 0.9rem;
              font-weight: 600;
              letter-spacing: 0.08em;
              color: white;
              background: linear-gradient(135deg, rgba(231, 76, 60, 0.15) 0%, rgba(231, 76, 60, 0.05) 100%);
              border: 1.5px solid rgba(231, 76, 60, 0.4);
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }

            .cta-button::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
              transition: left 0.5s ease;
            }

            .cta-button:hover {
              border-color: rgba(231, 76, 60, 0.8);
              box-shadow: 0 0 30px rgba(231, 76, 60, 0.2);
              transform: translateY(-2px);
              background: linear-gradient(135deg, rgba(231, 76, 60, 0.25) 0%, rgba(231, 76, 60, 0.08) 100%);
            }

            .cta-button:hover::before {
              left: 100%;
            }

            @media (max-width: 768px) {
              .industries-grid {
                grid-template-columns: 1fr;
              }

              .clients-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          `}</style>

          <div className="about-header">
            <motion.button
              onClick={() => navigate("/")}
              className="about-back-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              ← Back to Home
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="about-title">About Sri Nava Industries</h1>
              <p className="about-subtitle">
                A Legacy of Excellence in Fabrication, Engineering, and Industrial Solutions
              </p>
            </motion.div>
          </div>

          {/* Company History */}
          <motion.div
            className="about-content-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="history-text">
              <p className="history-paragraph">
                Sri Nava Industries was established in 1985 by Mr. K. Bhuvanendran with a vision to deliver reliable and high-quality engineering solutions. Over the past 41 years, the company has successfully completed numerous projects across various industrial sectors, earning a reputation for precision, quality, and customer satisfaction.
              </p>

              <p className="history-paragraph">
                Renowned for its expertise in 2 mm and 3 mm plate fabrication, Sri Nava Industries has grown into a trusted partner for fabrication, engineering, and manufacturing services. At its peak, the organization employed over 150 skilled professionals, contributing to its legacy of excellence, innovation, and commitment to industrial growth.
              </p>
            </div>
          </motion.div>

          {/* Industries Served */}
          <motion.div
            className="about-content-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="section-title">Industries We Serve</h2>

            <div className="industries-grid">
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
                  className="industry-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span className="industry-icon">◆</span>
                    <p className="industry-name">{industry}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Expertise */}
          <motion.div
            className="about-content-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">Core Expertise & Specializations</h2>

            <div className="expertise-section">
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
                  className="expertise-category"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                >
                  <h3 className="expertise-title">{expertise.title}</h3>
                  <ul className="expertise-list">
                    {expertise.items.map((item) => (
                      <li key={item} className="expertise-item">
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
            className="about-content-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="section-title">Major Clients & Business Associates</h2>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255, 255, 255, 0.65)", marginBottom: "2rem" }}>
              We have proudly supported and collaborated with organizations such as:
            </p>

            <div className="clients-grid">
              {["Schwing Stetter", "Nelcast", "Southern Alloy Foundry", "Gravera Pvt. Ltd."].map((client, i) => (
                <motion.div
                  key={client}
                  className="client-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="client-name">{client}</p>
                </motion.div>
              ))}
            </div>

            <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.5)", marginTop: "1.5rem" }}>
              Plus various Engineering Contractors and Industrial Suppliers
            </p>
          </motion.div>

          {/* Gallery Modal */}
          {galleryOpen && (
            <div className="gallery-overlay" onClick={() => setGalleryOpen(false)}>
              <style>{`
                .gallery-overlay {
                  position: fixed;
                  inset: 0;
                  background: rgba(10, 10, 10, 0.95);
                  backdrop-filter: blur(8px);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 1000;
                  padding: 1rem;
                  animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }

                .gallery-container {
                  position: relative;
                  max-width: 900px;
                  width: 100%;
                  max-height: 90vh;
                  display: flex;
                  flex-direction: column;
                  background: linear-gradient(135deg, rgba(30, 30, 40, 0.8), rgba(20, 20, 30, 0.8));
                  border: 1px solid rgba(231, 76, 60, 0.2);
                  border-radius: 12px;
                  overflow: hidden;
                  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes slideUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .gallery-image-wrapper {
                  position: relative;
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  overflow: hidden;
                  background: linear-gradient(135deg, rgba(10, 10, 15, 0.5), rgba(20, 30, 40, 0.5));
                  min-height: 500px;
                }

                .gallery-image {
                  max-width: 100%;
                  max-height: 100%;
                  object-fit: contain;
                  animation: zoomIn 0.4s ease-out;
                }

                @keyframes zoomIn {
                  from {
                    opacity: 0;
                    transform: scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }

                .gallery-controls {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 1.5rem;
                  border-top: 1px solid rgba(231, 76, 60, 0.1);
                  background: rgba(15, 15, 20, 0.5);
                  gap: 1.5rem;
                }

                .gallery-button {
                  background: linear-gradient(135deg, rgba(231, 76, 60, 0.15) 0%, rgba(231, 76, 60, 0.05) 100%);
                  border: 1px solid rgba(231, 76, 60, 0.3);
                  color: white;
                  padding: 0.75rem 1.5rem;
                  border-radius: 6px;
                  cursor: pointer;
                  font-size: 0.9rem;
                  font-weight: 500;
                  transition: all 0.3s ease;
                  letter-spacing: 0.5px;
                }

                .gallery-button:hover {
                  border-color: rgba(231, 76, 60, 0.6);
                  background: linear-gradient(135deg, rgba(231, 76, 60, 0.25) 0%, rgba(231, 76, 60, 0.08) 100%);
                  box-shadow: 0 0 20px rgba(231, 76, 60, 0.15);
                }

                .gallery-button:disabled {
                  opacity: 0.4;
                  cursor: not-allowed;
                }

                .gallery-counter {
                  color: rgba(255, 255, 255, 0.7);
                  font-size: 0.9rem;
                  font-weight: 500;
                  letter-spacing: 0.5px;
                  min-width: 80px;
                  text-align: center;
                }

                .gallery-thumbnails {
                  display: flex;
                  gap: 0.75rem;
                  padding: 1rem;
                  background: rgba(15, 15, 20, 0.7);
                  overflow-x: auto;
                  border-top: 1px solid rgba(231, 76, 60, 0.1);
                }

                .gallery-thumbnail {
                  flex-shrink: 0;
                  width: 60px;
                  height: 80px;
                  border-radius: 6px;
                  border: 2px solid rgba(231, 76, 60, 0.2);
                  cursor: pointer;
                  overflow: hidden;
                  transition: all 0.3s ease;
                  background: rgba(255, 255, 255, 0.05);
                }

                .gallery-thumbnail:hover {
                  border-color: rgba(231, 76, 60, 0.5);
                  transform: scale(1.05);
                }

                .gallery-thumbnail.active {
                  border-color: rgba(231, 76, 60, 0.8);
                  box-shadow: 0 0 12px rgba(231, 76, 60, 0.3);
                }

                .gallery-thumbnail img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }

                .close-gallery {
                  position: absolute;
                  top: 1rem;
                  right: 1rem;
                  background: rgba(0, 0, 0, 0.6);
                  border: 1px solid rgba(231, 76, 60, 0.3);
                  color: white;
                  width: 40px;
                  height: 40px;
                  border-radius: 6px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.5rem;
                  transition: all 0.3s ease;
                  z-index: 10;
                }

                .close-gallery:hover {
                  background: rgba(0, 0, 0, 0.8);
                  border-color: rgba(231, 76, 60, 0.8);
                }

                @media (max-width: 768px) {
                  .gallery-container {
                    max-height: 95vh;
                    border-radius: 8px;
                  }

                  .gallery-image-wrapper {
                    min-height: 350px;
                  }

                  .gallery-controls {
                    flex-wrap: wrap;
                    padding: 1rem;
                  }

                  .gallery-button {
                    padding: 0.65rem 1.2rem;
                    font-size: 0.85rem;
                  }
                }
              `}</style>

              <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
                <button
                  className="close-gallery"
                  onClick={() => setGalleryOpen(false)}
                >
                  ✕
                </button>

                <div className="gallery-image-wrapper">
                  <img
                    src={PORTFOLIO_IMAGES[currentImageIndex]}
                    alt={`Portfolio item ${currentImageIndex + 1}`}
                    className="gallery-image"
                  />
                </div>

                <div className="gallery-thumbnails">
                  {PORTFOLIO_IMAGES.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-thumbnail ${idx === currentImageIndex ? "active" : ""}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>

                <div className="gallery-controls">
                  <button
                    className="gallery-button"
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? PORTFOLIO_IMAGES.length - 1 : prev - 1
                      )
                    }
                  >
                    ← Previous
                  </button>
                  <div className="gallery-counter">
                    {currentImageIndex + 1} / {PORTFOLIO_IMAGES.length}
                  </div>
                  <button
                    className="gallery-button"
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === PORTFOLIO_IMAGES.length - 1 ? 0 : prev + 1
                      )
                    }
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
