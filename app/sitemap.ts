import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dixitlendingsolution.com";
  const routes = [
    "",
    "/loans/personal-loan",
    "/loans/home-loan",
    "/loans/business-loan",
    "/loans/loan-against-property",
    "/loans/balance-transfer",
    "/loans/top-up-loan",
    "/credit-cards",
    "/calculators",
    "/about",
    "/contact",
    "/resources",
    "/faq",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/loans") ? 0.9 : 0.7,
  }));
}
