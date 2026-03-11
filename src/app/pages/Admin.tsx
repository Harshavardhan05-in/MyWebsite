import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import {
  LayoutDashboard, Calendar, Bell, Image, Users, Settings,
  Upload, Plus, Edit, Trash2, Search, BarChart3, Eye, TrendingUp,
  Menu, X
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Calendar, label: "Events", id: "events" },
  { icon: Bell, label: "Announcements", id: "announcements" },
  { icon: Image, label: "Media", id: "media" },
  { icon: Users, label: "Teams", id: "teams" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const statsCards = [
  { label: "Total Registrations", value: "4,832", change: "+12%", icon: Users, color: "text-neon-blue" },
  { label: "Active Events", value: "24", change: "+3", icon: Calendar, color: "text-neon-purple" },
  { label: "Page Views", value: "128K", change: "+24%", icon: Eye, color: "text-[#00ff88]" },
  { label: "Revenue", value: "$38,500", change: "+8%", icon: TrendingUp, color: "text-[#ffcc00]" },
];

const eventTableData = [
  { id: 1, name: "Hackathon 2026", status: "Active", registrations: 256, date: "Apr 15-16" },
  { id: 2, name: "RoboWars", status: "Active", registrations: 128, date: "Apr 16" },
  { id: 3, name: "E-Sports Arena", status: "Active", registrations: 512, date: "Apr 15-17" },
  { id: 4, name: "AI Workshop", status: "Full", registrations: 100, date: "Apr 15" },
  { id: 5, name: "CTF Challenge", status: "Active", registrations: 89, date: "Apr 16" },
  { id: 6, name: "Drone Racing", status: "Upcoming", registrations: 45, date: "Apr 16" },
];

const statusColors: Record<string, string> = {
  Active: "bg-[#00ff88]/20 text-[#00ff88]",
  Full: "bg-neon-pink/20 text-neon-pink",
  Upcoming: "bg-neon-blue/20 text-neon-blue",
};

export function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#0a0a22] border-r border-border transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-foreground" style={{ fontWeight: 700 }}>Admin Panel</h2>
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                activeTab === item.id
                  ? "bg-secondary text-neon-blue"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl text-foreground capitalize" style={{ fontWeight: 600 }}>{activeTab}</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none w-48"
              />
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-sm text-white" style={{ fontWeight: 600 }}>
              A
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "events" && <EventsView />}
          {activeTab === "announcements" && <AnnouncementsView />}
          {activeTab === "media" && <MediaView />}
          {activeTab === "teams" && <TeamsView />}
          {activeTab === "settings" && <SettingsView />}
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat) => (
          <GlassCard key={stat.label} className="p-5" hover={false}>
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className="text-xs text-[#00ff88]">{stat.change}</span>
            </div>
            <div className="text-2xl text-foreground mb-1" style={{ fontWeight: 700 }}>{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Recent Activity */}
      <GlassCard className="p-6" hover={false}>
        <h3 className="text-lg text-foreground mb-4" style={{ fontWeight: 600 }}>Event Registrations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Event</th>
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Registrations</th>
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Date</th>
                <th className="text-right py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventTableData.map((event) => (
                <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-3 px-4 text-foreground">{event.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColors[event.status]}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-foreground">{event.registrations}</td>
                  <td className="py-3 px-4 text-muted-foreground">{event.date}</td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:text-neon-blue transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-neon-pink transition-colors ml-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}

function EventsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-foreground" style={{ fontWeight: 600 }}>Manage Events</h3>
        <button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>
      <GlassCard className="p-6" hover={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Event Name</th>
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Category</th>
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Venue</th>
                <th className="text-right py-3 px-4 text-muted-foreground" style={{ fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventTableData.map((event) => (
                <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-3 px-4 text-foreground">{event.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">Technical</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColors[event.status]}`}>{event.status}</span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">Main Hall</td>
                  <td className="py-3 px-4 text-right space-x-1">
                    <button className="p-1.5 text-muted-foreground hover:text-neon-blue"><Edit className="w-4 h-4" /></button>
                    <button className="p-1.5 text-muted-foreground hover:text-neon-pink"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}

function AnnouncementsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-foreground" style={{ fontWeight: 600 }}>Announcements</h3>
        <button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Announcement
        </button>
      </div>
      <GlassCard className="p-6" hover={false}>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Title</label>
            <input
              type="text"
              placeholder="Announcement title"
              className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Content</label>
            <textarea
              rows={4}
              placeholder="Write your announcement..."
              className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none resize-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Tag</label>
              <select className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground focus:border-neon-purple focus:outline-none">
                <option>General</option>
                <option>Technical</option>
                <option>Workshops</option>
                <option>Games</option>
                <option>Urgent</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Priority</label>
              <select className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground focus:border-neon-purple focus:outline-none">
                <option>Normal</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
          </div>
          <button className="px-6 py-2.5 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity">
            Publish Announcement
          </button>
        </form>
      </GlassCard>
    </div>
  );
}

function MediaView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-foreground" style={{ fontWeight: 600 }}>Media Library</h3>
        <button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue flex items-center gap-2">
          <Upload className="w-4 h-4" /> Upload Media
        </button>
      </div>
      <GlassCard className="p-12 text-center border-2 border-dashed border-border" hover={false}>
        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h4 className="text-foreground mb-2" style={{ fontWeight: 600 }}>Drop files here to upload</h4>
        <p className="text-sm text-muted-foreground mb-4">Supports: JPG, PNG, GIF, MP4 (max 50MB)</p>
        <button className="px-6 py-2 rounded-lg text-sm border border-border text-foreground hover:bg-muted transition-colors">
          Browse Files
        </button>
      </GlassCard>
    </div>
  );
}

function TeamsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-foreground" style={{ fontWeight: 600 }}>Team Members</h3>
        <button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Member
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Arjun Mehta", "Priya Sharma", "Rahul Verma", "Ananya Patel", "Vikram Singh", "Sneha Kulkarni"].map((name) => (
          <GlassCard key={name} className="p-4 flex items-center gap-3" hover={false}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white text-sm" style={{ fontWeight: 600 }}>
              {name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm text-foreground" style={{ fontWeight: 500 }}>{name}</div>
              <div className="text-xs text-muted-foreground">Team Member</div>
            </div>
            <button className="p-1.5 text-muted-foreground hover:text-neon-blue"><Edit className="w-4 h-4" /></button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg text-foreground" style={{ fontWeight: 600 }}>Settings</h3>
      <GlassCard className="p-6" hover={false}>
        <div className="space-y-6">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Fest Name</label>
            <input
              type="text"
              defaultValue="TechFest 2026"
              className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground focus:border-neon-purple focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Fest Date</label>
            <input
              type="text"
              defaultValue="April 15-17, 2026"
              className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground focus:border-neon-purple focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Registration Status</label>
            <select className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground focus:border-neon-purple focus:outline-none">
              <option>Open</option>
              <option>Closed</option>
              <option>Waitlist</option>
            </select>
          </div>
          <button className="px-6 py-2.5 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity">
            Save Settings
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
