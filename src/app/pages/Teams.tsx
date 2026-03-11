import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "T Gopinadh",
    role: "Web Designing",
    category: "Technical",
    image:
      "/team/gopi.jpeg",
  },
  {
    id: 2,
    name: "D Sucharitha",
    role: "Designing",
    category: "Design",
    image:
      "/team/sucharitha.png",
  },
  {
    id: 3,
    name: "Shaik Hasreena",
    role: "Social Media And Publicity",
    category: "Marketing",
    image:
      "/team/socialmedia.jpg",
  },
  {
    id: 4,
    name: "Nallavelly Moksha",
    role: "Fund Raising",
    category: "Marketing",
    image:
      "/team/moksha.png",
  },
  {
    id: 5,
    name: "Sk Junaid",
    role: "Procurement and Finance",
    category: "Finace",
    image:
      "/team/skjunaid.png",
  },
  {
    id: 6,
    name: "K Vijay",
    role: "Core Team",
    category: "Core",
    image:
      "/team/vijay.jpg",
  },
  {
    id: 7,
    name: "K Supriya",
    role: "Ideation and Creative",
    category: "Idea",
    image:
      "https://images.unsplash.com/pshoto-176s2753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjI0NDI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    name: "Arre Sahithya",
    role: "Data and Document Maintenance",
    category: "Marketing",
    image:
      "/team/sahithya.jpg",
  },
  {
    id: 9,
    name: "H Dinesh",
    role: "Hospitality and Accommodation",
    category: "Marketing",
    image:"/team/hospitaltyandAcc.jpg",
  },
  {
    id: 10,
    name: "N Harshith",
    role: "Guest Invitor",
    category: "Marketing",
    image:
      "/team/harshith.jpg",
  },
  {
    id: 11,
    name: "P Jashwanth",
    role: "Security",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-176252s2921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyMjIyNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 12,
    name: "Sri Krishna",
    role: "Photography",
    category: "Marketing",
    image:
      "/team/saikrishna.jpeg",
  },
   {
    id: 13,
    name: "M Yugandhar",
    role: "Drafting & Content Writing",
    category: "Technical",
    image:
      "/team/yugabdhar.jpg",
  },
  {
    id: 14,
    name: "A Deepak",
    role: "Civil & Electrical Works",
    category: "Marketing",
    image:
      "/team/deepak.jpg",
  },
  {
    id: 15,
    name: "L Shashikanth",
    role: "Decoration,Handicrafts & Art Gallery",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1762s522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyMjIyNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 16,
    name: "K Vivek",
    role: "Core Team",
    category: "Core",
    image:
      "/team/vivek.jpeg",
  },
  {
    id: 17,
    name: "G Vamshi",
    role: "Core Team",
    category: "Core",
    image:
      "/team/vamshi.jpg",
  },
  {
    id: 18,
    name: "M Venkata Krishna",
    role: "Core Team",
    category: "Core",
    image:
      "/team/venkatakrishna.jpg",
  },
  {
    id: 19,
    name: "K Varshini",
    role: "Core Team",
    category: "Core",
    image:
      "/team/varshini.jpg",
  },
  {
    id: 20,
    name: "G Keerthi Reddy",
    role: "Core Team",
    category: "Core",
    image:
      "/team/keerthi.jpg",
  },
  {
    id: 21,
    name: "V Sathwika",
    role: "Core Team",
    category: "Core",
    image:
      "/team/sathwika.jpg",
  },
  {
    id: 22,
    name: "M Harshitha",
    role: "Drafting & Content Writing",
    category: "Technical",
    image:
      "/team/harshitha.jpg",
  },
  {
    id: 23,
    name: "V Shyam Goud",
    role: "Core Team",
    category: "Core",
    image:
      "/team/core1.jpeg",
  },
  {
    id: 24,
    name: "S Raj Kumar",
    role: "Core Team",
    category: "Core",
    image:
      "/team/rajkumar.png",
  },
  {
    id: 25,
    name: "M Maneesh",
    role: "Event Planning & Organising",
    category: "Technical",
    image:
      "/team/gopikjhg.jpeg",
  },
  ,
];

export function Teams() {
  const coreMembers = teamMembers.filter((member) => member.category === "Core");
  const otherMembers = teamMembers.filter((member) => member.category !== "Core");

  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl text-foreground mb-4"
            style={{ fontWeight: 800 }}
          >
            Our <span className="text-[#00ff88]">Team</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals behind TechFest 2026
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Team Groups */}
        <div className="space-y-10 mb-20">
          {[
            { title: "Core Members", members: coreMembers },
            { title: "Others", members: otherMembers },
          ].map((group) => (
            <section key={group.title}>
              <h2
                className="text-4xl text-foreground mb-5 text-center"
                style={{ fontWeight: 700 }}
              >
                {group.title}
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5">
                {group.members.map((member) => (
                  <div key={member.id} className="text-center group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-2 transition-transform duration-300 group-hover:scale-110">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_10%]"
                      />
                    </div>
                    <h3
                      className="text-base text-foreground leading-tight"
                      style={{ fontWeight: 600 }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/90 mt-1 leading-tight opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2
              className="text-3xl text-foreground mb-6"
              style={{ fontWeight: 700 }}
            >
              Get In{" "}
              <span className="text-neon-blue">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions about TechFest 2026? Want to
              sponsor or collaborate? Reach out to us!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Email
                  </div>
                  <div className="text-foreground">
                    antahpragnya@rgukt.ac.in
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Phone
                  </div>
                  <div className="text-foreground">
                    +91 7337402527
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.google.com/maps/place/Basara+IIIT+Campus/@18.8815523,77.9191962,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcde18c82d2cdb1:0x469505d0e802dd0c!8m2!3d18.8815523!4d77.9217711!16s%2Fm%2F04z_qjv?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D" target="_main">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                </a>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Address
                  </div>
                  <div className="text-foreground">
                    Rajiv Gandhi University of Knowledge
                    Technologies, Basar
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
