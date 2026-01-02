// "use client";

import teams from "../../data/teams.json" with { type: "json" };
import teamCategories from "../../data/teamCategories.json" with { type: "json" };
// import { useState } from "react";
import TeamMarquee from "../team/TeamMarquee";
// import TeamGrid from "../team/TeamGrid";

export default function TeamSection() {
    // const [showAll, setShowAll] = useState(false);

    const groupedTeams = teamCategories.map(category => ({
        title: category.title,
        members: teams.filter(member => 
            category.keywords.some(keyword => member.position.includes(keyword))
        )
    })).filter(group => group.members.length > 0);

    // const categorizedMembers = new Set(groupedTeams.flatMap(g => g.members));
    // const uncategorized = teams.filter(member => !categorizedMembers.has(member));

    // if (uncategorized.length > 0) {
    //     groupedTeams.push({
    //         title: "Team Members",
    //         members: uncategorized
    //     });
    // }

    return (
        <section id="Team" className="py-16 w-full">
            <h2 className="text-4xl text-center font-serif">Meet the team</h2>
            <p className="text-center text-gray-600 font-serif">
                Don't be shy, they won't bite
            </p>

            <div className="flex justify-center mt-12">
                <TeamMarquee teams={groupedTeams} />
            </div>

            {/* {!showAll ? (
                <TeamMarquee members={teams} />
            ) : (
                <TeamGrid groupedMembers={groupedTeams} />
            )} */}

            {/* <div className="flex justify-center mt-12">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                    {showAll ? "Show Less" : "Meet the Whole Team"}
                </button>
            </div> */}
        </section>
    );
}