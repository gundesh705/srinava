import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
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

const cinemaStyles = `
  .hero-cinema {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    background:
      radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.06), transparent 55%),
      radial-gradient(ellipse at 75% 80%, rgba(200,30,30,0.07), transparent 55%),
      linear-gradient(160deg, #0a0d12 0%, #11161d 45%, #0a0d12 100%);
    z-index: 50;
  }

  .hero-cinema.hidden {
    display: none;
  }

  .cinema-texture::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px);
    opacity: 0.6;
    pointer-events: none;
  }

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

  .particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .spark {
    position: absolute;
    width: 2px; height: 2px;
    border-radius: 50%;
    background: #f1d27a;
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
  }

  .subtitle {
    margin-top: 18px;
    font-size: clamp(0.85rem, 1.8vw, 1.05rem);
    color: rgba(255, 255, 255, 0.65);
    font-weight: 400;
    letter-spacing: 0.4px;
    max-width: 560px;
  }

  @keyframes revealUp {
    from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
  }

  #scene1 .big {
    font-size: clamp(2.2rem, 8vw, 6rem);
  }
  .scene.active .reveal-1 { animation: revealUp 0.9s cubic-bezier(.16,1,.3,1) both; }
  .scene.active .reveal-2 { animation: revealUp 0.9s cubic-bezier(.16,1,.3,1) 0.25s both; }

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
    color: #c8ccd2;
    margin-top: 4px;
  }
  .scene.active .zoom-in { animation: zoomFrame 0.9s cubic-bezier(.16,1,.3,1) both; }
  @keyframes zoomFrame {
    from { opacity: 0; transform: scale(1.4); filter: blur(10px); }
    to   { opacity: 1; transform: scale(1);   filter: blur(0); }
  }

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
    background-size: 250% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 0;
  }
  .value-word + .value-word::before {
    content: ""; position: absolute; left: 0; top: 18%; height: 64%;
    width: 1px; background: linear-gradient(#d4af37, transparent);
    box-shadow: 0 0 8px #d4af37;
  }
  .scene.active .v1 { animation: revealUp 0.7s cubic-bezier(.16,1,.3,1) 0.1s both; }
  .scene.active .v2 { animation: revealUp 0.7s cubic-bezier(.16,1,.3,1) 0.55s both; }
  .scene.active .v3 { animation: revealUp 0.7s cubic-bezier(.16,1,.3,1) 1.0s both; }

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

  #scene4 { background: radial-gradient(ellipse at center, rgba(20,24,30,0.9), rgba(6,8,11,0.96)); }

  .skip {
    position: absolute; bottom: 26px; right: 28px; z-index: 40;
    font-size: 0.78rem; letter-spacing: 1px; color: rgba(255, 255, 255, 0.65);
    background: transparent; border: 1px solid rgba(255,255,255,0.18);
    padding: 7px 16px; border-radius: 20px; cursor: pointer;
    transition: color 0.25s, border-color 0.25s;
  }
  .skip:hover { color: #fff; border-color: #d4af37; }
  .skip.hide { opacity: 0; pointer-events: none; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .scene { opacity: 0; }
    #scene4 { opacity: 1; pointer-events: auto; }
  }
`;

function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pc = document.getElementById('particles');
    const sweep = document.getElementById('sweep');
    const skip = document.getElementById('skip');

    if (!pc || !sweep || !skip) return;

    // Generate sparks
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('div');
      s.className = 'spark';
      s.style.left = Math.random() * 100 + '%';
      s.style.animationDuration = (5 + Math.random() * 7) + 's';
      s.style.animationDelay = (Math.random() * 8) + 's';
      const scale = 0.6 + Math.random() * 1.8;
      s.style.transform = 'scale(' + scale + ')';
      pc.appendChild(s);
    }

    const scenes = ['scene1', 'scene2', 'scene3', 'scene4'];
    let current = -1;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function clearAll() {
      timers.forEach(clearTimeout);
      timers.length = 0;
    }

    function show(idx: number) {
      scenes.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
      });
      const el = document.getElementById(scenes[idx]);
      if (el) el.classList.add('active');
      current = idx;
    }

    function runSweep() {
      sweep.classList.remove('run');
      void sweep.offsetWidth;
      sweep.classList.add('run');
    }

    function animateCounter() {
      const node = document.getElementById('count');
      if (!node) return;
      const target = 10000, start = 0, dur = 1800;
      let t0: number | null = null;
      function step(ts: number) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.floor(start + (target - start) * eased).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else node.textContent = '10,000';
      }
      requestAnimationFrame(step);
    }

    function finish() {
      clearAll();
      show(3);
      skip.classList.add('hide');
      setTimeout(onComplete, 1000);
    }

    function play() {
      if (reduced) {
        finish();
        return;
      }
      show(0);
      timers.push(setTimeout(() => { runSweep(); }, 2800));
      timers.push(setTimeout(() => { show(1); animateCounter(); }, 3000));
      timers.push(setTimeout(() => { runSweep(); }, 5900));
      timers.push(setTimeout(() => { show(2); }, 6100));
      timers.push(setTimeout(() => { runSweep(); }, 9200));
      timers.push(setTimeout(() => { finish(); }, 9400));
    }

    skip.addEventListener('click', finish);
    play();

    return () => clearAll();
  }, [onComplete]);

  return (
    <style>{cinemaStyles}</style>
  );
}

export function FacilitiesPage() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {showIntro && (
        <>
          <CinematicIntro onComplete={() => setShowIntro(false)} />
          <section className="hero-cinema cinema-texture">
            <div className="light-streak"></div>
            <div className="light-streak delay"></div>
            <div className="particles" id="particles"></div>

            <div className="scene" id="scene1">
              <h1 className="metallic big reveal-1">PRECISION MANUFACTURING</h1>
              <p className="subtitle reveal-2">World-class facilities for your fabrication needs.</p>
            </div>

            <div className="scene" id="scene2">
              <div className="zoom-in">
                <div className="counter"><span id="count">0</span>+</div>
                <div className="label">FACILITIES</div>
                <p className="subtitle">Equipped with cutting-edge technology and expertise.</p>
              </div>
            </div>

            <div className="scene" id="scene3">
              <div className="values">
                <span className="value-word v1">INNOVATION</span>
                <span className="value-word v2">EFFICIENCY</span>
                <span className="value-word v3">EXCELLENCE</span>
              </div>
            </div>

            <div className="scene" id="scene4">
              <h2 className="metallic" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>FACILITIES OVERVIEW</h2>
              <p className="subtitle">Explore our state-of-the-art infrastructure</p>
            </div>

            <div className="spark-sweep" id="sweep"></div>
            <button className="skip" id="skip">SKIP INTRO</button>
          </section>
        </>
      )}

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
