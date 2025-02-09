"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

import { Jersey_10, Poppins } from "next/font/google";
import { LeaderboardLoading } from "@/components/Leaderboard/Loading/LeaderboardLoading";

const jersey = Jersey_10({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

interface Team {
  rank: number;
  name: string;
  score: number;
  flag: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Page = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const { data, error } = await supabase
          .from("teams")
          .select("name, score, flag")
          .order("score", { ascending: false });

        console.log(data);

        if (error) throw error;

        // Add rank to sorted data
        const rankedTeams = data.map((team, index) => ({
          ...team,
          rank: index + 1,
        }));

        setTeams(rankedTeams);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <LeaderboardLoading items={10} text="Leaderboard" />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-black min-h-screen flex flex-col items-center">
      <h1
        className={`text-9xl font-bold mb-6 text-red-700 ${jersey.className}`}
      >
        Leaderboard
      </h1>
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className={`min-w-full ${poppins.className}`}>
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
              {teams.map((team) => (
                <tr
                  key={team.rank}
                  className="hover:bg-black transition duration-200"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-300">
                    {team.rank}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={team.flag || "/placeholder.svg"}
                        alt={`${team.name} flag`}
                        width={24}
                        height={18}
                      />
                      <span className="font-medium">{team.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">
                    {team.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
