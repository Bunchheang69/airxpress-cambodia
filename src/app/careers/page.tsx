import CareersHeader from "@/components/careers/CareersHeader";
import JobCard from "@/components/careers/JobCard";
import JoinTeamSection from "@/components/careers/JoinTeamSection";
import getCareers, { Career } from "@/lib/contentful";

export default async function CareersPage() {
    const careers = await getCareers();

    return (
        <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <CareersHeader />

                <div className="mb-16 space-y-6">
                    {careers.items.map((career: Career) => {
                        const { position, workingShift, slot, location } = career.fields;
                        const createdAt = career.sys.createdAt;

                        // Calculate days ago
                        const daysAgo = createdAt
                            ? Math.floor((new Date().getTime() - new Date(createdAt).getTime()) / (1000 * 3600 * 24))
                            : 0;

                        return (
                            <JobCard
                                key={career.sys.id}
                                id={career.sys.id}
                                company="Spacianet"
                                title={position}
                                type={workingShift || "Full Time"}
                                openings={slot || 1}
                                location={location || "Phnom Penh"}
                                daysAgo={daysAgo}
                            />
                        );
                    })}

                    {(!careers.items || careers.items.length === 0) && (
                        <p className="text-center text-gray-500">No job openings available at the moment.</p>
                    )}
                </div>

                <JoinTeamSection />
            </div>
        </main>
    );
}
