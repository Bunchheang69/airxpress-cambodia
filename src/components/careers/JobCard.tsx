import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

interface JobCardProps {
    id: string;
    company?: string;
    title: string;
    type: string;
    openings: number;
    location: string;
    daysAgo: number;
}

const JobCard: React.FC<JobCardProps> = ({
    id,
    company = "Spacianet",
    title,
    type,
    openings,
    location,
    daysAgo,
}) => {
    return (
        <Link href={`/careers/${id}`} className="block">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary-red font-bold text-xl shrink-0">
                        {company.charAt(0)}
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between text-primary-red font-medium text-sm mb-1">{company} <span className="text-gray-500 text-sm font-medium">{daysAgo} days ago</span></div>
                        <h3 className="text-2xl font-bold text-primary-blue mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm max-w-xl mb-4">
                            Learn more and apply by reading the full job description here:
                        </p>

                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-2">
                                <span className="bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
                                    {type}
                                </span>
                                <span className="bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
                                    {openings} Openings
                                </span>
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <MapPin className="w-4 h-4 mr-2" />
                                {location}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
