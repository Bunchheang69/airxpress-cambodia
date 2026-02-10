import React from "react";
import BenefitsSection from "./BenefitsSection";
import Link from "next/link";

const JoinTeamSection = () => {
    return (
        <section className="mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-primary-blue mb-6">
                        Join Our Growing Team
                    </h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            Are you passionate about communication and eager to work with
                            Japanese clients? AirXpress Cambodia is looking for talented
                            individuals in Phnom Penh who want to build an international
                            career in customer service.
                        </p>
                        <p>
                            We value Japanese language skills and offer comprehensive training
                            programs to help you grow professionally. Whether you&apos;re a fresh
                            graduate or an experienced professional, we have opportunities for
                            you.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/#contact"
                            className="bg-primary-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all inline-block"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
                <div>
                    <BenefitsSection className="shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default JoinTeamSection;
