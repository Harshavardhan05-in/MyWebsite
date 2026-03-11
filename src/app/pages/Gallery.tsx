import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const yearTabs = ["2026", "2025", "2024"];

const galleryImages: Record<string, { src: string; caption: string; isVideo?: boolean }[]> = {
  "2026": [
    { src: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzIyMDc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "Hackathon 2026 Kickoff" },
    { src: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlJTIwY3Jvd2R8ZW58MXx8fHwxNzcyMjU4MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080", caption: "Opening Ceremony Crowd" },
    { src: "https://images.unsplash.com/photo-1590038667005-7d82ac6f864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHdvcmtzaG9wJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzIyNTgwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "RoboWars Arena" },
    { src: "https://images.unsplash.com/photo-1601571047421-64e17b56cbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhwbyUyMGZ1dHVyaXN0aWMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MjI1ODAxMnww&ixlib=rb-4.1.0&q=80&w=1080", caption: "Tech Expo Displays" },
    { src: "https://images.unsplash.com/photo-1759701546851-1d903ac1a2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NzIyNTgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "E-Sports Finals", isVideo: true },
    { src: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjI0ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080", caption: "VR Experience Zone" },
  ],
  "2025": [
    { src: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc3MjI1ODAxMnww&ixlib=rb-4.1.0&q=80&w=1080", caption: "Students in Tech Lab" },
    { src: "https://images.unsplash.com/photo-1759078634243-1d5325f49477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzIyNTgwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "Drone Racing 2025" },
    { src: "https://images.unsplash.com/photo-1769092186388-06be4308162b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRhcmt8ZW58MXx8fHwxNzcyMjU4MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080", caption: "CTF Challenge" },
    { src: "https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MjE3NTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080", caption: "AI Workshop Session", isVideo: true },
  ],
  "2024": [
    { src: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzIyMjcyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "Code Sprint 2024" },
    { src: "https://images.unsplash.com/photo-1739025738498-9caddd7ab489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5JTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIyNTgwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "IoT Workshop" },
    { src: "https://images.unsplash.com/photo-1760446410679-2d93cd1c2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwbWFrZXIlMjBzcGFjZXxlbnwxfHx8fDE3NzIyNTgwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "3D Printing Demo" },
  ],
};

export function Gallery() {
  const [year, setYear] = useState("2026");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = galleryImages[year] || [];

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  // Masonry-like column heights
  const heights = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60"];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl text-foreground mb-4" style={{ fontWeight: 800 }}>
            Photo <span className="text-neon-purple">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the best moments from TechFest editions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Year Tabs */}
        <div className="flex gap-2 mb-10 justify-center">
          {yearTabs.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                year === y
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid ${heights[idx % heights.length]}`}
              onClick={() => openLightbox(idx)}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  <p className="text-sm text-white" style={{ fontWeight: 500 }}>{img.caption}</p>
                </div>
              </div>
              {img.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-neon-purple/80 transition-colors">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="max-w-4xl max-h-[80vh] px-4" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="w-full h-full object-contain rounded-xl"
            />
            <p className="text-center text-white mt-4" style={{ fontWeight: 500 }}>{images[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
