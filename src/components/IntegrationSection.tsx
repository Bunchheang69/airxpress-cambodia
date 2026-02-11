const IntegrationSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary-blue">
                        Integrated With Major OTA Platforms
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                        We support communication for properties listed on the world&apos;s Top
                        Online Travel Agencies.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-xl font-bold font-sans text-gray-500">airbnb</div>
                    <div className="text-xl font-bold font-serif text-blue-900">Booking.com</div>
                    <div className="text-xl font-bold font-mono text-gray-700">agoda</div>
                    <div className="text-xl font-bold font-sans italic text-blue-800">Expedia</div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;
