import type { BlogPost } from "@/types/portfolio";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    category: "Research",
    readTimeMinutes: 5,
    title: "Conducting in-depth research and usability testing",
    excerpt:
      "An exploration of modern research methods and how they improve product design outcomes.",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    imageAlt: "Research and usability testing article thumbnail",
    href: "#",
  },
  {
    id: "2",
    category: "Strategy",
    readTimeMinutes: 6,
    title: "Designing cohesive strategies and visual direction",
    excerpt:
      "How strategic visual design creates cohesion across digital products and brand touchpoints.",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    imageAlt: "Design strategy article thumbnail",
    href: "#",
  },
  {
    id: "3",
    category: "Guidance",
    readTimeMinutes: 4,
    title: "Providing expert advice and strategic guidance",
    excerpt:
      "Lessons from years of design leadership on building effective, empowered design teams.",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
    imageAlt: "Design guidance article thumbnail",
    href: "#",
  },
];
