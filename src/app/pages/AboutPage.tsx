import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const cinemaStyles = `
  .about-hero {
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

  .about-hero.hidden {
    display: none;
  }

  .about-cinema-texture::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px);
    opacity: 0.6;
    pointer-events: none;
  }

  .about-light-streak {
    position: absolute;
    top: 0; left: -40%;
    width: 60%; height: 100%;
    background: linear-gradient(105deg, transparent, rgba(212,175,55,0.10), rgba(255,255,255,0.06), transparent);
    transform: skewX(-18deg);
    animation: aboutSweep 9s linear infinite;
    pointer-events: none;
  }
  .about-light-streak.delay { animation-delay: 4.5s; opacity: 0.6; }

  @keyframes aboutSweep {
    0% { left: -50%; }
    100% { left: 130%; }
  }

  .about-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .about-spark {
    position: absolute;
    width: 2px; height: 2px;
    border-radius: 50%;
    background: #f1d27a;
    box-shadow: 0 0 6px 1px rgba(241,210,122,0.8);
    bottom: -10px;
    animation: aboutRise linear infinite;
    opacity: 0;
  }

  @keyframes aboutRise {
    0%   { transform: translateY(0) scale(1);   opacity: 0; }
    10%  { opacity: 1; }
    80%  { opacity: 0.8; }
    100% { transform: translateY(-105vh) scale(0.2); opacity: 0; }
  }

  .about-scene {
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
  .about-scene.active { opacity: 1; pointer-events: auto; }

  .about-metallic {
    font-family: 'Oswald', system-ui, sans-serif;
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

  .about-subtitle {
    margin-top: 18px;
    font-size: clamp(0.85rem, 1.8vw, 1.05rem);
    color: rgba(255, 255, 255, 0.65);
    font-weight: 400;
    letter-spacing: 0.4px;
    max-width: 560px;
  }

  @keyframes aboutRevealUp {
    from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
  }

  #about-scene1 .about-big {
    font-size: clamp(2.2rem, 8vw, 6rem);
  }
  .about-scene.active .about-reveal-1 { animation: aboutRevealUp 0.9s cubic-bezier(.16,1,.3,1) both; }
  .about-scene.active .about-reveal-2 { animation: aboutRevealUp 0.9s cubic-bezier(.16,1,.3,1) 0.25s both; }

  #about-scene2 .about-counter {
    font-family: 'Oswald', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(2.6rem, 9vw, 7rem);
    background: linear-gradient(110deg, #ff0000 0%, #ff3333 30%, #ffffff 50%, #ff3333 70%, #cc0000 100%);
    background-size: 250% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  #about-scene2 .about-label {
    font-family: 'Oswald', system-ui, sans-serif;
    font-size: clamp(1rem, 3vw, 1.6rem);
    letter-spacing: 4px;
    color: #c8ccd2;
    margin-top: 4px;
  }
  .about-scene.active .about-zoom-in { animation: aboutZoomFrame 0.9s cubic-bezier(.16,1,.3,1) both; }
  @keyframes aboutZoomFrame {
    from { opacity: 0; transform: scale(1.4); filter: blur(10px); }
    to   { opacity: 1; transform: scale(1);   filter: blur(0); }
  }

  .about-values { display: flex; gap: 0; flex-wrap: wrap; justify-content: center; align-items: center; }
  .about-value-word {
    font-family: 'Oswald', system-ui, sans-serif;
    font-weight: 600;
    font-size: clamp(1.4rem, 5vw, 3rem);
    letter-spacing: 3px;
    padding: 0 28px;
    position: relative;
    background: linear-gradient(110deg, #ff0000 0%, #ff3333 30%, #ffffff 50%, #ff3333 70%, #cc0000 100%);
    background-size: 250% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 0;
  }
  .about-value-word + .about-value-word::before {
    content: ""; position: absolute; left: 0; top: 18%; height: 64%;
    width: 1px; background: linear-gradient(#d4af37, transparent);
    box-shadow: 0 0 8px #d4af37;
  }
  .about-scene.active .about-v1 { animation: aboutRevealUp 0.7s cubic-bezier(.16,1,.3,1) 0.1s both; }
  .about-scene.active .about-v2 { animation: aboutRevealUp 0.7s cubic-bezier(.16,1,.3,1) 0.55s both; }
  .about-scene.active .about-v3 { animation: aboutRevealUp 0.7s cubic-bezier(.16,1,.3,1) 1.0s both; }

  .about-spark-sweep {
    position: absolute; inset: 0; pointer-events: none; opacity: 0; z-index: 30;
    background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), rgba(255,255,255,0.8), rgba(200,30,30,0.4), transparent);
    transform: translateX(-100%);
  }
  .about-spark-sweep.run { animation: aboutSparkSweep 0.9s ease-in-out both; }
  @keyframes aboutSparkSweep {
    0%   { transform: translateX(-100%); opacity: 0; }
    40%  { opacity: 1; }
    100% { transform: translateX(120%); opacity: 0; }
  }

  .about-skip {
    position: absolute; bottom: 26px; right: 28px; z-index: 40;
    font-size: 0.78rem; letter-spacing: 1px; color: rgba(255, 255, 255, 0.65);
    background: transparent; border: 1px solid rgba(255,255,255,0.18);
    padding: 7px 16px; border-radius: 20px; cursor: pointer;
    transition: color 0.25s, border-color 0.25s;
  }
  .about-skip:hover { color: #fff; border-color: #d4af37; }
  .about-skip.hide { opacity: 0; pointer-events: none; }
`;

export function AboutPage() {
  const navigate = useNavigate();
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pc = document.getElementById("about-particles");
    if (pc) {
      for (let i = 0; i < 28; i++) {
        const s = document.createElement("div");
        s.className = "about-spark";
        s.style.left = Math.random() * 100 + "%";
        s.style.animationDuration = (5 + Math.random() * 7) + "s";
        s.style.animationDelay = (Math.random() * 8) + "s";
        const scale = 0.6 + Math.random() * 1.8;
        s.style.transform = "scale(" + scale + ")";
        pc.appendChild(s);
      }
    }

    const scenes = ["about-scene1", "about-scene2", "about-scene3", "about-scene4"];
    const sweep = document.getElementById("about-sweep");
    const skip = document.getElementById("about-skip");
    let current = -1;
    const timers: NodeJS.Timeout[] = [];

    function clearAll() {
      timers.forEach(clearTimeout);
      timers.length = 0;
    }

    function show(idx: number) {
      scenes.forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove("active");
      });
      const el = document.getElementById(scenes[idx]);
      if (el) el.classList.add("active");
      current = idx;
    }

    function runSweep() {
      if (sweep) {
        sweep.classList.remove("run");
        void sweep.offsetWidth;
        sweep.classList.add("run");
      }
    }

    function animateCounter() {
      const node = document.getElementById("about-count");
      if (!node) return;
      const target = 500;
      let start = 0;
      const dur = 1800;
      let t0: number | null = null;
      function step(ts: number) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.floor(start + (target - start) * eased).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else node.textContent = "500";
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
      show(0);
      timers.push(setTimeout(function () { runSweep(); }, 2800));
      timers.push(setTimeout(function () { show(1); animateCounter(); }, 3000));
      timers.push(setTimeout(function () { runSweep(); }, 5900));
      timers.push(setTimeout(function () { show(2); }, 6100));
      timers.push(setTimeout(function () { runSweep(); }, 9200));
      timers.push(setTimeout(function () { finish(); }, 9400));
    }

    if (skip) {
      skip.addEventListener("click", finish);
    }
    play();

    return () => {
      clearAll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{cinemaStyles}</style>

      {!introComplete && (
        <section className="about-hero about-cinema-texture" id="about-hero">
          <div className="about-light-streak"></div>
          <div className="about-light-streak delay"></div>
          <div className="about-particles" id="about-particles"></div>

          <div className="about-scene" id="about-scene1">
            <h1 className="about-metallic about-big about-reveal-1">41 YEARS OF EXPERIENCE</h1>
            <p className="about-subtitle about-reveal-2">Delivering excellence in fabrication and engineering since 1985.</p>
          </div>

          <div className="about-scene" id="about-scene2">
            <div className="about-zoom-in">
              <div className="about-counter"><span id="about-count">0</span>+</div>
              <div className="about-label">PROJECTS COMPLETED</div>
              <p className="about-subtitle">Trusted by industries across multiple sectors.</p>
            </div>
          </div>

          <div className="about-scene" id="about-scene3">
            <div className="about-values">
              <span className="about-value-word about-v1">PRECISION</span>
              <span className="about-value-word about-v2">QUALITY</span>
              <span className="about-value-word about-v3">RELIABILITY</span>
            </div>
          </div>

          <div className="about-scene" id="about-scene4">
            <h2 className="about-metallic" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>SRI NAVA INDUSTRIES</h2>
            <p className="about-subtitle">WELDING • FABRICATION • LASER CUTTING • STRUCTURAL WORKS</p>
          </div>

          <div className="about-spark-sweep" id="about-sweep"></div>
          <button className="about-skip" id="about-skip">SKIP INTRO</button>
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
