import { Building2, Globe2, Users } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";

const AboutSection = () => {
    const branches = [
        {
            icon: <Building2 className="w-8 h-8 text-primary-red" />,
            title: "Osaka Headquarters",
            description:
                "Our main office in Osaka serves as the command center for our operations across Japan and Southeast Asia.",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-primary-red" />,
            title: "Takushima Branch",
            description:
                "Supporting our domestic operations with dedicated teams focused on regional client needs.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary-red" />,
            title: "Cambodia Branch",
            description:
                "Our Phnom Penh office provides multilingual support and serves as a strategic hub for our ASEAN operations.",
        },
    ];

    return (
        <section id="about" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <SectionHeader
                        title="About AirXpress"
                        subtitle="Spacenet Co., Ltd. powers global hospitality communication through AirXpress — our dedicated multilingual call center service — bridging language gaps and helping Japanese businesses serve international customers with confidence."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="bg-red-50 p-4 rounded-full mb-6">
                                {branch.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-blue mb-4">
                                {branch.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {branch.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
