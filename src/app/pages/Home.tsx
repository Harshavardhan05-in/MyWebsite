import { useState, useEffect } from "react";
import { Link } from "react-router";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import rguktImage from "../media/rgukt.jpeg";
import {
  ArrowRight,
  Users,
  Trophy,
  Calendar,
  Code,
  Cpu,
  Gamepad2,
  Lightbulb,
  Rocket,
  Star,
  ChevronRight,
  Sparkles,
  Brain,
} from "lucide-react";

const FEST_DATE = new Date("2026-03-13T09:00:00");

function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = FEST_DATE.getTime() - now.getTime();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-card backdrop-blur-md border border-border flex items-center justify-center">
            <span
              className="text-2xl sm:text-3xl text-neon-blue"
              style={{ fontWeight: 700 }}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground mt-1 block">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const stats = [
  {
    icon: Users,
    label: "Students",
    value: "8000+",
    color: "text-neon-blue",
  },
  {
    icon: Trophy,
    label: "Events",
    value: "50+",
    color: "text-neon-purple",
  },
  {
    icon: Calendar,
    label: "Days",
    value: "3",
    color: "text-neon-pink",
  },
  {
    icon: Brain,
    label: "Projects",
    value: "100+",
    color: "text-[#ffcc00]",
  },
];

const featuredEvents = [
  {
    title: "Hackathon 2026",
    desc: "48-hour coding marathon to build innovative solutions",
    icon: Code,
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzIyMDc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "RoboWars",
    desc: "Battle of the bots - design, build, and conquer",
    icon: Cpu,
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1590038667005-7d82ac6f864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHdvcmtzaG9wJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzIyNTgwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "E-Sports Arena",
    desc: "Competitive gaming tournament with massive prize pools",
    icon: Gamepad2,
    category: "Games",
    image:
      "https://images.unsplash.com/photo-1759701546851-1d903ac1a2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NzIyNTgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "AI Workshop",
    desc: "Hands-on workshop on building AI-powered applications",
    icon: Lightbulb,
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MjE3NTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// const sponsors = [
//   "TechCorp",
//   "InnovateLabs",
//   "FutureAI",
//   "QuantumSoft",
//   "CyberDyne",
//   "NexGen",
//   "DataFlow",
//   "CloudPeak",
// ];

let hasShownIntroThisPageLoad = false;

export function Home() {
  const shouldPlayIntro = !hasShownIntroThisPageLoad;
  const [showIntro, setShowIntro] = useState(shouldPlayIntro);
  const introBrandLetters = "ANTAHPRAGNYA".split("");
  const letterStartDelay = 0.2;
  const letterStagger = 0.06;
  const letterAnimDuration = 0.55;
  const postRevealPause = 0.3;
  const extraDuration = 0.5;
  const lastLetterIndex = introBrandLetters.length - 1;
  const revealEndTime =
    letterStartDelay + lastLetterIndex * letterStagger + letterAnimDuration;
  const introTotalDuration = revealEndTime + 0.25 + extraDuration;

  useEffect(() => {
    if (!shouldPlayIntro) {
      return;
    }

    hasShownIntroThisPageLoad = true;
    const introHideDelay = Math.ceil((revealEndTime + postRevealPause + 0.25 + extraDuration) * 1000);

    const hideTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, introHideDelay);

    return () => {
      window.clearTimeout(hideTimer);
    };
  }, [postRevealPause, revealEndTime, shouldPlayIntro]);

  return (
    <div className="relative">
      {showIntro && (
        <div
          className="intro-overlay"
          aria-label="Intro animation"
          style={{ animationDuration: `${introTotalDuration}s` }}
        >
          <div className="intro-overlay__glow intro-overlay__glow--left" />
          <div className="intro-overlay__glow intro-overlay__glow--right" />
          <div className="intro-overlay__content">
            <img
              src={rguktImage}
              alt="RGUKT"
              className="intro-overlay__logo"
            />
            <span className="intro-overlay__brand intro-overlay__brand--center">
              {introBrandLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="intro-overlay__brand-char"
                  style={{ animationDelay: `${letterStartDelay + index * letterStagger}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* <ImageWithFallback
            src="https://images.unsplash.com/photo-1741767123174-a76960011e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwYWJzdHJhY3QlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIyNTgwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="background"
            className="w-full h-full object-cover opacity-30"
          /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" /> */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-secondary-foreground hero-kicker">
                March 13-15, 2026
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 hero-title"
              style={{ fontWeight: 800, lineHeight: 1.1 }}
            >
              India's Biggest
              <br />{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                Rural Technical Fest
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl hero-subtitle">
              Join 8000+ innovators, creators, and tech
              enthusiasts at the biggest university tech fest.
              Three days of hacking, learning, and creating the
              future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 hero-cta">
              <Link
                to="/register"
                className="px-8 py-3 rounded-xl text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Register Now
              </Link>
              <Link
                to="/events"
                className="px-8 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                Explore Events
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="p-6 text-center"
                hover={false}
              >
                <stat.icon
                  className={`w-8 h-8 ${stat.color} mx-auto mb-3`}
                />
                <div
                  className="text-3xl text-foreground mb-1"
                  style={{ fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2
                className="text-3xl text-foreground"
                style={{ fontWeight: 700 }}
              >
                Featured Events
              </h2>
              <p className="text-muted-foreground mt-2">
                Explore our headline events and competitions
              </p>
            </div>
            <Link
              to="/events"
              className="hidden sm:flex items-center gap-1 text-sm text-neon-blue hover:underline"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <GlassCard
                key={event.title}
                className="overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs bg-neon-purple/80 text-white backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <event.icon className="w-4 h-4 text-white" />
                    <h3
                      className="text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              to="/events"
              className="text-sm text-neon-blue hover:underline"
            >
              View All Events{" "}
              <ChevronRight className="w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl text-foreground text-center mb-10"
            style={{ fontWeight: 700 }}
          >
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Gallery",
                desc: "Relive moments from past editions",
                to: "/gallery",
                icon: "📸",
              },
              {
                title: "Projects",
                desc: "Discover innovative student projects",
                to: "/projects",
                icon: "🚀",
              },
              // {
              //   title: "Updates",
              //   desc: "Stay on top of latest announcements",
              //   to: "/updates",
              //   icon: "📢",
              // },
            ].map((item) => (
              <Link key={item.title} to={item.to}>
                <GlassCard className="p-8 text-center">
                  <div className="text-4xl mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl text-foreground mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.desc}
                  </p>
                  <span className="text-sm text-neon-blue inline-flex items-center gap-1">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-foreground mb-3"
            style={{ fontWeight: 700 }}
          >
            Our Sponsors
          </h2>
          <p className="text-muted-foreground mb-10">
            Powered by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor}
                className="px-8 py-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-neon-blue hover:border-neon-purple/30 transition-all"
                style={{ fontWeight: 600 }}
              >
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
