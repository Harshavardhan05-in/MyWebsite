import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../media/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/schedule", label: "Schedule" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/guests", label: "Guests" },
  { to: "/teams", label: "Teams" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="!fixed top-0 inset-x-0 z-[60] liquid-glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <img src={logo} alt="ANTAHPRAGNYA logo" className="w-9 h-9 rounded-lg object-cover" />
            <span className="text-[1.55rem] md:text-[2.2rem] leading-none text-foreground font-samarkan" style={{ fontWeight: 700 }}>
              <span
                id="navbar-brand-target"
                className="font-samarkan text-antah-gold tracking-wide"
                style={{ textShadow: "0 0 10px rgba(231,163,41,0.55), 0 0 22px rgba(231,163,41,0.35)" }}
              >
                ANTAHPRAGNYA
              </span>
            </span>


          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-xl text-sm transition-all duration-200 liquid-nav-link ${location.pathname === link.to ? "liquid-nav-link-active text-cyan-100" : "text-slate-200/80 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* <Link
              to="/admin"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin
            </Link> */}
            <Link
              to="/register"
              className="px-5 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden liquid-glass border-b border-white/20 mx-3 mb-3 rounded-2xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm transition-all liquid-nav-link ${location.pathname === link.to ? "liquid-nav-link-active text-cyan-100" : "text-slate-200/80 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link
              to="/admin"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Admin
            </Link> */}
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="block w-full mt-2 px-5 py-2 rounded-lg text-sm text-white text-center bg-gradient-to-r from-neon-purple to-neon-blue"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
