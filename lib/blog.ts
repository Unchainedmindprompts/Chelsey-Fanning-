import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ListingFrontmatter {
  status: "active" | "sold";
  price: number;
  address: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  beds: number;
  baths: number;
  sqft: number;
  acres?: number;
  yearBuilt?: number;
  url?: string;
  mlsId?: string;
  datePosted: string;
  dateSold?: string;
}

export interface ReviewSource {
  reviewerId: string;
  reviewerName: string;
  reviewDate: string;
  reviewBody: string;
  shortQuote?: string;
  reviewUrl?: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  category: string;
  tags: string[];
  author: string;
  imageUrl?: string;
  reviewSource?: ReviewSource;
  featured?: boolean;
  displayOrder?: number;
  faqs?: Array<{ question: string; answer: string }>;
  listing?: ListingFrontmatter;
  readingTime: number;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ?? new Date().toISOString().split("T")[0],
        dateModified: data.dateModified,
        category: data.category ?? "General",
        tags: data.tags ?? [],
        author: data.author ?? "Chelsey Fanning",
        imageUrl: data.imageUrl,
        reviewSource: data.reviewSource,
        featured: data.featured,
        displayOrder: data.displayOrder,
        faqs: data.faqs,
        listing: data.listing,
        readingTime: estimateReadingTime(content),
        content,
      } satisfies BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString().split("T")[0],
    dateModified: data.dateModified,
    category: data.category ?? "General",
    tags: data.tags ?? [],
    author: data.author ?? "Chelsey Fanning",
    imageUrl: data.imageUrl,
    reviewSource: data.reviewSource,
    featured: data.featured,
    displayOrder: data.displayOrder,
    faqs: data.faqs,
    readingTime: estimateReadingTime(content),
    content,
  };
}
