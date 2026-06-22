import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import img1 from "../../imports/WhatsApp_Image_2026-06-21_at_10.21.12.jpeg";

const machines = [
  {
    name: "Laser Cutting",
    icon: "◈",
    desc: "Precision cuts up to 25mm thick steel with ±0.1mm tolerance.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2Fb1ef51b9ed6048bc97790f3eef6d49f5?format=webp&width=800&height=1200",
    more: "Sri Nava Industries is equipped with an industrial Plasma Cutting Machine capable of cutting stainless steel plates up to 25 mm thickness. The machine provides fast, accurate, and efficient cutting for heavy fabrication projects, structural components, tanks, vessels, and custom metal parts. This capability enables us to process thick materials while maintaining productivity and quality standards",
    additionalImages: [
      {
        img: "https://cdn.builder.io/api/v1/image/assets%2Ffc9c51b5c7bb434bb02302d7c203af2b%2Fe831d4f816804fff9050a1d9b4264f52?format=webp&width=800&height=1200",
        description: "Our 3 kW CNC Fiber Laser Cutting Machine delivers high-speed, high-precision sheet metal processing using premium components from RayTools, HIWIN, THK, SMC, Schneider Electric, and ABB. With positioning accuracy of ±0.05 mm and the capability to cut mild steel up to 20 mm thickness, the machine ensures superior quality, repeatability, and productivity for industrial fabrication requirements.",
      },
      {
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2Fb1ef51b9ed6048bc97790f3eef6d49f5?format=webp&width=800&height=1200",
        description: "Sri Nava Industries is equipped with an industrial Plasma Cutting Machine capable of cutting stainless steel plates up to 25 mm thickness. The machine provides fast, accurate, and efficient cutting for heavy fabrication projects, structural components, tanks, vessels, and custom metal parts. This capability enables us to process thick materials while maintaining productivity and quality standards.",
      },
    ],
  },
  {
    name: "Machinaries",
    icon: "⌒",
    desc: "Hydraulic press brake, power press, and bandsaw cutting systems.",
    subEquipment: [
      {
        name: "Hydraulic Press Brake",
        img: "https://cdn.builder.io/api/v1/image/assets%2Ffc9c51b5c7bb434bb02302d7c203af2b%2Fdb2d1657f4324690ab71fa472cb52302?format=webp&width=800&height=1200",
        desc: "Our CNC Hydraulic Press Brake is designed for high-precision sheet metal bending and forming operations. With the capability to bend mild steel sheets up to 8 mm thickness, the machine delivers exceptional accuracy, repeatability, and productivity. Equipped with a CNC control system and heavy-duty hydraulic drive, it enables the fabrication of complex profiles, industrial enclosures, structural components, tanks, and custom sheet metal products.",
      },
      {
        name: "Power Press",
        img: "https://cdn.builder.io/api/v1/image/assets%2F6081257f56164f79a999356618a191cf%2F2cb96f4157784cdb86b4857639ab0373?format=webp&width=800&height=1200",
        desc: "Our Mechanical Power Press is designed for efficient punching, blanking, piercing, and forming operations in sheet metal fabrication. Built with a robust cast iron frame and flywheel-driven mechanism, the machine delivers reliable performance, high productivity, and precision for manufacturing brackets, panels, structural components, and custom fabricated parts.",
      },
      {
        name: "Bandsaw Machine",
        img: "https://cdn.builder.io/api/v1/image/assets%2Ffc9c51b5c7bb434bb02302d7c203af2b%2F5c9c8092bb0049e38f841c76a62179f8?format=webp&width=800&height=1200",
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
    additionalImages: [
      {
        img: "https://cdn.builder.io/api/v1/image/assets%2Ffc9c51b5c7bb434bb02302d7c203af2b%2F0f0b000e1b5741b29644e97b3a710a7b?format=webp&width=800&height=1200",
        description: "Sri Nava Industries is equipped with a 2 Ton Material Handling Crane that operates throughout the entire facility, enabling the safe and efficient movement of heavy raw materials, fabricated components, and finished assemblies. This capability allows us to undertake heavy-duty and complex fabrication projects while ensuring improved productivity, precision, and workplace safety. The crane plays a vital role in supporting large-scale manufacturing, assembly, and material handling operations across our workshop.",
      },
    ],
  },
  {
    name: "Welding",
    icon: "⚡",
    desc: "Advanced welding systems for structural steel and precision joints.",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F349725b4a00a495a82a79429158f9d40?format=webp&width=800&height=1200",
    more: "Our Arc Welding Transformer is designed to deliver reliable and consistent welding performance for industrial and fabrication applications. Built with a robust transformer-based design, it ensures stable current output and long service life. Multiple current settings allow easy adjustment for different electrode sizes and welding requirements. The heavy-duty construction makes it suitable for continuous operation in demanding environments. Widely used in structural fabrication, repair works, and general metal joining, it offers dependable performance with minimal maintenance.",
    additionalImages: [
      {
        img: "https://cdn.builder.io/api/v1/image/assets%2Ffc9c51b5c7bb434bb02302d7c203af2b%2F861a95ec1c57408c8d2e328ba1421ba9?format=webp&width=800&height=1200",
        description: "Sri Nava Industries utilizes the ESAB AUTO K 400 CO₂/MIG Welding Machine for high-quality fabrication and assembly operations. With a welding output of up to 400 Amps and an automatic wire feed system, the machine delivers strong, consistent welds with excellent productivity. It is ideally suited for manufacturing structural assemblies, tanks, machine frames, sheet metal components, and custom fabrication projects.",
      },
      {
        img: "https://cdn.builder.io/api/v1/image/assets%2Ffc9c51b5c7bb434bb02302d7c203af2b%2F2d3c44580dd547fb88f293ea74643ef9?format=webp&width=800&height=1200",
        description: "Sri Nava Industries is equipped with Oil-Cooled Arc Welding Machines designed for heavy-duty fabrication, assembly, and repair applications. These machines provide reliable welding performance, strong weld penetration, and excellent joint strength for structural steel, tanks, machine frames, and industrial components. Our arc welding facility enables us to undertake both routine fabrication work and complex heavy-duty projects with confidence and quality assurance.",
      },
    ],
  },
];

// Smooth, refined easing curve used across the page
const easeSmooth = [0.25, 0.1, 0.25, 1] as const;

export function MachineryDetailPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const machinery = machines.find(
    (m) => m.name.toLowerCase() === name?.toLowerCase()
  );

  if (!machinery) {
    return (
      <div className="min-h-screen bg-[#0c0606] flex items-center justify-center">
        <button
          onClick={() => navigate("/work")}
          className="group inline-flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors duration-300 bg-transparent border-none cursor-pointer"
          style={{ fontSize: "0.8rem", letterSpacing: "0.15em" }}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          BACK TO WORK
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0606]">
      {/* Ambient royal red glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-30 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(185,28,28,0.55) 0%, rgba(127,29,29,0.15) 55%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.45) 0%, transparent 70%)",
        }}
      />

      {/* Nav */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 backdrop-blur-md"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,6,6,0.85), transparent)",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeSmooth }}
      >
        <button
          onClick={() => navigate("/work")}
          className="group inline-flex items-center gap-2 text-white/50 hover:text-red-500 transition-colors duration-300 bg-transparent border-none cursor-pointer"
          style={{ fontSize: "0.78rem", letterSpacing: "0.15em" }}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          BACK
        </button>

        <div
          className="hidden sm:block text-white/30"
          style={{ fontSize: "0.72rem", letterSpacing: "0.25em" }}
        >
          SRI NAVA INDUSTRIES
        </div>
      </motion.nav>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-32">
        {machinery.subEquipment ? (
          /* ---------- MULTI-EQUIPMENT VIEW ---------- */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeSmooth }}
          >
            {/* Header */}
            <motion.div
              className="mb-28 max-w-4xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeSmooth, delay: 0.1 }}
            >
              <div className="mb-8 flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl" />
                  <span
                    className="relative text-red-500"
                    style={{ fontSize: "3rem", lineHeight: 1 }}
                  >
                    {machinery.icon}
                  </span>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-red-600/60 via-red-600/30 to-transparent" />
              </div>

              <p
                className="mb-6 font-medium uppercase text-red-400"
                style={{ fontSize: "0.8rem", letterSpacing: "0.4em" }}
              >
                Equipment Suite
              </p>

              <h1
                className="text-white"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {machinery.name}
              </h1>
            </motion.div>

            {/* Equipment list */}
            <div className="space-y-24">
              {machinery.subEquipment.map((equipment, idx) => {
                const reversed = idx % 2 === 1;
                return (
                  <motion.div
                    key={equipment.name}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: easeSmooth }}
                  >
                    {/* Image */}
                    <motion.div
                      className={`lg:col-span-5 ${
                        reversed ? "lg:order-2" : "lg:order-1"
                      }`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: easeSmooth }}
                    >
                      <div
                        className="group relative overflow-hidden rounded-2xl border border-white/10"
                        style={{
                          aspectRatio: "4 / 5",
                          boxShadow:
                            "0 25px 60px -20px rgba(127,29,29,0.5)",
                        }}
                      >
                        <img
                          src={equipment.img}
                          alt={equipment.name}
                          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0606] via-transparent to-transparent opacity-60" />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-red-500/0 transition-all duration-500 group-hover:ring-red-500/40" />
                      </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                      className={`lg:col-span-7 ${
                        reversed ? "lg:order-1" : "lg:order-2"
                      }`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.7,
                        ease: easeSmooth,
                        delay: 0.15,
                      }}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="font-mono text-red-500/70"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px w-10 bg-red-600/50" />
                      </div>

                      <h2
                        className="mb-5 text-white"
                        style={{
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.015em",
                          lineHeight: 1.2,
                        }}
                      >
                        {equipment.name}
                      </h2>

                      <p
                        className="text-white/55"
                        style={{ fontSize: "0.98rem", lineHeight: 1.85 }}
                      >
                        {equipment.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : null}

        {/* Additional Images Section */}
        {machinery?.additionalImages && machinery.additionalImages.length > 0 && (
          <div className="space-y-28 pt-20 border-t border-white/10">
            {machinery.additionalImages.map((item, idx) => (
              <motion.div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
              >
                <motion.div
                  className={`lg:col-span-5 lg:sticky lg:top-40 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, scale: 0.96, x: idx % 2 === 1 ? 24 : -24 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: easeSmooth, delay: 0.15 }}
                >
                  <div
                    className="group relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm"
                    style={{
                      boxShadow: "0 40px 80px -30px rgba(127,29,29,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={machinery.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0606]/80 via-[#0c0606]/20 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-red-500/0 transition-all duration-500 group-hover:ring-red-500/50" />
                  </div>
                </motion.div>

                <motion.div
                  className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: easeSmooth, delay: 0.3 }}
                >
                  <motion.div
                    className="relative rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-800/5 p-8 pl-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      ease: easeSmooth,
                      delay: 0.5,
                    }}
                  >
                    <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-red-500 via-red-600 to-red-900" />
                    <p
                      className="text-white/75"
                      style={{ fontSize: "1rem", lineHeight: 1.9, fontWeight: 500, textAlign: "justify" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
