import { GlassCard } from "../components/GlassCard";
import {
  Bell,
  AlertTriangle,
  Clock,
  Radio,
  Megaphone,
  CheckCircle,
} from "lucide-react";

const urgentBanner = {
  title: "Registration Deadline Extended!",
  desc: "Due to popular demand, we've extended the registration deadline to April 10, 2026. Don't miss out!",
};

const announcements = [
  {
    id: 1,
    title: "Hackathon Problem Statements Released",
    tag: "Technical",
    isLive: false,
    desc: "All 5 problem statements for the Hackathon 2026 are now live. Check the events page for details and start planning your approach!",
    time: "2 hours ago",
    icon: Megaphone,
  },
  {
    id: 2,
    title: "Live: Opening Ceremony Streaming",
    tag: "General",
    isLive: true,
    desc: "Watch the opening ceremony live on our YouTube channel. Keynote by Dr. Sarah Chen on 'The Future of AI in Education'.",
    time: "Live Now",
    icon: Radio,
  },
  {
    id: 3,
    title: "Workshop Schedule Updated",
    tag: "Workshops",
    isLive: false,
    desc: "The AI Workshop has been moved to Lab 302 due to increased registrations. Please check the updated schedule.",
    time: "5 hours ago",
    icon: Clock,
  },
  {
    id: 4,
    title: "Sponsor Booth Locations Announced",
    tag: "General",
    isLive: false,
    desc: "Visit sponsor booths at the Main Atrium for exclusive swag, demos, and networking opportunities.",
    time: "1 day ago",
    icon: CheckCircle,
  },
  {
    id: 5,
    title: "E-Sports Qualifier Results",
    tag: "Games",
    isLive: false,
    desc: "Qualifier round results are out! Top 16 teams advance to the semifinals. Check your email for details.",
    time: "1 day ago",
    icon: Bell,
  },
  {
    id: 6,
    title: "Drone Racing Safety Briefing",
    tag: "Games",
    isLive: false,
    desc: "Mandatory safety briefing for all drone racing participants at 8 AM, April 16 at the Outdoor Arena.",
    time: "2 days ago",
    icon: AlertTriangle,
  },
];

const tagColors: Record<string, string> = {
  Technical: "bg-neon-purple/20 text-neon-purple",
  General: "bg-neon-blue/20 text-neon-blue",
  Workshops: "bg-[#ffcc00]/20 text-[#ffcc00]",
  Games: "bg-neon-pink/20 text-neon-pink",
};

export function Updates() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl text-foreground mb-4"
            style={{ fontWeight: 800 }}
          >
            Recent{" "}
            <span className="text-neon-pink">Updates</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest announcements and live
            updates
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Announcements */}
        <div className="space-y-4">
          {announcements.map((item) => (
            <GlassCard key={item.id} className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3
                      className="text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${tagColors[item.tag] || "bg-muted text-muted-foreground"}`}
                    >
                      {item.tag}
                    </span>
                    {item.isLive && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.desc}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
