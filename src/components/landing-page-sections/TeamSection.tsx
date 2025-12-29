import teams from "../../data/teams.tsx";
import TeamMemberPhoto from "../team/TeamMemberPhoto";

export default function TeamSection() {


    const loopedTeams = [...teams, ...teams];

    return (
        <section id="Team" className="py-12 overflow-hidden bg-white">
            <h2 className="text-2xl text-center mb-8 font-bold">Our Team</h2>
            <div className="relative w-full">
                <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                    {loopedTeams.map((teamMember, index) => (
                        <div key={`${teamMember.displayName}-${index}`} className="group relative mx-4 flex flex-col items-center justify-center w-32">
                            <TeamMemberPhoto
                                mainProfilePicturePath={teamMember.mainProfilePicturePath}
                                secondaryProfilePicturePath={teamMember.secondaryProfilePicturePath}
                                className="w-24 h-24 transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute top-full mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-2 rounded shadow-lg z-10 w-40 pointer-events-none">
                                <h3 className="font-bold text-sm">{teamMember.displayName}</h3>
                                <p className="text-xs text-gray-600">{teamMember.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}