import { CheckCircle2 } from "lucide-react";
import React from "react";

type BenefitsSectionProps = React.HTMLAttributes<HTMLDivElement>;

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className, ...props }) => {
    const benefits = [
        "Competitive salary",
        "Training programs 2 times a year",
        "Friendly, multicultural work environment",
        "NSSF Coverage",
        "Paid Leaves",
        "Team engagement activities",
    ];

    return (
        <div className={`bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-sm ${className || ""}`} {...props}>
            <h3 className="text-xl font-bold text-primary-blue mb-6">
                Why Work With Us?
            </h3>
            <div className="flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm md:text-base text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary-red shrink-0" style={{ marginRight: '6px' }} />
                        <span>{benefit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BenefitsSection;
