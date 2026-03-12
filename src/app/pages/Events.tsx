import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, MapPin, Clock, Users, X } from "lucide-react";

const categories = ["All", "Technical", "Non-Technical", "Entertainment", "Games"];

const events = [
  {
    id: 1, title: "Baha Games", category: "Games",
    desc: "Design and build robots to compete in an arena battle. Strategy, engineering, and destruction await!",
    image: "/events/robots.jpg",
    time: "March 14", venue: "SAC Auditorium",
    rules: ["Robot weight limit: 10kg", "No projectile weapons", "Remote controlled only", "3-minute rounds"],
  },
  {
    id: 2, title: "VR Games", category: "Games",
    desc: "Competitive gaming tournament featuring popular titles with massive prize pools.",
    image: "/events/vrgames.jpg",
    time: "March 14", venue: "SAC Auditorium",
    rules: ["Bring your own peripherals", "Anti-cheat monitored", "Swiss format rounds", "Fair play policy enforced"],
  },
  {
    id: 3, title: "Trinayana Night", category: "Entertainment",
    desc: "Hands-on workshop covering machine learning fundamentals and building AI-powered applications.",
    image: "/events/trinayana.jpg",
    time: "March 14", venue: "SAC Auditorium",
    rules: ["Laptop required", "Basic Python knowledge", "Pre-registration mandatory", "Limited to 100 seats"],
  },
  {
    id: 4, title: "Shark Tank", category: "",
    desc: "Capture the Flag cybersecurity competition. Hack, defend, and solve security puzzles.",
    image: "/events/sharktank.jpeg",
    time: "March 15", venue: "SAC Auditorium",
    rules: ["No external tools during the event", "Points-based scoring", "Hints available at cost", "Time-limited challenges"],
  },
  {
    id: 5, title: "Musical Night", category: "Entertainment",
    desc: "A sneak peek performances by RAAGA BAND",
    image: "/events/musicalnight.jpg",
    time: "March 14", venue: "Exhibition Hall", team: "Individual", prize: "N/A",
    rules: ["Open to all attendees", "15-minute sessions", "First-come-first-served", "Safety briefing required"],
  },
  // {
  //   id: 6, title: "Tech Expo", category: "Non-Technical",
  //   desc: "Showcase of latest tech innovations, startups, and student projects.",
  //   image: "https://images.unsplash.com/photo-1601571047421-64e17b56cbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhwbyUyMGZ1dHVyaXN0aWMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MjI1ODAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
  //   time: "April 17", venue: "Main Atrium", team: "Individual / Team", prize: "Best Project Award",
  //   rules: ["Register your booth in advance", "Demo must be self-contained", "Judges visit between 10am-4pm", "Poster required"],
  // },
  // {
  //   id: 7, title: "Drone Racing", category: "Games",
  //   desc: "High-speed FPV drone racing through an indoor obstacle course.",
  //   image: "https://images.unsplash.com/photo-1759078634243-1d5325f49477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzIyNTgwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   time: "April 16", venue: "Outdoor Arena", team: "Individual", prize: "$1500",
  //   rules: ["Drone specs must comply with regulations", "Safety gear mandatory", "Practice runs available", "3 laps per heat"],
  // },
];

export function Events() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null);

  const filtered = events.filter(
    (e) =>
      (filter === "All" || e.category === filter) &&
      e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl text-foreground mb-4" style={{ fontWeight: 800 }}>
            Events & <span className="text-neon-blue">Competitions</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From hackathons to workshops, find your arena and showcase your skills
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
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
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((event) => (
            <GlassCard key={event.id} className="overflow-hidden group" onClick={() => setSelectedEvent(event)}>
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs bg-neon-purple/80 text-white backdrop-blur-sm">
                  {event.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-foreground mb-2" style={{ fontWeight: 600 }}>{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.venue}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No events found matching your criteria.
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div
            className="bg-[#12122a] border border-border rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <ImageWithFallback
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12122a] to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 -mt-8 relative">
              <span className="px-3 py-1 rounded-full text-xs bg-neon-purple text-white mb-3 inline-block">
                {selectedEvent.category}
              </span>
              <h2 className="text-2xl text-foreground mb-3" style={{ fontWeight: 700 }}>{selectedEvent.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedEvent.desc}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">Date & Time</div>
                  <div className="text-sm text-foreground flex items-center gap-1"><Clock className="w-3 h-3 text-white" /> {selectedEvent.time}</div>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">Venue</div>
                  <div className="text-sm text-foreground flex items-center gap-1"><MapPin className="w-3 h-3 text-white" /> {selectedEvent.venue}</div>
                </div>
                {/* <div className="p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">Team Size</div>
                  <div className="text-sm text-foreground flex items-center gap-1"><Users className="w-3 h-3 text-white" /> {selectedEvent.team}</div>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">Prize</div>
                  <div className="text-sm text-foreground" style={{ fontWeight: 600 }}>{selectedEvent.prize}</div>
                </div> */}
              </div>

              {/* <h4 className="text-foreground mb-3" style={{ fontWeight: 600 }}>Rules</h4>
              <ul className="space-y-2 mb-6">
                {selectedEvent.rules.map((rule, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul> */}

              {/* <button className="w-full py-3 rounded-xl text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity">
                Register for this Event
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
