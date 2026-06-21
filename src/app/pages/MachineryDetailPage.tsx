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

        {machinery.subEquipment ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              {machinery.name}
            </h1>

            <div className="space-y-12">
              {machinery.subEquipment.map((equipment, idx) => (
                <motion.div
                  key={equipment.name}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-2xl max-w-xs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.1 }}
                    style={{ aspectRatio: "1" }}
                  >
                    <img
                      src={equipment.img}
                      alt={equipment.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.2 }}
                  >
                    <h2
                      className="text-white mb-6"
                      style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2 }}
                    >
                      {equipment.name}
                    </h2>

                    <p
                      className="text-white/45"
                      style={{ fontSize: "0.95rem", lineHeight: 1.8 }}
                    >
                      {equipment.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
