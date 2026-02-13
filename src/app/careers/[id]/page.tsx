import getCareers, { getCareer, Career, Asset } from "@/lib/contentful";
import { ArrowLeft, MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const careers = await getCareers();
    return careers.items.map((career) => ({
        id: career.sys.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    try {
        const response = await getCareer(id);
        const career = response?.items?.[0];

        if (!career) {
            return {
                title: "Career Not Found",
            };
        }

        return {
            title: `${career.fields.position} | Spacianet Careers`,
            description: `Join us as a ${career.fields.position} at Spacianet in ${career.fields.location || "Phnom Penh"}.`,
        };
    } catch {
        return {
            title: "Career Details",
        };
    }
}

export default async function CareerDetailPage({ params }: Props) {
    const { id } = await params;
    let career: Career | null = null;
    let pdfUrl: string | null = null;

    try {
        const response = await getCareer(id);

        if (response?.items?.length > 0) {
            career = response.items[0];
            const assets = response.includes?.Asset || [];

            if (career && career.fields.jobDetails) {
                const assetId = career.fields.jobDetails.sys.id;
                const asset = assets.find((a: Asset) => a.sys.id === assetId);
                const file = asset?.fields?.file;
                if (file?.url) {
                    pdfUrl = file.url;
                }
            }
        } else {
            notFound();
        }
    } catch (error) {
        console.error("Error fetching career:", error);
        notFound();
    }

    if (!career) {
        return null;
    }

    const { position, location, workingShift } = career.fields;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <Link
                    href="/careers"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6 font-medium text-sm bg-white border border-gray-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Careers
                </Link>

                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {position}
                    </h1>

                    <p className="text-gray-500 text-base mb-6">
                        Learn more and apply by reading the full job description here:
                    </p>

                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="bg-blue-50 text-blue-500 text-xs font-semibold px-4 py-2 rounded-lg border border-blue-100 inline-flex items-center">
                            {workingShift || "Full Time"}
                        </span>

                        {location && (
                            <span className="bg-blue-50 text-blue-500 text-xs font-semibold px-4 py-2 rounded-lg border border-blue-100 inline-flex items-center">
                                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                                {location}
                            </span>
                        )}
                    </div>
                </div>

                {pdfUrl ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[850px] relative">
                        <div className="bg-[#2D3035] text-white px-4 py-3 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-1">
                                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </div>
                                <span className="text-sm font-medium truncate opacity-90">{position}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="bg-gray-700 px-2 py-0.5 rounded text-[10px] font-mono">1 / 2</span>
                                <div className="flex gap-3 text-gray-300">
                                    <span className="hover:text-white cursor-pointer">-</span>
                                    <span>98%</span>
                                    <span className="hover:text-white cursor-pointer">+</span>
                                </div>
                                <div className="w-px h-4 bg-gray-600 mx-1"></div>
                                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </a>
                                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2.4-9h6m-1 9V9a1 1 0 00-1-1H9a1 1 0 00-1 1v6"></path></svg>
                                </a>
                            </div>
                        </div>

                        <iframe
                            src={pdfUrl}
                            className="w-full h-full bg-[#525659]"
                            title="Job Description PDF"
                        >
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500 bg-white">
                                <p className="mb-4">This browser does not support embedding PDFs directly.</p>
                                <a
                                    href={pdfUrl}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Download Job Description PDF
                                </a>
                            </div>
                        </iframe>
                    </div>
                ) : (
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
                        <p className="text-blue-700 font-medium text-lg">ℹ️ No additional details document available for this position.</p>
                    </div>
                )}
            </div>
        </div>
    );
}