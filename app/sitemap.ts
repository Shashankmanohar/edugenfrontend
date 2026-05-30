import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.edugenworldschool.com';
  
  // List of standard routes
  const routes = [
    '',
    '/about',
    '/academics',
    '/play-school',
    '/science-stream',
    '/admissions',
    '/faq',
    '/facilities',
    '/infrastructure',
    '/transport',
    '/activity',
    '/gallery',
    '/contact',
    '/faculty',
    '/result',
    '/blog',
    '/career'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
