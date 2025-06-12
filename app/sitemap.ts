import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://topupsewa.vercel.app/';
    
    return [
        {
            url: `${baseUrl}/freefire-diamond-topup`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7
        },
        {
            url: `${baseUrl}/freefiretopup`,
            lastModified: new Date(),
            changeFrequency: 'daily', 
            priority: 0.8
        },
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0
        }
    ];
}
