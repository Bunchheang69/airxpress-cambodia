import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-primary-blue text-white py-16 px-6 md:px-12 lg:py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-primary-red mb-2">
                        Hospitality specialist + IT support
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Connecting Japan and Cambodia Through World-Class Communication
                    </h1>
                    <p className="text-lg text-gray-300 max-w-lg">
                        AirXpress Cambodia — your trusted multilingual call center partner
                        for hospitality and guest support.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="bg-primary-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded transition-colors"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="#services"
                            className="border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded transition-colors"
                        >
                            View Services
                        </Link>
                        <Link
                            href="/careers"
                            className="border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded transition-colors"
                        >
                            Join Our Team
                        </Link>
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/images/home-cover.jpeg" alt="Phnom Penh Cityscape" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
