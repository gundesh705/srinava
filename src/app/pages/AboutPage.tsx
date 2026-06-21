import { motion } from "motion/react";
import { useNavigate } from "react-router";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
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
    </div>
  );
}
