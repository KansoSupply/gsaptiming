export type ProjectContentBlock =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string; alt?: string };

export type Project = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  cover: string;
  keywords?: string[];
  client?: string;
  location?: string;
  year?: string;
  deliverables?: string[];
  site: string;
  content?: ProjectContentBlock[];
};

const projects: Project[] = [
  {
    id: "01",
    title: "Uluwatu Beach Resort",
    slug: "uluwatu-beach-resort",
    date: "2025-05-15",
    excerpt:
      "A comprehensive brand identity for a luxury beach resort in Uluwatu, Bali, blending modern elegance with local culture.",
    cover: "/assets/work/01/cover.jpeg",
    keywords: ["branding", "identity", "resort", "Bali", "luxury", "design"],
    client: "Uluwatu Beach Resort",
    location: "Uluwatu, Bali, Indonesia",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Stationery",
      "Signage",
      "Brand Guidelines",
    ],
    site: "visit",
    content: [
      { type: "image", src: "/assets/work/01/cover.jpeg", alt: "Resort Cover" },
      {
        type: "video",
        src: "/assets/work/01/running.mp4",
        alt: "Resort Video",
      },
    ],
  },
  {
    id: "02",
    title: "Mallorca Towels",
    slug: "mallorca-towels",
    date: "2025-05-14",
    excerpt:
      "A comprehensive brand identity for a luxury beach resort in Uluwatu, Bali, blending modern elegance with local culture.",
    cover: "/assets/work/02/cover.jpeg",
    keywords: ["branding", "identity", "resort", "Bali", "luxury", "design"],
    client: "Hilton",
    location: "Palma de Mallorca, Spain",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Stationery",
      "Signage",
      "Brand Guidelines",
    ],
    site: "visit",
    content: [
      {
        type: "image",
        src: "/assets/work/02/cover.jpeg",
        alt: "Mallorca Towels Cover",
      },
    ],
  },
  {
    id: "03",
    title: "Apple Glasses",
    slug: "apple-glasses",
    date: "2025-05-12",
    excerpt:
      "A comprehensive brand identity for a luxury beach resort in Uluwatu, Bali, blending modern elegance with local culture.",
    cover: "/assets/work/03/cover.jpeg",
    keywords: ["branding", "identity", "resort", "Bali", "luxury", "design"],
    client: "Hilton",
    location: "Palma de Mallorca, Spain",
    year: "2025",
    deliverables: ["Brand Strategy", "Logo Design", "Visual Identity"],
    site: "visit",
    content: [
      {
        type: "image",
        src: "/assets/work/03/cover.jpeg",
        alt: "Apple Glasses Cover",
      },
    ],
  },
  {
    id: "04",
    title: "Zara Home",
    slug: "zara-home",
    date: "2025-06-01",
    excerpt:
      "A modern and elegant home collection inspired by the beauty of nature.",
    cover: "/assets/work/04/cover.jpeg",
    keywords: [
      "branding",
      "identity",
      "home",
      "collection",
      "nature",
      "design",
    ],
    client: "Zara",
    location: "Madrid, Spain",
    year: "2025",
    deliverables: ["Brand Strategy", "Logo Design", "Visual Identity"],
    site: "https://zarahome.com",
    content: [
      {
        type: "image",
        src: "/assets/work/04/cover.jpeg",
        alt: "Zara Home Cover",
      },
    ],
  },
  {
    id: "05",
    title: "Nike Air Max Campaign",
    slug: "nike-air-max-campaign",
    date: "2025-06-15",
    excerpt:
      "A bold and energetic campaign for Nike's Air Max line, blending street culture with innovative design.",
    cover: "/assets/work/05/cover.jpeg",
    keywords: ["branding", "campaign", "nike", "air max", "street", "design"],
    client: "Nike",
    location: "Portland, USA",
    year: "2025",
    deliverables: ["Campaign Strategy", "Art Direction", "Visual Identity"],
    site: "https://nike.com/airmax",
    content: [
      {
        type: "image",
        src: "/assets/work/05/cover.jpeg",
        alt: "Nike Air Max Cover",
      },
    ],
  },
  {
    id: "06",
    title: "OpenAI Platform Launch",
    slug: "openai-platform-launch",
    date: "2025-06-22",
    excerpt:
      "A futuristic and accessible brand identity for OpenAI's new developer platform, focusing on innovation and trust.",
    cover: "/assets/work/06/cover.jpeg",
    keywords: ["branding", "identity", "openai", "platform", "ai", "design"],
    client: "OpenAI",
    location: "San Francisco, USA",
    year: "2025",
    deliverables: ["Brand Strategy", "UI Design", "Visual Identity"],
    site: "https://platform.openai.com",
    content: [
      {
        type: "image",
        src: "/assets/work/06/cover.jpeg",
        alt: "OpenAI Platform Cover",
      },
    ],
  },
];

export default projects;
