"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  webPreviews: string[];
  mobilePreviews: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Upslopebrewing E-Commerce Platform",
    category: "Web Development",
    image: "/upslopebrewing/Home-Page-Pic-Final.jpg",
    description: "Meteorologically speaking, it’s a front range-covering, water-table-filling, snow-dumping weather pattern that anyone with bindings and a roof rack would die for. Beerologically speaking, it’s carbonated gold. In 2008, Matt Cutter, Henry Wood and Dany Page, kissed their homes in Cleveland.",
    technologies: ["PHP", "Wordpress", "HTML", "CSS", "Stripe"],
    link: "https://upslopebrewing.com",
    webPreviews: [
      "/upslopebrewing/Layer-5.jpg?w=800&h=500&fit=crop",
      "/upslopebrewing/banner.png?w=800&h=500&fit=crop",
    ],
    mobilePreviews: [
      "/upslopebrewing/tap_room_bg.jpg?w=300&h=600&fit=crop",
      "/upslopebrewing/sustainability.jpg?w=300&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Healthcare App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description: "A comprehensive healthcare application for patient management, appointment scheduling, and telemedicine consultations.",
    technologies: ["React Native", "Firebase", "Node.js"],
    link: "#",
    webPreviews: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    ],
    mobilePreviews: [
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=300&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Investaxresearch",
    category: "Web Development",
    image: "/upslopebrewing/sustainability.jpg?w=800&h=600&fit=crop",
    description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and AI-powered insights.",
    technologies: ["Next.js", "Python", "PostgreSQL", "TensorFlow"],
    link: "#",
    webPreviews: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
    mobilePreviews: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Logistics Management",
    category: "Enterprise Software",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    description: "End-to-end logistics management system with route optimization, real-time tracking, and inventory management.",
    technologies: ["Angular", "Java", "MySQL", "AWS"],
    link: "#",
    webPreviews: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop",
    ],
    mobilePreviews: [
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590925527273-44cc949df498?w=300&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "A feature-rich social media application with real-time messaging, stories, and content recommendation engine.",
    technologies: ["Flutter", "Dart", "Firebase", "ML Kit"],
    link: "#",
    webPreviews: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=500&fit=crop",
    ],
    mobilePreviews: [
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=300&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    title: "EdTech Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    description: "An interactive learning platform with video courses, live classes, quizzes, and progress tracking.",
    technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC"],
    link: "#",
    webPreviews: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    ],
    mobilePreviews: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=600&fit=crop",
    ],
  },
];

const categories = ["All", "Web Development", "Mobile App", "Enterprise Software"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer card-hover"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 bg-primary/20 text-primary border-0">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 group-hover:bg-secondary/50 transition-colors">
                <Badge variant="secondary" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-3xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {selectedItem?.title}
              </DialogTitle>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </DialogHeader>
            {selectedItem && (
              <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                {/* Web Preview Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Web Preview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.webPreviews.map((preview, index) => (
                      <div
                        key={index}
                        className="relative h-40 md:h-48 rounded-lg overflow-hidden border border-border bg-secondary/30"
                      >
                        <Image
                          src={preview}
                          alt={`${selectedItem.title} web preview ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Preview Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Mobile Preview</h3>
                  <div className="flex gap-4 justify-start">
                    {selectedItem.mobilePreviews.map((preview, index) => (
                      <div
                        key={index}
                        className="relative w-32 md:w-40 h-64 md:h-80 rounded-2xl overflow-hidden border-4 border-border bg-secondary/30"
                        style={{ borderRadius: "24px" }}
                      >
                        <Image
                          src={preview}
                          alt={`${selectedItem.title} mobile preview ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="px-4 py-2 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Badge className="mb-3 bg-primary/20 text-primary border-0">
                    {selectedItem.category}
                  </Badge>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                </div>

                {/* View Project Button */}
                {selectedItem.link && selectedItem.link !== "#" && (
  <Button
    asChild
    className="bg-primary text-primary-foreground hover:bg-primary/90"
  >
    <Link
      href={selectedItem.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink className="mr-2 h-4 w-4" />
      View Project
    </Link>
  </Button>
)}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
