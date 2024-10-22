import { Layout } from "./layout/layout";
import { useState, useEffect } from "react";

interface Player {
  id: number;
  username: string;
  highScore: number;
}

export const Leaderboard = () => {
  const [data, setData] = useState<Player[]>([]);

  useEffect(() => {
    // Fetch leaderboard data from the API
    fetch("https://timetower-server.onrender.com/api/leaderboard")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center w-full py-20 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-bold mb-10 text-gray-800">Global Leaderboard</h1>
        <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-3xl">
          <table className="w-full bg-white border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-4 px-6 text-xl font-semibold border-b border-gray-300">Rank</th>
                <th className="py-4 px-6 text-xl font-semibold border-b border-gray-300">Username</th>
                <th className="py-4 px-6 text-xl font-semibold border-b border-gray-300">Score</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((player, index) => (
                <tr
                  key={player.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                  } hover:bg-gray-300 transition-colors duration-200`}
                >
                  <td className="py-3 px-6 text-lg font-bold border-b border-gray-200">{index + 1}</td>
                  <td className="py-3 px-6 text-lg border-b border-gray-200">{player.username}</td>
                  <td className="py-3 px-6 text-lg border-b border-gray-200">{player.highScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};
