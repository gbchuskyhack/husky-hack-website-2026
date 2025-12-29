import teams from "../../data/teams.tsx";
import TeamMemberPhoto from "../team/TeamMemberPhoto";
import { useState } from "react";

export default function TeamSection() {

    const [isHovered, setIsHovered] = useState(false);

    const loopedTeams = [...teams, ...teams];

    return (
        <section id="Team" className="py-12 overflow-hidden bg-white">
            <h2 className="text-2xl text-center mb-8 font-bold">Our Team</h2>
            <div className="relative w-full">
                <div
                    className="flex animate-scroll hover:[animation-play-state:paused] w-max"
                    style={{
                        animationPlayState: isHovered ? "paused" : "running"
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {loopedTeams.map((teamMember, index) =>
                        <div key={`${teamMember.displayName}-${index}`} className="group relative mx-4 flex flex-col items-center justify-center w-[80px]">
                            <a href={teamMember.socialLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                <TeamMemberPhoto
                                    mainProfilePicturePath={teamMember.mainProfilePicturePath}
                                    secondaryProfilePicturePath={teamMember.secondaryProfilePicturePath}
                                    className="w-[70px] h-[70px] transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute top-full mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                                    <h3 className="font-bold text-sm">{teamMember.displayName}</h3>
                                    <p className="text-xs text-gray-600">{teamMember.position}</p>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}