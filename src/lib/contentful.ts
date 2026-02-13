const SPACE_ID = process.env.NEXT_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Missing Contentful environment variables");
}

const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}`;

export interface Career {
    sys: {
        id: string;
        createdAt: string;
    };
    fields: {
        position: string;
        workingShift?: string;
        slot?: number;
        location?: string;
        description?: Record<string, unknown>; // Rich text field
        requirements?: Record<string, unknown>;
        jobDetails?: {
            sys: {
                id: string;
            };
        };
        company?: string;
    };
}

export interface Asset {
    sys: {
        id: string;
    };
    fields: {
        file: {
            url: string;
            details?: {
                size: number;
                image?: {
                    width: number;
                    height: number;
                };
            };
            fileName?: string;
            contentType?: string;
        };
        title?: string;
        description?: string;
    };
}

export interface ContentfulResponse {
    items: Career[];
    includes?: {
        Asset?: Asset[];
    };
    total: number;
    skip: number;
    limit: number;
}

// Helper to sanitize career entries
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sanitizeCareer(item: any): Career {
    return {
        sys: {
            id: item.sys.id,
            createdAt: item.sys.createdAt,
        },
        fields: item.fields,
    };
}

// Helper to sanitize assets
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sanitizeAsset(item: any): Asset {
    return {
        sys: {
            id: item.sys.id,
        },
        fields: item.fields,
    };
}

export default async function getCareers(): Promise<ContentfulResponse> {
    const url = `${BASE_URL}/entries?access_token=${ACCESS_TOKEN}&content_type=careersAirxpress`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("Contentful API error");
    }

    const data = await res.json();

    // Sanitize the response to remove sys.space and other metadata that might trigger secret scanning
    return {
        items: data.items.map(sanitizeCareer),
        includes: data.includes ? {
            Asset: data.includes.Asset?.map(sanitizeAsset)
        } : undefined,
        total: data.total,
        skip: data.skip,
        limit: data.limit
    };
}

export async function getCareer(id: string): Promise<ContentfulResponse> {
    const url = `${BASE_URL}/entries?access_token=${ACCESS_TOKEN}&sys.id=${id}&include=1`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("Contentful API error");
    }

    const data = await res.json();

    return {
        items: data.items.map(sanitizeCareer),
        includes: data.includes ? {
            Asset: data.includes.Asset?.map(sanitizeAsset)
        } : undefined,
        total: data.total,
        skip: data.skip,
        limit: data.limit
    };
}
