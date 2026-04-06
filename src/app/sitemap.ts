import { MetadataRoute } from 'next'
import { SEO_CONFIG } from '@/lib/seo-config'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SEO_CONFIG.site.url

    // Define your static routes
    const routes = [
        '',
        '/ritik-kashyap',
        '/ritik-jha',
        '/ritik-kashyap-portfolio',
        '/ritik-kashyap-web-developer',
        '/ritik-kashyap-nextjs-developer',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
    