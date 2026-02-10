import React from "react";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    align?: "left" | "center";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    align = "center",
}) => {
    return (
        <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    );
};

export default SectionHeader;
