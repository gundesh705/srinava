import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Facilities", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .nav-header {
          background-image: url('https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Ffce88dec50d64c77aa50b50bdc2d64a1?format=webp&width=800&height=1200');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .nav-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .nav-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
        }

        .nav-logo {
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .nav-logo:hover {
          color: rgba(212, 175, 55, 0.9);
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          color: rgba(255, 255, 255, 0.8);
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold) 0%, transparent 100%);
          transition: width 0.3s ease;
        }

        .nav-item:hover {
          color: white;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-content {
            padding: 1rem 1.5rem;
          }

          .nav-menu {
            gap: 1rem;
          }

          .nav-item {
            font-size: 0.7rem;
          }
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 right-0 z-40 nav-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-content">
          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="nav-item"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
