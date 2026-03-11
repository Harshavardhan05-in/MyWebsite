import { Link } from "react-router";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../media/logo.png";

export function Footer() {
  return (
    <footer className="liquid-glass border-t border-white/20 mt-8 mx-3 sm:mx-6 md:mx-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
            >
              <img src={logo} alt="ANTAHPRAGNYA logo" className="w-9 h-9 rounded-lg object-cover" />
              <span
                className="text-xl text-foreground"
                style={{ fontWeight: 700 }}
              >
                <span
                  className="font-samarkan text-[1.55rem] text-antah-gold"
                  style={{ textShadow: "0 0 10px rgba(231,163,41,0.55), 0 0 22px rgba(231,163,41,0.35)" }}
                >
                  ANTAHPRAGNYA
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              The biggest university tech fest bringing together
              innovators, creators, and tech enthusiasts from
              around the world.
            </p>
            <div className="flex gap-3">
              {[
                Instagram,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/_antahpragnya"
                  className="w-9 h-9 rounded-xl liquid-glass liquid-glass-hover flex items-center justify-center text-slate-200/80 hover:text-cyan-100 transition-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-foreground mb-4"
              style={{ fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                "Events",
                "Schedule",
                "Projects",
                "Gallery",
                "Teams",
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-foreground mb-4"
              style={{ fontWeight: 600 }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>antahpragnya@rgukt.ac.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+91 7337402527</span>
              </div>
              <a href="https://www.google.com/maps/place/Basara+IIIT+Campus/@18.8815523,77.9217711,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcde18c82d2cdb1:0x469505d0e802dd0c!8m2!3d18.8815523!4d77.9217711!16s%2Fm%2F04z_qjv?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>
                  Rajiv Gandhi University of Knowlwdge
                  Technologies , Basar
                </span>
              </div>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Antahpragnya 2026. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-neon-blue transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-neon-blue transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-neon-blue transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
