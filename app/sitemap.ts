import { MetadataRoute } from 'next';
import { getAllEmojis } from '@/lib/emoji-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://emojisearch.com'; // Replace with your actual domain
  const locales = ['en', 'es', 'zh', 'hi', 'ar', 'pt'];
  const emojis = getAllEmojis();
  
  const urls: MetadataRoute.Sitemap = [];
  
  // Homepage for each locale
  for (const locale of locales) {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    });
  }
  
  // Individual emoji pages for each locale
  for (const locale of locales) {
    for (const emoji of emojis) {
      urls.push({
        url: `${baseUrl}/${locale}/emoji/${emoji.slug[locale as keyof typeof emoji.slug]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }
  
  return urls;
}