"use client";

import { useState } from "react";
import TeamMemberPhoto from "./TeamMemberPhoto";

interface TeamMember {
    displayName: string;
    socialLink: string;
    position: string;
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
}

export default function TeamMarquee({ members }: { members: TeamMember[] }) {
    const [isHovered, setIsHovered] = useState(false);
    
    // Marquee Logic - loop the members to create infinite scroll effect
    const loopedTeams = [...members, ...members];

    return (
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
    );
}
