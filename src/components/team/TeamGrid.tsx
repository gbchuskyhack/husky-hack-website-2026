"use client";

import TeamMemberPhoto from "./TeamMemberPhoto";

interface TeamMember {
    displayName: string;
    socialLink: string;
    position: string;
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
}

interface TeamGroup {
    title: string;
    members: TeamMember[];
}

export default function TeamGrid({ groupedMembers }: { groupedMembers: TeamGroup[] }) {
    return (
        <div className="space-y-16 animate-fade-in">
            {groupedMembers.map((group) => (
                <div key={group.title} className="w-full">
                    <h3 className="text-2xl font-bold font-rethink text-center mb-8 text-white relative inline-block w-full">
                        <span className="relative z-10 bg-[#1C6D41] px-4">{group.title}</span>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500 z-0 transform -translate-y-1/2"></div>
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
                                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-md object-cover transition-shadow duration-300 group-hover:shadow-white/20"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <h4 className="font-bold text-sm sm:text-base text-white leading-tight mb-1 font-rethink">
                                                {teamMember.displayName}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-300 font-medium px-2 font-instrument">
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
    );
}
