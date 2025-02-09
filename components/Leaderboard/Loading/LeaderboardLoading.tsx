import type React from "react";
import { Jersey_10, Poppins } from "next/font/google";

const jersey = Jersey_10({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export function LeaderboardLoading({
  items,
  text,
}: {
  items: number;
  text: string;
}) {
  return (
    <div className="p-6 bg-black min-h-screen flex flex-col items-center">
      <h1
        className={`text-9xl font-bold mb-6 text-red-700 ${jersey.className} animate-pulse`}
      >
        {text}
      </h1>
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
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
              {[...Array(items)].map((_, index) => (
                <tr
                  key={index}
                  className="hover:bg-black transition duration-200"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-300">
                    <div className="h-4 bg-gray-700 rounded w-8 animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <div className="flex items-center space-x-3">
                      <div className="h-6 w-8 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-700 rounded w-24 animate-pulse"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">
                    <div className="h-4 bg-gray-700 rounded w-12 ml-auto animate-pulse"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
