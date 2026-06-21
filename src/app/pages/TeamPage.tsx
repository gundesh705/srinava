import { useNavigate } from "react-router";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Chief Technology Officer",
    expertise: "CNC Programming & Systems",
    bio: "15+ years in precision manufacturing with expertise in advanced machining systems.",
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    expertise: "Production Management",
    bio: "Specializes in optimizing workflow and maintaining highest quality standards across facilities.",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Engineer",
    expertise: "Mechanical Design & Fabrication",
    bio: "Expert in complex metal fabrication and structural engineering with proven track record.",
  },
  {
    name: "Emma Wilson",
    role: "Quality Assurance Manager",
    expertise: "Quality Control & Compliance",
    bio: "Ensures every project meets rigorous quality standards and industry certifications.",
  },
  {
    name: "James Park",
    role: "Senior Technician",
    expertise: "Welding & Assembly",
    bio: "Master welder with 12+ years of experience in precision joint fabrication.",
  },
  {
    name: "Lisa Anderson",
    role: "Project Coordinator",
    expertise: "Client Relations & Scheduling",
    bio: "Ensures seamless communication and on-time delivery of all projects.",
  },
];

export function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5"
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

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-24 px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-white/40 uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.25em", fontWeight: 500 }}>
              Our People
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Talented Professionals
          </h1>

          <p
            className="text-white/50 max-w-2xl"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Our team comprises industry veterans and skilled craftspeople dedicated to delivering excellence in every project. With combined experience spanning decades, we bring innovation and precision to every challenge.
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="group relative border border-white/15 bg-white/5 p-8 hover:border-white/30 hover:bg-white/8 transition-all duration-300 rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Avatar Circle */}
              <div className="mb-6 flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                <span className="text-3xl font-bold text-white/40 group-hover:text-white/60 transition-colors duration-300">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-white text-center mb-2"
                style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                {member.name}
              </h3>

              <p
                className="text-white/60 text-center mb-4"
                style={{ fontSize: "0.9rem", fontWeight: 500 }}
              >
                {member.role}
              </p>

              <div className="mb-4 flex justify-center">
                <span
                  className="text-white/30 text-xs px-3 py-1 border border-white/15 rounded-full"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                >
                  {member.expertise}
                </span>
              </div>

              <p className="text-white/40 text-center" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                {member.bio}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <motion.div
          className="relative border border-white/15 bg-white/5 p-12 rounded-sm text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: "1.8rem", fontWeight: 600 }}>
            Join Our Team
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            We're always looking for talented professionals to join our growing team. If you're passionate about precision manufacturing and innovation, we'd love to hear from you.
          </p>
          <button
            className="px-8 py-3.5 border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer bg-transparent"
            style={{ fontSize: "0.8rem", letterSpacing: "0.06em" }}
          >
            View Careers
          </button>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100" />
        </motion.div>
      </div>
    </div>
  );
}
