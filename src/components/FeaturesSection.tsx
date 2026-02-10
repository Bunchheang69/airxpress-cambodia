import { Zap, Heart, CheckCircle2 } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";

const FeaturesSection = () => {
    const features = [
        {
            icon: <CheckCircle2 className="w-8 h-8 text-primary-red" />,
            title: "Accuracy",
            description:
                "We invest in training and quality assurance to deliver precise, error-free communication that meets your guests' needs.",
        },
        {
            icon: <Zap className="w-8 h-8 text-primary-red" />,
            title: "Speed",
            description:
                "Our team responds quickly—guests never have to wait. We have everything we need at our fingertips.",
        },
        {
            icon: <Heart className="w-8 h-8 text-primary-red" />,
            title: "Hospitality",
            description:
                "Warmest welcome—we ensure your guests are genuinely cared for with culturally sensitive service.",
        },
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="What Is Special About Us?"
                    subtitle="Our commitment to excellence sets us apart in the call center industry."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="bg-red-50 p-4 rounded-full mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-blue mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
