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
    img: img1,
    more: "Our 3 kW CNC Fiber Laser Cutting Machine delivers high-speed, high-precision sheet metal processing using premium components from RayTools, HIWIN, THK, SMC, Schneider Electric, and ABB. With positioning accuracy of +/-0.05 mm and the capability to cut mild steel up to 20 mm thickness, the machine ensures superior quality, repeatability, and productivity for industrial fabrication requirements.",
  },
  {
    name: "Machinaries",
    icon: "⌒",
    desc: "Hydraulic press brake, power press, and bandsaw cutting systems.",
    subEquipment: [
      {
        name: "Hydraulic Press Brake",
        img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F3eb2fd70be9041b9acf5ec5641c4db7f?format=webp&width=800&height=1200)",
        desc: "Our CNC Hydraulic Press Brake is designed for high-precision sheet metal bending and forming operations. With the capability to bend mild steel sheets up to 8 mm thickness, the machine delivers exceptional accuracy, repeatability, and productivity.",
      },
      {
        name: "Power Press",
        img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F2cb96f4157784cdb86b4857639ab0373?format=webp&width=800&height=1200)",
        desc: "Our Mechanical Power Press is designed for efficient punching, blanking, piercing, and forming operations in sheet metal fabrication.",
      },
      {
        name: "Bandsaw Machine",
        img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F64365b5c7ba04d77b95a9d95d2631353?format=webp&width=800&height=1200)",
        desc: "Our Horizontal Metal Cutting Bandsaw Machine provides precise and efficient cutting of pipes, tubes, solid bars, and structural steel sections.",
      },
      {
        name: "Flange Rolling Machine",
        img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F31d50fec31c44e6b9e768f8c0f1688e5?format=webp&width=800&height=1200)",
        desc: "Our custom-built Flange Rolling Machine is engineered for precise rolling of flat bars up to 100 mm width into circular rings and flanges.",
      },
      {
        name: "3-Roller Plate Rolling Machine",
        img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F330c9784799d4320b7ad9359b95c5a7d?format=webp&width=800&height=1200)",
        desc: "Our custom-built 3-Roller Plate Rolling Machine is designed for precision rolling of metal plates up to 16 mm thickness and 1500 mm width.",
      },
    ],
  },
  {
    name: "Crane",
    icon: "⊤",
    desc: "20-tonne overhead crane for safe heavy-load handling.",
    img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F6241501ca2034cd9a5ce55e8a872091b?format=webp&width=800&height=1200)",
    more: "Sri Nava Industries is equipped with a 2 Ton Material Handling Crane capable of transporting raw materials, fabricated assemblies, and finished products throughout the facility.",
  },
  {
    name: "Welding",
    icon: "⚡",
    desc: "Advanced welding systems for structural steel and precision joints.",
    img: "[cdn.builder.io](https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F349725b4a00a495a82a79429158f9d40?format=webp&width=800&height=1200)",
    more: "Our Arc Welding Transformer is designed to deliver reliable and consistent welding performance for industrial and fabrication applications.",
  },
];

const facilities = [
  {
    title: "Fabrication Bay",
    tag: "Production",
    img: "[images.unsplash.com](https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80)",
    desc: "A dedicated production area for structural fabrication and assembly.",
    more: "This bay supports heavy-duty fabrication workflows with organized equipment placement, material flow planning, and safe working clearances.",
  },
  {
    title: "Storage Area",
    tag: "Logistics",
    img: "[images.unsplash.com](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80)",
    desc: "Secure storage for raw materials, components, and finished goods.",
    more: "The storage zone is arranged for efficient loading, unloading, inventory access, and reduced material handling time.",
  },
];

export function WorkPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
        <img
          src={headerImg}
          alt="Our facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-16 lg:px-24 z-10">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="w-8 h-px bg-white/40" />
            <span
              className="text-white/50 uppercase"
              style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              Our Facilities
            </span>
          </motion.div>

          <motion.h1
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
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
            From precision cutting to heavy lifting - our facility is equipped with
            industrial-grade machinery to handle every stage of fabrication in-house.
          </motion.p>
        </div>
      </div>

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
            <span
              className="text-white/40 uppercase"
              style={{ fontSize: "0.7rem", letterSpacing: "0.25em", fontWeight: 500 }}
            >
              Equipment & Technology
            </span>
          </div>

          <h2
            className="text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
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
              onClick={() => navigate(`/work/machinery/${encodeURIComponent(m.name)}`)}
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

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
