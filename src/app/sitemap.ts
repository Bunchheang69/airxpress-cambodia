import { MetadataRoute } from 'next'
import getCareers from '@/lib/contentful'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_BASE_URL || 'https://airxpresscambodia.netlify.app'

    // Static routes
    const routes = [
        '',
        '/careers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    try {
        // Dynamic routes for careers
        const careers = await getCareers()

        const careerRoutes = careers.items.map((career) => ({
            url: `${baseUrl}/careers/${career.sys.id}`,
            lastModified: new Date(career.sys.createdAt),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }))

        return [...routes, ...careerRoutes]
    } catch (error) {
        console.error('Error fetching careers for sitemap:', error)
        return routes
    }
}
