import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portfolio-ni1e0elzy-premkumar740s-projects.vercel.app/sitemap.xml",
  };
}
