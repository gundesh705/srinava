import { useNavigate } from "react-router";
import { motion } from "motion/react";
import headerImg from "../../imports/wmremove-transformed.png";
import { Navigation } from "../components/Navigation";
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
    desc: "Hydraulic press brake, power press, and bandsaw cutting systems.",
    subEquipment: [
      {
        name: "Hydraulic Press Brake",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F3eb2fd70be9041b9acf5ec5641c4db7f?format=webp&width=800&height=1200",
        desc: "Our CNC Hydraulic Press Brake is designed for high-precision sheet metal bending and forming operations. With the capability to bend mild steel sheets up to 8 mm thickness, the machine delivers exceptional accuracy, repeatability, and productivity. Equipped with a CNC control system and heavy-duty hydraulic drive, it enables the fabrication of complex profiles, industrial enclosures, structural components, tanks, and custom sheet metal products.",
      },
      {
        name: "Power Press",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F2cb96f4157784cdb86b4857639ab0373?format=webp&width=800&height=1200",
        desc: "Our Mechanical Power Press is designed for efficient punching, blanking, piercing, and forming operations in sheet metal fabrication. Built with a robust cast iron frame and flywheel-driven mechanism, the machine delivers reliable performance, high productivity, and precision for manufacturing brackets, panels, structural components, and custom fabricated parts.",
      },
      {
        name: "Bandsaw Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F64365b5c7ba04d77b95a9d95d2631353?format=webp&width=800&height=1200",
        desc: "Our Horizontal Metal Cutting Bandsaw Machine provides precise and efficient cutting of pipes, tubes, solid bars, and structural steel sections. Equipped with a hydraulic feed system and heavy-duty clamping mechanism, the machine ensures accurate cuts, improved productivity, and reduced material wastage, making it an essential part of our fabrication and manufacturing operations.",
      },
      {
        name: "Flange Rolling Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F31d50fec31c44e6b9e768f8c0f1688e5?format=webp&width=800&height=1200",
        desc: "Our custom-built Flange Rolling Machine is engineered for precise rolling of flat bars up to 100 mm width into circular rings and flanges. Featuring a robust gear-driven 3-roller mechanism and heavy-duty steel construction, the machine is ideal for manufacturing tank flanges, support rings, structural components, and custom fabrication assemblies with high accuracy and consistency.",
      },
      {
        name: "3-Roller Plate Rolling Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F330c9784799d4320b7ad9359b95c5a7d?format=webp&width=800&height=1200",
        desc: "Our custom-built 3-Roller Plate Rolling Machine is designed for precision rolling of metal plates up to 16 mm thickness and 1500 mm width. Powered by a 3 HP gear-driven transmission system, the machine enables efficient fabrication of cylindrical shells, storage tanks, ducts, and structural components. Its heavy-duty construction ensures reliable performance for demanding industrial applications.",
      },
    ],
  },
  {
    name: "Crane",
    icon: "⊤",
    desc: "20-tonne overhead crane for safe heavy-load handling.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F6241501ca2034cd9a5ce55e8a872091b?format=webp&width=800&height=1200",
    more: "Sri Nava Industries is equipped with a 2 Ton Material Handling Crane capable of transporting raw materials, fabricated assemblies, and finished products throughout the facility. The crane enables safe, efficient, and seamless movement of heavy components, improving productivity and supporting large-scale fabrication operations.",
  },
  {
    name: "Welding",
    icon: "⚡",
    desc: "Advanced welding systems for structural steel and precision joints.",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F349725b4a00a495a82a79429158f9d40?format=webp&width=800&height=1200",
    more: "Our Arc Welding Transformer is designed to deliver reliable and consistent welding performance for industrial and fabrication applications. Built with a robust transformer-based design, it ensures stable current output and long service life. Multiple current settings allow easy adjustment for different electrode sizes and welding requirements. The heavy-duty construction makes it suitable for continuous operation in demanding environments. Widely used in structural fabrication, repair works, and general metal joining, it offers dependable performance with minimal maintenance.",
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
          <div className="flex items-center gap-8 ml-auto">
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
