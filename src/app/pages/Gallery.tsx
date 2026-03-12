import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const yearTabs = [ "2025"];

const galleryImages: Record<string, { src: string; isVideo?: boolean }[]> = {
  "2025": [
    { src: "/photos2025/image1.jpeg"},
    { src: "/photos2025/image12.jpeg"},
    { src:"/photos2025/image5.jpeg" },
    { src: "/photos2025/image4.jpeg"},
    { src: "/photos2025/image6.jpeg"},
    { src:"/photos2025/image7.jpeg" },
    { src: "/photos2025/image9.jpeg"},
    { src: "/photos2025/image8.jpeg"},
    { src:"/photos2025/image10.jpeg" },
    { src: "/photos2025/image11.jpeg"},
    { src: "/photos2025/image3.jpeg"},
    { src:"/photos2025/image13.jpeg" },
    { src: "/photos2025/image14.jpeg"},
    { src: "/photos2025/image15.jpeg"},
    { src:"/photos2025/image16.jpeg" },
    { src: "/photos2025/image18.jpeg"},
    { src:"/photos2025/image22.jpeg" },
    { src: "/photos2025/image23.jpeg"},
    { src: "/photos2025/image24.jpeg"},
    { src:"/photos2025/image25.jpeg" },
    { src: "/photos2025/image26.jpeg"},
    { src:"/photos2025/image28.jpeg" },
    { src: "/photos2025/image29.jpeg"},
    { src: "/photos2025/image30.jpeg"},
    { src:"/photos2025/image33.jpeg" },
    { src: "/photos2025/image2.jpeg"},
    { src: "/photos2025/image19.jpeg"},
    { src:"/photos2025/image21.jpeg" },
    { src: "/photos2025/image31.jpeg"},
    { src: "/photos2025/image34.jpeg"},
    { src:"/photos2025/image36.jpeg" },
    { src: "/photos2025/image35.jpeg"},
    { src:"/photos2025/image36.jpeg" },
    { src: "/photos2025/image37.jpeg"},
    { src: "/photos2025/image38.jpeg"},
    { src:"/photos2025/image39.jpeg" },
    { src: "/photos2025/iamge41.jpeg"},
    { src:"/photos2025/iamge42.jpeg" },
  ],
};

export function Gallery() {
  const [year, setYear] = useState("2025");
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
                alt={"image"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  {/* <p className="text-sm text-white" style={{ fontWeight: 500 }}>{img.caption}</p> */}
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
              alt={"image"}
              className="w-full h-full object-contain rounded-xl"
            />
            <p className="text-center text-white mt-4" style={{ fontWeight: 500 }}>{images[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
