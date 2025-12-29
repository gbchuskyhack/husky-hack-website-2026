import teams from "../../data/teams.tsx";
import TeamMemberPhoto from "../team/TeamMemberPhoto";
import { useState } from "react";

const CATEGORIES = [
    {
        title: "Executive Team",
        matcher: (role: string) => role.includes("President")
    },
    {
        title: "Logistics & Finance",
        matcher: (role: string) => role.includes("Logistic") || role.includes("Finance")
    },
    {
        title: "Marketing & Outreach",
        matcher: (role: string) => role.includes("Marketing") || role.includes("Outreach")
    },
    {
        title: "Design Team",
        matcher: (role: string) => role.includes("Design")
    },
    {
        title: "Engineering",
        matcher: (role: string) => role.includes("Developer")
    },
    {
        title: "Advisors",
        matcher: (role: string) => role.includes("Advisor")
    }
];

export default function TeamSection() {
    const [showAll, setShowAll] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Marquee Logic
    const loopedTeams = [...teams, ...teams];

    // Grouping Logic
    const groupedTeams = CATEGORIES.map(category => ({
        title: category.title,
        members: teams.filter(member => category.matcher(member.position))
    })).filter(group => group.members.length > 0);

    const categorizedMembers = new Set(groupedTeams.flatMap(g => g.members));
    const uncategorized = teams.filter(member => !categorizedMembers.has(member));

    if (uncategorized.length > 0) {
        groupedTeams.push({
            title: "Team Members",
            members: uncategorized
        });
    }

    return (
        <section id="Team" className="py-16 bg-white container mx-auto px-4 overflow-hidden">
            <h2 className="text-4xl text-center mb-12 font-bold text-gray-900">Our Team</h2>

            {!showAll ? (
                // Compact Marquee View
                <div className="relative w-full mb-8">
                    <div
                        className="flex animate-scroll hover:[animation-play-state:paused] w-max"
                        style={{
                            animationPlayState: isHovered ? "paused" : "running"
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {loopedTeams.map((teamMember, index) =>
                            <div key={`${teamMember.displayName}-${index}`} className="group relative mx-6 flex flex-col items-center justify-center w-[100px]">
                                <a
                                    href={teamMember.socialLink || "#"}
                                    target={teamMember.socialLink ? "_blank" : "_self"}
                                    rel={teamMember.socialLink ? "noopener noreferrer" : ""}
                                    className={`flex flex-col items-center ${!teamMember.socialLink ? 'cursor-default' : ''}`}
                                >
                                    <TeamMemberPhoto
                                        mainProfilePicturePath={teamMember.mainProfilePicturePath}
                                        secondaryProfilePicturePath={teamMember.secondaryProfilePicturePath}
                                        className="w-20 h-20 rounded-full shadow-md object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-full mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 pointer-events-none z-20 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-100">
                                        <h3 className="font-bold text-sm text-gray-900">{teamMember.displayName}</h3>
                                        <p className="text-xs text-gray-600">{teamMember.position}</p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                // Expanded Grid View
                <div className="space-y-16 animate-fade-in">
                    {groupedTeams.map((group) => (
                        <div key={group.title} className="w-full">
                            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 relative inline-block w-full">
                                <span className="relative z-10 bg-white px-4">{group.title}</span>
                                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 z-0 transform -translate-y-1/2"></div>
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
                                {group
                                    .members
                                    .sort((a, b) => a.displayName.localeCompare(b.displayName))
                                    .map((teamMember, index) => (
                                        <div key={`${teamMember.displayName}-${index}`} className="group flex flex-col items-center w-full max-w-[160px]">
                                            <a
                                                href={teamMember.socialLink || "#"}
                                                target={teamMember.socialLink ? "_blank" : "_self"}
                                                rel={teamMember.socialLink ? "noopener noreferrer" : ""}
                                                className={`flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 ${!teamMember.socialLink ? 'cursor-default' : ''}`}
                                            >
                                                <div className="relative mb-3">
                                                    <TeamMemberPhoto
                                                        mainProfilePicturePath={teamMember.mainProfilePicturePath}
                                                        secondaryProfilePicturePath={teamMember.secondaryProfilePicturePath}
                                                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-md object-cover transition-shadow duration-300 group-hover:shadow-lg"
                                                    />
                                                </div>

                                                <div className="text-center">
                                                    <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-tight mb-1">
                                                        {teamMember.displayName}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-500 font-medium px-2">
                                                        {teamMember.position}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-12">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                    {showAll ? "Show Less" : "Meet the Whole Team"}
                </button>
            </div>
        </section>
    );
}