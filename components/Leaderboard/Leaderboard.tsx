"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Define the Team type
interface Team {
  rank: number;
  name: string;
  score: number;
  flag: string;
}

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function Leaderboard() {
  const router = useRouter();
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const { data, error } = await supabase
          .from("teams")
          .select("name, score, flag")
          .order("score", { ascending: false })
          .limit(5); // Fetch only the top 5 teams

        if (error) throw error;

        // Add ranking (1-based index)
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

  return (
    <div className="w-full p-6 bg-slate-900 shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Top Teams
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {teams.map((team) => (
              <tr
                key={team.rank}
                className="transform transition-all duration-200 hover:scale-102 hover:bg-gray-900 cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-white">
                  #{team.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-300">
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
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-300 text-right font-medium">
                  {team.score.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/leaderboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          View More
        </button>
      </div>
    </div>
  );
}
