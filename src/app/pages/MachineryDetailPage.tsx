import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import img1 from "../../imports/WhatsApp_Image_2026-06-21_at_10.21.12.jpeg";

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

export function MachineryDetailPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const machinery = machines.find(m => m.name.toLowerCase() === name?.toLowerCase());

  if (!machinery) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <button
          onClick={() => navigate("/work")}
          className="text-white bg-transparent border-none cursor-pointer"
          style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
        >
          ← Back to Work
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Nav */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6"
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

      <div className="px-8 md:px-16 lg:px-24 py-24">
        <motion.button
          onClick={() => navigate("/work")}
          className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200 bg-transparent border-none cursor-pointer mb-12 w-fit"
          style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ← Back to Work
        </motion.button>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          {machinery.img && (
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={machinery.img}
                alt={machinery.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="text-white/40"
                style={{ fontSize: "2rem" }}
              >
                {machinery.icon}
              </div>
            </div>

            <h1
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              {machinery.name}
            </h1>

            <p
              className="text-white/60 mb-8"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              {machinery.desc}
            </p>

            {machinery.more && (
              <div className="border-t border-white/10 pt-8">
                <p
                  className="text-white/45"
                  style={{ fontSize: "0.95rem", lineHeight: 1.8 }}
                >
                  {machinery.more}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
