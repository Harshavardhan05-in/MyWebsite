import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Clock, MapPin, Users } from "lucide-react";

const days = [
  { label: "Day 1", date: "March 13" },
  { label: "Day 2", date: "March 14" },
  { label: "Day 3", date: "MArch 15" },
];

type Session = {
  time: string;
  title: string;
  desc: string;
  venue: string;
  guests?:String,
  speaker?: string;
  specialguest?:String,
  type: "keynote" | "event" | "workshop" | "games" | "ceremony";
};

const schedule: Record<string, Session[]> = {
  "Day 1": [
    {
      time: "09:00 AM  - 12:00 PM",
      title: "INAUGURATION",
      desc: "Welcome address by the Vice Chancellor and Guests",
      guests:"VC, AO, Conveners, Deans, COE, ADSW, ChiefWarden",
      specialguest:"Anil Geela (Content Creator)",
      venue: "SAC Auditorium",
      type: "ceremony",
    },
    {
      time: "2:00 PM - 5:00 PM",
      title: "GUEST TALK",
      desc: "Fun and Interactive Session with Guest",
      venue: "Auditorium",
      speaker: "Anil Geela",
      type: "keynote",
    },
    {
      time: "9:00 AM - 5:00 PM",
      title: "VR GAMES",
      desc: "Experinece the Virtual Technology",
      venue: "SAC YOGA HALL",
      type: "games",
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "DJ",
      desc: "Just Chill with your Friends",
      venue: "Shathavahana Grounds",
      type: "event",
    },
    {
      time: "06:00 PM - 11:00 PM",
      title: "TRINAYANA NIGHT",
      desc: "A Night filled with Entertainment",
      venue: "Shathavahana Grounds",
      type: "event",
    },
  ],
  "Day 2": [
    {
      time: "09:00 AM - 12:00 PM",
      title: "SDG",
      desc: "Understand the Importance of Sustainable Development.",
      venue: "SAC",
      type: "keynote",
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Guest Talk",
      desc: "Interactive Session with Guest",
      venue: "AB-1 Auditorium",
      type: "keynote",
      speaker:"MALAVATH PURNA"
    },
    {
      time: "3:30 PM - 5:00 PM",
      title: "Guest Talk",
      desc: "Interactive Session with Guest",
      venue: "Conference Hall ",
      speaker: "SHIVA PRIYA (Air Force)",
      type: "keynote",
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "DJ",
      desc: "Just Chill with your Friends",
      venue: "Shathavahana Grounds",
      type: "event",
    },
    {
      time: "07:00 PM - 11:00 PM",
      title: "MUSICAL NIGHT",
      desc: "A sneak peek performances by RAAGA BAND",
      venue: "Shathavahana Grounds",
      type: "event",
    },
  ],
  "Day 3": [
    {
      time: "09:00 AM - 12:00 PM",
      title: "SHARK TANK",
      desc: "Business Ideas and Pitching",
      venue: "SAC AUDITORIUM",
      guests:"VC, OSD, AO, Conveners and other dignitaries",
      type: "event",
    },
    {
      time: "2:00 PM - 5:00 PM",
      title: "MODEL DISPLAY",
      desc: "Display of Projects By Department Students",
      venue: "Respective Department Blocks",
      type: "event",
    },
    {
      time: "9:00 AM - 5:00 PM",
      title: "BAHA GAMES & VR GAMES",
      desc: "Experinece The Future of Technology",
      venue: "SAC AUDITORIUM",
      type: "games",
    },
    {
      time: "07:00 PM - 11:00 PM",
      title: "CULTURAL NIGHT  along with CLOSING CEREMONY",
      desc: "",
      venue: "Sathavahana Grounds",
      type: "ceremony",
    },
    {
      time: "11:00 PM - 12:00 PM",
      title: "DJ",
      desc: "",
      venue: "Shathavahana Grounds",
      type: "event",
    },
    
  ],
};

const typeColors: Record<string, string> = {
  keynote: "border-l-neon-blue",
  event: "border-l-neon-purple",
  workshop: "border-l-[#ffcc00]",
  games: "border-l-[#00ff88]",
  ceremony: "border-l-neon-pink",
};

const typeBadges: Record<string, string> = {
  keynote: "bg-neon-blue/20 text-neon-blue",
  event: "bg-neon-purple/20 text-neon-purple",
  workshop: "bg-[#ffcc00]/20 text-[#ffcc00]",
  games: "bg-[#00ff88]/20 text-[#00ff88]",
  ceremony: "bg-neon-pink/20 text-neon-pink",
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Day 1");

  const sessions = schedule[activeDay] || [];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#ffcc00]/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl text-foreground mb-4"
            style={{ fontWeight: 800 }}
          >
            Event{" "}
            <span className="text-[#ffcc00]">Schedule</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three days packed with innovation, learning, and
            competition
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Day Tabs */}
        <div className="flex gap-3 mb-10 justify-center">
          {days.map((day) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(day.label)}
              className={`px-6 py-3 rounded-xl text-sm transition-all ${
                activeDay === day.label
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <div style={{ fontWeight: 600 }}>{day.label}</div>
              <div className="text-xs opacity-80">
                {day.date}
              </div>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {sessions.map((session, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">
                {/* Time dot */}
                <div className="hidden sm:flex flex-col items-center pt-5">
                  <div className="w-3 h-3 rounded-full bg-neon-purple ring-4 ring-background z-10" />
                </div>

                {/* Card */}
                <GlassCard
                  className={`flex-1 p-5 border-l-4 ${typeColors[session.type]}`}
                  hover={false}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-sm text-neon-blue flex items-center gap-1"
                      style={{ fontWeight: 600 }}
                    >
                      <Clock className="w-3.5 h-3.5" />{" "}
                      {session.time}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs capitalize ${typeBadges[session.type]}`}
                    >
                      {session.type}
                    </span>
                  </div>
                  <h3
                    className="text-foreground mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    {session.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {session.desc}
                  </p>
                  {
                    session.guests && <p className="text-sm text-muted-foreground mb-3">
                    Guests : {session.guests}
                  </p>
                  }
                  {
                    session.specialguest && <p className="text-sm text-muted-foreground mb-3">
                    Chief Guest : {session.specialguest}
                  </p>
                  }
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{" "}
                      {session.venue}
                    </span>
                    {session.speaker && (
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />{" "}
                        {session.speaker}
                      </span>
                    )}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}