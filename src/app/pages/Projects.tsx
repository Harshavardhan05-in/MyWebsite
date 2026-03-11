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
];

const projects = [
  {
    id: 1,
    title: "EcoTrack AI",
    category: "CSE",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 2,
    title: "Smart Campus Hub",
    category: "ECE",
    desc: "IoT-based campus management system with real-time room occupancy, energy monitoring, and smart scheduling.",
    image:
      "https://images.unsplash.com/photo-1739025738498-9caddd7ab489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5JTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIyNTgwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    team: ["David Chen", "Eva Martinez"],
    techStack: ["Arduino", "Node.js", "MQTT"],
  },
  {
    id: 3,
    title: "CodeCollab",
    category: "CSE",
    desc: "Real-time collaborative code editor with integrated video chat, whiteboard, and version control.",
    image:
      "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzIyMjcyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    team: ["Frank Lee", "Grace Kim", "Henry Park"],
    techStack: ["Next.js", "WebSocket", "PostgreSQL"],
  },
  {
    id: 4,
    title: "RoboAssist",
    category: "ECE",
    desc: "Assistive robot companion for elderly care with fall detection, medication reminders, and emergency alerts.",
    image:
      "https://images.unsplash.com/photo-1590038667005-7d82ac6f864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHdvcmtzaG9wJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzIyNTgwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    team: ["Iris Wang", "Jake Miller"],
    techStack: ["ROS", "Python", "Computer Vision"],
  },
  {
    id: 5,
    title: "CryptoVote",
    category: "CSE",
    desc: "Decentralized voting platform ensuring transparent and tamper-proof elections for student organizations.",
    image:
      "https://images.unsplash.com/photo-1769092186388-06be4308162b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRhcmt8ZW58MXx8fHwxNzcyMjU4MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    team: ["Karen Davis", "Leo Zhang", "Maya Patel"],
    techStack: ["Solidity", "Ethereum", "React"],
  },
  {
    id: 6,
    title: "VR Campus Tour",
    category: "CSE",
    desc: "Virtual reality campus tour application for prospective students with interactive landmarks and info.",
    image:
      "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjI0ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    team: ["Nina Foster", "Oscar Lee"],
    techStack: ["Three.js", "WebXR", "Blender"],
  },
  {
    id: 7,
    title: "EcoTrack AI",
    category: "CHEMICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 8,
    title: "EcoTrack AI",
    category: "CHEMICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 9,
    title: "EcoTrack AI",
    category: "CHEMICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 10,
    title: "EcoTrack AI",
    category: "ECE",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 11,
    title: "EcoTrack AI",
    category: "CIVIL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 12,
    title: "EcoTrack AI",
    category: "CIVIL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 13,
    title: "EcoTrack AI",
    category: "CIVIL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 14,
    title: "EcoTrack AI",
    category: "MECHANICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },{
    id: 15,
    title: "EcoTrack AI",
    category: "MECHANICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },{
    id: 16,
    title: "EcoTrack AI",
    category: "MECHANICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },{
    id: 17,
    title: "EcoTrack AI",
    category: "CHEMICAL",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 18,
    title: "EcoTrack AI",
    category: "MME",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },{
    id: 19,
    title: "EcoTrack AI",
    category: "MME",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },{
    id: 20,
    title: "EcoTrack AI",
    category: "MME",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 21,
    title: "EcoTrack AI",
    category: "EEE",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wuuuie"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 22,
    title: "EcoTrack AI",
    category: "EEE",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
  },
  {
    id: 23,
    title: "EcoTrack AI",
    category: "EEE",
    desc: "AI-powered carbon footprint tracker that analyzes daily activities and suggests eco-friendly alternatives.",
    image:
      "https://disabled-crimson-arkq9mdflz.edgeone.app/rgukt.jpeg",
    team: ["Alice Johnson", "Bob Smith", "Carol Wu"],
    techStack: ["Python", "TensorFlow", "React"],
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
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === cat
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

                {/* <div className="flex gap-3">
                  <button className="flex-1 py-2 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center gap-1 transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </button>
                  <button className="flex-1 py-2 rounded-lg text-sm bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 flex items-center justify-center gap-1 transition-opacity">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </button>
                </div> */}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
