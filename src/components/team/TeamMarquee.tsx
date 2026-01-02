import TeamMemberPhoto from "./TeamMemberPhoto";

interface Team {
    title: string;
    members: TeamMember[];
}

interface TeamMember {
    displayName: string;
    socialLink: string;
    position: string;
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
}

export default function TeamMarquee({ teams }: { teams: Team[] }) {
    // Marquee Logic - loop the members to create infinite scroll effect
    const loopedTeams = [...teams, ...teams];

    // Team title before each group of members
    const createTeamTitle = (title: string, index: number) => 
        <div key={'title-' + index} className="flex flex-col items-center justify-center px-5">
            <h2 className="text-2xl font-serif">{title}</h2>
        </div>;

    const createMemberList = (members: TeamMember[], index: number) => 
        members.sort((a, b) => b.position.length - a.position.length).map((member) => 
            <div key={`${member.displayName}-${index}`} className="group relative flex flex-col items-center justify-center w-[100px]">
                <a
                    href={member.socialLink || "#"}
                    target={member.socialLink ? "_blank" : "_self"}
                    rel={member.socialLink ? "noopener noreferrer" : ""}
                    className={`flex flex-col items-center ${!member.socialLink ? 'cursor-default' : ''}`}
                >
                    <TeamMemberPhoto
                        mainProfilePicturePath={member.mainProfilePicturePath}
                        secondaryProfilePicturePath={member.secondaryProfilePicturePath}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover transition-transform duration-150 group-hover:scale-110"
                    />
                    {/* Pop up profile info */}
                    <div className="absolute top-full mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 w-48 pointer-events-none z-20">
                        <h3 className="font-serif text-xl text-gray-900">{member.displayName}</h3>
                        <p className="text-xs font-sans text-gray-600">{member.position}</p>
                    </div>
                </a>
            </div>
        );

    return (
        <div className="relative w-full mb-8 overflow-y-hidden pb-24 pt-2 overflow-x-hidden">
            <div
                className="flex animate-scroll hover:[animation-play-state:paused] w-max"
            >
                {loopedTeams.flatMap((team, index) => [
                    createTeamTitle(team.title, index),
                    ...createMemberList(team.members, index)
                ])}
            </div>
        </div>
    );
}
