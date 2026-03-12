import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Github, Users } from "lucide-react";

const projectCategories = [
  "All",
  "CSE",
  "CHEMICAL",
  "ECE",
  "CIVIL",
  "MECHANICAL",
  "MME",
  "EEE",
  "IT"
];

const projects = [
  {
    id: 1,
    title: "Smart Crop Disease Detection",
    category: "CSE",
    desc: "",
    image:
      "/projects/smartcrop.jpg",
    team: ["Gopi Nadh", "Harshaa", "Venkata Satya Sai"],
    techStack: ["Python", "PyTorch", "TensorFlow"],
  },
  {
    id: 2,
    title: "AI Room",
    category: "CSE",
    desc: "",
    image:
      "/projects/airoom.jpeg",
    team: ["Gopi Nadh", "Harshaa", "Venkata Satya Sai"],
    techStack: ["AI Tools"],
  },
  {
    id: 3,
    title: "AI Study Planner",
    category: "CSE",
    desc: "",
    image:
      "/projects/studyplanner.jpeg",
    team: ["Sadiya Khan", "Sravani", "Vani"],
    techStack: ["Gemini LLM", "Flask"],
  },
  {
    id: 4,
    title: "Business Analyzer",
    category: "CSE",
    desc: "",
    image:
      "/projects/bussinesanalyze.jpg",
    team: ["Aksahya", "Ashwitha", "Vennela"],
    techStack: ["WindSurf", "Gemini LLM"],
  },
  {
    id: 5,
    title: "EMORA",
    category: "CSE",
    desc: "",
    image:
      "/projects/emora.jpg",
    team: ["Manognya", "Swathi", "Shruthi"],
    techStack: ["Next.js", "WebSocket", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Bio Plastic",
    category: "CHEMICAL",
    desc: "Making Bio-Plastic from corn flour",
    image:
      "/projects/bioplastic.jpg",
    team: ["Hima Bindhu", "Amuktha Malvada"],
    techStack: [],
  },
  {
    id: 7,
    title: "Eco Friendly MultiLayer Water Filtration System",
    category: "CHEMICAL",
    desc: "Eco-friendly Grey Water treatment system designed to remove surfactants and impurities",
    image:
      "/projects/ecowater.jpg",
    team: ["Akshaya", "Vaishnavi"],
    techStack: [],
  },
  {
    id: 8,
    title: "Production of Bio Diesel from waste cooking oil",
    category: "CHEMICAL",
    desc: "",
    image:
      "/projects/biodiesel.jpg",
    team: ["Ayesha Jalal", "Sana Shaik"],
    techStack: [],
  },
  {
    id: 9,
    title: "Smart Street Light",
    category: "IT",
    desc: "",
    image:
      "/projects/streetlight.jpg",
    team: ["Jahnavi", "Karthika", "Nandhini", "Tapaswi"],
    techStack: [],
  },
  {
    id: 10,
    title: "Sewage Clog Detector",
    category: "IT",
    desc: "",
    image:
      "/projects/clog.png",
    team: ["Harika", "Srujana", "Yashaswi", "Rishitha"],
    techStack: ["Wifi Modules", "Sensors"],
  },

];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl text-foreground mb-4"
            style={{ fontWeight: 800 }}
          >
            Project{" "}
            <span className="text-neon-blue">Showcase</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover innovative projects built by talented
            student teams
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${filter === cat
                ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <GlassCard
              key={project.id}
              className="overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs bg-neon-blue/80 text-white backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="text-lg text-foreground mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Team */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4 text-white" />
                  <span>{project.team.join(", ")}</span>
                </div>

              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
