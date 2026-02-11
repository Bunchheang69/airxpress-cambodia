import { Headphones, Languages, MessageSquare, PhoneCall } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";

const ServicesSection = () => {
    const services = [
        {
            icon: <PhoneCall className="w-8 h-8 text-white" />,
            title: "Call Support Services",
            description:
                "24/7 Inbound and outbound call support for Japanese businesses, ensuring seamless customer communication across time zones.",
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-white" />,
            title: "Hospitality Communication",
            description:
                "Specialized support for hotels and tourism businesses, helping hosts communicate effectively with international guests.",
        },
        {
            icon: <Languages className="w-8 h-8 text-white" />,
            title: "Multilingual Assistance",
            description:
                "Professional interpretation and translation services in Japanese, English, Chinese, Korean and Khmer languages to bridge communication gaps.",
        },
        {
            icon: <Headphones className="w-8 h-8 text-white" />,
            title: "Customer Service Excellence",
            description:
                "Trained agents delivering exceptional customer experiences with cultural sensitivity and professional etiquette.",
        },
    ];

    return (
        <section id="services" className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Services"
                    subtitle="We provide comprehensive communication solutions tailored to the unique needs of Japanese businesses serving local and international guests."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start space-x-6"
                        >
                            <div className="bg-primary-red p-3 rounded-lg flex-shrink-0">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-blue mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
