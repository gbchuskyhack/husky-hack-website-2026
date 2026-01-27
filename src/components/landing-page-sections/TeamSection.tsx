"use client";

import teams from "../../data/teams.json" with { type: "json" };
import teamCategories from "../../data/teamCategories.json" with { type: "json" };
import { useState } from "react";
import TeamMarquee from "../team/TeamMarquee";
import TeamGrid from "../team/TeamGrid";

export default function TeamSection() {
    const [showAll, setShowAll] = useState(false);

    const groupedTeams = teamCategories.map(category => ({
        title: category.title,
        members: teams.filter(member =>
            category.keywords.some(keyword => member.position.includes(keyword))
        )
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
        <section id="Team" className="py-16 w-full bg-[#1E2024]">
            <h2 className="text-5xl text-center font-rethink font-bold text-[#FED571]">Meet the team</h2>
            <p className="text-center text-gray-100 font-instrument text-xl mt-4">
                Don't be shy, they won't bite
            </p>

            {!showAll ? (
                <TeamMarquee teams={groupedTeams} />
            ) : (
                <TeamGrid groupedMembers={groupedTeams} />
            )}

            <div className="flex justify-center mt-12">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 bg-[#1A663C] text-white rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                    {showAll ? "Show Less" : "Meet the Whole Team"}
                </button>
            </div>
        </section>
    );
}